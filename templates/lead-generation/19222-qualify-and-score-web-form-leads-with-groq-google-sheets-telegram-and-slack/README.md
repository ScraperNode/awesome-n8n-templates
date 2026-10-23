# 🎣 Qualify and score web form leads with Groq, Google Sheets, Telegram and Slack

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives web form leads via a webhook, normalizes the fields, uses Groq (chat model) to score buying intent and assign a hot/warm/cold tier, saves every lead to Google Sheets, and alerts the team in Slack and the owner in Telegram for hot leads.

## How it works
1. Receives an inbound lead as a POST request via an n8n webhook.
2. Cleans and maps the raw form payload into normalized lead fields (name, email, phone, company, message, submitted time).
3. Sends the lead details to Groq through a chat model prompt and parses the response into structured JSON with a score, tier, and reasoning.
4. Validates the AI output and falls back to a manual-review result if the score/tier is missing or invalid.
5. Appends the qualified lead (including score, tier, and reasoning) to a Google Sheets worksheet.
6. If the lead is marked as hot, sends a detailed Telegram alert and posts the lead summary to a Slack channel; otherwise it only posts the Slack summary.

## Setup
1. Create a Groq API credential (or swap the chat model node to your preferred provider and add the matching credentials).
2. Add Google Sheets OAuth2 credentials and update the target spreadsheet and worksheet used for appending leads.
3. Add Slack credentials and set the destination channel name/ID (for example, #n8n-leads).
4. Add Telegram credentials and replace <YOUR_TELEGRAM_CHAT_ID> with your Telegram chat ID.
5. Copy the webhook URL from the webhook trigger and configure your form tool to send lead submissions to it as a POST request.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
