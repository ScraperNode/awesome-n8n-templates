# 🧾 Invoices from Gmail to Drive and Google Sheets

> ⚡ **38,008 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Attachments Gmail to Drive and Google Sheets

## Description
Automatically process invoice emails by saving attachments to Google Drive and extracting key invoice data to Google Sheets using AI. This workflow monitors your Gmail for unread emails with attachments, saves PDFs to a specified Google Drive folder, and uses OpenAI's GPT-4o to extract invoice details (date, description, amount) into a structured spreadsheet.

## Use cases
- **Invoice Management**: Automatically organize and track invoices received via email
- **Financial Record Keeping**: Maintain a structured database of all invoice information
- **Document Organization**: Keep digital copies of invoices organized in Google Drive
- **Automated Data Entry**: Eliminate manual data entry for invoice processing

## Resources
- Gmail account
- Google Drive account
- Google Sheets account
- OpenAI API key

## Setup instructions

### Prerequisites
1. Active Gmail, Google Drive, and Google Sheets accounts
2. OpenAI API key (GPT-4o model access)
3. n8n instance with credentials manager

### Steps
1. **Gmail and Google Drive Setup**:
   - Connect your Gmail account in n8n credentials
   - Connect your Google Drive account with appropriate permissions
   - Create a destination folder in Google Drive for invoice storage

2. **Google Sheets Setup**:
   - Connect your Google Sheets account
   - Create a spreadsheet with columns: Invoice date, Invoice Description, Total price, and Fichero
   - Copy your spreadsheet ID for configuration

3. **OpenAI Setup**:
   - Add your OpenAI API key to n8n credentials

4. **Configure Email Filter**:
   - Update the email filter node to match your specific sender requirements

## Benefits
- **Time Saving**: Eliminates manual downloading, filing, and data entry
- **Accuracy**: AI-powered data extraction reduces human error
- **Organization**: Consistent file naming and storage structure
- **Searchability**: Creates a searchable database of all invoice information
- **Automation**: Runs every minute to process new emails as they arrive

## Related templates
- Email Parser to CRM
- Document Processing Workflow
- Financial Data Automation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Gmail Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
