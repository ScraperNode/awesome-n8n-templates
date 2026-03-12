# 🎫 Classify & process IT requests with Jotform, Gemini AI and Google Workspace

> ⚡ **89 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Who’s it for

This workflow is perfect for IT departments, helpdesk teams, or internal service units that manage incoming support requests through Jotform. It automates ticket handling, classification, and response—saving time and ensuring consistent communication.

# How it works

When a new IT service request is submitted through Jotform, this workflow automatically triggers in n8n. The submitted details (name, department, category, comments, etc.) are structured and analyzed using Google Gemini AI to summarize and classify the issue’s priority level (P0–P2).

P0 (High): Urgent issues that send an immediate Telegram alert.

P1 (Medium) / P2 (Low): Logged in Google Sheets for tracking and reporting.

After classification, the workflow sends a confirmation email to the requester via Gmail, providing a summary of their submission and current status.

# How to set up
- Connect your Jotform account to the Jotform Trigger node.
- Add your Google Sheets, Gmail, and (optionally) Telegram credentials.
- Map your Jotform fields in the “Set” node (Full Name, Department, Category, etc.).
- Test by submitting a form response.

# Requirements
- Jotform account and published IT request form
- Google Sheets account
- Gmail account (for replies)
- Optional: Telegram bot for real-time alerts
- n8n account (cloud or self-hosted)

# How to customize the workflow
- Adjust AI classification logic in the Priority Classifier node.
- Modify email templates for tone or format.
- Add filters or additional routing for different departments.
- Extend to integrate with your internal ticketing or Slack systems.

## 🔗 Nodes Used

Google Sheets, Telegram, Jotform Trigger, Gmail, Summarization Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
