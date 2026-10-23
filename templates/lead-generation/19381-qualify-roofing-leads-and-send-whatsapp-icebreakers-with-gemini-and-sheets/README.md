# 🎣 Qualify roofing leads and send WhatsApp icebreakers with Gemini and Sheets

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/_X28g1l70k8?si=GejNEDdS5ML6PX17

This workflow captures roofing inquiries via an n8n Form, deduplicates and stores leads in Google Sheets, uses Google Gemini to score buying intent and draft a WhatsApp icebreaker, alerts the sales team in Slack for high-intent leads, and sends an autofilled scheduling link via WhatsApp.

## How it works
1. Receives a new lead submission from an n8n Form with contact details and an inquiry message.
2. Normalizes the lead data (including phone number validation), builds a dedupe key, and checks Google Sheets for an existing matching lead.
3. If a duplicate is found, posts a note to Slack and stops further outreach.
4. If it’s a new lead, appends/updates the lead in Google Sheets and asks Google Gemini (via a structured prompt) to classify buying intent, generate a score, and draft a WhatsApp message.
5. Writes the AI results back to Google Sheets, then routes the lead by intent and notifies Slack for High-intent leads.
6. For High/Medium intent leads with a valid WhatsApp number (and no prior WhatsApp-sent flag in Google Sheets), builds a Cal.com scheduling URL with prefilled name/email/notes and sends the WhatsApp icebreaker plus the autofilled link.
7. Updates Google Sheets to mark whether WhatsApp was sent, disqualified (Low/Spam), or skipped due to an invalid phone number.

## Setup
1. Connect a Google Sheets Service Account credential and update the spreadsheet ID/sheet tab to match your lead-tracking Google Sheet.
2. Ensure your Google Sheet includes the columns used by the workflow (at minimum: Name, Company, Role, Email, Phone, Dedupe Key, Inquiry Message, Submitted At, Status, Score, Intent, WhatsApp Sent, WhatsApp Message).
3. Add a Google Gemini (Google PaLM) credential for the AI lead qualifier and confirm the model name is available in your Google Cloud project.
4. Add a Slack credential and select the channel where duplicate and high-intent notifications should be posted.
5. Add a WhatsApp Business Cloud credential, set your Phone Number ID, and replace the recipient phone number field to use the lead’s WhatsApp number.
6. Replace the Cal.com base link with your own scheduling URL (and verify the prefill query parameters you want to pass).

## 🔗 Nodes Used

Google Sheets, Slack, WhatsApp Business Cloud, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
