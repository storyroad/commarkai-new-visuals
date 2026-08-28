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
| HubSpot | Unclear, an account was reportedly created/connected around 2026-08-27 per a prior conversation | ~2026-08-27 | **Status unknown, needs review** | Unknown | This is the exact gap that started this log: no record survived of what it was for. Log into HubSpot directly and check account creation date, connected integrations, and any imported data before deciding whether to keep or cancel it. |
| Zapier | Considered for the lead-nurture automation | Evaluated 2026-08-28 | Not adopted for the main sequence | N/A | Free plan only supports 2-step Zaps (one trigger, one action), too limited for the multi-step nurture sequence, Brevo's native automation builder replaced this need. May still get used later for a simple Netlify-to-Brevo contact bridge, a 2-step Zap fits that. |

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
