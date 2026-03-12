# 🤝 Quick HubSpot contact lookup in Slack for sales & support teams

> ⚡ **102 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow starts when a user triggers a custom slash command in Slack. The workflow checks if a valid message (email address or HubSpot contact ID) was provided. Based on the input, it searches HubSpot for the contact either by email or by ID. Once the contact is found, the workflow formats the details into a clean, Slack-friendly message card and posts it back into the Slack channel.

## Step-by-step

**Start with Slack Slash Command**
- The workflow is triggered whenever someone uses a custom slash command in Slack.

- It checks if the user actually entered something (email or ID). If nothing is entered, the workflow stops with an error.

**Parse Search Input**
- The workflow cleans up the user’s input and determines whether it’s an email address or a HubSpot contact ID.

- This ensures the correct HubSpot search method is used.

**Search in HubSpot**

- If the input is an email → the workflow searches HubSpot by email.

- If the input is an ID → the workflow retrieves the contact directly using the HubSpot contact ID.

**Format Contact Info**
- The retrieved HubSpot contact details (name, email, phone, company, deal stage, etc.) are formatted into a Slack-friendly message card.

**Send Contact Info to Slack**
- Finally, the formatted contact information is posted back into the Slack channel, making it instantly visible to the user and team.

## Why use this?

- Quickly look up HubSpot contacts directly from Slack without switching tools.

- Works with both email addresses and HubSpot IDs.

- Provides a clean, structured contact card in Slack with key details.

- Saves time for sales and support teams by keeping workflows inside Slack.

- Runs automatically once set up — no extra clicks or manual searches.

## 🔗 Nodes Used

Slack, Webhook, HubSpot, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
