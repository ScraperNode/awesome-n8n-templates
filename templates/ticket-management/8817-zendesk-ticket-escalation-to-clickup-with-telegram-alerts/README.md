# 🎫 Zendesk ticket escalation to ClickUp with Telegram alerts

> ⚡ **105 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Description
This workflow automates Zendesk ticket escalation by creating ClickUp tasks for urgent cases and notifying the support team in Telegram. It ensures that high-priority tickets are instantly visible to the right team members, avoiding delays in resolution.

## What This Template Does (Step-by-Step)

🟢 Trigger (Manual Test or Later Zendesk Trigger)
- Currently uses a manual trigger (Execute Workflow) for testing.
- In production, this would start whenever a pending Zendesk ticket appears.

🎫 Fetch Zendesk Tickets
- Pulls all pending tickets assigned to a group.
- Sorts them by status and date.

🧹 Select Latest Ticket
- Sorts by created_at and keeps only the newest ticket.
- Outputs: id, subject, description, requester_id, created_at.

📧 Fetch Requester Email
- Retrieves requester details (name, email, timezone) from Zendesk Users API.

🔀 Merge Ticket & Requester Data
- Combines both streams: ticket info + requester info.
- Ensures the ClickUp task payload has everything it needs.

📝 Prepare ClickUp Task Payload
- Builds a structured task:
- Task Name: [Escalation] {Subject} (Ticket #ID)
- Description: Ticket + requester details + escalation message
- Priority: 3 (default, can be adjusted)
- Tags: zendesk, escalation

📂 Create ClickUp Task
- Pushes the structured task into ClickUp under the escalation list.
- Assigns it to a predefined team member.

📨 Format Telegram Alert Message
- Generates a concise but urgent message:
- Ticket subject + ID
- Requester name + email
- Direct ClickUp link
- Adds urgency formatting (🚨 Immediate Attention Required).

📢 Send Telegram Escalation Alert
- Posts the alert into the chosen Telegram chat/team.
- Ensures managers/stakeholders know instantly.

## Prerequisites
- Zendesk account + API credentials
- ClickUp account + API credentials
- Telegram bot token & chat ID
- n8n instance (cloud or self-hosted)

## Customization Ideas
 ⚡ Replace manual trigger with Zendesk “Ticket Created” trigger.
 🎯 Add SLA-based conditions (e.g., escalate only if response &gt; 4 hrs).
 📊 Auto-assign ClickUp tasks by ticket category.
 🔔 Add Slack/Email notification along with Telegram.
 📂 Store escalation logs into Notion or Google Sheets.

## Key Benefits
 ✅ Zero delay in handling critical tickets
 ✅ Automatically creates ClickUp task + Telegram alert
 ✅ Reduces manual handoff between support → escalation team
 ✅ Keeps everyone aligned in real-time

## Perfect For
 🎯 Support teams needing fast escalations
 📈 SaaS companies managing large ticket volumes
 🚀 Agencies ensuring VIP clients never wait

## 🔗 Nodes Used

Telegram, Zendesk, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
