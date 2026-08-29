<!-- Built with the sop-builder skill, 2026-08-29. DRAFT v0.1.
Ketsia: review the bracketed assumptions and the open questions at the
bottom, then remove this comment and the DRAFT tag. Owned by Sales
(see ../departments/sales.md). Read ../the-rulebook.md first. -->

# Inbound Lead Handling: Standard Operating Procedure

**Owner:** Sales lead
**Frequency:** Per lead (event based)
**Trigger:** A new lead arrives through any of: the commarkai.com contact
form, a direct email to support@commarkai.com, a LinkedIn message, or a
referral introduction.
**Estimated time:** 15 to 25 minutes of active work per lead, spread
across a 24 hour response window.
**Last updated:** 2026-08-29 (draft)

## What "done" looks like

Within one business day of the lead arriving, one of these is true:

- A discovery call is booked, and the lead is marked Qualified in
  HubSpot, or
- A short, warm decline has been sent and the lead is marked
  Disqualified in HubSpot with a reason, or
- A "need more information" reply has been sent with two or three
  specific questions, and a follow up is scheduled for 3 days out.

Every lead ends in one of those three states. None are left open.

## Prerequisites

- [ ] Access to HubSpot (the CRM every contact-form submission lands in)
- [ ] Access to Brevo (the `COMMARKAI Leads` list and nurture sequence)
- [ ] The current Ideal Customer Profile
  ([../ideal-customer-profile.md](../ideal-customer-profile.md))
- [ ] The COMMARKAI Calendly link for booking discovery calls
- [ ] The `sales-qualify` skill (BANT plus MEDDIC scoring)

## Steps

### 1. Confirm the lead landed in the CRM

**Action:** Check HubSpot for a new contact matching the lead. The
Make.com scenario "Integration Webhooks" should have created it from the
contact form and added it to the Brevo `COMMARKAI Leads` list
automatically.
**Tool:** HubSpot, Make.com (scenario history if it did not appear)
**Notes:** HubSpot is the single front door for every lead. Form leads
arrive automatically. For an email, LinkedIn, or referral lead, once you
have had a real exchange, create the HubSpot contact by hand. The
intended design is that HubSpot then syncs the contact to the Brevo
`COMMARKAI Leads` list so nurture reaches everyone the same way. That
HubSpot to Brevo sync for hand-created contacts is not built yet (see
open items), so for now also add the contact to the Brevo list by hand.
If a form lead is missing from HubSpot after 10 minutes, check the
Make.com scenario run history for a failed run before doing anything else.

### 2. Read what they actually said

**Action:** Read the full message. Note the industry, the ask (website,
automation, consulting, something else), any budget or timeline signal,
and the company name or URL if given.
**Tool:** HubSpot contact record
**Notes:** Do not reply yet. A fast generic reply is worse than a
slightly slower specific one.

### 3. Quick qualification (60 seconds)

**Action:** Run the 5 question checklist from the ICP:
1. Target industry? 2. Ideal size range? 3. Growth or trigger signal?
4. A pain point you can name? 5. A decision maker you can reach?
**Tool:** [../ideal-customer-profile.md](../ideal-customer-profile.md)
**Notes:** 4 to 5 yes points to a strong fit, 3 is a maybe, 0 to 2 is a
likely decline. This is a rough read, not the final call.

### 4. Full qualification with sales-qualify

**Action:** For anything scoring a maybe or better in step 3, run the
`sales-qualify` skill against the company URL or details. It produces a
BANT plus MEDDIC score and a `LEAD-QUALIFICATION.md`.
**Tool:** `sales-qualify` skill
**Notes:** Save the output. It feeds the discovery call prep and, later,
`sales-proposal`. For a very small or clearly out of scope lead, skip
this and go to the decline path in step 6.

### 5. Draft the response (three paths)

**Action:** Draft a reply matching the qualification result. Ketsia
reviews and sends. See "Response templates" below.
**Tool:** Draft in email, run `stop-slop` on it, then hand to Ketsia
**Notes:** Rulebook applies to every word: "Hi [Name]", "we" and "our",
no em dashes, no "Hey", no "while you think it over", no "human", no
"automated", no "SaaS", no client-identifiable proof.

### 6. Update the CRM and close the loop

**Action:** Set the HubSpot contact stage: Qualified (call booked),
Needs Info (follow up scheduled), or Disqualified (with a one line
reason). Log the qualification score.
**Tool:** HubSpot
**Notes:** The HubSpot deal pipeline and its stage names are not set up
yet (see open items). Stage names here are placeholders. Configure the
pipeline first, then match the wording in this step to it. Disqualified
leads stay on the Brevo nurture list unless they ask to stop. A "no"
today can be a "yes" in six months.

## Decision points

### If the lead is a strong fit (score A or B):
Send the discovery-call reply with the Calendly link. Book the call.
Prep it with `sales-prep` the day before. The discovery call is free.

### If the lead is a partial fit or the ask is unclear:
Send the "need more information" reply with two or three specific
questions. Schedule a 3 day follow up. Do not book a call yet.

### If the lead is a fit but the budget is below the build floor:
The floor for a build or setup is $1,500, and only for a genuinely
simple setup (rulebook section 3). If they cannot meet it but the
conversation is worth having, offer a paid consult instead: $500 for a
company, $250 for a 30 minute call with a sole proprietor or solo
operator. Advice only, no deliverable. Use the paid-consult reply.

### If the lead is out of scope, too small even for a consult, or a
wrong-industry fit:
Send the warm decline. Mark Disqualified with the reason. Leave them on
nurture.

### If the lead looks like spam or a vendor pitch:
Mark Disqualified, reason "not a prospect". No reply. Remove from the
Brevo list.

## Response templates

Starting points only. Ketsia writes the final wording.

Placeholders used below:
- `[link]` is the COMMARKAI discovery-call booking link:
  `https://calendly.com/commarkai-support/30min`. Note: as of 2026-08-29
  that Calendly account is dormant and the page shows "currently
  unavailable". Do not send this link until the account is reactivated
  (see open items). The event ("Business Discovery Call", 30 min) is
  already set up and branded.
- `[sign-off]` is the closing line and name at the bottom of the email.
  Working default: "Ketsia, COMMARKAI". The rulebook keeps the body in
  "we" and "our" team voice even though one person signs it.

**Discovery-call reply**
> Hi [Name],
>
> Thanks for reaching out about [their ask]. This is squarely the kind
> of work we do for [their industry] businesses.
>
> The best next step is a short call so we can understand what you are
> working toward and whether we are the right fit. Here is our calendar:
> [link]. Pick any time that works.
>
> Talk soon,
> [sign-off]

**Paid-consult reply** (fit, but under the build floor)
> Hi [Name],
>
> Thanks for reaching out about [their ask]. A full build starts at
> $1,500, which sounds like more than you are looking to take on right
> now.
>
> If it would help, we offer a focused paid consult: [30 minutes for
> $250 / a working session for $500], where we look at your specific
> situation and give you a clear plan you can act on, whether you build
> it with us later or not.
>
> Let me know if that is useful and we will send a link to book.
>
> [sign-off]

**Need-more-information reply**
> Hi [Name],
>
> Thanks for reaching out. To point you in the right direction, a few
> quick questions:
>
> - [Question 1]
> - [Question 2]
> - [Question 3]
>
> Once we have those we can tell you what makes sense and what it would
> take.
>
> [sign-off]

**Warm decline**
> Hi [Name],
>
> Thanks for thinking of us for [their ask]. Based on what you have
> shared, this is not the right fit for what we do best, so we would not
> be the team to serve you well here.
>
> [Optional: one specific, genuinely useful pointer or direction.]
>
> Wishing you the best with it,
> [sign-off]

## Quality checklist

- [ ] Lead exists in HubSpot and on the Brevo `COMMARKAI Leads` list
- [ ] Qualification score recorded
- [ ] Reply ran through `stop-slop` and follows the rulebook
- [ ] Ketsia reviewed and sent the reply
- [ ] HubSpot stage set, with a reason if Disqualified
- [ ] Follow up scheduled if the path calls for one

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Form lead not in HubSpot | Make.com scenario run failed | Check Make.com run history, re-run or create the contact by hand, note it |
| Lead in HubSpot but not in Brevo | Brevo leg of the Make.com scenario failed | Add to the `COMMARKAI Leads` list by hand |
| `sales-qualify` has nothing to work with | No company name or URL given | Use the Needs Info path to ask for it |
| Nurture email bounced | Bad address from the form | Mark the contact, do not chase |

## Escalation

If a lead is clearly high value but outside current capacity to deliver,
do not decline reflexively. Flag it to Ketsia with the qualification
score and a note, and let her decide whether to book the call, defer, or
refer it out.

## Answered 2026-08-29

1. **Calendar:** the Calendly account exists with a branded "Business
   Discovery Call" (30 min) at
   `https://calendly.com/commarkai-support/30min`, but it is dormant
   because its account email is on `commarkai.info`, a domain that
   lapsed. Ketsia is re-registering `commarkai.info` at Namecheap (also
   for brand protection), adding `support@commarkai.info` email, and
   using it to reactivate the account. Do not send the link until the
   page stops showing "currently unavailable". Tracked in open items.
2. **HubSpot stages:** not set up yet. The deal pipeline and stage names
   need configuring. Until then the stage names in this SOP are
   placeholders. Tracked in open items.
3. **LinkedIn and referral leads:** HubSpot is the single front door.
   Ketsia enters those contacts by hand after a real exchange, and the
   CRM should then carry them to the Brevo `COMMARKAI Leads` list the
   same as form leads. The HubSpot to Brevo sync for hand-created
   contacts does not exist yet, so for now add to Brevo by hand too.
   Tracked in open items.
4. **Minimum deal:** build or setup floor is $1,500, simple setups only.
   Below that, offer a paid consult: $500 for a company, $250 for a 30
   minute call with a sole proprietor or solo operator, advice only.
   Now in the rulebook and the decision points above.
5. **Sign-off:** working default is "Ketsia, COMMARKAI". Change here if
   Ketsia wants different wording. Body copy stays "we" and "our" per
   the rulebook.

## Open items this SOP depends on

- [ ] Re-register `commarkai.info` at Namecheap (confirm it is still
      available first), add `support@commarkai.info` email (forwarding is
      enough), reset the Calendly login, reactivate the account, then
      optionally move the Calendly account email to `support@commarkai.com`
- [ ] Confirm the booking page at
      `https://calendly.com/commarkai-support/30min` is live again, then
      remove the "do not send" note from the templates
- [ ] Build the HubSpot deal pipeline and stage names, then align step 6
      and the quality checklist to the real names
- [ ] Build the HubSpot to Brevo sync for hand-created contacts (HubSpot
      native Brevo integration, or a Make.com scenario watching for new
      HubSpot contacts), then drop the manual Brevo add from step 1
- [ ] Confirm the standard email sign-off (default "Ketsia, COMMARKAI")
