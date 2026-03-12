# 🔬 Extract order details from LINE messages and photos to Google Sheets with OpenAI

> ⚡ **30 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Extract order details from LINE messages and photos to Google Sheets with OpenAI

Automatically extract order information from text messages or handwritten memo photos sent via LINE, confirm with the user, and append to a Google Sheets tracking sheet.

## How it works

1. Receives text or image messages from LINE Messaging API
2. Routes messages by type — text goes directly to the AI Agent, images are first downloaded via LINE API
3. The AI Agent (GPT-4o) analyzes the input, extracts order details, and asks the user for confirmation
4. Once approved, the order is appended as a new row in Google Sheets

## Setup steps

1. **LINE Messaging API**: Create a LINE channel and set the webhook URL to this workflow's trigger endpoint
2. **OpenAI Credentials**: Set up your OpenAI API key in n8n Credentials
3. **Google Sheets Credentials**: Set up Google Sheets OAuth2 in n8n Credentials
4. **Configure Spreadsheet**: Open the "Append Row to Google Sheets" node and set your Spreadsheet ID and sheet name
5. **Activate the workflow**

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
