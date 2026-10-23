# 🔬 Generate branded PDF sales proposals with Gemini, APITemplate.io and Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects prospect details via an n8n form, uses Google Gemini to draft a structured sales proposal, renders it into a branded PDF using APITemplate.io, and creates a pre-addressed Gmail draft with the PDF attached (or emails you an error if PDF rendering fails).

## How it works
1. Receives a submission from an n8n form containing the prospect’s company details, situation, proposed services, pricing, timeline, and optional brand colors.
2. Sends the submission to Google Gemini to generate proposal content as structured JSON that matches a predefined schema.
3. Validates the generated sections and item counts, applies fallback brand colors when needed, and merges the content into a fixed-layout HTML proposal template.
4. Calls the APITemplate.io API to convert the HTML into an A4 PDF file.
5. Creates a Gmail draft addressed to the prospect with the PDF attached and a prewritten message that references the generated proposal highlights.
6. If PDF generation fails, sends an error email to the agency address so you can troubleshoot and rerun.

## Setup
1. Add a Google Gemini credential and ensure the selected model is available in your account.
2. Add an APITemplate.io API key as an HTTP Header Auth credential using the header name `X-API-KEY`.
3. Add a Gmail OAuth credential with permission to create drafts, and confirm the workflow uses the prospect email from the form as the recipient.
4. Edit the CONFIG block in the HTML-building code to set your agency name, email, phone number, timezone, and default brand colors.
5. Activate the workflow and share the n8n form URL with whoever submits proposal requests.

## Requirements
- A Google Gemini API key, or any other chat model you prefer.
- A Gmail account. The draft appears in that account's Drafts folder.
- An APITemplate.io account. The free tier is enough to try it.

## Customization
- Swap the Google Gemini sub-node for OpenAI, Anthropic or any other chat model. The output parser keeps the rest of the workflow unchanged.
- Edit the HTML template inside Build HTML to change the design, fonts or section order.
- Change the form fields, and the matching lines in the prompt, to collect different information.
- Adjust the length limits in the system prompt if your layout needs longer or shorter text.

## Additional info
The prompt forbids inventing numbers: every price, percentage and date in the PDF comes from what you typed in the form. And nothing is emailed automatically — the workflow leaves a Gmail draft so you review it before sending.

## 🔗 Nodes Used

HTTP Request, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
