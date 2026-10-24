# 💬 Send SMS alerts from new Trello cards with Twilio

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives Trello card events via webhook (or a built-in demo trigger), extracts contact details from the card, and uses Twilio to send an SMS confirmation; if Twilio is not configured it outputs a preview instead, and cards without a phone number are rejected with a reason.

## How it works
1. Receives a Trello webhook event for a new/updated card (or runs a manual demo that generates sample card payloads).
2. Applies centralized settings (Trello/Twilio details, SMS template, dry-run mode) while preserving the incoming Trello payload.
3. Parses the card content to extract a phone number and lead details (name, company, email, budget, timeline, labels, and a Trello card URL).
4. Rejects cards that are missing a phone number or do not match the lead-label rule, and outputs the reason.
5. Renders an SMS message body from the configured template using the extracted card fields.
6. If live sending is enabled, sends the SMS via the Twilio Messages API and returns either the Twilio success record or the Twilio error response; otherwise, returns a “preview” output showing the exact SMS that would be sent.

## Setup
1. Create Trello API credentials (key and token) and set your board/list IDs, then add them to the workflow’s config values.
2. Create a Twilio account, get your Account SID and Auth Token, and choose an SMS-capable Twilio phone number to use as the sender.
3. Set DRY_RUN to true for testing (optionally set a trench/test phone number) and switch DRY_RUN to false when you are ready to send real SMS messages.
4. Copy the production webhook URL from the Trello webhook trigger and register it in Trello as a webhook for the board or list you want to watch.
5. Ensure your Trello cards include a phone number (in the description or in specified custom fields) and, if configured, a label that matches the lead label prefix.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
