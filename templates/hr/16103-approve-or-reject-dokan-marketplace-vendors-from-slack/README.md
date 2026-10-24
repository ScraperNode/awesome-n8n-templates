# 👥 Approve or reject Dokan marketplace vendors from Slack

> ⚡ **26 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow polls Dokan for newly registered vendors awaiting approval, posts each pending vendor to a Slack channel with Approve/Reject buttons, and updates the vendor’s status in Dokan when an admin clicks a button.

## How it works
1. Runs every 15 minutes on a schedule.
2. Requests the list of Dokan stores with `status=inactive` from the Dokan REST API.
3. Deduplicates vendors already announced in previous runs and formats vendor details (profile link, contact info, address, and social links) for Slack.
4. Posts a Slack message for each new pending vendor with Approve, Reject, and View profile buttons.
5. When an admin clicks Approve or Reject in Slack, a token-protected webhook receives the request and verifies the shared token.
6. Updates the vendor status in Dokan to `active` (approve) or `inactive` (reject), posts a confirmation message to Slack, and returns an HTML response page to the button click.

## Setup
1. Create a Dokan/WooCommerce Application Password (or equivalent Basic Auth) in your site for an admin-capable user and add it as HTTP Basic Auth credentials in the Dokan API request nodes.
2. Add Slack credentials for a bot token with `chat:write` and set `YOUR_SLACK_CHANNEL_ID` in the Slack message and confirmation steps.
3. Replace `your-marketplace.com` with your Dokan site URL in the Dokan API URLs and the Slack “View profile” button.
4. Replace `your-n8n-instance.com` in the Slack Approve/Reject button URLs and set a long random `YOUR_APPROVAL_TOKEN` to secure the approve/reject webhooks.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
