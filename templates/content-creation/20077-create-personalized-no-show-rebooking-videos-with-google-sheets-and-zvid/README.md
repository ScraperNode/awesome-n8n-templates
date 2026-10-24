# 🎬 Create personalized no-show rebooking videos with Google Sheets and Zvid

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create a personalized rebooking video from a recorded no-show in Google Sheets or a webhook. Render with Zvid, optionally email the link, then record or return the result. This workflow does not detect attendance itself.

## How it works
1. Run manually, on the schedule, or when your attendance system posts a no-show.
2. Load presenter, branding and rebooking settings from Config.
3. Select a pending sheet row or normalize the webhook record.
4. Check optional music; finish without rendering when no record is available.
5. Build and validate the vertical video with native Zvid nodes.
6. Return a draft and quote for dryRun=true; otherwise render and poll for completion.
7. Optionally email the result, update or respond, and preview the completed MP4.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials. A workspace owner/admin may need to install it.
2. Create a Zvid API credential using https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on every Zvid node.
3. For sheet mode, connect both Google Sheets nodes to the same spreadsheet and tab. Use the canvas headers; FirstName and EventName are required. Leave Status empty.
4. For source=webhook, POST inviteeFirstName and eventName, with optional inviteeEmail, originalTime and rebookUrl. Allow time for rendering.
5. Customize Config and replace rebookUrl. dryRun=false spends render credits; true returns a draft and quote. Configure SMTP before enabling sendEmail.

## Requirements
- Self-hosted n8n with community nodes enabled, Zvid credits, Google Sheets credentials for sheet mode, and optional SMTP credentials.

## Customization
- Adjust presenter details, highlights, branding, timezone, music and booking URL. Test manually before activating.

## Additional info
Watch video → Binary → data → View opens the completed MP4; draft-only outputs skip this download. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/no-show-reengagement.md. Help: https://zvid.io/contact

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
