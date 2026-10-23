# 🎫 Send Jira support auto-replies and CSAT surveys via WhatsApp, Gmail, and HubSpot

> ⚡ **29 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow closes the loop on Jira support tickets by sending an acknowledgement on ticket creation, requesting CSAT when an issue is marked Done, and saving CSAT results back to Jira with optional HubSpot notes, using Gmail and a WAHA WhatsApp API.

## How it works
1. Receives a ticket-created payload from another n8n workflow and loads the close-loop configuration.
2. Normalizes the payload, determines the customer channel (WhatsApp or Gmail), and checks whether the workflow has enough contact data to send an acknowledgement.
3. Sends the auto-reply to the customer via WAHA (WhatsApp) or Gmail, then adds a Jira comment and label to record that the auto-reply was sent.
4. Receives a Jira webhook when an issue changes status and validates the webhook token and that the issue is Done and not already CSAT-tagged.
5. Fetches the Jira issue, builds a CSAT form URL, sends the CSAT request via the same channel (WAHA or Gmail), and then comments and labels the Jira issue to mark CSAT as sent.
6. Receives the CSAT form submission, validates the ticket key, fetches the Jira issue to confirm it exists, and writes the CSAT score/comment back to Jira (including an optional custom field update).
7. If a HubSpot contact ID is present, creates and associates a HubSpot note for the auto-reply and/or CSAT submission, and then returns a confirmation page to the CSAT form submitter.

## Setup
1. Create Jira credentials (API token via HTTP Basic Auth) and configure a Jira automation/webhook to POST to the workflow’s Jira webhook endpoint with the correct token.
2. Add Gmail OAuth2 credentials for the account that sends customer emails.
3. Add WAHA HTTP Header Auth credentials and set your WAHA base URL and session ID in the workflow configuration.
4. Add HubSpot private app token (HTTP Header Auth) if you want CRM notes, and ensure your Jira issues store the HubSpot contact ID in the configured custom field.
5. Update the Jira base URL/project key, Done status name, labels, and Jira custom field IDs (channel, customer email/phone, CSAT score, WAHA session) in the configuration code nodes.
6. After importing the workflow, copy the CSAT Form Trigger path/webhook ID into the CSAT Form Path Config node so generated CSAT links point to the correct form URL.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Execute Workflow Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
