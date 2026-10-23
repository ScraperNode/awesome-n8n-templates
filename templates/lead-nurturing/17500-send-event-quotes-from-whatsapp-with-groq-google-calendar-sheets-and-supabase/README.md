# 💬 Send event quotes from WhatsApp with Groq, Google Calendar, Sheets and Supabase

> ⚡ **73 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow responds to incoming WhatsApp inquiries by extracting event details with Groq, checking availability in Google Calendar, looking up rates in Google Sheets, and then sending either a quote or a date-conflict reply, while logging each inquiry to Supabase.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Uses Groq to extract the event date, event type, and guest count from the message in a structured format.
3. Checks Google Calendar for any events on the requested date and aggregates the results.
4. Reads pricing tiers from a Google Sheets “Pricing” tab and aggregates all rows for matching.
5. Combines calendar and pricing data, determines whether the date is free, selects the first matching price tier by event type and max guest limit, and calculates the deposit amount.
6. Sends a WhatsApp quote if the date is available, or a WhatsApp message requesting an alternate date if it is already booked.
7. Inserts the inquiry outcome (quoted or date conflict) into a Supabase table for tracking.

## Setup
1. Connect WhatsApp Business Cloud API credentials for the WhatsApp trigger and send message actions, and set your WhatsApp phone number ID.
2. Add a Groq API credential for the AI extraction step.
3. Connect Google Calendar OAuth credentials and provide the target calendar ID.
4. Connect Google Sheets OAuth credentials, set the spreadsheet ID, and create a “Pricing” sheet with columns event_type, max_guests, and price.
5. Connect Supabase credentials and create a table (for example, vendor_inquiries) that can store the inquiry fields and status.
6. Update the configuration values (vendor name, calendar ID, sheet ID, Supabase table name, and deposit percentage) before activating the workflow.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Supabase, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
