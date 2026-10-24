# 🤝 Log missed EDI sales from Gmail CSVs into GoHighLevel with Slack error alerts

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow monitors Gmail for incoming EDI sales report emails, extracts a CSV attachment, and logs new “missed sales” line items into GoHighLevel (LeadConnector) custom objects while linking them to matching opportunities when possible, with Slack alerts on workflow errors.

## How it works
1. Triggers on new Gmail messages matching your configured filters and downloads the email attachments.
2. Extracts rows from the attached CSV file and processes them in batches.
3. For each row, normalizes key fields (like PO number and SAP material code) and builds a unique key for deduplication.
4. Searches GoHighLevel (LeadConnector) for an existing missed sales custom object record matching the unique key and skips rows that already exist.
5. Creates a new GoHighLevel missed sales custom object record for any new row, including quantity, pricing, value, and rejection reason details.
6. Searches GoHighLevel opportunities by PO number and, if found, creates an association linking the new missed sales record to the opportunity.
7. When any workflow error occurs, posts an alert message to a specified Slack channel.

## Setup
1. Connect your Gmail OAuth2 credentials and configure the Gmail Trigger filters so only the EDI report emails with CSV attachments are picked up.
2. Add a GoHighLevel (LeadConnector) Private Integration Token and replace `YOUR_GHL_API_TOKEN` plus `YOUR_GHL_LOCATION_ID` in all HTTP requests.
3. Ensure a GoHighLevel custom object exists at `custom_objects.missed_sales` with fields matching the properties sent (for example `po_number`, `sap_code`, `quantity`, and `item_net_value`).
4. Set `YOUR_GHL_ASSOCIATION_ID` to the association that links missed sales custom object records to opportunities in your GoHighLevel account.
5. Connect Slack OAuth2 credentials and replace `YOUR_SLACK_CHANNEL_ID` with the channel that should receive workflow error alerts.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Gmail Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
