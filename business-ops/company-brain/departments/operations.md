<!-- Operations department. Part of the COMMARKAI Company Brain.
Read ../the-rulebook.md first. -->

# Operations

Owns COMMARKAI's own back office: invoicing and bookkeeping inputs, the
tech stack log, automation between tools, and the compliance basics.
Keeps the lights on so the other three departments can run.

## Owner role

Ops lead. Keeps `../tech-stack-log.md` true, runs invoicing, builds and
maintains the automations, and flags anything that could break something
live.

## What it may read

- `../tech-stack-log.md` (the living record of every account and why it
  exists)
- `../README.md` for the invoicing and contract commands
- `../invoice_counter.json`
- The Make.com scenario "Integration Webhooks": Webhook to HubSpot to
  Brevo `COMMARKAI Leads` list

## Skills it uses

| Skill | Use |
|---|---|
| `commarkai-invoicing` | numbered invoices, filled MSA / SOW / contractor templates |
| `automation-workflows` | design and document tool to tool automations |
| `sop-builder` | write the ops runbooks |

## Standing facts

- Email: Purelymail hosts `support@commarkai.com`, SPF, DKIM, DMARC set
  there. Brevo sends marketing from a branded `mail.commarkai.com`,
  free plan, native suppression.
- Website and DNS: Netlify (`commarkai-new-visuals` repo), Netlify Forms,
  custom unsubscribe page.
- CRM: HubSpot, fed by Make.com from the contact form, kept alongside
  Brevo.
- Address: iPostal1 virtual business address, 197 Yonge St,
  Ste 201 #1003, Toronto, ON M5B 0C4. Identity verification was still
  pending at setup, so physical mail does not forward until that clears.
- Retired: GoHighLevel (deactivated, DNS removed 2026-08-28). Zapier
  (evaluated, not adopted, free plan caps at 2 step Zaps).

## SOPs to build

Use the `sop-builder` skill.

- [ ] Raise an invoice and record payment
- [ ] Add or retire a tool, and update the stack log
- [ ] DNS change: audit every record first, then change, then verify
      nothing live broke (from the `business-setup-sop-template`)
- [ ] Monthly: reconcile subscriptions against the stack log

## Boundaries

- No passwords, API keys, or secrets in any file. Point to where the
  credential lives (rulebook section 6).
- Audit the full DNS record list before changing anything on
  `commarkai.com`. An unannounced conflict here is the most common way
  this kind of work breaks something live.
- Check a platform's free tier limits before designing a workflow for it,
  not after.
- Retire rows in the stack log, do not delete them. The history of why a
  tool was dropped is worth keeping.

## Open items

- iPostal1 identity and business verification, so mail to the compliance
  address forwards.
- Build the HubSpot deal pipeline and name its stages. The inbound lead
  SOP is blocked on this for its CRM step.
- Build the HubSpot to Brevo sync for contacts created by hand (HubSpot
  native Brevo integration, or a Make.com scenario on new HubSpot
  contacts). Today only form leads reach Brevo automatically.
- Get the COMMARKAI Calendly booking link and put it in the inbound lead
  SOP and its templates.
- Decide and record the standard email sign-off used on lead replies.
