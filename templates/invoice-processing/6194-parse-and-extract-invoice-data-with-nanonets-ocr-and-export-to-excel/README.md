# 🧾 Parse and extract invoice data with Nanonets OCR and export to Excel

> ⚡ **1,242 views** · 🧾 [Invoice Processing](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Description

This workflow automates document processing and structured table extraction using the Nanonets API. You can submit a PDF file via an n8n form trigger or webhook—the workflow then forwards the document to Nanonets, waits for asynchronous parsing to finish, retrieves the results (including header fields and line items/tables), and returns the output as an Excel file. Ideal for automating invoice, receipt, or order data extraction with downstream business use.

## How It Works

- A document is uploaded (via n8n form or webhook).
- The PDF is sent to the Nanonets Workflow API for parsing.
- The workflow waits until processing is complete.
- Parsed results are fetched. Both top-level fields and any table rows/line items are extracted and restructured.
- Data is exported to Excel format and delivered to the requester.

## Setup Steps

1. **Nanonets Account**: Register for a Nanonets account and set up a workflow for your specific document type (e.g., invoice, receipt).
2. **Credentials in n8n**: Add HTTP Basic Auth credentials in n8n for the Nanonets API (never store credentials directly in node parameters).
3. **Webhook/Form Configuration**:
    - Option 1: Configure and enable the included n8n Form Trigger node for document uploads.
    - Option 2: Use the included Webhook node to accept external POSTs with a PDF file.
4. **Adjust Workflow**:
    - Update any HTTP nodes to use your credential profile.
    - Insert your Nanonets Workflow ID in all relevant nodes.
5. **Test the Workflow**: Enable the workflow and try with a sample document.

## Features

- Accepts documents via n8n Form Trigger or direct webhook POST.
- Securely sends files to Nanonets for document parsing (credentials stored in n8n credentials manager).
- Automatically waits for async processing, checking Nanonets until results are ready.
- Extracts both header data and all table/line items into a tabular format.
- Exports results as an Excel file download.
- Modular nodes allow easy customization or extension.

## Prerequisites

- **Nanonets account** with workflow configured for your document type.
- **n8n** instance with HTTP Request, Webhook/Form, Code, and Excel/Spreadsheet nodes enabled.
- **Valid HTTP Basic Auth credentials** saved in n8n for API access.

## Example Use Cases

| Scenario              | Benefit                                           |
|-----------------------|--------------------------------------------------|
| Invoice Processing    | Automated extraction of line items and totals    |
| Receipt Digitization  | Parse amounts and charges for expense reports    |
| Purchase Orders       | Convert scanned POs into structured Excel sheets |

## Notes

- You must set up credentials in the n8n credentials manager—do not store API keys directly in nodes.
- All configuration and endpoints are clearly explained with inline sticky notes in the workflow editor.
- Easily adaptable for other document types or similar APIs—just modify endpoints and result mapping.

## 🔗 Nodes Used

HTTP Request, Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
