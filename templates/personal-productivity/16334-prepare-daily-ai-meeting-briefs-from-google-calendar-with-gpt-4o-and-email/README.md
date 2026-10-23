# ⚡ Prepare daily AI meeting briefs from Google Calendar with GPT-4o and email

> ⚡ **24 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow accepts a URL via an n8n form, fetches and extracts the main text from the web page, uses OpenAI (GPT-4o) to generate a structured research card (summary, tags, quotes, actions, sentiment, reading time), then saves the result to Notion and logs it in Google Sheets.

## How it works
1. Receives a URL submission through an n8n form.
2. Fetches the page HTML from the submitted URL and stops if the response body is too short to be valid.
3. Extracts the page title, author meta tag, and the main article text from the HTML.
4. Sends the extracted text to OpenAI (GPT-4o) to produce a structured output with a bullet summary, topic tags, key quotes, action items, sentiment, and estimated reading time.
5. Creates a new page in a Notion database using the extracted title and the AI-generated research card content.
6. Appends the same structured result to a Google Sheets “Reading List” spreadsheet for tracking.

## Setup
1. Add an OpenAI credential (or compatible OpenAI API key) for the GPT-4o chat model used in the summarization step.
2. Connect your Notion credentials, share the target database with the integration, and replace the Notion database URL/ID (currently set to https://www.notion.so/REPLACE_DB).
3. Connect your Google Sheets credentials and replace the spreadsheet URL/ID (currently set to https://docs.google.com/spreadsheets/d/REPLACE_ID/edit) and confirm the “Reading List” sheet name exists.
4. Publish the form and share the form URL with users who will submit pages to summarize.

## 🔗 Nodes Used

Slack, Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
