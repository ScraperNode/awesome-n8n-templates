# 💬 Write and score cold email variants as Gmail drafts with OpenAI and Sheets

> ⚡ **14 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow collects prospect details via an n8n form, uses OpenAI (ChatGPT) to generate a personalized cold email and subject line, sends the email through Gmail, and logs the outreach to Google Sheets for tracking.

## How it works
1. Receives prospect and company details from an n8n Form trigger submission.
2. Validates required fields, checks the email format, and compiles the provided details into a structured context block.
3. Sends the context to an OpenAI ChatGPT model to generate a JSON response containing a short subject line and an HTML cold email.
4. Parses and validates the AI output, falling back to a default subject and email draft if the JSON cannot be parsed.
5. Sends the generated email to the prospect using Gmail.
6. Appends the lead details, subject line, sent flag, and date to a Google Sheets “Leads” worksheet.

## Setup
1. Add an OpenAI API credential and select a model in the OpenAI Chat Model step used by the AI agent.
2. Update the AI agent system prompt to replace placeholders like AGENCY_NAME and adjust the service description to match your offering.
3. Connect a Gmail OAuth2 account that is allowed to send outbound emails.
4. Connect a Google Sheets OAuth2 account, set the spreadsheet ID, and ensure a “Leads” sheet exists with matching columns (Company Name, Contact Name, Contact Email, Website, Industry, Subject, Email Sent, Date).
5. Activate the workflow and use the generated form URL (path: cold-email-generator) wherever you collect prospect inputs.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
