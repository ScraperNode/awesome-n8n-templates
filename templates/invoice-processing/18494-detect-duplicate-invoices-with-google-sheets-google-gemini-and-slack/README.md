# 🧾 Detect duplicate invoices with Google Sheets, Google Gemini and Slack

> ⚡ **33 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow detects potential duplicate invoices when new rows are added in Google Sheets, scores matches against historical invoices, uses Google Gemini to classify risk, and then alerts Slack, calls an ERP hold API, and logs outcomes back to Google Sheets.

## How it works
1. Triggers when a new invoice row is added to the “New_Invoices” sheet in Google Sheets.
2. Reads the “Invoice_History” sheet and aggregates both the new invoices and historical invoices into two lists for comparison.
3. Compares each new invoice against history using exact and fuzzy matching on invoice number, supplier name, amount, and invoice date to produce a duplicate flag, risk score, and best match details.
4. Sends the detection results to Google Gemini to classify the invoice as Exact Duplicate, Near Duplicate, or Legitimate Invoice and to provide confidence, reasoning, and a recommended action.
5. If Google Gemini classifies the invoice as an Exact Duplicate or Near Duplicate, posts a detailed alert to a Slack channel and sends a POST request to an ERP payment-hold endpoint.
6. If Google Gemini classifies the invoice as legitimate, appends an approval record to the “Safe Invoices” sheet, and in all cases logs the investigation outcome to the “Fraud Cases” sheet in Google Sheets.

## Setup
1. Connect Google Sheets OAuth credentials for the trigger and read/write access, and confirm the spreadsheet and sheet tabs “New_Invoices”, “Invoice_History”, “Safe Invoices”, and “Fraud Cases” exist.
2. Add a Google Gemini (PaLM) API credential to the Google Gemini Chat Model node.
3. Add Slack OAuth2 credentials and select the target channel (for example, #ap-fraud-alerts) for duplicate alerts.
4. Set the ERP payment hold API URL in the HTTP request node and ensure the endpoint accepts the provided JSON body fields (invoice_id, supplier_name, amount, risk_score, reason).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Sheets Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
