# 💬 Reply to HubSpot form leads in seconds with Claude, Gmail and Slack

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow listens for new HubSpot contacts created from form submissions, uses Anthropic Claude to draft a personalized first-response email, sends it via Gmail with your signature, logs the email on the HubSpot contact timeline, and alerts your sales team in Slack.

## How it works
1. Receives a webhook from HubSpot when a new contact is created.
2. Normalizes the incoming events and ignores non-contact-creation events and contacts created via CSV import.
3. Fetches the contact’s newest form submission details from HubSpot and continues only if the contact has at least one form submission.
4. Extracts key lead fields (name, email, company, job title, message, website) and combines them with your predefined business context.
5. Sends the lead context to Anthropic Claude to generate a JSON reply containing an email subject, HTML body, and one-sentence lead summary.
6. Retrieves your Gmail “sendAs” settings to append the correct Gmail signature and sends the email to the lead via Gmail.
7. Logs the email engagement on the HubSpot contact and posts a Slack message with the lead details, sent subject, and Claude summary.

## Setup
1. Create a HubSpot private app with CRM contacts read/write scopes, add its app token credential in the HubSpot steps, and configure a contact.creation webhook subscription pointing to this workflow’s production webhook URL.
2. Add an Anthropic API credential and ensure the selected Claude model is available to your account.
3. Connect a Gmail OAuth2 credential with permission to read Gmail settings and send email, and ensure your Gmail signature is configured in Gmail.
4. Connect a Slack OAuth credential with chat posting permissions, invite the bot to your target channel, and set the channel name in the Reply Settings.
5. Update the Reply Settings values (company name, sender name, what you do, booking link, and reply guidelines) to match your business before activating.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
