<!-- Living log of every tool, account, and API connected as part of building
out COMMARKAI's own business infrastructure. Update this whenever a new
service gets signed up for, connected, or retired, don't rely on memory or
chat history for this, that's exactly the gap that prompted this file
(2026-08-28, after losing track of why a HubSpot account existed). -->

# COMMARKAI tech stack log

No actual passwords, API keys, or secrets go in this file, ever. This
tracks *what* exists and *why*, not credentials. Where a key or password
lives (a password manager, an `.env` file, etc.) gets a pointer, not the
value itself.

| Tool | Purpose | Set up | Status | Credentials location | Notes |
|---|---|---|---|---|---|
| Purelymail | Email hosting for `support@commarkai.com` | Before 2026-08-27 | Active | Purelymail account login | SPF/DKIM/DMARC already configured here, this is the domain's real mail-receiving setup. |
| Netlify | Website hosting (`commarkai-new-visuals` repo) and DNS for `commarkai.com` | Before 2026-08-27 | Active | Netlify account (storyroad team) | Also hosts the Netlify Forms used for the site's contact form and the unsubscribe page. |
| iPostal1 | Virtual business mailing address (CASL compliance, general business address) | 2026-08-28 | Active, verification pending | iPostal1 account login | Address: 197 Yonge St, Unit 201-1003, Toronto, ON M5B 0C4. Identity/business verification not yet completed as of setup, mail won't forward until that's done. |
| Brevo | Email marketing automation (lead nurture sequence: Day 0/3/7/14), sends from `support@commarkai.com` | 2026-08-28 | Active, Free plan | Brevo account login | Domain authenticated and branded (`mail.commarkai.com`). Native suppression/unsubscribe handling used instead of a hand-built Zapier suppression list. |
| GoHighLevel | Unknown prior use, DNS remnants found (`mail.commarkai.com` MX/SPF via Mailgun/LeadConnector, plus `app`/`go`/`links` subdomains pointing to `ludicrous.cloud`) | Unknown | **Deactivated**, DNS records removed 2026-08-28 | N/A, account no longer active | Cleaned up because it was conflicting with Brevo's branded subdomain setup. If this surfaces again, it's confirmed dead. |
| HubSpot | **Resolved 2026-08-28** (previously logged as unclear). CRM receiving every `commarkai.com` contact-form submission, fed via the Make.com bridge below. This is the answer to the original gap that started this log. | Before 2026-08-22 (confirmed active as of that date via Make.com scenario history) | Active | HubSpot account login | Contact form submissions land here as HubSpot contacts. As of 2026-08-28 the same Make.com scenario also feeds Brevo in the same chain (Webhook → HubSpot → Brevo, added to the `COMMARKAI Leads` list), verified end to end with a real test submission. HubSpot kept alongside Brevo, not replaced. |
| Make.com | Automation bridge, NOT Zapier (corrected 2026-08-28, this was misidentified earlier in this log). Scenario "Integration Webhooks": a custom Webhook trigger → HubSpot CRM "Create or Update a Contact" → Brevo "Create a Contact" (added to the `COMMARKAI Leads` list). Connects the Netlify contact form to both CRMs. | Before 2026-08-22 (HubSpot leg), Brevo leg added 2026-08-28 | Active, verified end to end with a real test submission | Make.com account login (us2.make.com); Brevo connection uses an API key from Brevo's SMTP & API > API keys & MCP tab | The webhook this scenario listens on is presumably called from the site's form-submit handling, worth confirming exactly where in the site code that call happens, next time this is touched. Deliberate decision 2026-08-28: keep HubSpot running alongside Brevo rather than replacing it, since removing it mid-build would have lost its CRM depth for no immediate benefit. |
| Zapier | Considered for the lead-nurture automation | Evaluated 2026-08-28 | Not adopted for the main sequence | N/A | Free plan only supports 2-step Zaps (one trigger, one action), too limited for the multi-step nurture sequence, Brevo's native automation builder replaced this need. Confirmed 2026-08-28: Zapier was never actually the tool used for the Netlify-to-HubSpot bridge either, that's Make.com (see above), this was a wrong assumption corrected mid-build. |
| Calendly | Discovery-call booking. Org slug `commarkai-support`, event "Business Discovery Call" (30 min) at `https://calendly.com/commarkai-support/30min`, branded with the COMMARKAI logo. Referenced by the inbound-lead SOP in `company-brain/sops/`. | Before 2026 (predates this log) | **Active** as of 2026-08-29 (recovered same day). | Calendly account login. Account email moved 2026-08-29 to `support@commarkai.com` (was `support@commarkai.info`). | Was dormant because the login email sat on the lapsed `commarkai.info` domain. Recovered 2026-08-29: re-registered `commarkai.info`, created a `support@commarkai.info` mailbox on its free Private Email trial, caught the Calendly reset there, reset the password, then changed the Calendly account email to `support@commarkai.com`. Chose to recover rather than start fresh, for continuity. Still to check: whether the account is on a lapsed paid plan vs free, and that the Google Calendar connection is live. Free-plan Calendly handles one event type fine. |
| commarkai.info (Namecheap) | Secondary domain. Purpose: brand protection. Also briefly hosted `support@commarkai.info` (Private Email trial) to recover the Calendly account above. | Re-registered 2026-08-29. 1 year, ~$4.18 CAD promo, free WHOIS privacy included. | Registered | Namecheap account login (`Ketsia11`) | Not the primary domain: `commarkai.com` stays the business's real home for website, email, and marketing. Keep `commarkai.info` DNS minimal, no website, no marketing subdomains. **A Private Email trial (3 mailboxes, "Expand" plan) is attached, valid Aug 29 to Sep 29 2026.** Only used for the Calendly recovery. Set its auto-renew OFF so it lapses Sep 29 with no charge; `support@commarkai.info` stops working then, which is fine because Calendly is now on `support@commarkai.com`. The domain's own free email forwarding could not be used while Private Email was present. **Turn the DOMAIN auto-renew ON**: this domain lapsing is what broke Calendly. Year-2 renewal is ~$28.98 CAD, not the promo price. Registrant email (`ketsiasln@gmail.com`) must stay an inbox Ketsia controls; there is an ICANN verification email to click. |

## When to update this

- Any time a new account, API key, or third-party tool gets connected to
  COMMARKAI's business operations (not one-off experiments in unrelated
  repos like `ai-ad-studio`, this file is scoped to core business
  infrastructure: domain, email, hosting, CRM, automation, payments).
- Any time something gets deactivated or replaced, mark it retired rather
  than deleting the row, the history of "why we moved off X" is useful.
- Especially log anything set up mid-conversation that isn't immediately
  obvious from the codebase, that's the failure mode this file exists to
  prevent.
