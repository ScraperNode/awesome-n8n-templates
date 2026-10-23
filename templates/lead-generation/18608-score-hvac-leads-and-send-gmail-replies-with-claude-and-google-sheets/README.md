# 🎣 Score HVAC leads and send Gmail replies with Claude and Google Sheets

> ⚡ **72 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures HVAC leads from a Tally form webhook, normalizes the submission data, uses Anthropic Claude to score and draft a reply, emails the lead and your sales team via Gmail, logs/deduplicates the lead in Google Sheets, and sends scheduled follow-ups unless the lead is marked booked.

## How it works
1. Receives a Tally form submission via a webhook.
2. Normalizes the submitted fields into a consistent lead record (name, email, phone, service type, urgency, message, response ID) and cleans email/phone formatting.
3. Sends the lead details to Anthropic Claude to classify the lead (hot/warm/cold) and generate a short personalized reply email, then parses the JSON result.
4. Sends the drafted reply to the lead via Gmail, using a separate route for hot leads versus standard leads.
5. Emails a formatted lead brief (including the AI score, signals, and the sent email copy) to your sales team via Gmail.
6. Searches Google Sheets for an existing lead by email or phone and updates the matching row or appends a new row to log the lead.
7. Waits two days, checks the lead’s status in Google Sheets by response ID, and sends a Day 2 follow-up email via Gmail if the status is not “Booked”.
8. Optionally waits three more days and repeats the status check to send a Day 5 follow-up, while a separate booking webhook updates the Google Sheets row to “Booked” to stop further follow-ups.

## Setup
1. Create and connect credentials for Anthropic, Gmail (OAuth2), and Google Sheets (OAuth2) in n8n.
2. In all Google Sheets nodes, replace `YOUR_GOOGLE_SHEET_ID` and ensure your sheet has the required columns (including Email, Phone, Response ID, and Status).
3. Set the sales notification recipient by updating the “Send Lead Brief to Sales” Gmail node’s `sendTo` value.
4. Copy the production webhook URLs for `/hvac-speed-to-lead` (Tally submissions) and `/hvac-lead-booked` (booking confirmations) and configure them in Tally and your booking system.
5. If you use deduplication, set the Google Sheets search to combine filters with OR (email OR phone) so existing leads are found and updated correctly.

## Requirements
- Anthropic (Claude) API account
- Gmail account (OAuth2)
- Google Sheets account (OAuth2)
- Tally form (or any webhook-capable form tool)

## Customization
- Swap the scoring prompt for another trade (plumbing, roofing, etc.), adjust the Hot/Warm/Cold scoring criteria, or change the Day 2/Day 5 follow-up timing.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
