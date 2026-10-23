# 🎫 Route urgent Gmail support emails and WhatsApp digests with Groq and Supabase

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox, uses Groq LLM classification to label each support email as urgent, routine, or spam, logs the result to Supabase, sends immediate WhatsApp alerts for urgent messages, and delivers a daily WhatsApp digest summarizing routine emails.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Uses Groq (via an LLM prompt) to classify the email as urgent, routine, or spam and generate a one-sentence summary and reason.
3. Inserts the email metadata, category, and summary into a Supabase table for tracking.
4. Sends an immediate WhatsApp message to the support owner when the email is classified as urgent and updates the Supabase record to reflect it was notified.
5. Runs on a daily schedule to fetch all routine emails in Supabase that have not yet been included in a digest.
6. Aggregates those routine emails into a single WhatsApp digest message, sends it to the support owner, and marks the included Supabase records as digested.

## Setup
1. Connect Gmail OAuth2 credentials and ensure the trigger watches the support inbox/labels you want monitored.
2. Add Groq API credentials for the chat model used to classify and summarize emails.
3. Add Supabase credentials and create a table (for example, `support_emails`) with fields for subject, sender, category, summary, digest_sent (boolean), and created_at.
4. Add WhatsApp Business Cloud API credentials and fill in your WhatsApp phone number ID and the owner’s recipient number in both WhatsApp send steps.
5. Update the Supabase table name and adjust the daily schedule time (hour) to match when you want the routine digest sent.

## 🔗 Nodes Used

Supabase, Gmail Trigger, WhatsApp Business Cloud, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
