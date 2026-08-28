#!/usr/bin/env python3
"""
Generate a numbered COMMARKAI invoice (HTML + PDF) from a JSON input file.

Usage:
    python generate_invoice.py client_input.json

Input JSON shape:
{
  "client_name": "Acme Corp",
  "client_address": "123 Client Ave, Toronto, ON",
  "client_email": "billing@acme.com",
  "items": [
    {"description": "AI automation build - phase 1", "quantity": 1, "rate": 2500.00},
    {"description": "Monthly maintenance", "quantity": 1, "rate": 250.00}
  ],
  "charge_hst": true,
  "payment_terms": "Net 15. E-transfer to support@commarkai.com.",
  "notes": "Optional extra note line."
}

The invoice number and running counter are tracked in ../invoice_counter.json,
which IS committed to git (it only ever holds a number, never client data).
Generated files land in ../generated/invoices/, which is gitignored.
"""
import json
import sys
from datetime import date, timedelta
from pathlib import Path

from jinja2 import Template
from xhtml2pdf import pisa

ROOT = Path(__file__).resolve().parent.parent
COUNTER_FILE = ROOT / "invoice_counter.json"
TEMPLATE_FILE = ROOT / "templates" / "invoice_template.html"
OUTPUT_DIR = ROOT / "generated" / "invoices"

HST_RATE = 0.13  # Ontario HST
FROM_NAME = "COMMARKAI"
FROM_ADDRESS = "Toronto, ON, Canada"
FROM_EMAIL = "support@commarkai.com"


def load_counter() -> dict:
    if not COUNTER_FILE.exists():
        return {"next_number": 1, "year": date.today().year}
    return json.loads(COUNTER_FILE.read_text())


def save_counter(counter: dict) -> None:
    COUNTER_FILE.write_text(json.dumps(counter, indent=2) + "\n")


def next_invoice_number() -> str:
    counter = load_counter()
    current_year = date.today().year
    if counter.get("year") != current_year:
        counter = {"next_number": 1, "year": current_year}

    number = counter["next_number"]
    invoice_number = f"COMMARKAI-{current_year}-{number:03d}"

    counter["next_number"] = number + 1
    counter["year"] = current_year
    save_counter(counter)
    return invoice_number


def main():
    if len(sys.argv) != 2:
        print("Usage: python generate_invoice.py <client_input.json>")
        sys.exit(1)

    input_data = json.loads(Path(sys.argv[1]).read_text())

    items = input_data["items"]
    subtotal = sum(item["quantity"] * item["rate"] for item in items)
    charge_hst = input_data.get("charge_hst", True)
    hst_amount = subtotal * HST_RATE if charge_hst else 0.0
    total = subtotal + hst_amount

    issue_date = date.today()
    due_date = issue_date + timedelta(days=input_data.get("due_in_days", 15))

    invoice_number = next_invoice_number()

    context = {
        "invoice_number": invoice_number,
        "issue_date": issue_date.strftime("%B %d, %Y"),
        "due_date": due_date.strftime("%B %d, %Y"),
        "from_name": FROM_NAME,
        "from_address": FROM_ADDRESS,
        "from_email": FROM_EMAIL,
        "client_name": input_data["client_name"],
        "client_address": input_data.get("client_address", ""),
        "client_email": input_data.get("client_email", ""),
        "items": items,
        "subtotal": subtotal,
        "hst_rate": HST_RATE if charge_hst else 0,
        "hst_amount": hst_amount,
        "total": total,
        "payment_terms": input_data.get("payment_terms", "Net 15."),
        "hst_number": input_data.get("hst_number", ""),
        "notes": input_data.get("notes", ""),
    }

    template = Template(TEMPLATE_FILE.read_text())
    html = template.render(**context)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    html_path = OUTPUT_DIR / f"{invoice_number}.html"
    pdf_path = OUTPUT_DIR / f"{invoice_number}.pdf"

    html_path.write_text(html, encoding="utf-8")
    with open(pdf_path, "wb") as pdf_file:
        pisa.CreatePDF(html, dest=pdf_file)

    print(f"Generated {invoice_number}")
    print(f"  HTML: {html_path}")
    print(f"  PDF:  {pdf_path}")
    print(f"  Subtotal: ${subtotal:.2f} CAD | HST: ${hst_amount:.2f} | Total: ${total:.2f} CAD")


if __name__ == "__main__":
    main()
