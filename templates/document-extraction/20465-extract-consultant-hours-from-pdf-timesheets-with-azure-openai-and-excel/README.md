# 🔬 Extract consultant hours from PDF timesheets with Azure OpenAI and Excel

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow lets you upload one or more PDF timesheets in n8n chat, extracts the text, uses an Azure OpenAI model to total onsite/remote/unknown hours per consultant, appends the results to a Microsoft Excel workbook and an n8n Data Table, then sends a confirmation email via Microsoft Outlook.

## How it works
1. Receives an n8n chat message with one or more PDF file uploads.
2. Splits the uploaded files so each PDF is processed as its own item.
3. Extracts plain text from each PDF.
4. Sends the extracted text to an Azure OpenAI-powered agent to classify entries and return total onsite, remote, and unknown hours plus the consultant name as JSON.
5. Parses the agent response into structured JSON and stops with an error if the output is not valid JSON.
6. Appends one row per timesheet to a Microsoft Excel worksheet and also inserts the same values into an n8n Data Table.
7. Sends a Microsoft Outlook email after all rows are saved to confirm processing is finished.

## Setup
1. Configure credentials for Azure OpenAI (chat model), Microsoft Excel, and Microsoft Outlook.
2. In Microsoft 365 Excel, select the target workbook and worksheet and ensure it has columns named `name`, `onsite`, `remote`, and `unknown`.
3. Create or select an n8n Data Table with matching columns (`name`, `onsite`, `remote`, `unknown`) and set it in the Data Table node.
4. Update the Outlook recipient address (and optionally subject/body) in the email step.
5. Use the n8n chat to upload a test PDF with a text layer (scanned PDFs require OCR first) and verify rows are written to Excel and the Data Table.

## 🔗 Nodes Used

Microsoft Excel 365, Microsoft Outlook, AI Agent, Extract from File, Chat Trigger, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
