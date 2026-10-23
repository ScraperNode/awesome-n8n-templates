# 🎣 Qualify inbound leads with Vapi voice AI and log results to Google Sheets

> ⚡ **383 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for

Agencies, sales teams, and service businesses who want to instantly qualify inbound leads with an AI-powered phone call — no manual follow-up needed.

## What it does

This workflow captures leads via a web form, validates their phone number, and immediately triggers an AI voice call through Vapi. The AI assistant qualifies the lead through a natural conversation, extracting structured data about service interest, motivation, urgency, budget, and intent. Everything gets logged to Google Sheets.

1. **Captures** lead info via a web form (name, phone, email, company, role, request, company size)
2. **Validates** the phone number format (US 10-digit) and logs invalid numbers separately
3. **Calls** the lead instantly via Vapi AI voice assistant
4. **Polls** until the call completes, handling voicemails and completed calls differently
5. **Logs** results to Google Sheets with AI-extracted qualification insights

## How to set up

1. Create a Vapi account and configure a voice assistant with structured outputs for: Service Interest, Motivation, Urgency, Past Experience, Budget, Intent
2. Create a Google Sheet with these headers: `Date` · `Name` · `Phone` · `Email` · `Company` · `Role` · `Request` · `Company Size` · `Service Interest` · `Motivation` · `Urgency` · `Past Experience` · `Budget` · `Intent?` · `Status`
3. Replace `YOUR_VAPI_ASSISTANT_ID` and `YOUR_VAPI_PHONE_NUMBER_ID` in the **Call Lead** node's JSON body
4. Replace the `YOUR_*_UUID` placeholders in the **Log Complete** node with your Vapi structured output UUIDs
5. Paste your Google Sheet URL into all three Google Sheets nodes
6. Connect Bearer Auth (Vapi API key) and Google Sheets credentials
7. Activate the workflow and share the form URL

## Requirements

- n8n account (cloud or self-hosted)
- Vapi account with a configured voice assistant and phone number
- Google Sheets (one sheet with the column headers above)

## How to customize

- Edit the form fields to match your intake needs
- Adjust the Vapi assistant prompt for your industry and qualification criteria
- Change the initial wait time (default 60s) based on your typical call length
- Add email or Slack notifications when high-intent leads are detected

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
