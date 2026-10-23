# 🎣 Qualify inbound leads with OpenAI, Google Sheets and Slack alerts

> ⚡ **53 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives lead submissions via a webhook, normalizes the fields, uses OpenAI to score and categorize each lead with a structured JSON output, appends every lead to Google Sheets, and posts an alert to a Slack channel when the lead score meets a qualifying threshold.

## How it works
1. Receives a POST request on an n8n webhook endpoint with lead details (for example from a web form).
2. Normalizes the incoming payload into consistent fields like name, email, company, message, and source.
3. Sends the normalized lead to OpenAI (gpt-4o-mini) to return a JSON assessment containing score, category, reasoning, and a suggested reply.
4. Prepares a log record with a timestamp and the AI results, then appends it as a new row in Google Sheets.
5. Checks whether the lead score is 70 or higher and, if so, posts a formatted “hot lead” alert to Slack including the reasoning and suggested reply.

## Setup
1. Create or select a Google Sheets spreadsheet with a header row for timestamp, name, email, company, message, source, score, category, reasoning, and suggested_reply, then connect Google Sheets OAuth and set the document ID and sheet name.
2. Add an OpenAI API credential and confirm the chat model selection (default gpt-4o-mini) in the OpenAI model configuration.
3. Add a Slack OAuth credential, ensure the target channel exists (for example #leads), and set the correct Slack channel in the Slack message step.
4. Copy the webhook URL from the Lead Intake webhook and configure your form or source system to send a POST request with lead fields (name, email, company, message, source).

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
