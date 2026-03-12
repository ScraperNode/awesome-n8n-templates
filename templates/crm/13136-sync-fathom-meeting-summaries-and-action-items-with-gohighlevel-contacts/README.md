# 🤝 Sync Fathom meeting summaries and action items with GoHighLevel contacts

> ⚡ **62 views** · 🤝 [CRM & Sales Operations](../)

## Description

## This n8n template automatically syncs your Fathom AI meeting summaries, recordings, and action items directly into GoHighLevel CRM contacts.

Fathom has native integrations for HubSpot and Salesforce, but **not for GoHighLevel**. This workflow fills that gap, giving GHL users the same automated meeting-to-CRM sync that other platforms enjoy. Perfect for sales teams, agencies, and consultants who want to keep their CRM updated without manual data entry.

#### Good to know

- Only **external attendees** are synced (your team members are filtered out automatically)
- Contacts must already exist in GHL - the workflow matches by email address
- Action items become tasks with a **7-day due date** by default (customizable in the Code node)

## How it works

1. Fathom sends a webhook when your meeting ends, containing the summary, recording link, and action items
2. The workflow extracts external attendees from the calendar invitees list
3. For each attendee, it searches GoHighLevel for a matching contact by email
4. If found, it creates an **internal comment** in the contact's conversation with a brief summary and recording link
5. A detailed **note** is added to the contact with the full meeting summary
6. Each **action item** from the meeting becomes a GHL task assigned to that contact

## How to use

1. Import this workflow into your n8n instance
2. Update the **Config** node with your GoHighLevel Location ID
3. Connect your GoHighLevel OAuth2 credentials to all HTTP Request nodes
4. Copy the webhook URL and add it in Fathom: Settings → API → Webhooks → "New meeting content ready"
5. Activate the workflow and you're done!

## Requirements

- Fathom account with API access (free tier works)
- GoHighLevel account with Private Integration Token or OAuth app
- GHL API scopes: `contacts.readonly`, `contacts.write`, `conversations.readonly`, `conversations.write`, `conversations/message.write`

## Customising this workflow

- **Change task due date**: Edit the "Prepare Action Items" Code node to adjust the 7-day default
- **Add Slack notifications**: Insert a Slack node after "Create GHL Note" to notify your team
- **Create contacts if not found**: Add a branch after "Contact Found?" to create new contacts from meeting attendees
- **Sync to Opportunities**: Extend the workflow to also update related deals/opportunities in GHL

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
