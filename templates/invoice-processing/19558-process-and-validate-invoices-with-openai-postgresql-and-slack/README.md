# 🧾 Process and validate invoices with OpenAI, PostgreSQL, and Slack

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives invoice PDFs via a webhook, extracts and cleans the text, uses OpenAI to parse key invoice fields into JSON, validates required data, stores successful invoices in PostgreSQL, and notifies a Slack channel, while logging failures and returning a success or error webhook response.

## How it works
1. Receives an uploaded invoice file via a POST webhook endpoint.
2. Extracts text from the uploaded PDF file and cleans up whitespace and line breaks.
3. Sends the cleaned invoice text to OpenAI to extract structured fields (vendor, invoice number, dates, amounts, currency, tax, and category) as JSON.
4. Parses the OpenAI response into a standardized JSON object and checks that required fields like vendor name and total amount are present.
5. If valid, writes the invoice record to a PostgreSQL invoices table and posts a formatted notification to a Slack channel.
6. If validation fails, stores an error record in a PostgreSQL failed_invoices table, alerts the same Slack channel, and returns a failed status response.
7. Returns a JSON success response to the original webhook caller when processing completes successfully.

## Setup
1. Create and connect an OpenAI API credential, and confirm the model selection (gpt-4o-mini) matches your account access.
2. Configure the webhook source to send a PDF file to the workflow’s POST /invoice-upload endpoint using the binary field name file.
3. Add PostgreSQL credentials and ensure the public.invoices and public.failed_invoices tables exist with columns matching the mapped fields.
4. Add Slack credentials and select the target channel for both the success notification and failure alert messages.
5. Test with a few real invoices and adjust the OpenAI extraction prompt or database column types if your invoices use different formats for dates, currencies, or totals.

## 🔗 Nodes Used

Postgres, Slack, Webhook, Basic LLM Chain, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
