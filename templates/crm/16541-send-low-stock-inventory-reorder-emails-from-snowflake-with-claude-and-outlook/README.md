# 🤝 Send low-stock inventory reorder emails from Snowflake with Claude and Outlook

> ⚡ **121 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily, queries Snowflake for items at or below their reorder level, and groups them by supplier. For each supplier, it uses Anthropic Claude to draft a reorder email, optionally appends details to a Google Docs log, and sends the email via Microsoft Outlook.

## How it works
1. A Schedule Trigger fires every day at 07:00 (Europe/Helsinki timezone) and passes through a Workflow Config node that holds your optional Google Docs log ID.
2. A Snowflake query fetches all inventory rows where current_stock <= reorder_level. If no items qualify, the workflow exits cleanly via a Pass Through node with no further action.
3. A Code node groups the low-stock items by supplier_name, producing one batch per vendor. A SplitInBatches loop then processes each supplier one at a time.
4. For each supplier, a Set node extracts the supplier email, item count, and a pre-rendered Markdown item list, then passes everything to an LLM chain powered by Claude (claude-sonnet-4-6).
5. Claude generates a concise, professional reorder request email body in Markdown, constrained by a system prompt to return only the email content with no preamble.
6. The Markdown output is converted to HTML and optionally appended as a one-line entry to a Google Docs audit log (skipped if no doc ID is configured). The workflow then sends the HTML email to the supplier via Microsoft Outlook before advancing to the next vendor.

## Setup
1. Open the Workflow Config node and set log_doc_id to the document ID from your Google Doc URL (the string between /d/ and /edit). Leave it empty to skip audit logging entirely.
2. Add your Snowflake credentials to the Query Snowflake DB node and verify the query matches your database name, schema, and table. The expected columns are item_id, item_name, current_stock, reorder_level, supplier_name, and supplier_email.
3. Add your Anthropic credentials to the Claude Email Generation node.
4. Add your Microsoft Outlook credentials to both the Send Reorder Email and Send Error Alert nodes. Update the toRecipients field in Send Error Alert to your alert address.
5. If logging is enabled, add your Google Docs credentials to the Log to Google Docs node.
6. In n8n Settings > Error Workflow, point to a dedicated error-handler sub-workflow that wires into the Send Error Alert node (it is intentionally unwired in this workflow).

## Requirements
- Snowflake account with an inventory table containing current_stock, reorder_level, supplier_name, and supplier_email columns
- Anthropic API credentials (claude-sonnet-4-6)
- Microsoft 365 account with Outlook access
- Google Docs OAuth2 credentials (only if audit logging is enabled)

## Customization
- Adjust the Snowflake query to match your schema, add filters by warehouse or category, or join additional tables for richer item metadata.
- Modify the Claude system prompt in Build Email Draft to change tone, language, or email structure — for example to generate Finnish-language emails or include purchase order references.
- Change the cron expression in When 7am Daily to run at a different time or frequency.
- Extend the log entry format in Log to Google Docs to include item names, SKUs, or a hyperlink back to the workflow execution.
- Replace the Google Docs logging step with a Slack notification, a row insert into PostgreSQL, or any other audit destination by swapping the node after Check Configured Doc ID.

## 🔗 Nodes Used

Snowflake, Microsoft Outlook, Google Docs, Markdown, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
