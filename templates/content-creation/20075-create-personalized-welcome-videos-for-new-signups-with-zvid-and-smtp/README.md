# 🎬 Create personalized welcome videos for new signups with Zvid and SMTP

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create a branded welcome video for each new signup. Receive signup details by webhook or use a manual sample, render with Zvid, return the video URL and editor link, and optionally send an SMTP email.

## How it works
1. Receive signup details by POST webhook or run the sample manually.
2. Load branding, onboarding cards and CTA settings from Config.
3. Build the landscape welcome video and validate its credit quote using Zvid nodes.
4. Save an editable draft and collect its editor link.
5. With dryRun=true, return the draft and quote without rendering.
6. By default, render the MP4 and poll until completion or timeout.
7. Return the result, optionally email it, and preview completed media in Watch video.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials. A workspace owner/admin may need to install it.
2. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io. Select it on every Zvid node.
3. Customize Config and test Sample signup. For webhooks, POST firstName with optional plan, company and email; allow time for rendering.
4. Email is disabled by default. Configure SMTP, emailFrom and sendEmail=true to enable delivery.
5. The default dryRun=false spends Zvid render credits. Use true for a draft and quote. Test manually before activating.

## Requirements
- Self-hosted n8n with community nodes enabled, a Zvid account with credits, and optional SMTP credentials.

## Customization
- Adjust brand colors, onboarding cards, CTA, music and timings in Config.

## Additional info
Watch video → Binary → data → View opens the completed MP4; draft-only outputs skip this download. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/welcome-video-on-signup.md. Help: https://zvid.io/contact

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
