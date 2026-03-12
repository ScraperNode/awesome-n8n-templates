# 🔧 Monitor construction stock & send low inventory alerts with Google Sheets

> ⚡ **585 views** · 🔧 [Miscellaneous](../)

## Description

## Description
- Automates stock maintenance for real estate (e.g., construction materials, office supplies).
- Monitors stock levels, processes additions/deductions, and sends low-stock alerts via email.
- Uses Google Sheets for data storage and n8n for workflow automation.

## Essential Information
- Daily workflow to check and update stock levels.
- Stores data in a Google Sheet for easy access and analysis.
- Sends email notifications for low-stock items based on predefined thresholds.
- Supports dynamic stock updates via API or form input (configurable).

## System Architecture
- **Stock Monitoring Pipeline**:
  - **Daily Stock Check**: Triggers daily to initiate stock monitoring.
  - **Fetch Stock Data**: Retrieves current stock levels from Google Sheet.
  - **Update Stock Levels**: Processes stock additions or deductions.
- **Alert Generation Flow**:
  - **Check Low Stock**: Identifies items below threshold.
  - **Send Email Alert**: Notifies stakeholders of low-stock items.
- **Data Management**:
  - **Update Google Sheet**: Saves updated stock levels and timestamps.

## Implementation Guide
- Import the workflow JSON into n8n.
- Configure Google Sheets credentials and specify sheet ID.
- Set up SMTP credentials for email alerts.
- Test stock update and low-stock alert processes.
- Monitor email delivery and adjust thresholds as needed.

## Technical Dependencies
- Google Sheets API for stock data storage and retrieval.
- SMTP service for sending low-stock email alerts.
- n8n for workflow automation and orchestration.
- Optional: Web form or API for dynamic stock updates.

## Database & Sheet Structure
- **Stock Inventory Sheet** (StockInventory):
  - Columns: `item`, `quantity`, `threshold`, `last_updated`, `unit`
  - Example: `Cement`, `100`, `20`, `2025-07-29T08:00:00Z`, `Bags`

## Customization Possibilities
- Modify `Update Stock Levels` node to integrate with a form or API for real-time updates.
- Adjust `Check Low Stock` node to set custom thresholds per item.
- Customize email alert format in `Send Email Alert` node.
- Add error-handling nodes for invalid stock updates.
- Integrate with a dashboard tool for visual stock monitoring.

## 🔗 Nodes Used

Cron, Send Email, Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
