# 🧾 Invoice creator with Google Sheets & automated email payment reminder system

> ⚡ **967 views** · 🧾 [Invoice Processing](../)

## Description

This automated n8n workflow streamlines invoice creation and payment reminders. It generates invoices on a monthly schedule and sends reminders for overdue payments, updating records in Google Sheets.

## Good to Know
- Supports monthly invoice generation and daily overdue checks
- Integrates with Google Sheets for data management
- Uses email notifications for invoice delivery and reminders
- Includes logging for tracking and auditing
- Features multiple reminder types based on overdue duration

## How It Works
### Invoice Creation Flow:
- **Monthly Invoice Trigger** - Initiates workflow on a set monthly schedule
- **Get Clients for Invoicing** - Reads client data from Google Sheet
- **Filter Active Clients** - Filters out inactive clients
- **Generate Invoice Data** - Creates invoice details in required format
- **Save Invoice to Google Sheets** - Appends or updates invoice record in the sheet
- **Send Invoice Email** - Sends the invoice to the client via email
- **Log Invoice Creation** - Logs invoice creation for records/auditing

### Reminder Flow:
- **Daily Payment Reminder Check** - Triggers workflow daily to check overdue invoices
- **Get Overdue Invoices** - Reads overdue invoices from Google Sheet
- **Filter Overdue Invoices** - Filters invoices still unpaid
- **Calculate Reminder Type** - Calculates how many days overdue
- **Switch Reminder Type** - Decides which type of reminder to send
- **Send Gentle / Follow-up / Urgent / Final Notice** - Sends respective reminder email
- **Update Reminder Log** - Updates reminder status in the sheet

## How to Use
- Import workflow into n8n
- Configure Google Sheets API for data access
- Set up email service for notifications
- Define monthly schedule for invoice trigger
- Test with sample client data and monitor reminders
- Adjust reminder thresholds as needed

## Requirements
- Access to Google Sheets API
- Email service configuration
- Scheduled trigger setup in n8n

## Sheet Columns:
- **Client Name**
- **Invoice ID**
- **Amount**
- **Due Date**
- **Status**
- **Reminder Type**
- **Last Updated**

## Customizing This Workflow
- Modify invoice generation schedule
- Adjust reminder email templates
- Configure custom Google Sheet columns
- Set custom overdue thresholds
- Integrate additional notification methods

## 🔗 Nodes Used

Cron, Send Email, Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
