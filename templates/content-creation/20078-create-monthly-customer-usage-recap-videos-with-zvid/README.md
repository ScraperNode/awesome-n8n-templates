# 🎬 Create monthly customer usage recap videos with Zvid

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create a vertical month-in-review video for one customer using usage metrics, animated statistics and optional delta indicators. Run monthly or manually, render with Zvid, and optionally email the finished link. An empty metricsUrl uses the bundled sample.

## How it works
1. Run manually or on the first day of each month.
2. Load branding, timings and optional delivery settings from Config.
3. Fetch one customer’s metrics, or use the bundled sample when metricsUrl is empty.
4. Normalize the input and build the vertical statistics video.
5. Validate the project and credit quote using the native Zvid node.
6. For dryRun=true, return an editor draft; otherwise render and poll for completion.
7. Return the video URL, optionally email it, and preview completed media in Watch video.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials. A workspace owner/admin may need to install it.
2. Create a Zvid API credential using https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on every Zvid node.
3. Set branding in Config. Your metrics endpoint should return userName, monthLabel, optional highlight, and stats containing label, value and optional delta.
4. The default dryRun=false spends render credits. Set true for an editor draft and quote. Configure SMTP, emailTo and emailFrom before enabling sendEmail.
5. Test manually with the sample first. Check the monthly schedule and workflow timezone before activation.

## Requirements
- Self-hosted n8n with community nodes enabled, a Zvid account with credits, and optional SMTP credentials.

## Customization
- Adjust branding, CTA, music, timings and the number of displayed statistics in Config.

## Additional info
Watch video → Binary → data → View opens the completed MP4; draft-only outputs skip this download. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/month-in-review-stats.md. Help: https://zvid.io/contact

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
