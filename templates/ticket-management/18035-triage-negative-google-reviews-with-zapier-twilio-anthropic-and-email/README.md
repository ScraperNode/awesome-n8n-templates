# 🎫 Triage negative Google reviews with Zapier, Twilio, Anthropic, and email

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives new Google Business Profile reviews via a webhook, filters for valid, non-duplicate 1–3 star reviews, then sends a Twilio SMS alert and uses Anthropic Claude to draft a compliance-safe public reply before emailing the firm and logging a compliance audit via an executed n8n workflow.

## How it works
1. Receives a new review payload via webhook (for example from Zapier’s Google Business Profile “New Review” trigger) and normalizes fields like review ID, rating, text, and reply URL.
2. Validates the payload and uses n8n workflow static data to skip malformed events and suppress duplicate alerts for the same review ID.
3. Checks the star rating and stops processing for 4–5 star reviews.
4. For 1–3 star reviews, builds an instant SMS alert plus an Anthropic Claude prompt that enforces public-response guardrails.
5. Sends the SMS alert to the firm through Twilio and calls the Anthropic Messages API to generate a short draft reply.
6. Parses Claude’s JSON output, performs an additional keyword-based compliance safety scan, and prepares an email with the review details and either the safe draft or a rewrite warning.
7. Executes a separate compliance-audit workflow to log the event and then sends the email notification to the firm via SMTP.

## Setup
1. Configure the webhook URL in your review source (for example, Zapier Webhooks POST from Google Business Profile) and ensure the payload uses the expected field names (review_id, reviewer_name, star_rating, review_text, review_url, location_name, created_at).
2. Add a Twilio credential in n8n and set Variables for FIRM_ALERT_PHONE, FIRM_TWILIO_NUMBER, and your firm identifiers used in alerts.
3. Add an Anthropic API key credential (HTTP Header Auth) and ensure the node can call https://api.anthropic.com/v1/messages with the required anthropic-version header.
4. Add an SMTP credential for outbound email and set Variables for FIRM_EMAIL and FIRM_FROM_EMAIL.
5. Create/enable the “Bar-Compliance Guardrail” (or equivalent) workflow, copy its workflow ID into the GUARDRAIL_WORKFLOW_ID Variable, and ensure your n8n instance allows workflow static data for deduplication.

## 🔗 Nodes Used

Send Email, HTTP Request, Twilio, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
