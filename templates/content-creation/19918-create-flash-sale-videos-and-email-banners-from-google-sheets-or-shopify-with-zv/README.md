# 🎬 Create flash-sale videos and email banners from Google Sheets or Shopify with Zvid

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create a vertical flash-sale video and matching email banner from a pending Google Sheets row or a Shopify price drop. Zvid renders both assets and returns their URLs; sheet updates and SMTP email delivery follow the configured source and settings.

## How it works
1. Runs on a manual trigger for testing or on an hourly schedule.
2. Chooses the sale source based on configuration by either polling Shopify for qualifying price drops or reading the next unprocessed row from Google Sheets.
3. Stops with a “nothing to announce” result when no eligible sale is found.
4. Checks the configured background music URL and disables music if the file is unreachable or too large.
5. Builds the Zvid render payloads for both a flash-sale video and a banner image, then validates them with Zvid’s free validation endpoint.
6. If dry run is enabled, saves drafts to the Zvid editor and outputs preview links and a credit estimate.
7. If dry run is disabled, submits each Zvid render job one at a time, polls Zvid until both complete, then collects the final video and banner URLs.
8. Optionally updates the originating Google Sheets row with status and URLs and sends the banner as an HTML email, then returns a run summary and downloads the finished assets for review.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring Zvid credentials. A workspace owner/admin may need to install it. Create a key at https://app.zvid.io/api-keys, then select your Zvid API credential with Base URL https://api.zvid.io on every Zvid node.
2. Connect both Google Sheets nodes to the same spreadsheet and tab. Use these exact headers: Product, OldPrice, NewPrice, ImageUrl, EndsAt, Status, VideoUrl, BannerUrl. The first four are required. Leave Status and the output URLs empty.
3. If using Shopify as the sale source, set `shopDomain` and attach an HTTP Header Auth credential that sends `X-Shopify-Access-Token` for a Shopify Admin API token with `read_products` scope.
4. Update the Config values for branding (brandName, storeUrl, colors, fonts), sale defaults (minDropPercent, defaultEndsAt), and media settings (musicUrl, bannerWidth/Height).
5. If you want email delivery, configure an SMTP-capable Email Send credential in n8n and set `emailTo`, `emailFrom`, and the subject template in Config.
6. The default dryRun=false renders and spends Zvid credits. Set dryRun=true for editor drafts and credit quotes before rendering. Test manually, review both outputs, then enable the schedule.

## Requirements
- A self-hosted n8n instance with the Zvid community package installed, a Zvid account with render credits, and Google Sheets credentials. Shopify and SMTP credentials are needed only for their optional branches.

## Customization
- Adjust the brand, colors, fonts, sale copy, music and banner dimensions in Config. Supply your own product image URLs.

## Additional info
Open Watch video or View banner → Binary → data → View to inspect completed media. Explicit 429 rejections wait before retrying; accepted render jobs are never resubmitted automatically. Keep the supplied HTTP Request v2 preview nodes to avoid a manual-run preview issue in n8n 2.29.10. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/flash-sale-alert.md

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
