# 🔬 Route and validate emailed documents with Gmail and Google Gemini

> ⚡ **37 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Gmail for unread emails from a specific sender, classifies attached documents with Google Gemini, then extracts and validates structured data for bills of lading, invoices, and warranty claims, posts the results to an HTTP webhook endpoint, and replies to the sender with an HTML confirmation email.

## How it works
1. Triggers when an unread Gmail message arrives from the configured sender and downloads the email attachment.
2. Uses Google Gemini to classify the attachment as a bill of lading, invoice, warranty claim, or other, while preserving the original binary file for downstream processing.
3. Routes the flow by document type and uses Google Gemini to extract the document into a structured markdown representation.
4. Uses a dedicated Google Gemini agent per document type to convert the extracted content into JSON that matches a predefined schema.
5. Runs Python validation checks on the structured data (for example, totals matching line items) and adds a validation result to the payload.
6. Posts the structured output to a configured HTTP webhook endpoint and uses a Google Gemini messaging agent to draft an HTML reply.
7. Sends the generated reply back to the original email sender via Gmail.

## Setup
1. Connect a Gmail OAuth2 credential and set the Gmail trigger filters (sender, unread status) and ensure attachments are enabled for download.
2. Connect a Google Gemini (PaLM) API credential and confirm the configured Gemini models are available for both extraction and the analysis/messaging agents.
3. Update the HTTP Request node URL (and any required headers/authentication) to point to your target webhook or API endpoint.
4. Review and adjust the structured output schemas and the Python validation rules to match the fields and business rules required for your bill of lading, invoice, and warranty claim formats.

## 🔗 Nodes Used

HTTP Request, Gmail Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
