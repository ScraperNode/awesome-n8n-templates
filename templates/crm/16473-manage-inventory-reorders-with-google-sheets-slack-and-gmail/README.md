# 🤝 Manage inventory reorders with Google Sheets, Slack, and Gmail

> ⚡ **16 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://www.youtube.com/watch?v=y0uCepHhwSA

This workflow monitors inventory from Google Sheets on a schedule, calculates reorder quantities using vendor lead times, logs pending reorders back to Google Sheets, and posts grouped reorder requests to Slack, then sends vendor reorder emails via Gmail when an authorized Slack user approves.

## How it works
1. Runs on a schedule and reads product inventory and vendor catalog data from Google Sheets.
2. Calculates stock runway and a reorder quantity per product using recent sales and vendor average delivery time.
3. Filters to only items that need reordering and aggregates reorder lines into a vendor-level request.
4. Checks the existing reorder log in Google Sheets to avoid reordering items that are pending/sent or were completed within the last 14 days, then groups remaining items by vendor.
5. Writes each vendor reorder request to a Google Sheets reorder log with status set to pending and posts a formatted restock notification to a Slack channel.
6. Triggers on a Slack reaction event, verifies the reacting user matches the configured approver, extracts the Reorder ID from the Slack thread, and looks up the matching row in Google Sheets.
7. Sends the reorder email to the vendor via Gmail and updates the reorder status in Google Sheets to SENT.

## Setup
1. Configure a Google Sheets Service Account credential and set the document IDs and sheet names for the inventory sheet, vendor catalog sheet, and reorder log sheet.
2. Configure a Slack credential, set the Slack channel ID for posting reorder alerts, and enable the Slack trigger on the channel where approvals happen.
3. Replace enter-your-authoritive-person-slack-id-here with the Slack user ID allowed to approve reorder emails.
4. Configure a Gmail OAuth2 credential and update the email template fields (for example, company name) as needed.
5. Ensure your reorder log Google Sheet includes the columns used by the workflow (for example, product_reorder_id, Vendor ID, Email Address, products_with_quantity, status, and reorder_date).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
