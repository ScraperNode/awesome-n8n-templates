# 💬 Run AI voice outreach from Airtable with Bolna, Groq, Brevo and Twilio

> ⚡ **38 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs daily to pull contacts from Airtable, place outbound AI voice calls via Bolna.ai, analyze call transcripts with Groq, then send follow-up emails through Brevo and (for interested contacts) a WhatsApp message via Twilio, while updating call status and attempts back in Airtable.

## How it works
1. Runs on a daily schedule and searches Airtable for contact records to call.
2. Iterates through contacts and skips anyone called recently or already marked as Interested, Not Interested, or Dead Contact.
3. Places an outbound call with Bolna.ai for each remaining contact and waits briefly for the call to complete.
4. Fetches the call result from Bolna.ai and checks whether a transcript exists to determine if the contact picked up.
5. If the call is picked up, sends the transcript to Groq to classify the outcome as Interested or NotInterested.
6. If Interested, sends a partnership email via Brevo, sends a WhatsApp message via Twilio, and updates the Airtable record with status, last-called date, and attempt count.
7. If NotInterested, sends a reassurance email via Brevo and updates the Airtable record accordingly, and if there is no pickup, sends a first follow-up email or marks the contact as Dead Contact (second failed attempt) and updates Airtable.

## Setup
1. Connect Airtable (API key or personal access token), set your base ID/table name in the Airtable requests, and ensure fields exist for Coordinator Name, Coordinator Phone, Coordinator Email, College Name, Call Status, Call Attempts, Last Called, and a record id.
2. Add Bolna.ai credentials (HTTP Header Auth), set your Bolna agent ID, and ensure phone numbers in Airtable are stored in international format (for example, +919876543210).
3. Add your Groq API key and confirm the model and prompt match your desired classification labels (Interested vs NotInterested).
4. Add your Brevo API key and update the sender name/email, website link, and email templates used for Interested, Not Interested, No Answer, and Dead Contact outcomes.
5. Add Twilio credentials and configure a WhatsApp-enabled From number and the correct recipient mapping in the Twilio request.
6. Adjust the schedule time zone/cron expression and the wait duration to match your calling window and typical call length.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
