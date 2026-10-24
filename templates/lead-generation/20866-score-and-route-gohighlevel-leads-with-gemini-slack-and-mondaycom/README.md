# 🎣 Score and route GoHighLevel leads with Gemini, Slack, and Monday.com

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives new or updated GoHighLevel leads via webhook, normalizes the contact data, scores and tiers each lead with Google Gemini, then routes notifications to Slack and applies GoHighLevel tags, creating a Monday.com item for hot leads.

## How it works
1. Receives a POST webhook from GoHighLevel when a contact is created or a pipeline stage changes, and immediately responds with “OK”.
2. Loads workflow settings (Slack channel IDs, Monday.com board and status values, and company name) and normalizes the incoming lead fields like name, source, budget, timeline, interest, and message.
3. Sends the normalized lead profile to Google Gemini and requests a strict JSON response containing a 1–10 score, reasoning, and a recommended next step.
4. Parses Gemini’s output, clamps the score to 1–10, and assigns the lead tier (Hot, Warm, or Cold) based on the score.
5. For Hot leads, posts an urgent alert to Slack, adds hot/priority tags to the GoHighLevel contact, and creates a new item in Monday.com to track follow-up.
6. For Warm leads, posts a nurture notification to Slack and adds warm/nurture tags to the GoHighLevel contact.
7. For Cold leads, adds cold/low-priority tags to the GoHighLevel contact.

## Setup
1. In GoHighLevel, create an automation/workflow that sends the lead payload to this workflow’s production webhook URL on Contact Created and/or Pipeline Stage Changed.
2. Add a Google Gemini (PaLM) API credential and select it for the Gemini chat model used for scoring.
3. Create HTTP header authentication credentials for GoHighLevel and Monday.com (Authorization headers) and assign them to the HTTP request steps that update tags and create Monday.com items.
4. Connect a Slack OAuth2 credential and set your target Slack channel IDs, Monday.com board ID, and status column/label values in the workflow configuration step.

## Requirements
- GoHighLevel account with API access
- Google AI Studio (Gemini) API key
- Slack workspace
- Monday.com account with an API token

## Customization
- Edit the scoring criteria in the Gemini prompt to match your ideal client profile
- Change the score thresholds in the Parse AI Score node
- Add a WhatsApp or email node to the Hot path to ping the agent directly

## Additional info
Webhook field names depend on your GoHighLevel workflow payload. Run one test, check the Webhook node output, and adjust the Normalize Lead Fields code if your field names differ. The Monday.com status column ID and label must match your board.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
