# 🔬 Automated expense tracking with Telegram, easybits & Google Sheets

> ⚡ **139 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
I wanted to avoid the rush at end of month to log expenses. I tried existing expense apps but found them either too expensive for what they offer, or frustrating with inconsistent extraction results. That is why I built my own Telegram expense bot that:

- Lets users send receipt photos or PDFs via Telegram
- Automatically extracts vendor, amount, date, and category using AI
- Applies expense rules like partial reimbursement rates (for example, 80% for phone bills)
- Organizes expenses into monthly Google Sheets tabs
- Asks for clarification when the category is unclear
- Supports flexible descriptions via Telegram caption
- Sends a confirmation message with expense details

The whole extraction process takes about 10 seconds and is fully GDPR compliant. No coding. No manual typing. Just snap and send.

## Step-by-step guide
### Initial Setup

1. Import the JSON workflow
2. Sign up and log in to easybits at [https://extractor.easybits.tech](https://extractor.easybits.tech)
3. Create a pipeline by uploading an example receipt and mapping the fields you want to extract:<br>
-- vendor_name
-- total_amount
-- currency
-- transaction_date
-- category
-- extraction_confidence<br>
For more details, visit our [Quick Start Guide](https://extractor.easybits.tech/documentation/quick-start)

### Get Your easybits Credentials
1. Once you have finalized your pipeline, go back to your dashboard and click Pipelines in the left sidebar
2. Click View Pipeline on the pipeline you want to connect
3. On the Pipeline Details page, you will find:<br>
-- **API URL:** https://extractor.easybits.tech/api/pipelines/[YOUR_PIPELINE_ID]
-- **API Key:** Your unique authentication token
<br>
4. Copy both values and integrate them into the "Extract with easybits" HTTP Request node

**To keep in mind:** Each pipeline has its own API Key and Pipeline ID. If you have multiple pipelines (for example, one for receipts and one for invoices), you will need separate credentials for each.

**Important:** To integrate your API Key, make sure to set it up in the following format: 
 &gt; Bearer [YOUR_API_KEY]

### Set Up Telegram Bot
1. Open Telegram and search for @BotFather
2. Send /newbot and follow the prompts
3. Copy your Bot Token and add it to the Telegram credentials in n8n

### Connect Google Sheets
1. Create a new spreadsheet for expenses
2. Copy the Spreadsheet ID from the URL
3. Update the Google Sheets nodes with your Spreadsheet ID

### Go Live
Activate the workflow and send your first receipt photo to your Telegram bot

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
