# 🎬 Create proposal recap videos from Google Sheets or webhooks with Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Turn a Google Sheets deal or webhook payload into a landscape proposal recap with scope, amount, timeline and a booking CTA. Render with Zvid, write the finished URL to the sheet or return it to the webhook caller.

## How it works
1. Run manually, on the 15-minute schedule, or through a POST webhook.
2. Load branding and CTA settings, and check optional background music.
3. Read the next pending sheet row or normalize the incoming deal.
4. Build the proposal video and validate its quote using native Zvid nodes.
5. With dryRun=true, save an editor draft and return the credit quote.
6. Otherwise render the MP4 and poll until completion or timeout.
7. Save or return the video URL and preview it in Watch video.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials. A workspace owner/admin may need to install it.
2. Create a Zvid API credential using https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on every Zvid node.
3. For source=sheet, connect both Google Sheets nodes to the same spreadsheet and tab. Use the canvas headers; DealName, Company and Amount are required. Leave Status empty.
4. Alternatively set source=webhook and POST dealName, company and amount. Allow the caller enough time for rendering.
5. Set sender details, branding and meetingUrl in Config. dryRun=false spends render credits; true returns a draft and quote. Test before activating.

## Requirements
- Self-hosted n8n with community nodes enabled, Zvid credits, and Google Sheets credentials for sheet mode.

## Customization
- Change sender details, scope, currency, timeline, expiry, branding and meeting URL. Email delivery is not included.

## Additional info
Watch video → Binary → data → View opens the completed MP4; draft-only outputs skip this download. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/proposal-recap-video.md. Help: https://zvid.io/contact

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
