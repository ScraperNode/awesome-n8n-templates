# 🎬 Automate Print-on-Demand Product Mockups with SudoMock API

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically generate product mockups for every design across multiple products (t-shirts, mugs, posters, phone cases) for print-on-demand sellers. Perfect for Etsy, Redbubble, Printful, and Shopify merchants who need to create hundreds of mockups for product launches.

## How it works

• **Monitor Google Drive** for new design files uploaded to a specific folder
• **Fetch product templates** from [SudoMock](https://sudomock.com) (PSD mockup templates you've uploaded)
• **Create design × product combinations** - For 10 designs and 5 products, generates 50 unique mockup variations
• **Sequential rendering** - Processes one mockup at a time (~1 second per render) to respect free tier limits
• **Generate CSV export** - Creates a ready-to-import CSV file with all mockup URLs organized by design and product type
• **Upload to Google Drive** - Saves the CSV automatically with datestamp
• **Email notification** - Sends summary with success/failure counts and download link

This workflow can process 100 designs across 10 product types (1,000 mockups) in under 20 minutes, compared to 100+ hours of manual work in Photoshop.

## Set up steps

**Time to set up: ~15 minutes**

• Sign up for free [SudoMock account](https://sudomock.com) (500 free credits, no credit card required)
• Upload your PSD mockup templates (t-shirt, mug, poster, etc.) to SudoMock dashboard
• Configure Google Drive credentials in n8n
• Set folder ID for where your designs will be uploaded
• Add SudoMock API credentials to n8n
• Optional: Configure email settings for notifications
• Test with 2-3 designs before running full batches

**What you'll need:**
- SudoMock API key ([free tier available](https://sudomock.com))
- Google Drive account
- PSD mockup templates with smart objects (find free ones on [Freepik](https://freepik.com) or [Mockup World](https://mockupworld.co))
- Design files (PNG, JPG, or WebP)

**Parallel processing upgrade:**
Free tier processes 1 mockup at a time. Upgrade to paid plans for faster parallel rendering (3-25 concurrent renders).

**Integration ready:**
CSV export format works with Printful, Printify, and most POD platforms for bulk product uploads.

## 🔗 Nodes Used

Send Email, Google Drive, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
