# 💬 Recover abandoned quotes with GPT-4o mini, Gmail, Twilio and Google Sheets

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to find open quotes in Google Sheets that are due for follow-up, re-checks their status via an HTTP call to your CRM, generates a message with OpenAI, sends the follow-up by Gmail or Twilio SMS, and logs each touch back to Google Sheets.

## How it works
1. Runs every day at 10:00 AM on a schedule.
2. Reads the Quotes tab in Google Sheets and selects open, non-opted-out quotes that are due for the next touch based on sent date and touch count (day 2 email, day 7 SMS, day 14 final SMS).
3. Calls your CRM/quoting system over HTTP to confirm each quote is still open before sending a follow-up.
4. If the quote is still open, uses OpenAI to generate the appropriate email or SMS follow-up text in your business voice.
5. Sends the message via Gmail for the first touch or via Twilio SMS for later touches.
6. Appends a record of the touch to the Touches tab in Google Sheets, and logs quotes found closed to the ClosedLog tab.

## Setup
1. Add credentials for Google Sheets OAuth2, OpenAI API, Gmail OAuth2, and Twilio.
2. Update the CONFIG values for business name, Twilio sending number, and the target Google Sheet ID.
3. Create a Google Sheet with tabs named Quotes, Touches, and ClosedLog, and ensure Quotes includes fields like quote_id, sent_date, touch_count, status, opted_out, email, and phone.
4. Replace the HTTP request URL (and authentication if needed) to point to your CRM/quoting tool’s endpoint that returns the current quote status.

## Requirements
- An OpenAI API key, a Google account (Sheets + Gmail), a Twilio account with a phone number, and a CRM or quoting tool you can query over HTTP.

## Customization
- Change the touch schedule (day 2/7/14) and channels in the filter and IF nodes, rewrite the follow-up voice in the agent's system prompt, add a fourth touch or a discount offer on the final SMS, or route replies into your inbox for manual close.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
