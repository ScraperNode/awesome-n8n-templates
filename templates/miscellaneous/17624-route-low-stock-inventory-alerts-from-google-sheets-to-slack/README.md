# 🔧 Route low-stock inventory alerts from Google Sheets to Slack

> ⚡ **22 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs every morning to read inventory levels from Google Sheets and post low-stock or out-of-stock alerts to a Slack channel, including supplier contact details, then updates the sheet to avoid repeating the same alert on the same day.

## How it works
1. Runs daily at the scheduled time.
2. Reads all inventory rows from a Google Sheets document.
3. Calculates each item’s stock status (healthy, low_stock, or out_of_stock) and checks whether it was already alerted today.
4. Skips healthy items and anything already alerted today.
5. Posts an urgent Slack message for out-of-stock items or a lower-urgency message for low-stock items, including supplier contact details.
6. Updates the Google Sheets row to set `last_alert_date` to today’s date so the item is not alerted again until the next day.

## Setup
1. Add Google Sheets OAuth2 credentials and set the Sheet ID and sheet name (default: `Inventory`) in the configuration values.
2. Add Slack credentials and set the target Slack channel ID in the configuration values.
3. Ensure your Google Sheet includes the required columns: `row_id`, `item_name`, `current_stock`, `reorder_threshold`, `unit`, `supplier_name`, `supplier_contact`, and `last_alert_date`.
4. Adjust the schedule trigger time to match when you want the daily inventory check to run.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
