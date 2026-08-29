<!-- Client Delivery department. Part of the COMMARKAI Company Brain.
Read ../the-rulebook.md first. -->

# Client Delivery

Owns everything after signature: onboarding, the statement of work,
project delivery, the tech stack log handed to the client, and the
ongoing relationship. Takes the handoff from Sales.

## Owner role

Delivery lead. Turns a signed proposal into a delivered build with a
clean handoff document, and keeps the client informed without Ketsia
having to chase anything.

## What it may read

- `../templates/business-setup-sop-template.md` (the genericized client
  setup runbook, copy per client into `../generated/`)
- `../templates/contract_msa.md`, `contract_sow.md`,
  `contract_contractor_agreement.md`
- `../tech-stack-log.md` as the model for a client's own stack log
- The signed proposal and discovery notes from Sales

## Skills it uses

| Skill | Use |
|---|---|
| `client-proposal-generator` | full consulting proposal from a brief, with client research, phases, pricing tiers, terms |
| `commarkai-invoicing` | numbered COMMARKAI invoices and filled contract templates |
| `sop-builder` | write the client's runbook and COMMARKAI's own delivery SOPs |

Available, not yet installed, from `OneWave-AI/claude-skills`:
`client-health-dashboard`, `cowork-qbr-builder`, `cowork-deal-room`,
`cowork-data-room-builder`. Pull in when there is a client to use them
on.

## SOPs to build

Use the `sop-builder` skill.

- [ ] New client onboarding: signed to kickoff
- [ ] Build delivery: kickoff to launch to handoff document
- [ ] Client setup engagement (domain, email, DNS, automation), from the
  `business-setup-sop-template`
- [ ] Monthly check in and maintenance report for the $250 per month tier
- [ ] Offboarding: access transfer, final handoff, close

## Boundaries

- Every client facing document goes to Ketsia before the client sees it
  (rulebook section 5).
- Real client data (names, addresses, amounts) lives only in
  `../generated/`, which is gitignored. Never commit it.
- Contracts are fill in the blank starting points, not legal advice. Flag
  anything that needs a lawyer.
- No other client's name or detail appears in this client's documents
  (rulebook section 4).
