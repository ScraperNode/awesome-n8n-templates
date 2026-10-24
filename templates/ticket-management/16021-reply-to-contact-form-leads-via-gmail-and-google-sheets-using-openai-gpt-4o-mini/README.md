# 🎫 Reply to contact form leads via Gmail and Google Sheets using OpenAI GPT-4o mini

> ⚡ **112 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow triggers on n8n form submissions, uses OpenAI (GPT-4o mini) to draft a short acknowledgment email, sends the auto-reply through Gmail, and appends the submission details to a Google Sheets spreadsheet.

## How it works
1. Triggers when someone submits the n8n “Contact Us” form with their name, email, and message.
2. Sends the submission text to OpenAI (GPT-4o mini) to generate a warm auto-reply that promises a human follow-up within one business day.
3. Sends the generated reply to the submitter via Gmail with the subject “Thanks for reaching out!”.
4. Appends the form submission data to a Google Sheets worksheet for tracking.

## Setup
1. Connect an OpenAI credential for the Chat model used to generate the email reply.
2. Connect a Gmail account credential and confirm the workflow is allowed to send email from that mailbox.
3. Connect a Google Sheets credential, replace the spreadsheet URL/ID in the Google Sheets step, and ensure the target sheet tab is named “Leads” (or update it to match your sheet).

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
