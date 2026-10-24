# 🎬 Create bulk product catalog videos from Google Sheets with Zvid

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually or every Monday at 8am to read product rows from Google Sheets, generate branded catalog videos in bulk with Zvid, and write the finished video URLs back to the sheet for each product.

## How it works
1. Runs on a manual trigger or on a weekly schedule every Monday at 8am.
2. Loads brand and render settings (colors, fonts, timings, batch size, and dry-run mode) and reads product catalog rows from Google Sheets.
3. Keeps rows where VideoUrl is empty, validates required product fields and unique Product names, and limits the batch to maxProducts while reporting skipped rows. If every product already has a video, the workflow finishes successfully without rendering.
4. Builds a shared Zvid video project template, creates one variable set per product row, and validates the first item with Zvid to confirm the design and calculate required credits.
5. If dryRun is enabled, creates an editable draft of the first selected product and outputs a batch credit estimate and editor link without submitting a paid render.
6. If dryRun is disabled, submits a Zvid bulk render job, polls Zvid until the batch finishes (or times out), and collects the output video URLs per product.
7. Matches completed jobs to products and updates Google Sheets by the Product column. Reports delivered videos, failures and remaining work, and downloads completed MP4s through the guarded Watch video step for review.

## Setup
1. Install `@zvid/n8n-nodes-zvid` from Settings → Community nodes before credentials. A workspace owner/admin may need to install it. On n8n Cloud, the owner can install verified Zvid from the Nodes panel. Create a Zvid API credential with a key from https://app.zvid.io/api-keys and Base URL `https://api.zvid.io`; select it on every Zvid node.
2. Connect Google Sheets and select the same spreadsheet and tab in Get catalog rows and Write links to sheet. Keep Write links to sheet matched on `Product`.
3. Create headers Product, Price, CompareAtPrice, Feature1, Feature2, Feature3, ImageUrl1, ImageUrl2, CtaText, VideoUrl. Supply a unique Product, Price, all three features and a public ImageUrl1. Leave VideoUrl empty for new renders. Use media within your Zvid plan’s dimension and file-size limits.
4. Replace branding, website, copy and music in Config. The default maxProducts is five; keep the batch within your account’s limits. `dryRun: false` renders and spends Zvid credits by default. Set it to true for a quote and an editor draft of the first selected product.
5. Test manually and verify the returned links in the correct sheet rows. Review each output in Watch video → Binary → data → View. Check the workflow timezone before activating Monday at 8am.

## Requirements
- The installed Zvid node, a Zvid account with sufficient render credits, Google Sheets credentials, a prepared product sheet and publicly accessible product images.

## Customization
- Customize brand copy, website, colors, fonts, scene lengths, music and batch size in Config. Review product claims, prices and media rights before using the videos in a campaign.

## Additional info
Completed catalogs exit successfully without paid rendering. Invalid pending rows, duplicate product names and render failures are reported. A timeout does not cancel jobs: check Zvid before rerunning to avoid duplicate renders. Each completed MP4 is a separate Watch video output item. Social publishing is not included. All supported Zvid operations use the Zvid node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
