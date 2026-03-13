# 🧾 Extract and structure invoice data with DocSumo and export to Excel

> ⚡ **716 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Description

This workflow automates the extraction of structured data from invoices or similar documents using **Docsumo's API**. Users can upload a PDF via an n8n form trigger, which is then sent to Docsumo for processing and structured parsing. The workflow fetches key document metadata and all line items, reconstructs each invoice row with combined header and item details, and finally exports all results as an Excel file. Ideal for automating invoice data entry, reporting, or integrating with accounting systems.

## How It Works

- A user uploads a PDF document using the integrated n8n form trigger.
- The workflow securely sends the document to Docsumo via REST API.
- After uploading, it checks and retrieves the parsed document results.
- Header information and table line items are extracted and mapped into structured records.
- The complete result is exported as an Excel (.xls) file.

## Setup Steps

1. **Docsumo Account:**  
   - Register and obtain your API key from Docsumo.
2. **n8n Credentials Manager:**  
   - Add your Docsumo API key as an HTTP header credential (never hardcode the key in the workflow).
3. **Workflow Configuration:**
   - In the HTTP Request nodes, set the authentication to your saved Docsumo credentials.
   - Update the file type or document type in the request (e.g., `"type": "invoice"`) as needed for your use case.
4. **Testing:**  
   - Enable the workflow and use the built-in form to upload a sample invoice for extraction.

## Features

- Supports PDF uploads via n8n’s built-in form or via API/webhook extension.
- Sends files directly to Docsumo for document data extraction using secure credentials.
- Extracts invoice-level metadata (number, date, vendor, totals) and full line item tables.
- Consolidates all data in easy-to-use Excel format for download or integration.
- Modular node structure, easily extensible for further automation.

## Prerequisites

- Docsumo account with API access enabled.
- n8n instance with form, HTTP Request, Code, and Excel/Convert to File nodes.
- Working Docsumo API Key stored securely in n8n’s credential manager.

## Example Use Cases

| Scenario            | Benefit                                 |
|---------------------|-----------------------------------------|
| Invoice Automation  | Extract line items and metadata rapidly |
| Receipts Processing | Parse and digitize business receipts    |
| Bulk Bill Imports   | Batch process bills for analytics       |

## Notes

- **Credentials Security:** Do not store your API key directly in HTTP Request nodes; always use n8n credentials manager.
- **Sticky Notes:** The workflow includes sticky notes for setup, input, API call, extraction, and output steps to assist template users.
- **Custom Columns:** You can customize header or line item extraction by editing the Code node as needed.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
