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
- [ ] The calendar link for booking discovery calls
- [ ] The `sales-qualify` skill (BANT plus MEDDIC scoring)

## Steps

### 1. Confirm the lead landed in the CRM

**Action:** Check HubSpot for a new contact matching the lead. The
Make.com scenario "Integration Webhooks" should have created it from the
contact form and added it to the Brevo `COMMARKAI Leads` list
automatically.
**Tool:** HubSpot, Make.com (scenario history if it did not appear)
**Notes:** If the lead came by email, LinkedIn, or referral instead of
the form, create the HubSpot contact by hand and add them to the Brevo
`COMMARKAI Leads` list so the nurture sequence still reaches them. If a
form lead is missing from HubSpot after 10 minutes, check the Make.com
scenario run history for a failed run before doing anything else.

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
**Notes:** Disqualified leads stay on the Brevo nurture list unless they
ask to stop. A "no" today can be a "yes" in six months.

## Decision points

### If the lead is a strong fit (score A or B):
Send the discovery-call reply with the calendar link. Book the call.
Prep it with `sales-prep` the day before.

### If the lead is a partial fit or the ask is unclear:
Send the "need more information" reply with two or three specific
questions. Schedule a 3 day follow up. Do not book a call yet.

### If the lead is out of scope, too small, or a wrong-industry fit:
Send the warm decline. Mark Disqualified with the reason. Leave them on
nurture.

### If the lead looks like spam or a vendor pitch:
Mark Disqualified, reason "not a prospect". No reply. Remove from the
Brevo list.

## Response templates

Starting points only. Ketsia writes the final wording.

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

## Open questions for Ketsia

1. Is there a real published calendar link for discovery calls yet, or
   does that need setting up first?
2. What HubSpot stage names do you actually use? This SOP assumes
   Qualified / Needs Info / Disqualified. Adjust to match your pipeline.
3. Do LinkedIn and referral leads really need adding to the Brevo nurture
   list, or do you want to handle those by hand and keep nurture
   form-only?
4. What is the minimum deal you will take? The decline path needs a
   concrete floor (the rulebook says about $2,500 per build, is that the
   hard line?).
5. Who is "we" in the sign-off right now, and what sign-off name do you
   want on these replies?
