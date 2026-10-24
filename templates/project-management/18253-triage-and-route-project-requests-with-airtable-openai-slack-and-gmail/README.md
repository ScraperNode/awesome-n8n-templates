# 📋 Triage and route project requests with Airtable, OpenAI, Slack, and Gmail

> ⚡ **3 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow accepts project requests via webhook, validates the minimum brief, and uses OpenAI to generate a triage summary and classification before scoring risk/urgency and storing the request in Airtable, optionally routing higher-risk items to Slack for approval and sending an optional weekly summary email.

## How it works
1. Receives a project request via a POST webhook (or a manual test payload) and normalizes the incoming fields.
2. Checks whether required brief details are present and, if not, returns a 400 response with missing fields and clarification questions.
3. Sends complete requests to OpenAI to produce a short triage summary, classify the request type, and extract risks, dependencies, decisions, and a recommended owner type.
4. Applies deterministic risk and urgency scoring based on the request metadata and the OpenAI output to determine the triage route.
5. Creates a new triage record in Airtable with the request details, summary, score, and routing information.
6. If the score exceeds the approval threshold, prepares an approval message and (optionally) posts it to Slack, then records an approval decision and either assigns an owner or marks the request as declined.
7. Builds a structured delivery handoff, updates the Airtable record with owner, status, next action and approval outcome, and responds to the webhook caller with the triage result.
8. On a weekly schedule, loads open Airtable triage records, builds an operational summary, and (optionally) emails it via Gmail.

## Setup
1. Create an Airtable base/table with the required fields (as referenced by the workflow) and add your base ID and table ID in the triage configuration values.
2. Add an Airtable Personal Access Token credential (used by the Airtable node and Airtable HTTP requests).
3. Add an OpenAI credential and confirm the selected model is available in your OpenAI account.
4. If you enable approvals in Slack, add a Slack credential and set the target channel ID in the triage configuration.
5. If you enable weekly summary emails, add a Gmail OAuth2 credential and set the notification email address in the triage configuration.
6. For webhook intake, copy the production webhook URL from n8n and configure your request source to POST the expected fields to it.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
