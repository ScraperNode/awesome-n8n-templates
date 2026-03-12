# 🧾 Extract structured invoice data from JotForm PDFs with GPT-4.1-mini & Sheets

> ⚡ **182 views** · 🧾 [Invoice Processing](../)

## Description

## Who this is for

This workflow is designed for Finance teams, accounting professionals, and automation engineers.

## **Use Case:**
  Automates processing of invoice submissions received via JotForm.

* **Core Function:**
  Extracts structured data such as:

  * Invoice number
  * Client information
  * Totals and tax amounts
  * Line items or services

* **Key Benefit:**
  Eliminates manual data entry, saving time and reducing human error.

* **Automation Goal:**
  Streamline document handling with AI-powered PDF parsing and structured output generation.

Ideal users include:

* Accounting or finance teams handling form-based invoice uploads
* Automation specialists using n8n for document processing
* Developers integrating invoice data into Google Sheets or CRMs

## What problem this workflow solves

Manually extracting structured data from invoice PDFs submitted through JotForm is time-consuming, error-prone, and repetitive.

This workflow solves that by:

- Automatically receiving the PDF through JotForm’s webhook
- Extracting structured fields (invoice number, company, client, line items, totals, etc.) using GPT-4-mini
- Saving the extracted data directly to Google Sheets
- Writing structured JSON data to disk for archival or further processing

## What this workflow does

1. **Webhook Trigger (JotForm → n8n)**
   JotForm submission sends invoice data and attachment link to n8n.

2. **Parse Submission & Extract Metadata**
   Extracts submission metadata (form ID, user details, invoice number, file link, etc.) using the *Information Extractor* node.

3. **Download PDF Attachment**
   Fetches the uploaded PDF from JotForm’s secure file URL via the **HTTP Request** node, authenticated using a JotForm API key.

4. **Store & Process File**
   Saves the invoice to disk and prepares it for AI processing.

5. **Extract Invoice Text Content**
   Uses the **Extract from File** node to parse text from the PDF document.

6. **AI-Powered Structured Extraction (OpenAI GPT-4.1-mini)**
   Sends the extracted text to a LangChain LLM Chain with a Structured Output Parser, ensuring consistent JSON output aligned with a defined schema.

7. **Save Extracted Data**

   * Writes structured JSON to disk
   * Appends parsed results to Google Sheets for easy reporting

## Setup Instructions

### Prerequisites

* A **JotForm account** with a form containing an invoice PDF upload field

You may build the invoice Jotform by leveraging the [Jotform Templates](https://www.jotform.com/form-templates/search/Invoice)

![Invoice Upload Form](fileId:3025)


* A **Google Sheets account** with a connected spreadsheet
* **OpenAI**
* n8n running locally or on a server with public webhook access (e.g. via `loca.lt`, `ngrok`, or n8n.cloud)
* Make sure to get the Jotform API Key via the [Jotform Account API Key](https://www.jotform.com/myaccount/api)

### Steps

1. **Import the provided JSON into n8n**

   * Go to **n8n → Workflows → Import from File/Clipboard**
   * Paste the provided JSON definition

2. **Configure Webhook**

   * Copy the webhook URL from the *Webhook* node
   * Paste it into your JotForm’s **Settings → Integrations → Webhook** URL

3. **Set API Keys & Credentials**

   * Ensure the Jotform API key has been setup to download the Jotform PDF document
   * Ensure your Google Sheets and OpenAI credentials are connected

4. **Test Submission**

   * Submit your JotForm with an invoice PDF
   * n8n workflow will trigger automatically

5. **Check Outputs**

   * Open your Google Sheet to see structured invoice entries
   * Check the disk folder (e.g., `C:\Invoices`) for JSON exports

## How to customize this workflow

* **Change AI Model**
  Use the OpenAI Chat Model for Structured Data node.
  → Replace `gpt-4.1-mini` with `gemini-1.5-pro` or any other LLM node of your choice.

* **Adjust Output Schema**
  Modify the **Structured Output Parser** node.
  → Edit the JSON schema to match your desired output fields and format.

* **Save to a Different Location**
  In the **Write the Structured Invoice to Disk** node,
  → Update the file path pattern (e.g. `/data/invoices/{{invoiceId}}.json`).

* **Log to a Database Instead of Google Sheets**
  Replace the Append or Update Row in Sheet node
  → with a MySQL or PostgreSQL node for database logging.

* **Add Notifications**
  Extend the workflow by adding Slack or Email nodes
  → to send alerts when a new invoice extraction is completed.

## Summary

The Structured Invoice Data Extraction from JotForm PDFs via Google Gemini, Converts JotForm-uploaded invoice PDFs into structured financial data automatically.

**Key Features:**

* No manual parsing fully automated
* Works with any invoice layout via AI
* Saves structured results to Google Sheets + JSON file
* Extensible for CRMs, QuickBooks, or ERP sync

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
