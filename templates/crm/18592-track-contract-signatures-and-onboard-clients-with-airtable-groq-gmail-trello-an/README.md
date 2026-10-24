# 🤝 Track contract signatures and onboard clients with Airtable, Groq, Gmail, Trello and Slack

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives e-signature status webhooks,logs and updates contract records in Airtable,and when a contract is completed it uses Groq to generate an onboarding checklist that is sent via Gmail,created as a Trello card,and posted to Slack,while also running a daily Slack alert for stale deals.

## How it works
1. Receives an HTTP POST webhook from your e-signature tool whenever a contract status changes.
2. Verifies a shared secret from the request and extracts key fields like document ID, status, client details, and contract amount.
3. Updates the matching Airtable contract record with the latest status update, and if the status is completed it marks the contract as signed with a signed date.
4. Sends the signed contract’s service details and amount to Groq to generate a structured engagement summary and 4–6 onboarding checklist items.
5. If the contract amount meets your high-value threshold, posts a high-value alert to a dedicated Slack manager channel.
6. Sends the AI-generated onboarding summary and checklist to the client via Gmail, creates a Trello card for the onboarding work, and posts a signed-contract notification to the sales Slack channel.
7. Runs daily on a schedule to find Airtable contracts still in sent/viewed status past your cutoff date and posts a “deal going cold” reminder to Slack.

## Setup
1. Create an Airtable “Contracts” table with fields including document_id, client_name, client_email, status, contract_amount, service_details, last_status_update, and signed_date, and add an Airtable Personal Access Token credential.
2. Add a Groq API credential for the chat model used to generate the structured onboarding checklist and summary.
3. Add Gmail OAuth2, Trello, and Slack credentials, and set the Trello list ID plus Slack channel IDs (sales and manager) in the configuration values.
4. Set the shared secret token, Airtable base ID/table name, high-value threshold, and stale-days threshold/cutoff logic in the configuration nodes.
5. Copy the webhook URL from the webhook trigger and configure it in your e-signature tool, ensuring it sends the shared secret header/value expected by the workflow.

## 🔗 Nodes Used

Airtable, Slack, Trello, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
