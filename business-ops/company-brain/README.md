<!-- COMMARKAI Company Brain. Internal operating map, modeled on the
"FuturIQ Company Brain" structure from @edwinavoiceofai (Instagram
reel/DbdlIdjhauj), adapted to COMMARKAI's real services, pricing, brand
rules, and installed Claude skills. Set up 2026-08-29. This folder is
internal ops, not a client deliverable. No secrets in any file here. -->

# COMMARKAI Company Brain

Every role, every SOP, one place. This is the map Claude reads before it
does work for the business, so a task lands in the right department with
the right context and the right guardrails instead of starting cold.

## The map

```
                        THE OWNER  (Ketsia)
                   vision  .  final say  .  the-rulebook.md
                                |
        +-----------------+-----+-----+------------------+
        |                 |           |                  |
  CONTENT STUDIO        SALES     CLIENT DELIVERY     OPERATIONS
  LinkedIn, content,   lead gen,  onboarding,        back office,
  video, visuals       pipeline,  proposals,         invoicing,
                       proposals  delivery, SOPs     tech stack, automation
```

- **The Owner** holds the rulebook and gives the final yes. Nothing
  reaches a client without it.
- **Four departments**, each with an owner role, the context it is
  allowed to read, the skills it runs, the SOPs it follows, and hard
  boundaries. One file each in [departments/](departments/).
- **[sops/](sops/)** holds the standard operating procedures as they get
  built. First one done:
  [inbound-lead-handling.md](sops/inbound-lead-handling.md) (draft v0.1).
- **[ideal-customer-profile.md](ideal-customer-profile.md)** is who Sales
  targets, with the scoring rubric and buyer personas (draft v0.1).
- **The Rulebook** ([the-rulebook.md](the-rulebook.md)) is the short list
  of non negotiables: voice, words, price floor, proof, process,
  boundaries. Read it first, every time.

## How to use it with Claude

1. Name the department, or describe the task and let Claude match it
   ("draft the week's LinkedIn series" is Content Studio, "qualify this
   inbound lead" is Sales).
2. Claude reads [the-rulebook.md](the-rulebook.md), then the relevant
   file in [departments/](departments/), then does the work.
3. Claude drafts. Ketsia reviews and ships. See rule 5.

## What is installed

[skills-manifest.md](skills-manifest.md) lists every Claude skill and
agent installed on 2026-08-29 from the five public repos, where each came
from, its license, which department uses it, and what was deliberately
left out.

## Keeping this current

- New service, new price, new brand rule: update
  [the-rulebook.md](the-rulebook.md).
- New skill installed or retired: update
  [skills-manifest.md](skills-manifest.md).
- A department starts owning a new process: add its SOP link to that
  department file. Build the SOP with the `sop-builder` skill.
