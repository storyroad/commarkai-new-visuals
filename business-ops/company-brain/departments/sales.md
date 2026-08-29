<!-- Sales department. Part of the COMMARKAI Company Brain.
Read ../the-rulebook.md first. -->

# Sales

Owns the path from stranger to signed client: ideal customer definition,
prospect research, qualification, outreach, follow up, meeting prep,
offers, and proposals up to signature. After signature the client moves
to Client Delivery.

## Owner role

Sales lead. Runs the `sales` orchestrator and its sub skills, keeps the
pipeline honest, and never sends outreach or a proposal without Ketsia's
yes.

## What it may read

- Ideal customer profile: [../ideal-customer-profile.md](../ideal-customer-profile.md)
  (drafted 2026-08-29 with `sales-icp`, needs Ketsia's review)
- Target industries of interest: sports organizations, beauty
  businesses, agencies and creatives, construction, healthcare voice
  systems, HVAC, B2B small businesses, and enterprise on Azure, Oracle,
  Google Cloud, or AWS
- Pricing model: about $2,500 per build plus $250 per month, value based
  10 to 30 percent above that (rulebook section 3)
- `../tech-stack-log.md`: Brevo `COMMARKAI Leads` list, HubSpot CRM,
  Make.com bridge, the contact form path
- COMMARKAI's three pillars: COM (communications), MARK (marketing), AI

## Skills it uses

| Skill | Use |
|---|---|
| `sales` | main orchestrator, ties the sub skills together |
| `sales-prospect` | full prospect analysis, runs the agents in parallel |
| `sales-research` | company and firmographic research |
| `sales-qualify` | BANT plus MEDDIC lead scoring |
| `sales-icp` | build and refine the ideal customer profile |
| `sales-contacts` | find decision makers and a contact plan |
| `sales-outreach` | cold outreach sequences |
| `sales-followup` | follow up sequences |
| `sales-prep` | meeting preparation brief |
| `sales-proposal` | sales proposal from pipeline data |
| `sales-objections` | objection handling playbook |
| `sales-competitors` | competitive intelligence on a prospect |
| `sales-report` / `sales-report-pdf` | pipeline report, markdown or PDF |
| `offer-creation` | package a service into a value stacked offer |
| `pricing-strategy` | set and defend pricing |

Agents (in `~/.claude/agents/`): `sales-company`, `sales-competitive`,
`sales-contacts`, `sales-opportunity`, `sales-strategy`. Called by
`sales-prospect`.

Scripts (in `~/.claude/skills/sales/scripts/`): `analyze_prospect.py`
and `contact_finder.py` scrape a prospect URL you supply,
`lead_scorer.py` scores from local JSON, `generate_pdf_report.py` needs
`pip install reportlab`.

## SOPs to build

Use the `sop-builder` skill.

- [x] Inbound lead: contact form to qualified or disqualified in 24 hours,
  [../sops/inbound-lead-handling.md](../sops/inbound-lead-handling.md)
  (draft v0.1, has open questions for Ketsia)
- [ ] Outbound: ICP list to first meeting booked
- [ ] Proposal: discovery notes to signed, then handoff to Client Delivery
- [ ] Weekly pipeline review off `sales-report`

## Boundaries

- Drafts only. Ketsia reviews and sends every outreach and proposal.
- Never quote below the build floor without Ketsia's explicit yes
  (rulebook section 3).
- No client-identifiable proof in any outreach or proposal
  (rulebook section 4).
- Outreach compliance: real mailing address in the footer, working
  unsubscribe, Brevo native suppression. Address is 197 Yonge St,
  Ste 201 #1003, Toronto, ON M5B 0C4.
- Prospect scraping only on a URL Ketsia has provided for a real
  opportunity. No bulk scraping.
