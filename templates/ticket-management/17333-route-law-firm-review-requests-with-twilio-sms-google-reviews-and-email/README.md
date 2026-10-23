# 🎫 Route law firm review requests with Twilio SMS, Google Reviews and email

> ⚡ **20 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow uses webhooks, Twilio SMS, SMTP email, and a Bar-Compliance Guardrail sub-workflow to request client ratings 48 hours after matters close. It routes replies so 4–5 star clients get a Google Reviews link, while 1–3 star clients receive a private feedback form and trigger firm alerts.

## How it works
1. Receives a matter-close event via a webhook from your practice management system.
2. Normalizes the payload, verifies the matter is actually closed and a client phone number exists, and stops if the event is not eligible.
3. Builds a rating-request SMS from project variables and waits 48 hours before sending.
4. Runs the message through the Bar-Compliance Guardrail to check opt-outs and log the outbound message, then sends the rating request via Twilio and emails the firm a confirmation.
5. Receives the client’s inbound Twilio reply via a second webhook, extracts a 1–5 rating (ignoring opt-outs and non-rating texts), and routes based on the score.
6. For 4–5 ratings, runs a compliance check and texts the Google Reviews link; for 1–3 ratings, runs a compliance check, texts a private feedback form link, and emails the firm an immediate alert.

## Setup
1. Create and connect Twilio credentials in n8n, and configure your Twilio number’s “When a message comes in” webhook to POST to the workflow’s /webhook/review-reply URL.
2. Create and connect an SMTP email credential, and set project variables for FIRM_EMAIL and FIRM_FROM_EMAIL so firm notifications send correctly.
3. Set project variables for FIRM_NAME, FIRM_TWILIO_NUMBER, FIRM_GOOGLE_REVIEW_URL, and FIRM_FEEDBACK_URL to populate the outbound SMS content.
4. Set up the Bar-Compliance Guardrail workflow and add its workflow ID to the GUARDRAIL_WORKFLOW_ID project variable so opt-out checks and compliance logging run before every message.
5. Copy the /webhook/review-request production URL into your practice management system webhook settings and ensure it sends matter status, client name, and client phone (plus matter identifiers) on closure events.
6. If self-hosting, use Postgres (not SQLite) so the 48-hour wait can resume reliably after restarts.

## 🔗 Nodes Used

Send Email, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
