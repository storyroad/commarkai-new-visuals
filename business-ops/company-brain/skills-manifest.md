<!-- Record of the Claude skills and agents installed for the COMMARKAI
Company Brain on 2026-08-29, from the five public repos shown in the
@edwinavoiceofai "5 Claude skills" reel (Instagram reel/DbdlIdjhauj).
Update when a skill is added or retired. -->

# Skills manifest

Installed 2026-08-29. All five source repos are public and MIT licensed
(Remotion's is unlicensed but public). Reference clones live in
`C:\Users\kstlo\OneDrive\Documents\GitHub\` so the originals, including
git history, are available for updates and diffing.

## Installed to `~/.claude/skills/`

| Skill | Source repo | Department |
|---|---|---|
| `stop-slop` | hardikpandya/stop-slop | Content Studio |
| `sales` (orchestrator) + `scripts/` + `templates/` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-prospect` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-research` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-qualify` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-icp` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-contacts` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-outreach` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-followup` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-prep` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-proposal` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-objections` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-competitors` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-report` | zubair-trabzada/ai-sales-team-claude | Sales |
| `sales-report-pdf` | zubair-trabzada/ai-sales-team-claude | Sales |
| `offer-creation` | mfwarren/entrepreneur-claude-skills | Sales |
| `pricing-strategy` | mfwarren/entrepreneur-claude-skills | Sales |
| `sop-builder` | mfwarren/entrepreneur-claude-skills | all departments |
| `automation-workflows` | mfwarren/entrepreneur-claude-skills | Operations |
| `client-proposal-generator` | OneWave-AI/claude-skills | Client Delivery |

## Installed to `~/.claude/agents/`

`sales-company`, `sales-competitive`, `sales-contacts`,
`sales-opportunity`, `sales-strategy` (from ai-sales-team-claude, called
by `sales-prospect`).

## Already present before this, still in use

`commarkai-invoicing`, `content-engine`, `voice-dna`, `deep-research`,
`prompt-enhancer`, `video-prompt-enhancer`, `banana`, `remotion-video`,
`competitor-ads-extractor`, `fish-audio-api`, `fish-audio-podcast`,
`llm-council`.

## Deliberately not installed

- **zubair-trabzada/ai-agency-claude** (cloned for reference only). This
  is an agency orchestration layer (`/agency onboard`, 5 parallel audit
  teams: Marketing, Sales, Legal, Reputation, GEO/SEO). It is the closest
  match to what COMMARKAI is, but it leans on five sub suites for full
  power and one of them (Reputation) is paywalled on skool.com/aiworkshop.
  Installing it now would also create a second top level command that
  overlaps `sales`. Decision: prove the `sales` suite first, then
  reconsider `ai-agency-claude` as the layer above it.
- **Most of OneWave-AI/claude-skills** (200+ skills). Only
  `client-proposal-generator` was taken. Others worth a look later:
  `client-health-dashboard`, `cowork-qbr-builder`, `cowork-inbox-triage`,
  `brand-voice-analyzer`, `cold-email-sequence-generator`,
  `competitor-intel-agent`. Take them one at a time when there is a real
  use, to keep skill context lean.
- **entrepreneur-claude-skills marketing set** (`copywriting`,
  `seo-content`, `social-media`, `email-campaigns`, `paid-ads`,
  `MetaAds`). `content-engine` already covers most of this. Add only if a
  real gap shows up.
- **entrepreneur-claude-skills finance, leadership, product-strategy
  sets** (`financial-modeling`, `fundraising`, `pitch-deck`,
  `unit-economics`, `decision-frameworks`, `team-building`,
  `market-research`, `product-market-fit`, etc). Not relevant to current
  operations. Revisit if COMMARKAI raises money or builds a product.
- **remotion-dev/skills**. These install into a Remotion project, not
  globally, with `npx skills add remotion-dev/skills`. Run that inside
  `ai-ad-studio` if and when its Remotion code needs the best practice
  rules. `remotion-video` already covers script to video.

## Updating an installed skill

The reference clones are shallow. To refresh one:

```
cd C:\Users\kstlo\OneDrive\Documents\GitHub\<repo> && git pull
```

then copy the changed `SKILL.md` (and any `references/`) over the copy in
`~/.claude/skills/`.
