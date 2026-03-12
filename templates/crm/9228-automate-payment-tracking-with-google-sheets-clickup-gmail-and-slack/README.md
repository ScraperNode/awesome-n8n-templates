# 🤝 Automate payment tracking with Google Sheets, ClickUp, Gmail and Slack

> ⚡ **194 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description
This workflow automates the tracking and follow-up process for pending payments. It pulls lead payment data from Google Sheets, checks whether the status is “Open,” and then routes actions accordingly. For open payment cases, it creates a dedicated ClickUp task and sends an email confirmation to stakeholders. For non-open cases, it notifies the team via Slack. This ensures payment verifications are never missed, while keeping all updates transparent and centralized.

## What This Template Does (Step-by-Step)
- 📊 Fetch Lead Data from Google Sheets
- Retrieves lead records including:
  - Lead Name
  - Company Name
  - Payment Verification Status
  - Status (Open/Closed)
- ⚖️ Check if Status = Open
- ✅ TRUE (Open): Creates a ClickUp task and sends an email confirmation.
- ❌ FALSE (Not Open): Sends a Slack notification only.
- 🗂 Create ClickUp Task for Payment Verification: Adds a task with lead and company details for pending payment follow-up in the specified list.
- ✉️ Send Email Confirmation: Notifies the assigned watcher (via Gmail) with task details (name, ID, and link).
- 💬 Send Slack Notification: Alerts the Slack workspace if a lead’s status is not “Open,” providing visibility on non-actionable cases.

## Prerequisites
- Google Sheet with lead/payment data
- ClickUp account & API credentials
- Gmail API credentials
- Slack API credentials
- n8n instance (cloud or self-hosted)

## Step-by-Step Setup
- Connect Google Sheets → Fetch payment verification data.
- Apply Status Filter (If Node) → Route based on “Open” status.
- Open Status → Create ClickUp Task → Send Email confirmation.
- Not Open Status → Send Slack notification.

## Customization Ideas
🎯 Add additional filtering (e.g., only create tasks if payment verification = “Pending”).
 📢 Send Slack alerts for all new leads, not just closed ones.
 📚 Log completed payment verifications into Airtable or Notion for reporting.
 💡 Include payment due dates or invoice numbers in ClickUp task details.

## Key Benefits
✅ Automates payment follow-up process
 ✅ Keeps stakeholders informed via email
 ✅ Provides real-time Slack alerts for non-actionable cases
 ✅ Centralizes pending payment tasks in ClickUp
 ✅ Reduces manual monitoring and ensures no pending case is missed

## Perfect For
👥 Finance teams handling multiple payment verifications
 🏢 Companies wanting a transparent and automated payment tracking process
 🎯 Teams already using ClickUp for task management
 📊 Managers who need visibility into pending vs. closed payment statuses

## 🔗 Nodes Used

Google Sheets, Slack, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
