# 🔧 Close the support loop and send CSAT between Jira, Gmail, WhatsApp and HubSpot

> ⚡ **7 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow closes the loop on Jira support tickets by sending customer auto-replies and CSAT requests via WhatsApp (WAHA) or Gmail, then saving CSAT responses back to Jira and optionally logging notes to HubSpot.

## How it works
1. Receives a new ticket payload from another n8n workflow run, loads the close-loop configuration, and normalizes the message details for the customer’s channel.
2. Checks whether an acknowledgement can be sent, then sends the auto-reply via WAHA WhatsApp API or Gmail.
3. Optionally creates a HubSpot note (and associates it to the contact) when a HubSpot contact ID is provided.
4. Adds a Jira comment and label to mark that the customer auto-reply was sent.
5. Receives a Jira webhook when an issue transitions to (or is in) Done, validates a shared token, and skips tickets that already have a CSAT-sent label.
6. Fetches the Jira issue to determine channel and contact details, builds a CSAT form link, and sends the CSAT request via WAHA WhatsApp API or Gmail.
7. Adds a Jira comment and label to record that the CSAT request was sent, then accepts CSAT form submissions, writes the score (and optional custom field) to Jira, and optionally logs the CSAT as a HubSpot note.

## Setup
1. Add Jira HTTP Basic credentials (email + API token) and update the Jira base URL, project key, Done status name, label names, and custom field IDs in the embedded configuration code.
2. Configure the Jira webhook to POST to this workflow’s “jira-csat” webhook URL and include the shared token (query parameter or x-webhook-token header) matching the workflow configuration.
3. Connect a Gmail OAuth2 account for sending customer emails and set the sender account you want to use.
4. Provide WAHA (WhatsApp HTTP API) header-auth credentials and confirm your WAHA base URL and session ID are correct for sending WhatsApp messages.
5. If you use HubSpot logging, add a HubSpot private app token as header auth and ensure the Jira ticket contains the HubSpot contact ID custom field.
6. After importing the template, copy the CSAT Form Trigger webhook path into the “CSAT Form Path Config” node so generated form links point to the correct form endpoint.

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
