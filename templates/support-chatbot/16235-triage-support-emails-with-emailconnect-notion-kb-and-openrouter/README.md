# 💬 Triage support emails with EmailConnect, Notion KB, and OpenRouter

> ⚡ **28 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow receives inbound support emails via an EmailConnect webhook, filters likely spam, matches the message against a Notion Q&A knowledge base using an OpenRouter chat model, and then either drafts and sends a grounded reply or escalates the request to a human by email.

## How it works
1. Receives an inbound email payload via an EmailConnect webhook.
2. Drops the message if the provided spam score exists and is greater than 10.
3. Loads all Q&A entries from a Notion database and formats them into a comparison list alongside the sender and message text.
4. Uses an OpenRouter chat model (with per-sender memory) to select the closest knowledge base question ID or return NO_MATCH when confidence is below 85%.
5. Validates the returned ID against the Notion data and routes the request to either the answer path or the escalation path.
6. If a match is found, uses an OpenRouter chat model (with per-sender memory) to draft a structured reply grounded in the matched Notion answer and sends it to the customer via SMTP.
7. If no match is found, uses an OpenRouter chat model (with per-sender memory) to draft a structured acknowledgement, emails your team the original request via SMTP, and sends the acknowledgement to the customer via SMTP.

## Setup
1. Configure your EmailConnect alias to POST to the workflow webhook URL for the “When Email Received” trigger.
2. Add Notion API credentials and replace YOUR_NOTION_DATABASE_ID with your Notion database ID, ensuring the database exposes question, answer, and help_url properties.
3. Add an OpenRouter credential for the three OpenRouter chat model nodes.
4. Add an SMTP credential and update the from address, escalation recipient (alerts@example.com), and optional BCC settings in the email send steps.
5. Adjust the spam-score cutoff (currently > 10) and the match confidence threshold in the matching prompt (currently 85%) to fit your inbox quality.

## 🔗 Nodes Used

Send Email, Webhook, Notion, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
