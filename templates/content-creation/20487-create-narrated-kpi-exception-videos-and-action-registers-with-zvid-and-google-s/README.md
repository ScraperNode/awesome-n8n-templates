# 🎬 Create narrated KPI exception videos and action registers with Zvid and Google Sheets

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn fresh reporting snapshots into KPI exception videos and an owner action register. Validate completed periods, calculate changes and target misses, prioritize the video, and retain every metric in a review CSV. Optional narration and Slack delivery are disabled by default.

## How it works
1. Start manually or on schedule and load reporting rules, credit limits and the recovery log.
2. Fetch the configured reporting-system snapshot. Explicit sample mode creates clearly labeled SAMPLE DATA and blocks Slack; live failures never substitute samples.
3. Validate freshness, completed periods, unique metric IDs and numeric values. Calculate changes and target misses, showing N/A for zero baselines.
4. Rank exceptions for the five-metric video and retain every metric, source owner and action in the CSV. Optional narration uses checked values and ElevenLabs timestamps.
5. Validate the Zvid design and quote against the ceiling. In dry-run mode, return the plan and quote without rendering or writing log rows.
6. Resume saved accepted jobs or reserve a new report key, submit one render and persist its ID. Retry only explicit capacity rejections and poll accepted jobs within limits.
7. Record the actual render outcome. Offer Watch video and the action CSV, with optional Slack delivery tracked separately from successful rendering.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials; a workspace owner/admin may need to install it. Create a Zvid API credential using https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on all Zvid nodes and the optional voiceover upload.
2. Connect Google Sheets credentials. Create a KPI Reports log tab with RenderKey, Status, JobId, CreditsQuoted, PlanJson, VideoUrl, CompletedAt, DeliveryStatus headers. Select the same document and tab on all recovery and delivery-log nodes.
3. Set metricsUrl to your reporting system HTTPS endpoint and configure authentication on Fetch the reporting source snapshot if needed. Return company, periodStart, periodEnd, generatedAt and metrics[]. Each metric needs a unique id, label, numeric value and previous, and boolean lowerIsBetter. Optional fields are unit, target, owner, action and numeric history ending at value. The period must end before today; generatedAt must meet maxDataAgeHours. For a demonstration explicitly set metricsSource=sample: the video and CSV show SAMPLE DATA and Slack is blocked. Live-source failures never substitute samples.
4. Edit Set reporting period and exception thresholds and test manually. dryRun=false spends Zvid credits and maxCreditsPerVideo defaults to 65. dryRun=true returns design JSON and a quote without rendering, creating an editor draft, writing log rows or delivering to Slack.
5. Adjust alertPercent, maxDataAgeHours and onlyExceptions. Narration and Slack are off by default. Optional narrate=true requires an ElevenLabs Header Auth credential (xi-api-key) and a Zvid credential on Upload voiceover; voice synthesis can charge even during previews. Upload uses HTTP because the published Zvid node lacks multipart uploads. Optional sendSlack=true also needs slackWebhookUrl; inspect uncertain delivery before resending.

## Requirements
- Self-hosted n8n with community nodes enabled, Zvid credits, Google Sheets access, and a compatible reporting endpoint or explicit sample mode. No OpenAI or OpenRouter account is required. Optional voice generation can incur ElevenLabs charges even in a dry run.

## Customization
- Change branding, alertPercent, maxDataAgeHours and onlyExceptions. Optional history needs at least two numeric points and must end at value. Missing owners remain Unassigned; action text comes from the reporting source.

## Additional info
Open Watch video → Binary → data → View and review the CSV before sharing. Keep one execution running at a time because Sheets is not an atomic lock. Completed report keys are skipped and accepted saved jobs resume without a new paid request. Inspect failed or uncertain submissions before resetting a log row. Delivery acknowledgement is separate from render completion; uncertain sends are not automatically repeated. Current setup is described above; the linked repository guide provides background. Support: https://zvid.io/contact

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
