# 🎫 Automated Gmail classification & response system with GPT and WhatsApp alerts

> ⚡ **8,701 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template uses AI to automatically classify incoming Gmail messages into five categories and route them to the right people or departments. It can also reply automatically and send WhatsApp alerts for urgent or relevant messages.
This helps ensure high-priority emails never get missed, while other messages are handled efficiently.

##How It Works
1. Trigger
A new email in Gmail triggers the workflow.

2. Classification (OpenAI GPT)
The email is analyzed by an OpenAI GPT model and classified into one of:

High Priority
Customer Support
Promotion
Finance/Billing
Random/Other

3. Conditional Logic & Actions
High Priority → Create draft reply + send WhatsApp alert.

Customer Support → Auto-reply + send WhatsApp confirmation alert.

Promotion → Summarize email + send WhatsApp promotional alert.

Finance/Billing → Forward to finance team + send WhatsApp finance alert.

Random/Other → Label and log only.

4. Multi-Channel Output
Responses are sent via Gmail.
Alerts are sent via WhatsApp (or another compatible API).

##Setup Instructions
Step 1: Gmail Authorization
Add a Gmail node in n8n.
Connect using OAuth2 and grant read/send permissions.

Step 2: OpenAI API Key
Get your API key from OpenAI.
Add it to n8n credentials for the OpenAI node.

Step 3: WhatsApp Integration
Use your WhatsApp Business API or a provider like Twilio or 360Dialog.

Replace placeholders with your details:

[YOUR_WHATSAPP_NUMBER]
[YOUR_FINANCE_TEAM_NUMBER]
[YOUR_SUPPORT_TEAM_NUMBER]

Step 4: Import & Run
Import the workflow JSON into n8n.
Adjust prompts, labels, and routing logic as needed.
Execute and monitor results.

##Good to Know
Fully customizable — add or remove categories, adjust responses, and change alert channels.

Can be integrated with Slack, Discord, Trello, Notion, Jira, or CRM systems.

Scales easily across teams and departments.

##Requirements
Gmail account with OAuth2 credentials set up in n8n

OpenAI API key for classification and content generation

WhatsApp (or other messaging service) integration

Optional: Slack, Notion, CRM, or accounting tool integrations

##Customization Ideas
Create support tickets in Trello, Notion, or Jira from Customer Support emails.

Sync Finance emails with QuickBooks, Stripe, or Google Sheets.

Replace WhatsApp alerts with Slack or Discord messages.

Use Zapier/Make for cross-platform automations.

## 🔗 Nodes Used

Gmail, Gmail Trigger, WhatsApp Business Cloud, OpenAI Chat Model, OpenAI, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
