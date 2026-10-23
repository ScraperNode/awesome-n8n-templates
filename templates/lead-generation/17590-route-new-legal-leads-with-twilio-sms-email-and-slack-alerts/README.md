# 🎣 Route new legal leads with Twilio SMS, email, and Slack alerts

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives new contact form submissions via webhook, normalizes the lead data, assigns a duty attorney in round-robin order, and sends acknowledgments via Twilio SMS (through a compliance guardrail) and SMTP email, plus optional Slack alerts.

## How it works
1. Receives a POST webhook request when a lead submits your contact form.
2. Normalizes the incoming payload into standard lead fields and stops if neither an email address nor a phone number is provided.
3. Selects the next duty attorney from the DUTY_ATTORNEYS roster using a persistent round-robin counter.
4. Builds a personalized SMS, runs it through the Bar-Compliance Guardrail workflow for opt-out/disclaimer checks, and sends it via Twilio when approved.
5. Sends the lead a confirmation email with your booking link via SMTP.
6. Emails the assigned attorney with the full lead details and optionally posts the same alert to Slack via an Incoming Webhook URL.

## Setup
1. Create n8n project variables for DUTY_ATTORNEYS, GUARDRAIL_WORKFLOW_ID, FIRM_NAME, FIRM_FROM_EMAIL, FIRM_EMAIL, FIRM_TWILIO_NUMBER, and FIRM_BOOKING_URL (and optionally FIRM_SLACK_WEBHOOK_URL).
2. Add credentials for Twilio (Account SID/Auth Token) and an SMTP email account, and ensure DUTY_ATTORNEYS entries include valid attorney email addresses.
3. Deploy and activate the Bar-Compliance Guardrail workflow and set its numeric workflow ID in GUARDRAIL_WORKFLOW_ID.
4. Activate this workflow, copy the webhook Production URL, and paste it into your form builder’s webhook/integration settings to send submissions to /new-lead.

## 🔗 Nodes Used

Send Email, HTTP Request, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
