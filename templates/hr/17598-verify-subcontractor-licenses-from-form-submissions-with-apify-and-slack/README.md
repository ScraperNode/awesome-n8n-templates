# 👥 Verify subcontractor licenses from form submissions with Apify and Slack

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow captures subcontractor onboarding submissions in an n8n Form, verifies the claimed contractor licence against the relevant US state licensing board using Apify, records an audit trail, and optionally posts the verification verdict to Slack.

## How it works
1. Receives a subcontractor onboarding submission via an n8n Form Trigger.
2. Normalizes and validates the submitted company, contact, email, state, and license number, marking incomplete submissions for manual review.
3. Routes the request by US state and prepares the correct Apify actor input for supported states, or flags unsupported states as manual review.
4. Runs the appropriate Apify licence-lookup actor to retrieve matching licensing-board records when the state is supported.
5. Compares the claimed company and licence details to the board result to produce a verdict (pass, review, fail, or manual-review) and a human-readable summary.
6. Outputs a structured audit record with timestamps, evidence (status, expiry, source URL), and the final verdict, and optionally posts the summary to a Slack channel.

## Setup
1. Self-host n8n and install the `@apify/n8n-nodes-apify` community node.
2. Create an Apify account and add your Apify API token as credentials in the Apify node used for the licence lookup.
3. Activate the workflow and use the generated n8n form URL as your onboarding intake (or replace the form trigger with a webhook if you collect submissions elsewhere).
4. Replace the audit step with your preferred storage destination (for example Google Sheets, Airtable, or a database) and map the audit fields as needed.
5. (Optional) Add Slack credentials, set the target channel, and enable the Slack node to post the verdict summary.

## 🔗 Nodes Used

Slack, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
