# 🔬 Validate bills of lading, send Gmail replies, and post JSON with Google Gemini

> ⚡ **84 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow triggers on a Gmail message from a specific sender, extracts bill of lading data from an email attachment using Google Gemini, validates the extracted values with Python, posts the structured JSON to a webhook URL, and replies to the sender with an HTML acceptance email.

## How it works
1. Triggers when a new Gmail email arrives from the configured sender and downloads the attached document.
2. Uses Google Gemini to analyze the attachment and rewrite the bill of lading content into a structured Markdown format.
3. Uses a second Google Gemini agent with a structured output schema to convert the Markdown into validated JSON fields for shipper, consignee, shipment details, and line items.
4. Runs a Python validation that compares customer order package/weight values against the carrier line items and appends a validation result to the JSON.
5. Sends the resulting JSON payload to an external HTTP webhook endpoint.
6. Uses Google Gemini to draft an HTML acceptance reply email based on the validated data and sends it back to the original sender via Gmail.

## Setup
1. Connect your Gmail OAuth2 credentials and set the sender filter (and any other Gmail Trigger options) to match the emails you want to process.
2. Add Google Gemini (PaLM) API credentials and confirm the selected Gemini models are available in your account.
3. Ensure the incoming emails include a compatible bill of lading attachment and update the binary attachment property name if it differs from `attachment_0`.
4. Replace the HTTP Request URL with your own endpoint that should receive the structured JSON payload.
5. Review the structured JSON schema and the Python validation logic to match your required fields and matching rules before enabling the workflow.

## Customization
- Any LLM provider can do the task, change Gemini with any AI you can use

## Additional info
This is an example of prompt chaining. It is an AI agent workflow that shows the benefit of chaining several LLMs together.

## 🔗 Nodes Used

HTTP Request, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
