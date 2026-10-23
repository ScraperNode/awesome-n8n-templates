# ⚒️ Send low-stock purchase orders with Google Sheets, Slack, and OpenAI

> ⚡ **7 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow checks product stock levels from a Google Sheets inventory, calculates urgency and reorder needs, uses OpenAI to draft a purchase order message, posts reorder notifications to Slack, and updates both the inventory sheet and a reorder log.

## How it works
1. Starts manually (or via the optional disabled 4-hour schedule) and reads all products from a Google Sheets Inventory worksheet.
2. Processes each product row one at a time and calculates stock percentage, urgency level, reorder quantity, and estimated cost.
3. Updates the product’s “Last Checked” date in Google Sheets.
4. If the product is at or below its reorder threshold and hasn’t already been reordered today, it sends the product and supplier details to OpenAI to generate a concise Slack purchase order message.
5. Posts the generated purchase order message to a designated Slack reorder channel.
6. Updates the inventory row with the reorder date, increments the reorder count, appends a record to a Google Sheets Reorder_Log worksheet, and finally posts a completion summary to a Slack summary channel.

## Setup
1. Add Google Sheets credentials and point the Inventory and Reorder_Log nodes to your spreadsheet and the correct sheet tabs.
2. Ensure your Inventory sheet includes the expected columns (for example Product_ID, Current_Stock, Max_Stock, Reorder_Threshold_Pct, Supplier details, and reorder tracking fields like Last_Reorder_Date and Reorder_Count).
3. Add an OpenAI API key (Chat OpenAI) and select the model to use for drafting the Slack purchase order text.
4. Add Slack OAuth2 credentials and set the target channels for the reorder notifications and summary report.
5. Optionally enable the 4-hour schedule trigger and the disabled error-to-Slack alert path if you want automated runs and failure notifications.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
