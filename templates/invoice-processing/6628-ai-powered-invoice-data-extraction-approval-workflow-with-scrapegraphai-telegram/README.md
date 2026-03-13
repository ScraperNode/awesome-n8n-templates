# 🧾 AI-powered invoice data extraction & approval workflow with ScrapeGraphAI & Telegram

> ⚡ **662 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# How it works

This workflow automatically extracts data from invoice documents (PDFs and images) and processes them through a comprehensive validation and approval system.

## Key Steps

1. **Multi-Input Triggers** - Accepts invoices via email attachments or direct file uploads through webhook.
2. **AI-Powered Extraction** - Uses ScrapeGraphAI to extract structured data from invoice documents.
3. **Data Cleaning & Validation** - Processes and validates extracted data against business rules.
4. **Approval Workflow** - Routes invoices requiring approval through a multi-stage approval process.
5. **System Integration** - Automatically sends validated invoices to your accounting system.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for invoice data extraction.
2. **Set up Telegram connection** - Connect your Telegram account for approval notifications.
3. **Configure email trigger** - Set up IMAP connection for processing emailed invoices.
4. **Customize validation rules** - Adjust business rules, amount thresholds, and vendor lists.
5. **Set up accounting system integration** - Configure the HTTP request node with your accounting system's API endpoint.
6. **Test the workflow** - Upload a sample invoice to verify the extraction and approval process.

## Features

- **Multi-format support**: PDF, PNG, JPG, JPEG, TIFF, BMP
- **Intelligent validation**: Business rules, duplicate detection, amount thresholds
- **Approval automation**: Multi-stage approval workflow with role-based routing
- **Data quality scoring**: Confidence levels and completeness analysis
- **Audit trail**: Complete processing history and metadata tracking

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
