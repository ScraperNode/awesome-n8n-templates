# 🎫 Route WhatsApp home-service requests by urgency with Groq, Supabase, and Sheets

> ⚡ **53 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow routes incoming WhatsApp home-service requests by using Groq to classify urgency and extract key details, logs every request to Supabase, and either alerts an on-call technician for emergencies or appends routine jobs to a Google Sheets queue while confirming the next steps to the customer.

## How it works
1. Triggers when a new WhatsApp message is received via WhatsApp Business Cloud.
2. Captures configuration values and pulls the customer’s message, name, and phone number from the inbound payload.
3. Uses Groq to extract issue type, location, and a short description, and to classify the request as “emergency” or “routine.”
4. Inserts the extracted request details into a Supabase table for record-keeping.
5. If the request is an emergency, sends a WhatsApp alert to the on-call technician and a confirmation message back to the customer.
6. If the request is routine, appends it to a Google Sheets service-queue row and sends the customer an acknowledgement with the expected response timeframe.

## Setup
1. Connect WhatsApp Business Cloud credentials for the WhatsApp Trigger and all WhatsApp send steps, and configure your WhatsApp webhook in Meta to point to the trigger URL.
2. Add a Groq API credential for the chat model used to extract and classify request details.
3. Add a Supabase credential and create a `service_requests` table (customer_name, customer_number, issue_type, location, description, urgency, created_at with default now()).
4. Add a Google Sheets OAuth credential and create a queue sheet with columns for status, location, issue_type, description, customer_name, and customer_number.
5. Update the workflow configuration values for your WhatsApp phone number ID, on-call technician number, Google Sheet ID and sheet name, and the routine response window (days).

## 🔗 Nodes Used

Google Sheets, Supabase, WhatsApp Business Cloud, Basic LLM Chain, Structured Output Parser, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
