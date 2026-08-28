#!/usr/bin/env python3
"""
Render a contract Markdown file (blank template or filled-in) as a branded
COMMARKAI HTML + PDF document.

Usage:
    python render_contract.py ../templates/contract_sow.md
    python render_contract.py ../generated/contracts/acme-sow-2026-001.md
"""
import sys
from pathlib import Path

import markdown as md

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "generated" / "contracts"

CSS = """
@page { size: letter; margin: 0.85in; }
body { font-family: Helvetica, Arial, sans-serif; color: #27272a; font-size: 10.5pt; line-height: 1.5; }
h1 { color: #6b21a8; font-size: 18pt; border-bottom: 3px solid #6b21a8; padding-bottom: 10px; }
h2 { color: #6b21a8; font-size: 12.5pt; margin-top: 22px; }
table { width: 100%; border-collapse: collapse; margin: 12px 0; }
th, td { border: 1px solid #e4e4e7; padding: 7px 10px; font-size: 10pt; text-align: left; }
th { background: #f4f4f5; color: #52525b; }
strong { color: #27272a; }
hr { border: none; border-top: 1px solid #e4e4e7; margin: 24px 0; }
.brand-header { color: #a1a1aa; font-size: 9pt; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
.legal-note { background: #faf5ff; border-left: 3px solid #6b21a8; padding: 10px 14px; font-size: 9pt; color: #52525b; margin-bottom: 22px; }
"""


def main():
    if len(sys.argv) != 2:
        print("Usage: python render_contract.py <path-to-contract.md>")
        sys.exit(1)

    src_path = Path(sys.argv[1])
    text = src_path.read_text(encoding="utf-8")

    # Pull the HTML comment legal-review note (if present) into a styled callout
    legal_note = ""
    if text.strip().startswith("<!--"):
        end = text.find("-->")
        legal_note = text[4:end].strip()
        text = text[end + 3:].lstrip()

    body_html = md.markdown(text, extensions=["tables"])

    legal_html = f'<div class="legal-note"><strong>Note:</strong> {legal_note}</div>' if legal_note else ""

    html = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>{CSS}</style></head>
<body>
<div class="brand-header">COMMARKAI</div>
{legal_html}
{body_html}
</body></html>"""

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    stem = src_path.stem
    html_path = OUTPUT_DIR / f"{stem}.html"
    pdf_path = OUTPUT_DIR / f"{stem}.pdf"

    html_path.write_text(html, encoding="utf-8")

    from xhtml2pdf import pisa
    with open(pdf_path, "wb") as pdf_file:
        pisa.CreatePDF(html, dest=pdf_file)

    print(f"Rendered {stem}")
    print(f"  HTML: {html_path}")
    print(f"  PDF:  {pdf_path}")


if __name__ == "__main__":
    main()
