# 🤝 Sync Fireflies meeting notes to HubSpot CRM using Google Gemini and Slack alerts

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives Fireflies meeting-completed webhooks, pulls the full transcript from Fireflies via GraphQL, uses Google Gemini to extract a structured summary and CRM updates, and then writes notes, tasks, and property updates back to HubSpot with optional Slack alerts.

## How it works
1. Receives a POST webhook from Fireflies when a meeting transcript is ready and fetches the transcript details via the Fireflies GraphQL API.
2. Validates the payload, deduplicates previously processed meetings, and skips meetings with no transcript while optionally posting an ingestion notice to Slack.
3. Retrieves writable HubSpot property schemas for contacts, companies, and deals, then filters meeting attendees to external emails based on your internal domain list.
4. For each external participant, searches for the matching HubSpot contact and looks up the contact’s associated deals.
5. Sends the transcript plus HubSpot property schemas to Google Gemini to generate a Markdown summary, intent/sentiment, optional follow-up task details, and property-mapped updates.
6. Upserts the HubSpot contact by email, patches the associated company and deal (if enabled and available), and creates a HubSpot note and optional task associated to the contact/company/deal.
7. Optionally posts a Slack message for high-intent meetings or unknown contacts, and sends a Slack alert if the workflow execution errors.

## Setup
1. Create and connect credentials for Fireflies (header auth for the GraphQL API), HubSpot (Private App token / app token), Google Gemini, and Slack OAuth2.
2. Configure Fireflies to send its “meeting completed” webhook to this workflow’s webhook URL path (fireflies-meeting-completed).
3. Update the Workflow Configuration values (INTERNAL_EMAIL_DOMAINS, UNKNOWN_CONTACT_ACTION, SLACK_CHANNEL, AI_MODEL, and the update/task/alert toggles) to match your environment and desired sync behavior.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, GraphQL, HubSpot, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
