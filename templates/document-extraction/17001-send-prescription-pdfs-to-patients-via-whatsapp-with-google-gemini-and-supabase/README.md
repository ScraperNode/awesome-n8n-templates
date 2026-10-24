# 🔬 Send prescription PDFs to patients via WhatsApp with Google Gemini and Supabase

> ⚡ **25 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow listens for incoming WhatsApp messages from clinic staff, uses Google Gemini to extract prescription details, generates a prescription PDF via an HTML-to-PDF API, uploads it to a public URL, sends the document back over WhatsApp, and logs outcomes to Supabase.

## How it works
1. Triggers whenever a new WhatsApp message is received on your WhatsApp Business Cloud number.
2. Captures configuration values and the incoming message text and sender number.
3. Uses Google Gemini to extract patient name, doctor name, and medication details into structured data and flags any missing required fields.
4. If required details are missing, replies to staff on WhatsApp with what to fix and inserts a `needs_review` record into Supabase.
5. If details are complete, renders a prescription HTML document, converts it to a PDF via an external HTML-to-PDF API, and uploads the PDF to an external file-hosting API.
6. Sends the prescription PDF to the sender on WhatsApp and inserts a “sent” log record (including the PDF URL) into Supabase.

## Setup
1. Connect WhatsApp Business Cloud credentials for the WhatsApp trigger and the WhatsApp send steps, and configure the workflow’s webhook in Meta/WhatsApp so incoming messages reach n8n.
2. Add a Google Gemini (PaLM) API credential for the prescription extraction step.
3. Add a Supabase credential and create a `prescriptions` table with columns for patient_name, doctor_name, medications (jsonb), status, pdf_url, and created_at.
4. Provide endpoints and API keys for your HTML-to-PDF service and your upload/file-hosting service, then update the variables in the configuration step (clinic name, staff notification number, and WhatsApp phone number ID).
5. Verify which field in your upload API response contains the public file link and update the workflow if it is not returned as `url`.

## 🔗 Nodes Used

HTTP Request, Supabase, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
