# 🎣 Qualify inbound leads with GPT-4.1 mini, Telegram and Google Sheets

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives inbound leads via a webhook, optionally fetches and cleans the company website content, uses OpenAI (GPT-4.1 mini) to qualify and score the lead and generate outreach copy, sends a Telegram alert for high-priority leads, and logs every result to Google Sheets.

## How it works
1. Receives a lead submission via a POST webhook with fields like name, email, company, website, phone, and message.
2. Normalizes the incoming lead fields into a consistent structure for downstream processing.
3. If a website is provided, downloads the website HTML and trims/cleans it to a limited text payload.
4. Combines the lead details with the cleaned website content and sends it to OpenAI (GPT-4.1 mini) to produce a structured lead qualification report with score, priority, intent, recommended follow-up, and outreach messages.
5. Checks whether the AI lead score is 70 or higher and, if so, sends a formatted high-priority alert via Telegram.
6. Appends the lead details and the AI-generated qualification and outreach fields to a Google Sheets spreadsheet.

## Setup
1. Create an OpenAI credential in n8n and ensure the workflow can access the GPT-4.1 mini model.
2. Add a Telegram bot credential and set the target chat for where high-priority lead alerts should be delivered.
3. Connect Google Sheets OAuth2 credentials and update the target spreadsheet/document ID, sheet name, and column headers to match the fields being appended.
4. Copy the webhook URL from the “Receive Lead” trigger and configure your lead source (form, website, or CRM) to POST the expected fields to it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
