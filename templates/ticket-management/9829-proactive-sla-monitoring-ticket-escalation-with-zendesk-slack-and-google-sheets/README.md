# 🎫 Proactive SLA monitoring & ticket escalation with Zendesk, Slack and Google Sheets

> ⚡ **129 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description:
Ensure your customer SLAs never slip with this n8n automation template.
 The workflow runs on a schedule, fetching open tickets from Zendesk, calculating SLA time remaining, and sending proactive alerts to Slack when tickets approach breach thresholds (75% and 90%). It also updates ticket priority in Zendesk and logs compliance metrics to Google Sheets for reporting.
Perfect for support operations, CX teams, and SaaS companies looking to maintain SLA compliance and reduce response delays automatically.

## ✅ What This Template Does (Step-by-Step)
⏰ Run Every Hour: Automatically triggers every hour to check for SLA-sensitive tickets.
📥 Fetch All Open Zendesk Tickets: Pulls all tickets via the Zendesk API, returning essential fields: ID, status, created_at, sla_due, and priority.
🔍 Filter Only “Open” Tickets: Excludes closed, on-hold, or pending tickets — monitoring focuses only on actionable cases.
⏱️ Calculate SLA Time Remaining: Computes total SLA duration, remaining minutes, and % of SLA consumed for each ticket.
🟡 Warn at 75% Threshold: When 75% of the SLA window has passed, automatically sends a Slack warning to the #general-information channel.
🔴 Escalate at 90% Threshold: For tickets nearing breach (≥90%), the workflow updates Zendesk ticket priority to “High,” adds escalation notes, and notifies the support team for immediate action.
📊 Log SLA Compliance in Google Sheets: Each ticket’s SLA metrics (ID, % elapsed, time remaining, timestamp) are appended to a Google Sheet for tracking and reporting.
✅ No-Ticket Confirmation: If no open tickets exist, the workflow posts a “✅ No open tickets” message to Slack — keeping teams informed of a clear queue.

## 🧠 Key Features
 ⏱️ Automated SLA tracking and escalation
 📊 Real-time logging to Google Sheets
 ⚡ Hourly auto-trigger — no manual checks needed
 📢 Slack alerts at warning and critical thresholds
 🔄 Dynamic Zendesk ticket updates via API

## 💼 Use Cases
 💬 Proactively manage customer support SLAs
 🚨 Automatically escalate critical tickets before breach
 📈 Maintain transparent SLA compliance reporting
 📢 Keep your support team updated in real time

## 📦 Required Integrations
Zendesk API – for ticket retrieval and updates
Slack API – for alert notifications
Google Sheets – for compliance and reporting logs

## 🎯 Why Use This Template?
 ✅ Prevent SLA breaches before they happen
 ✅ Automate escalation and communication
 ✅ Provide real-time visibility to support leads
 ✅ Build a historical SLA performance dataset

## 🔗 Nodes Used

Cron, Function, Google Sheets, Slack, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
