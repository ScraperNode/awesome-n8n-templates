# 🎣 Score and route property enquiries with Groq, Google Sheets, and Gmail

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives property enquiries via a webhook, validates and classifies them as Personal or Business, scores buying intent with Groq (LLM), then saves the lead to the appropriate Google Sheets tracker and alerts agents via Gmail.

## How it works
1. Receives a POST request from your website contact form with enquiry details.
2. Checks whether an email address is present, and if it is missing logs the raw enquiry to Google Sheets and returns an HTTP 400 error.
3. Flattens the incoming payload and classifies the lead as Personal or Business based on the email domain.
4. Sends the lead details to the Groq Chat Completions API to generate a 1–10 buying-intent score, and falls back to a default score of 5 if the AI request fails.
5. Routes the lead to a Personal or Business path and upserts the record into the corresponding Google Sheets tracker using the email as the unique key.
6. Sends a formatted lead alert email to the team via Gmail including the lead type and AI score, then returns an HTTP 200 success response to the webhook caller.

## Setup
1. Configure the webhook URL in your website/contact-form tool to send a POST payload containing at least name, email, and phone.
2. Add a Groq API credential in n8n so the workflow can call the Groq Chat Completions endpoint.
3. Connect Google Sheets credentials and select the spreadsheets/tabs for Personal leads, Business leads, and the Incomplete Lead log.
4. Connect Gmail credentials and set the recipient(s) for the agent notification email in the Gmail node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
