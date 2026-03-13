# 🧾 Automated invoice data extraction with LlamaParse, Gemini 2.5 & Google Sheets

> ⚡ **1,124 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This n8n template demonstrates how to automate invoice data extraction from PDF attachments received via Gmail. Using LlamaParse and Gemini LLM, this workflow parses structured fields like PO numbers, line items, tax amounts, and totals — and stores them neatly into a Google Sheet.

Perfect for use cases such as:
💼 Finance teams managing vendor invoices
📊 Bookkeeping workflows
🔄 Automating monthly reconciliation


## Good to Know
At the time of writing, LlamaParse and Gemini may involve API usage costs depending on your subscription tier. Check LlamaIndex Pricing and Gemini Pricing for updated info.

LlamaParse provides Markdown-formatted parsed output which is then passed to an LLM for structured field extraction.

Gemini models may be geo-restricted. If you encounter "model not found" errors, your region might not be supported.


## How it Works
- Trigger: Watches your Gmail for new emails with PDF attachments.
- Email Filter: Ensures we only parse fresh emails not already labeled as "invoice synced".
- LlamaParse Upload: Uploads the PDF to LlamaParse’s parsing endpoint.
- Status Polling: Periodically checks whether the parsing is complete.
- Download Markdown: Once ready, it fetches the parsed invoice in Markdown format.
- AI Parsing with Gemini: Sends the Markdown to Gemini LLM to extract structured JSON (like PO number, line items, taxes, etc.) using a predefined schema.
- Google Sheets Upload: Stores extracted data into a predefined spreadsheet. 
- Labeling: Marks the email as “invoice synced” to avoid reprocessing.

## How to Use
The trigger is based on Gmail, but you can replace this with a webhook or manual trigger for testing.

## Setup Instructions
Gmail API
- Enable Gmail API in Google Cloud Console.
- Connect your Gmail account in n8n credentials.
- Allow read + modify access.

Google Sheets

- Create a new Google Sheet with the following headers (row 1): Date | Vendor Name | Invoice Number | PO Number | Line Items | Subtotal | Tax | Total Amount
- Connect Google Sheets in n8n and paste the Sheet ID in the node.
- You can customise the google sheet basis your requirement.

LlamaParse

- Get a LlamaIndex API Key from LlamaIndex.
- Use the LlamaParse upload and polling nodes to process your PDFs.

Gemini (via Vertex AI)

- Set up Gemini access in GCP.
- Use the Gemini 2.5 Model.
- Construct a structured prompt to extract required fields.

Labeling

- Create a Gmail label named "Invoice Synced" for tracking processed emails.

## Requirements
Gmail account with API access

LlamaParse (LlamaIndex) account with API Key

Google Sheets API credentials

Access to Gemini 2.5 model via Google Vertex AI

## Customising This Workflow
This template is just the beginning. You can expand it to:

- Auto-generate invoices back to vendors
- Run duplicate checks before inserting into Sheets
- Integrate with accounting tools like Zoho, QuickBooks, or Tally
- Trigger Slack/Email notifications on specific vendors or high invoice amounts

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
