# 🧾 Automatic email invoice archiving & data extraction with Gmail, Drive & AI

> ⚡ **989 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically collect invoice PDFs from Gmail, archive them in Google Drive or an optional FTP/SFTP server, extract structured invoice data with AI, and record the results in Google Sheets.

## How it works
1. Scheduled inbox check — A Schedule Trigger periodically checks Gmail for invoice messages matching the configured sender and attachment filters.
2. Invoice download — Gmail nodes retrieve the matching message and download its PDF attachment.
3. Document archiving — The PDF is uploaded to Google Drive and can optionally be copied to an FTP/SFTP server.
4. Text extraction — n8n extracts text from text-based PDFs for AI processing without requiring OCR.
5. AI extraction — An OpenRouter-backed AI Agent extracts structured fields such as vendor, invoice number, date, amount, tax information, line items, and purchase-order data.
6. Output normalization — A Code node cleans and parses the model response into usable JSON.
7. Google Sheets logging — Extracted invoice fields are appended to the configured spreadsheet.
8. Optional cleanup — The processed Gmail message and temporary Google Drive file can be removed when no longer required.

## Setup
1. Import the workflow — Import workflow.json into n8n.
2. Connect Gmail — Configure Gmail OAuth2 and update sender/message filters for the providers you want to process.
3. Connect Google Drive — Configure Drive OAuth2 and select the destination folder for invoice PDFs.
4. Configure OpenRouter — Add OpenRouter credentials and select the model used by the extraction agent.
5. Connect Google Sheets — Select the spreadsheet, configure credentials, and map extracted fields to its columns.
6. Review optional storage and cleanup — Configure FTP/SFTP if required and enable deletion steps only when intentionally removing source or temporary files.
7. Test and activate — Process a sample invoice, verify the PDF and extracted fields, then activate the workflow.

## Requirements
- n8n instance
- Gmail account with OAuth2 credentials
- Google Drive account with OAuth2 credentials
- Google Sheets document and credentials
- OpenRouter account/API credentials
- Text-based PDF invoices for direct text extraction
- FTP/SFTP server and credentials (optional)
- Multiple sender filters for different invoice providers (optional)
- Additional Google Sheets reporting or dashboard logic (optional)

## Customization
- Invoice sources — Add or change Gmail filters for multiple utilities, ISPs, vendors, or providers.
- Storage destination — Keep Google Drive, add FTP/SFTP, or adapt the flow to another supported storage service.
- AI model — Change the OpenRouter model according to quality, latency, and cost requirements.
- Extracted fields — Modify the AI prompt, JSON parsing, and Sheets mappings for your required invoice data.
- Retention behavior — Keep or remove Gmail messages and temporary Drive files according to your archival requirements.
- Schedule — Change how frequently the inbox is checked.

## Additional info
Invoice documents may contain personal and financial information. Protect credentials, storage locations, spreadsheets, and FTP/SFTP access appropriately.
AI extraction accuracy depends on document structure and the selected model. Validate extracted data before using it for accounting or fiscal processes.
This workflow is an automation aid, not a replacement for legally compliant fiscal or document-retention systems.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, FTP, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
