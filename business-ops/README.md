# COMMARKAI business-ops

Invoicing and contract templates for COMMARKAI. Paired with the `commarkai-invoicing`
Claude skill (`~/.claude/skills/commarkai-invoicing/SKILL.md`). Ask Claude to
"generate an invoice for [client]" and it will use this system automatically.

## What's tracked in git vs. not

- **Tracked**: this README, `invoice_counter.json` (just a number, no client data),
  `tech-stack-log.md`, everything in `templates/`, and `scripts/generate_invoice.py`.
- **Never tracked** (`.gitignore`'d): everything in `generated/`. Actual invoices
  and contracts contain real client names, addresses, and amounts, so they stay
  local-only and are never pushed to GitHub.

## Tech stack log

`tech-stack-log.md` tracks every account, tool, and API connected as part of
COMMARKAI's own business infrastructure (domain, email, hosting, CRM,
automation), what it's for, and where its credentials live (never the
credentials themselves). Update it any time something new gets connected or
something existing gets retired, this exists specifically because it's easy
to lose track of what got set up and why across a long stretch of work.

`templates/business-setup-sop-template.md` is the genericized version of the
same idea, meant to be copied and filled in per client if this kind of setup
work (domain, email, DNS, automation) becomes something COMMARKAI offers as
a service.

## Invoicing

One-time setup: `pip install jinja2 xhtml2pdf`

```bash
python business-ops/scripts/generate_invoice.py business-ops/client_input.json
```

Where `client_input.json` (not committed, put real client data here, it's
gitignored) looks like:

```json
{
  "client_name": "Acme Corp",
  "client_address": "123 Client Ave, Toronto, ON",
  "client_email": "billing@acme.com",
  "items": [
    {"description": "AI automation build - phase 1", "quantity": 1, "rate": 2500.00}
  ],
  "charge_hst": true,
  "due_in_days": 15,
  "payment_terms": "Net 15. E-transfer to support@commarkai.com."
}
```

This produces `COMMARKAI-2026-001.html` and `.pdf` in `generated/invoices/`, and
bumps `invoice_counter.json` so the next invoice is `002`. The counter resets to
`001` automatically each new calendar year.

## Contracts

`templates/contract_msa.md`, `contract_sow.md`, and `contract_contractor_agreement.md`
are fill-in-the-blank starting points (see the legal-review notes at the top of
each file: these are not legal advice). Copy the relevant template into
`generated/contracts/`, fill in the bracketed fields for the specific client or
contractor, then render it as a branded PDF (one-time setup: `pip install markdown`,
in addition to `jinja2 xhtml2pdf` above):

```bash
python business-ops/scripts/render_contract.py business-ops/generated/contracts/<filled-file>.md
```

This produces a COMMARKAI-branded `.html` and `.pdf` (same purple/gray styling as
invoices) in `generated/contracts/`. You can also run it directly on a blank
template under `templates/` to preview formatting before filling it in.
