# 🧾 Generate and track invoices with HubSpot, Gmail, Slack, Sheets, and Notion

> ⚡ **91 views** · 🧾 [Invoice Processing](../)

## Description

## How it works  
This workflow triggers when a HubSpot deal stage changes to Closed Won and automatically generates an invoice. It collects deal and contact data, builds a styled invoice, converts it into a PDF, and sends it to the client. The system logs all invoices and alerts the team, then monitors payment status with automated reminders. If payment is delayed, it escalates the issue and handles errors separately.

## Step-by-step  

- **Trigger and data collection**  
  - **HubSpot - Deal Trigger** – Starts workflow on deal stage change.  
  - **IF - Is Deal Closed Won?** – Filters only Closed Won deals.  
  - **HTTP - Get Deal Details** – Fetches deal information.  
  - **HTTP - Get Deal Associations** – Retrieves linked contacts.  
  - **Code - Extract Contact ID** – Extracts and formats data.  
  - **HTTP - Get Contact Details** – Gets customer details.  

- **Invoice generation**  
  - **Code - Build Invoice + HTML** – Creates invoice data and HTML layout.  

- **Send and store invoice**  
  - **HTTP - Generate PDF** – Converts HTML into PDF.  
  - **Google Sheets - Log Invoice** – Stores invoice records.  
  - **Notion - Create Invoice Record** – Tracks invoice internally.  
  - **Gmail - Send Invoice Email** – Sends invoice to client.  
  - **Slack - Invoice Sent Alert** – Notifies team.  

- **Payment tracking and follow-up**  
  - **Wait - 7 Day Payment Window** – Waits before checking payment.  
  - **HTTP - Recheck Deal Stage** – Checks payment status.  
  - **IF - Payment Received?** – Branches based on payment.  
  - **Gmail - Follow-up Email #1** – Sends reminder if unpaid.  
  - **Wait - 5 More Days** – Adds extra delay.  
  - **HTTP - Final Payment Check** – Verifies final status. 
  -   **Slack - Payment Confirmed** – Confirms successful payment.   

- **Escalation handling**  
  - **IF - Still Unpaid? (Escalate)** – Detects overdue invoices.  
  - **Slack - Escalation Alert** – Alerts team for action.  
  - **Notion - Flag as Overdue** – Updates record status.  
  - **Slack - Late Payment Confirmed** – Handles delayed payments.  

- **Error handling (separate flow)**  
  - **Error Trigger** – Captures workflow failures.  
  - **Slack - Workflow Error Alert** – Sends error notification.  

## Why use this?  

- Fully automates invoicing from deal closure to payment tracking  
- Reduces manual billing work and human errors  
- Improves payment collection with automated reminders  
- Provides clear visibility with logs and team alerts  
- Ensures reliability with built-in error monitoring

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot Trigger, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
