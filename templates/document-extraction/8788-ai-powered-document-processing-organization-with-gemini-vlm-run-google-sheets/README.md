# 🔬 AI-powered document processing & organization with Gemini, VLM Run & Google Sheets

> ⚡ **380 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**Automate multi-document handling with AI-powered extraction that adapts to any format and organizes it instantly.**

## What this workflow does

1. **Monitors Google Drive** for new uploads (receipts, resumes, claims, physician orders, blueprints, or any doc type)
2. **Automatically downloads and prepares** files for analysis
3. **Identifies the document type** using Google Gemini
4. **Parses structured data** via the trusted [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) with OCR + layout parsing
5. **Stores records in Google Sheets** — AI Agent maps values to the correct sheet dynamically

## Setup

**Prerequisites:** Google Drive & Google Sheets accounts, VLM Run API credentials, n8n instance.

Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can integrate it directly for high-accuracy data extraction.

**Quick Setup:**

1. Configure Google Drive OAuth2 and select a folder for uploads

2. Add [VLM Run API credentials](https://app.vlm.run/dashboard)

3. Create a **Master Reference Google Sheet** with the following structure:

   | Document_Name          | Spreadsheet_ID                |
   | ---------------------- | ----------------------------- |
   | Receipt                | your-receipt-sheet-id         |
   | Resume                 | your-resume-sheet-id          |
   | Physician Order        | your-physician-order-sheet-id |
   | Claims Processing      | your-claims-sheet-id          |
   | Construction Blueprint | your-blueprint-sheet-id       |

   The **first column** holds the document type, and the **second column** holds the target sheet ID where extracted data should be appended.

4. In the **AI Agent node**, edit the **agent prompt** to:

   * Analyze the JSON payload from VLM Run
   * Look up the document type in the Master Reference Sheet
   * If a matching sheet exists → fetch headers, then append data accordingly
   * If headers don’t exist → create them from JSON keys, then insert values
   * If no sheet exists → add the new type to the Master Reference with an empty Spreadsheet ID

5. Test with a sample upload and activate the workflow

## How to customize this workflow to your needs

**Extend functionality by:**

* Adjusting the AI Agent prompt to support any new document schema (just update field mappings)
* Adding support for multi-language OCR or complex layouts in VLM Run
* Linking Sheets data to BI dashboards or reporting tools
* Triggering notifications when new entries are stored

This workflow leverages the **VLM Run node for flexible, precision extraction** and the **AI Agent for intelligent mapping**, creating a powerful system that adapts to any document type with minimal setup changes.

## 🔗 Nodes Used

Webhook, Google Drive, Google Drive Trigger, AI Agent, OpenAI Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
