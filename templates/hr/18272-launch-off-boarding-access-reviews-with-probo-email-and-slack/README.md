# 👥 Launch off-boarding access reviews with Probo, email and Slack

> ⚡ **6 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow listens to Probo user webhooks to detect off-boarding events, automatically creates and starts a Probo access review campaign across connected sources, emails each relevant tool admin, and posts a recap plus connectivity alerts to Slack.

## How it works
1. Receives a POST webhook from Probo for user events and normalizes the payload to detect when a user transitions from ACTIVE to INACTIVE or is deleted while ACTIVE.
2. Stops processing if the event is not an off-boarding signal.
3. Creates an access review campaign in Probo for the user’s organization, fetches all access review sources, and alerts Slack about any sources that are not CONNECTED.
4. Attaches all CONNECTED access review sources to the campaign, starts the campaign, and waits two minutes for Probo to fetch the latest access data.
5. Reads the campaign entries from Probo to find which tools still show the off-boarded user as active and identifies the admins for those tools.
6. Sends each tool admin an email listing the tools they need to revoke access for (or emails a fallback admin when no tool admin is found) and posts a Slack recap with the results and a link to the Probo campaign.

## Setup
1. Create a Probo API credential in n8n and ensure you have a Probo organization ID available in the webhook payload.
2. In Probo, configure a user webhook (for events like user:updated and user:deleted) to point to this workflow’s webhook URL.
3. Add an SMTP credential for the email-sending step and set the sender address in the Settings values.
4. Add a Slack OAuth credential, then fill in the recap channel ID and alert channel ID in the Settings values.
5. Update the Settings values for fallbackAdminEmail and (if needed) proboAppBaseUrl to match your Probo instance and notification preferences.

## Requirements
- Probo organization with a token

## Customization
- You can choose to post recap to another channel (Teams, discord, email...)

## 🔗 Nodes Used

Send Email, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
