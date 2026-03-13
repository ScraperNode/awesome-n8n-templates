# 🔬 ✨🔪 Advanced AI powered document parsing & text extraction with Llama Parse

> ⚡ **19,942 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Description

This workflow automates document processing using LlamaParse to extract and analyze text from various file formats. It intelligently processes documents, extracts structured data, and delivers actionable insights through multiple channels.

## How It Works

### Document Ingestion & Processing 📄
- Monitors Gmail for incoming attachments or accepts documents via webhook
- Validates file formats against supported LlamaParse extensions
- Uploads documents to LlamaParse for advanced text extraction
- Stores original documents in Google Drive for reference

### Intelligent Document Analysis 🧠
- Automatically classifies document types (invoices, reports, etc.)
- Extracts structured data using customized AI prompts
- Generates comprehensive document summaries with key insights
- Converts unstructured text into organized JSON data

### Invoice Processing Automation 💼
- Extracts critical invoice details (dates, amounts, line items)
- Organizes financial data into structured formats
- Calculates tax breakdowns, subtotals, and payment information
- Maintains detailed records for accounting purposes

### Multi-Channel Delivery 📱
- Saves extracted data to Google Sheets for tracking and analysis
- Sends concise summaries via Telegram for immediate review
- Creates searchable document archives in Google Drive
- Updates spreadsheets with structured financial information

## Setup Steps

### Configure API Credentials 🔑
- Set up LlamaParse API connection
- Configure Gmail OAuth for email monitoring
- Set up Google Drive and Sheets integrations
- Add Telegram bot credentials for notifications

### Customize AI Processing ⚙️
- Adjust document classification parameters
- Modify extraction templates for specific document types
- Fine-tune summary generation prompts
- Customize invoice data extraction schema

### Test and Deploy 🚀
- Test with sample documents of various formats
- Verify data extraction accuracy
- Confirm notification delivery
- Monitor processing pipeline performance

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
