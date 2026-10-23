# 📖 Route IT service catalog requests in Slack with Postgres workflows

> ⚡ **1 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow turns Slack into an internal IT service catalog by storing services in Postgres, collecting requests through Slack modals, routing approvals via Slack DMs, and either calling an external automation HTTP endpoint or posting the request to an IT queue channel for manual completion.

## How it works
1. Receives Slack slash command and interactive payloads via webhooks and verifies each request using the Slack signing secret.
2. When an employee runs `/it`, it loads active catalog items from Postgres and opens a Slack modal to select a service by category.
3. After a service is selected, it loads the service definition from Postgres and updates the modal to a service-specific request form.
4. When the form is submitted, it validates required fields, creates a request and audit entries in Postgres, and notifies the requester in Slack.
5. If approval is required, it sends the approver a Slack DM with Approve and Deny buttons and records the decision back to Postgres.
6. For approved requests, it either calls the configured HTTP automation endpoint and records the result, or posts the request to an IT queue Slack channel with a Mark complete button.
7. When IT marks a queued request complete, it updates the request status in Postgres, updates the Slack queue message, and notifies the requester.

## Setup
1. Create and connect Postgres credentials, then run the manual setup trigger once to create the required tables and demo catalog data.
2. Create a Slack app with a bot token, add scopes for `commands`, `chat:write`, and `im:write`, and configure an HTTP Header Auth credential (`Authorization: Bearer xoxb-...`) for the Slack API requests.
3. Configure the Slack slash command `/it` and interactivity request URLs to point to the workflow webhooks (`/webhook/it-catalog` and `/webhook/it-interactive`) and paste the Slack signing secret into the workflow configuration.
4. Update the IT queue Slack channel ID and IT lead Slack user ID in the workflow configuration, and replace the placeholder Slack user IDs in the Postgres directory data.
5. For services using auto-fulfillment, update the automation endpoint URLs (and any required HTTP auth) in the Postgres catalog item definitions.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
