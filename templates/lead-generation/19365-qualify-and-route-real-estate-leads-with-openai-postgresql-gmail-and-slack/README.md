# 🎣 Qualify and route real estate leads with OpenAI, PostgreSQL, Gmail and Slack

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow receives real estate leads via a webhook, validates the data, stores it in PostgreSQL, scores and classifies the lead with OpenAI, assigns an agent by location, then sends customer confirmations via Twilio and Gmail and alerts the sales team in Slack for high-priority leads.

## How it works
1. Receives a POST webhook request containing lead details from a website or form.
2. Extracts the lead fields and rejects the request with an error response if email, phone, or budget is missing or invalid.
3. Inserts the validated lead into a PostgreSQL `leads_tracking` table and sends the lead details to OpenAI to generate a lead score, lead type (HOT/WARM/COLD), and reasoning.
4. Parses the OpenAI JSON response, combines it with the original lead data, and assigns a sales agent based on the lead’s location.
5. Updates the same PostgreSQL lead record with the AI score, lead type, assigned agent, and reasoning.
6. If the lead score is above 80, sends an SMS via Twilio, sends a confirmation email via Gmail, posts a hot-lead alert to a Slack channel, and returns a success response to the webhook caller.
7. Waits for the configured delay and then sends a Gmail follow-up reminder email to the lead.

## Setup
1. Copy the webhook URL from the Webhook trigger and configure your website/form to POST `name`, `email`, `phone`, `budget`, `property_type`, `location`, and `message` to it.
2. Add PostgreSQL credentials and ensure a `public.leads_tracking` table exists with the columns used by the insert/update steps (including `lead_score`, `lead_type`, `assigned_agent`, and `message`).
3. Add an OpenAI API credential and confirm the selected model (gpt-4o-mini) is available in your account.
4. Add Gmail OAuth credentials for sending the confirmation and follow-up emails.
5. Add Twilio credentials and replace `Your_Phone_Number` and the `from` value with a valid Twilio sender/WhatsApp-enabled number.
6. Add Slack credentials and set the target channel for hot lead notifications.

## 🔗 Nodes Used

Postgres, Slack, Twilio, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
