# 🧾 Invoice management system with Gmail reminders, Google Sheets, and Slack escalations

> ⚡ **101 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for?

This template is designed for freelancers, small businesses, and finance teams who need automated invoice management with intelligent payment follow-ups. Perfect for service providers, agencies, or any business that needs to track receivables and reduce late payments.

## What this workflow does

This workflow provides complete invoice lifecycle management with two main flows:

**Invoice Generation Flow:**
- Receives order data via webhook with line items
- Splits line items using Split Out node for individual processing
- Calculates subtotals, tax, and totals
- Aggregates results and saves to Google Sheets
- Sends professional invoice email with payment link

**Payment Reminder Flow:**
- Runs daily via Schedule Trigger to check for overdue invoices
- Loops through unpaid invoices using Split In Batches
- Routes to appropriate reminder level using Switch node (5 levels)
- Sends escalating reminders: friendly → second notice → urgent → final → collections
- Notifies internal team via Slack for collections handoff

## Setup

1. Create a Google Sheet with columns: Invoice ID, Client, Email, Subtotal, Tax, Total, Due Date, Status, Created, Last Reminder
2. Connect Google Sheets and Gmail credentials
3. Configure Slack for collections escalation notifications
4. Set up the webhook URL in your order management system

## Requirements

- Google Sheets (invoice database)
- Gmail account (invoice and reminder emails)
- Slack workspace (collections notifications)

## How to customize

- Adjust overdue day thresholds in the Code node
- Add SMS reminders via Twilio for urgent notices
- Modify email templates for your brand
- Connect to accounting software for automatic reconciliation

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
