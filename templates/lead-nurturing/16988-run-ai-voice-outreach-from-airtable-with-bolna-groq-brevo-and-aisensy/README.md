# 💬 Run AI voice outreach from Airtable with Bolna, Groq, Brevo and AiSensy

> ⚡ **10 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily and pulls outreach contacts from Airtable, calls each coordinator using Bolna.ai, and analyzes the call transcript with Groq. Based on the outcome, it sends tailored follow-up emails via Brevo and updates call status, last-called date, and attempt count back in Airtable.

## How it works
1. Runs every day at 11 AM IST on a schedule.
2. Searches Airtable for contact records that have a coordinator phone number and processes them one by one.
3. Skips contacts that were called in the last 3 days or are already marked Interested, Not Interested, or Dead Contact.
4. Places an outbound AI voice call through Bolna.ai, waits 180 seconds, and then fetches the call status and transcript from Bolna.
5. If the call is answered (a transcript exists), sends the transcript to Groq (Llama 3.3) to classify the outcome as Interested or Not Interested.
6. Sends the matching follow-up email via Brevo and updates the Airtable record with the outcome, last-called date, and incremented call attempts.
7. If the call is not answered, sends a “No Answer” email via Brevo and updates Airtable on the first attempt, or sends a final “Dead Contact” email and marks the record Dead Contact on the second failed attempt.

## Setup
1. Connect Airtable (personal access token) and replace the base ID, table name/ID, and Airtable record update URLs with your own base/table values.
2. Add Bolna.ai API credentials (HTTP Header Auth) and set your Bolna agent ID in the call placement and call status request URLs.
3. Add a Groq API key and replace `YOUR_GROQ_API_KEY` in the Authorization header for the transcript analysis request.
4. Add your Brevo API key and verified sender email, then replace `YOUR_BREVO_API_KEY` and `YOUR_SENDER_EMAIL` in all Brevo email requests.
5. Ensure your Airtable table includes fields used by the workflow (at least Coordinator Name/Phone/Email, College Name, Call Status, Last Called, and Call Attempts) and store phone numbers in international format (for example, +919876543210).

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
