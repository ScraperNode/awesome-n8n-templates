# 🧾 Extract invoice data from Gmail to Airtable with Mistral OCR and GPT-4.1-mini

> ⚡ **56 views** · 🧾 [Invoice Processing](../)

## Description

This n8n template demonstrates how to automatically process invoice attachments from email using OCR and AI. When an invoice is received in Gmail, the workflow extracts structured invoice data and stores it in Airtable while preventing duplicates.

This automation is useful for freelancers, agencies, and finance teams who receive invoices by email and want to maintain a structured invoice database without manual data entry.

## Who’s it for

This workflow is designed for:

Freelancers managing client invoices

Agencies handling multiple invoice emails

Finance teams automating invoice intake

Automation consultants building accounting workflows

## How it works

When a new email with an attachment arrives in Gmail, the workflow checks whether the subject contains the word “invoice”. The attachment is uploaded to an image-hosting service to generate a public URL.

The invoice file is then processed using OCR to extract text content. An AI agent analyzes the extracted text and converts it into structured invoice fields such as invoice number, sender, recipient, dates, description, and amount. 

Before saving, Airtable is searched to ensure the invoice does not already exist. Valid invoices are stored automatically, while invalid data triggers an error notification email.

## How to set up

- Connect Gmail credentials and enable attachment download.

- Connect Airtable credentials and create an invoice table.

- Add your imgbb API key in the HTTP Request node.

- Connect your OCR provider (Mistral).

- Connect your OpenAI API credentials.

- Activate the workflow and send a test invoice email.

## Requirements

- Gmail account

- Airtable account

- OpenAI API key

- Mistral OCR API key

- imgbb API key

- n8n instance (cloud or self-hosted)

## How to customize the workflow

You can customize this workflow by:

Modifying the AI prompt used for invoice extraction

Adding new invoice fields in Airtable

Changing validation rules

Supporting additional invoice formats (PDF, PNG, JPG)

Adding integrations with accounting tools like QuickBooks or Stripe

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
