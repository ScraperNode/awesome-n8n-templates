# 🎫 Route email actions from Notion with Gmail, Slack, and Jira

> ⚡ **39 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Description
Execute email actions directly from Notion. Set an email’s status to Responded, Delegated, Routed, or Archived, and this workflow handles the Gmail action, Slack notification, or Jira routing automatically.
# Context
This is the action layer for the Inbox Zero Engine. When you set an email’s status in Notion, the workflow executes the appropriate action:
• Responded: sends the draft reply via Gmail thread • Delegated: forwards the email + sends a Slack DM to the delegate • Routed: creates items in Jira, RICE+ backlog, or customer health • Archived: applies Gmail labels
After each action, the entry is marked as “Processed” in Notion.
# Who is this for?
•	PMs using Notion as their command center
•	Anyone who wants to process email without leaving Notion
•	Teams that delegate and route emails frequently
# Requirements
•	Notion account with Email Intelligence database
•	Gmail OAuth2
•	Slack Bot token
# How it works
- Trigger  Watches Email Intelligence in Notion for status changes.
- Action Router  4-way switch: Responded sends reply, Delegated forwards + DMs, Routed creates tickets, Archived labels in Gmail.
- Closed Loop  Updates each entry to “Processed” with timestamp and reference.
# What you get
•	One-click email actions from Notion
•	Automatic Gmail replies, forwards, and archiving
•	Slack notifications for delegated emails
•	Full audit trail in Notion
## About me :
I’m Yassin a Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 🔗 Nodes Used

Slack, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
