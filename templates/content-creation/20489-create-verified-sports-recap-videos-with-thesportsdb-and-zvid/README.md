# 🎬 Create verified sports recap videos with TheSportsDB and Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create factual league or club recap videos from verified final TheSportsDB scores. Filter completed periods, reject conflicting results, calculate available-match totals and club form, and render with Zvid. Google Sheets tracks recovery; a final-score CSV supports editorial review.

## How it works
1. Start manually or on schedule and load the league, optional club, completed date window, branding and credit limits.
2. Fetch recent league events from TheSportsDB and read the Sports Recaps recovery log.
3. Keep verified final matches with valid scores, reject conflicts and duplicate events, and apply the date and club filters.
4. Prioritize returned matches, calculate score totals and available-match club form, and build factual recap text and the scoreline CSV deterministically.
5. Check optional music, build the video design, and use the Zvid node to validate it and enforce the credit ceiling. Return only the plan and quote in dry-run mode.
6. Skip completed keys or resume accepted jobs. For a new recap, reserve the key, submit one render and persist its job ID; retry only explicit capacity rejections within bounded limits.
7. Poll the accepted job and save its actual outcome. Completed MP4s reach Watch video, and the source-specific CSV retains actual match dates and final scores for review.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials; a workspace owner/admin may need to install it. Create a Zvid API credential using https://app.zvid.io/api-keys and Base URL https://api.zvid.io, and select it on every Zvid node.
2. Connect Google Sheets credentials and create a Sports Recaps log tab with RenderKey, Status, JobId, CreditsQuoted, PlanJson, VideoUrl, CompletedAt headers. Select the same document and tab on every recovery read/write node.
3. Set sportsDbKey and leagueId in Set the league club and completed recap period. The bundled 123 key is a shared public demonstration key; use service access suitable for your needs. Optionally configure focusTeam and an explicit completed periodStart/periodEnd. Recent-event coverage is bounded and is not a complete season table. By default, no matching final results means no render. Optional allowLatestAvailableResults=true can use results within maxFallbackAgeDays (30 by default), retains their actual dates, and never overrides an explicit period.
4. Test manually before enabling the schedule. dryRun=false is the default and spends Zvid credits; maxCreditsPerVideo defaults to 35. dryRun=true returns design JSON and a quote without rendering, creating an editor draft or writing log rows.
5. Optionally set musicUrl and coverVideoOverride to media you are permitted to use. Keep both input dimensions within your Zvid account limits. The bundled sports cover is 1080 × 1920.

## Requirements
- Self-hosted n8n with community nodes enabled, Zvid credits, Google Sheets access and suitable TheSportsDB service access. This revision creates recap text deterministically and does not require or call OpenAI or OpenRouter.

## Customization
- Adjust maxMatches, branding, music and recapRevision. Only use a new revision for an intentional additional render. Club form describes the returned final matches; it is not an official standings or complete season calculation. The template does not publish to social channels.

## Additional info
Reviewer title correction: please use “Create verified sports recap videos with TheSportsDB and Zvid”. The generated title incorrectly adds OpenAI; this workflow uses deterministic scoreline text and has no LLM call, and the title is not editable in this form.

Open Watch video → Binary → data → View and check the final-score CSV before sharing. Run one execution at a time because Sheets is not an atomic lock. Keep completion history and saved job IDs; inspect failed or uncertain submissions before resetting log rows. Saved accepted jobs resume without another paid render. Current setup is described above; the linked repository guide supplies background. Support: https://zvid.io/contact

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
