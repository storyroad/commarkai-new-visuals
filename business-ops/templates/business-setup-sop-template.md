<!-- Reusable SOP template for the "done for you business infrastructure
setup" service: domain, email, hosting, and automation, set up and
documented for a client who doesn't want to deal with it themselves.
Copy this into a client-specific working file, don't edit this one
directly, this is the master template. Modeled on the COMMARKAI setup
done 2026-08-28 (see ../tech-stack-log.md for the real example this was
built from). -->

# [Client name] tech stack setup and log

## What this document is

A running record of every account, tool, and API set up as part of this
engagement: what it does, why it was chosen, and where its credentials
live. Handed to the client at the end of the engagement so they are never
locked out of their own business, and updated throughout so nothing gets
lost to chat history or memory.

## Client-provided information (fill in before starting)

- Business name:
- Business mailing address (or: needs a virtual address, see step 1 below):
- Domain name:
- Domain registrar / where DNS is currently managed:
- Existing email provider (if any):
- Existing tools already in use (CRM, forms, automation) that need to be
  accounted for before touching DNS, an unannounced conflict here is the
  single most common thing that breaks during a setup like this:

## Standard setup sequence

1. **Business mailing address**, if the client doesn't already have one
   suitable for compliance footers (CASL in Canada, CAN-SPAM in the US).
   A virtual address service (e.g. iPostal1) is usually the right fit for
   a solo or small operation, a full virtual office (e.g. Regus) only
   makes sense once phone/desk access is actually needed.
2. **Audit existing DNS before changing anything.** Pull the full DNS
   record list first, every record, not just the ones relevant to the
   task at hand. Look specifically for records tied to services the
   client may have forgotten about (old CRMs, marketing platforms,
   previous email tools). Confirm with the client whether each
   unrecognized record is still in use before touching it. This step
   alone prevents the most common failure mode in this kind of work:
   silently breaking something live while setting up something new.
3. **Email sending/authentication setup** (whatever ESP or automation
   platform is chosen): sender identity, domain authentication (SPF/DKIM),
   DMARC (check whether one already exists at the root domain before
   adding a new one, a domain should only ever have one DMARC record).
4. **Compliance footer**: real mailing address, working unsubscribe
   mechanism, confirm the platform's own suppression/unsubscribe handling
   before hand-building anything custom, most modern ESPs handle this
   natively and hand-building it is unnecessary duplicate work.
5. **Automation/CRM setup**: build the actual sequence or workflow inside
   whichever platform was chosen. Check the platform's free-tier limits
   BEFORE designing the workflow, not after, a multi-step design built for
   a paid tier will not fit a free plan and has to be redesigned.
6. **Bridge from the client's existing site/forms** to the new tool
   (a lightweight integration like a simple 2-step Zap, or a native
   webhook, whichever is simplest and cheapest for the actual volume
   involved).
7. **End to end test** before calling anything live: submit a real test
   entry, confirm every step of the sequence fires correctly, confirm
   unsubscribe actually stops future sends, confirm nothing else on the
   domain broke.
8. **Hand off this document**, filled in, to the client. This is a
   deliverable, not internal notes, the client should be able to open it
   cold in a year and understand what's connected to their business and
   why.

## Tech stack log

| Tool | Purpose | Set up | Status | Credentials location | Notes |
|---|---|---|---|---|---|
| | | | | | |

## Open items / follow-ups

Anything left mid-setup, pending client action, or flagged for later
review goes here, not left implicit.
