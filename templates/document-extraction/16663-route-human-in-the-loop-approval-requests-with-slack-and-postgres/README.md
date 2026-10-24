# 🔬 Route human-in-the-loop approval requests with Slack and Postgres

> ⚡ **95 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a single webhook that either accepts new approval requests or handles Slack button callbacks, posting interactive Slack Block Kit messages and recording decisions in a PostgreSQL table.

## How it works
1. Receives a POST request on a webhook endpoint that serves as both the intake API and the Slack interactivity callback URL.
2. Validates the Slack request signature and timestamp when the request includes Slack signature headers.
3. Routes the request by detecting whether it contains a URL-encoded Slack `payload` (callback) or a custom intake body (new request).
4. For intake requests, builds a Slack Block Kit approval message with Approve/Reject/Flag buttons and posts it to Slack.
5. Stores the request context, Slack channel ID, and message timestamp in PostgreSQL and returns a 200 response with the generated requestId.
6. For Slack button callbacks, immediately returns a 200 response to Slack, looks up the request context in PostgreSQL, and merges it with the callback details.
7. Updates the original Slack message to replace buttons with a static decision status and writes the decision (approved/rejected/flagged) back to PostgreSQL.

## Setup
1. Create the approval_requests table in your Postgres or Supabase instance
2. Add your Postgres credentials and your Slack Bot Token (ensure the token has the chat:write scope).
3. In your n8n environment variables, add your Slack App's Signing Secret as SLACK_SIGNING_SECRET and your target channel as SLACK_CHANNEL_ID.
4. Activate the workflow and copy the Production Webhook URL.
5. Paste this URL into your Slack App under Interactivity & Shortcuts → Request URL. Use this exact same URL as the target POST endpoint for your upstream systems to submit new approvals.

## Requirements
- A Postgres or Supabase database instance.
- A Slack App with Interactive Components enabled and a Bot Token.

## Customization
- Modify the "Create Slack Block Message" node to add dynamic fields, amounts, or internal company links to the approval UI.
- Extend the final "Determine Next Action Taken" Switch node to trigger CRM updates, email confirmations, or trigger agentic LLM workflows based on the 'approve', 'reject', or 'flag' outcomes.

## 🔗 Nodes Used

Postgres, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
