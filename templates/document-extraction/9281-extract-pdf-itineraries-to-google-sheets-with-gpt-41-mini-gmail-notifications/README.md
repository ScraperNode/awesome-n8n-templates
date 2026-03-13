# 🔬 Extract PDF itineraries to Google Sheets with GPT-4.1-Mini & Gmail notifications

> ⚡ **600 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Extract PDF Itineraries to Google Sheets with GPT-4.1-Mini & Gmail Notifications

## Overview
Automates PDF data extraction using OpenAI GPT, saves to Google Sheets, sends email confirmations. Reduces manual entry by 90%.

## How It Works
1. Receives PDF uploads via form
2. Splits & loops through files
3. AI extracts structured data
4. Appends to Sheets with timestamps
5. Sends confirmation email

## Prerequisites
- OpenAI API key ([platform.openai.com](https://platform.openai.com))
- Google Workspace (Sheets & Gmail)
- n8n v1.0.0+

## Setup
1. Add OpenAI API key to n8n credentials
2. Create Google Sheet with extraction columns, authorize OAuth2
3. Configure Gmail OAuth2
4. Import workflow JSON
5. Edit AI prompt for your fields
6. Activate & share form URL

## Customization
- Modify extraction prompts
- Adjust Sheets mapping
- Customize email templates
- Add error handling/validation
- Extend to Word/Excel files

## Use Cases
Invoices, expense reports, resumes, contracts, forms, legal docs

## 🔗 Nodes Used

Google Sheets, Gmail, OpenAI Chat Model, n8n Form Trigger, OpenAI, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
