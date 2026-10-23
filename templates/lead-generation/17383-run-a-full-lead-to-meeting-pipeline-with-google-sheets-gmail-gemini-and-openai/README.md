# 🎣 Run a full lead-to-meeting pipeline with Google Sheets, Gmail, Gemini and OpenAI

> ⚡ **44 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures new leads via webhook, enriches and scores them with Apollo and Google Gemini, logs everything in Google Sheets, and automates outreach, reply handling, follow-ups, meeting prep, weekly reporting, and no-show re-engagement using Gmail, OpenAI, and Slack.

## How it works
1. Receives a new lead submission via a webhook, normalizes the fields, enriches the company using Apollo’s organization enrich API, and merges the firmographic data back into the lead.
2. Uses Google Gemini to score and tier the lead (hot/warm/poor_fit), parses the model output, and appends the lead record to a Google Sheets “leads” CRM tab.
3. Routes by tier to either generate a personalized first-touch message with Google Gemini and send it via Gmail and UltraMsg (WhatsApp/SMS-style HTTP API), or generate a polite decline with Google Gemini and email it via Gmail.
4. Logs sent outreach or declines to Google Sheets and updates the lead’s status in the “leads” tab so downstream automations can filter correctly.
5. Receives inbound replies via a webhook, looks up the lead in Google Sheets, classifies intent with OpenAI (book_meeting/objection/not_interested), and sends either a booking-link email, an AI-drafted objection response, or marks the lead closed lost while updating status in Google Sheets.
6. Runs scheduled automations to send up to three AI-written follow-up emails to non-responders, wait until the meeting time to post an AI-generated pre-call brief to Slack, publish a weekly conversion summary to Slack and a report sheet, and detect likely no-shows to email a re-engagement message.

## Setup
1. Create and connect credentials for Google Sheets OAuth2, Gmail OAuth2, Slack OAuth2, Google Gemini (PaLM) API, and OpenAI API.
2. Create a Google Sheets spreadsheet with tabs named leads, outreach_log, declined_leads, weekly_reports (and ensure the columns used for Status, Lead ID, Follow Up Count, Last Contacted At, and Meeting Time exist).
3. Update all Google Sheets nodes to use your spreadsheet ID instead of YOUR_GOOGLE_SHEET_ID and confirm each node points to the correct tab.
4. Configure the Apollo enrichment request by adding your API key in the HTTP header auth credential (or replace/disable the enrichment HTTP request node if you don’t use Apollo/Clearbit).
5. Replace the UltraMsg endpoint values (YOUR_INSTANCE_ID and YOUR_ULTRAMSG_TOKEN) and set the target Slack channel ID/name and booking link placeholder used in the booking-link email.
6. Copy and register the three webhook URLs (new-lead, inbound-reply, meeting-booked) in your lead form tool, inbound email/SMS parser, and booking tool (Calendly/Cal.com) respectively.

## Requirements
- ⚡ REQUIREMENTS:
- ✅ n8n account (free)
- ✅ Google Sheets (free)
- ✅ Apollo.io account (free tier available) (Paid for Enterprise Level Leads)
- ✅ Google Gemini AI (FREE from AI Studio!)
- ✅ Gmail account (free)
- 💡 Google Gemini and Open AI API is completely FREE from
- aistudio.google.com and GROQ— no credit card needed
- to get started!

## Additional info
💎 KEY FEATURES:
🔹 Automatic Lead Enrichment

Pulls real company data (industry, size) via Apollo API

🔹 AI Lead Scoring

Every lead scored 0-100, tiered Hot / Warm / Cold

🔹 Personalized Outreach

AI writes unique messages referencing each lead's

actual company and context — not copy-paste templates

🔹 Multi-Channel Delivery

Sends via email, with WhatsApp/SMS support built in

🔹 Intelligent Reply Classification

Understands booking confirmations, objections, and

declines — and routes each one correctly

🔹 Full CRM Logging

Every lead, score, and outcome saved to Google Sheets

automatically no manual data entry ever.

⚡ SMART REPLY HANDLING (The Game Changer!):

When a lead replies to your outreach:

1️⃣ AI reads their reply and classifies their intent

2️⃣ If they want to meet → sends them a booking link instantly

3️⃣ If they have concerns → AI drafts a tailored objection

response addressing their exact hesitation

4️⃣ If they're not interested → status updated, no wasted

follow-up

5️⃣ Every step logged — nothing falls through the cracks ✅

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
