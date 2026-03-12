# 🧾 Automate bank statement and invoice reconciliation with GPT and Google Sheets

> ⚡ **495 views** · 🧾 [Invoice Processing](../)

## Description

🟢 Manual Trigger

Workflow starts manually to initiate the reconciliation process on demand.

📄 Fetch Invoices & Bank Statements

Retrieves invoice data and bank statement data from Google Sheets for comparison.

🔀 Merge Data

Combines both datasets into a single structured dataset for processing.

🧩 Format Payload for AI

Function node prepares and structures the merged data into a clean JSON payload for AI analysis.

🤖 AI Reconciliation

AI Agent analyzes the invoice and bank statement data to identify matches, discrepancies, and reconciled entries.

🧮 Parse AI Output

Parses the AI response into a structured format suitable for adding back to Google Sheets.

📊 Update Sheets

Adds the reconciled data and reconciliation results into the target Google Sheet for recordkeeping.


🧾 Prerequisites

✅ OpenAI API Credentials
Required for the AI Reconciliation node to process and match transactions.

Add your OpenAI API key in n8n → Credentials → OpenAI.

✅ Google Sheets Credentials
Needed to read invoice and bank statement data and to write reconciled results.
Add credentials in n8n → Credentials → Google Sheets.

✅ Google Sheets Setup
The connected spreadsheet must contain the following tabs:
Invoices – for invoice data
Bank_Statement – for bank transaction data
Reconciled_Data – for storing the AI-processed reconciliation output

✅ Tab Structure & Required Headers

Invoices Sheet Columns:
Invoice_ID
Invoice_Date
Customer_Name
Amount
Status

Bank_Statement Sheet Columns:
Transaction_ID
Transaction_Date
Description
Debit/Credit
Amount

Reconciled_Data Sheet Columns:
Invoice_ID
Transaction_ID
Matched_Status
Remarks
Confidence_Score

⚙️ n8n Environment Setup

Ensure all nodes are connected correctly and the workflow has permission to access the required sheets.

Test each fetch and write operation before running the full workflow.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
