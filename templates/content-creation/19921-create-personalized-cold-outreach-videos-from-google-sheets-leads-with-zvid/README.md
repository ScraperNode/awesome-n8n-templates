# 🎬 Create personalized cold-outreach videos from Google Sheets leads with Zvid

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create personalized landscape outreach videos for pending Google Sheets leads with Zvid. Render the selected leads in one batch, write each completed video URL back to its matching row, and preview the results in n8n. Sending emails or messages is a separate step you can add after review.

## How it works
1. Runs on a manual trigger or every Tuesday at 9am.
2. Loads configuration values (branding, pitch copy, limits, and media URLs) and reads lead rows from Google Sheets.
3. Selects up to the configured batch size of leads with an empty Status, skipping rows missing required fields and probing lead logo URLs when provided.
4. Builds a Zvid bulk render payload for all selected leads, optionally dropping the background music URL if its HEAD check fails or exceeds the size limit.
5. Validates the Zvid project to get warnings and a per-video credit estimate, then either saves a draft of the first lead in the Zvid editor for review (dry run) or submits the paid bulk render.
6. If rendering, polls Zvid until the batch completes or times out, then collects successful output URLs and records failures for retry.
7. Updates the source Google Sheets rows with Status and VideoUrl for completed renders and outputs per-lead results (including a downloadable video file for review).

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring Zvid credentials. A workspace owner/admin may need to install it. Create a key at https://app.zvid.io/api-keys and select your Zvid API credential with Base URL https://api.zvid.io on every Zvid node.
2. Connect Read leads sheet and Write URLs back to the same Google spreadsheet and tab. Keep row_number as the update matching column.
3. Use these exact headers: FirstName, Company, Website, LogoUrl, Role, Status, VideoUrl. FirstName and Company are required. Leave Status and VideoUrl empty for new leads. An empty LogoUrl uses the monogram fallback.
4. Set senderName, senderTitle, senderCompany, pitchPoints and your own meetingUrl in Config. Choose branding and optional music. Set maxPerRun within your Zvid plan’s bulk-render limits, then test manually before enabling the weekly schedule.
5. The default dryRun=false submits paid renders and writes completed results to Google Sheets. Set dryRun=true first if you want an editor draft of the first lead and a batch credit quote without rendering.

## Requirements
- A self-hosted n8n instance with the Zvid community package installed, a Zvid account with enough render credits for the selected batch, and Google Sheets credentials. No email or outreach-sending service is required.

## Customization
- Customize the sender identity, pitch, booking link, fonts, colors and batch size in Config. Use accurate company logos or leave LogoUrl empty.

## Additional info
Open Watch video → Binary → data → View and select an output item for each lead. Keep the supplied HTTP Request v2 preview node; it avoids the n8n 2.29.10 manual-run save error behind the endless spinner. Completed rows are skipped on later runs. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/cold-outreach-videos.md

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
