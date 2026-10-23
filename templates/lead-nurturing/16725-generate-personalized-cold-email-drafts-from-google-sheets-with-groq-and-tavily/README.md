# 💬 Generate personalized cold email drafts from Google Sheets with Groq and Tavily

> ⚡ **26 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This scheduled workflow reads leads from Google Sheets, researches each company with Tavily Search, uses Groq (Llama 3.3 70B) to generate a short personalized cold email, and saves the result as a Gmail draft while updating the lead status back in the sheet.

## How it works
1. Runs on an hourly schedule trigger.
2. Reads lead rows from Google Sheets and keeps only rows that have an email address and are not marked with status "sent".
3. Processes leads one at a time and uses the Tavily Search API to fetch a brief company overview based on the lead’s company name.
4. Sends the lead details plus the Tavily research summary to Groq (Llama 3.3 70B) to generate a JSON-formatted email subject, body, and personalization hook.
5. Parses and validates the AI output to ensure a subject and body are present, and routes failures to an error log.
6. Creates a Gmail draft with the generated subject and body, updates the corresponding row in Google Sheets with the new status and generated fields, and waits briefly before continuing to the next lead.

## Setup
1. Create and connect a Google Sheets OAuth2 credential, then select the target spreadsheet and sheet in both the Google Sheets read and update steps.
2. Create and connect a Gmail OAuth2 credential for the account where drafts should be created.
3. Create and connect a Groq API credential and ensure the Groq LLM step points to your chosen model.
4. Add your Tavily API key to the Tavily Search HTTP request payload and confirm the request returns an "answer" field.
5. Ensure your Google Sheet includes columns for at least name, email, company_name, role, status, plus any fields you want to write back (for example subject, personalization_hook, and drafted_at), and map the update step to the correct row identifier (such as a row_number column).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
