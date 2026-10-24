# 💬 Send personalized abandoned-cart recovery videos with Google Sheets, Shopify and Zvid

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Create a personalized abandoned-cart video from Google Sheets or Shopify data with Zvid. Show up to three products, optionally email the customer a recovery message and checkout link, then record the finished video so the same cart is not selected again.

## How it works
1. Runs on an hourly schedule or via manual trigger and loads the workflow configuration (source, branding, music, and render settings).
2. Pulls the next eligible cart either from a Google Sheets tab (first row with an empty Status) or by polling the Shopify Admin API for open checkouts within the configured age window.
3. If no eligible cart is found, outputs a “nothing to recover” result and stops.
4. Probes the configured background music URL and skips music if it is unreachable or exceeds the size limit.
5. Builds a three-scene Zvid project JSON (hook, cart items, total/CTA) from the cart details and validates it with Zvid’s validate endpoint.
6. If dryRun is enabled, saves a draft project to the Zvid Editor and outputs an editor link without rendering or updating any records.
7. Otherwise submits the Zvid render job, polls Zvid until completion or timeout, and extracts the finished video URL.
8. Optionally sends an HTML recovery email with the video link, then marks the Google Sheets row as done (including the video URL) or stores the Shopify checkout ID to avoid reprocessing.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring Zvid credentials. A workspace owner/admin may need to install it. Create a key at https://app.zvid.io/api-keys and select your Zvid API credential with Base URL https://api.zvid.io on every Zvid node.
2. Connect both Google Sheets nodes to the same spreadsheet and tab. Use these exact headers: Email, FirstName, Item1, Item1Image, Item1Price, Item2, Item2Image, Item2Price, Item3, Item3Image, Item3Price, CheckoutUrl, Status, VideoUrl. Item1 is required. Leave Status and VideoUrl empty.
3. For the optional Shopify source, set shopDomain and apiVersion in Config. Attach an HTTP Header Auth credential named X-Shopify-Access-Token using an app authorized to read the store’s abandoned checkout data. Verify checkout access for your store before enabling this branch.
4. Set branding, recovery copy and optional music in Config. The default dryRun=false renders and spends Zvid credits. Set dryRun=true for an editor draft and quote. Test manually before enabling the hourly schedule.
5. To enable sending email, set `sendEmail=true` in Config and configure the Email Send node with a working SMTP setup and an approved `emailFrom` sender address.

## Requirements
- A self-hosted n8n instance with the Zvid community package installed, a Zvid account with render credits, and Google Sheets credentials. Shopify access and SMTP credentials are required only for their optional branches.

## Customization
- Customize the brand, fonts, colors, recovery copy and timing in Config. Use your own public product photos within your Zvid plan’s image limits.

## Additional info
Email sending is off by default. Review a private test before enabling sendEmail. Open Watch video → Binary → data → View for completed media, and keep the supplied HTTP Request v2 preview node. Setup guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/abandoned-cart-video.md

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
