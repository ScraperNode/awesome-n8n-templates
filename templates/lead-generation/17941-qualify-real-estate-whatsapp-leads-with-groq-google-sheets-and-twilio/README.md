# 🎣 Qualify real estate WhatsApp leads with Groq, Google Sheets, and Twilio

> ⚡ **62 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures real estate leads from a Lovable webhook, stores them in Google Sheets, qualifies them via a Groq-powered AI agent, and uses Twilio WhatsApp messaging to route HOT/WARM/COLD leads into agent assignment, property matching, and nurture follow-ups.

## How it works
1. Receives a POST webhook request from a Lovable form submission and responds with “OK”.
2. Appends the incoming lead details to a Google Sheets “Leads” sheet.
3. Sends an initial WhatsApp greeting via Twilio and passes the message to an AI agent using Groq with conversation memory.
4. Extracts the AI reply and parses an embedded JSON block to determine whether the lead is qualified and what score/criteria (intent, budget, location, timeline) were captured.
5. If qualified, sends the AI’s reply to the lead via Twilio and updates the lead record in Google Sheets with the extracted qualification fields, score, and probability/value.
6. Routes qualified leads by score: HOT assigns an available agent from Google Sheets and notifies them plus sends a 1-hour reminder, WARM sends day 1 and day 5 follow-ups after a 2-day wait, and COLD sends a nurture message.
7. For HOT leads, also loads properties from Google Sheets, matches up to three listings to the lead’s budget and location, and sends an intro plus property cards and booking message via Twilio before updating the lead stage in Google Sheets.

## Setup
1. Create and publish the Lovable form/webhook integration, then copy the n8n webhook URL for the `real-estate-lead` path into Lovable.
2. Connect Google Sheets OAuth credentials and update the spreadsheet ID and sheet names/IDs for the Leads, Agents, and Properties reads/writes.
3. Connect Twilio credentials and configure a WhatsApp-enabled Twilio sender plus the message “to”/“from” fields used in each Twilio message step.
4. Add Groq credentials for the LangChain Groq Chat Model and adjust the AI agent system instructions if you want different qualification rules or output JSON fields.
5. Ensure your Google Sheets tabs include the columns referenced by the workflow (for example Availability/Lead Count/Agent Name/Phone in Agents, and Price (₦)/Location/Image URL/WhatsApp Link in Properties).

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
