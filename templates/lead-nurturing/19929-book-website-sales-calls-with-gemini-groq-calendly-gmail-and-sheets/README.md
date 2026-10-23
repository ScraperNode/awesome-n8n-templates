# 💬 Book website sales calls with Gemini, Groq, Calendly, Gmail and Sheets

> ⚡ **35 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow powers a website booking chatbot that uses Google Gemini (with Groq fallback) to qualify visitors, fetch available times from Calendly, and book meetings via the Calendly API, while logging leads to Google Sheets and notifying you via Gmail and Lark.

## How it works
1. Receives each website chat message via a webhook, including the conversation history and state from the previous turn.
2. Builds a step-specific prompt and sends it to Google Gemini to generate a concise reply, falling back to Groq if Gemini fails or returns empty text.
3. Parses the AI reply to extract hidden JSON commands (for fetching slots, selecting a time, or capturing contact/details) and decides the next action.
4. When the visitor agrees to book, requests available times from the Calendly API and returns three suggested weekday slots to the chat.
5. After the visitor chooses a slot and provides name and email, creates the meeting via the Calendly API and replies with the confirmation plus reschedule/cancel links.
6. Logs booked leads (and booking failures) to Google Sheets and sends notifications to the owner via Gmail and the team via a Lark webhook.
7. After booking, captures the visitor’s website (or company name and monthly revenue if no website) and updates the booked lead record in Google Sheets, then emails the added details.

## Setup
1. Add credentials for Google Gemini (Google PaLM API), Groq, Gmail, Google Sheets, and a Calendly API token configured as HTTP Header Auth.
2. Update the Workflow Configuration values, especially your Calendly event type URI, time zone/hours window, business facts, owner email, and Lark webhook URL.
3. Create a Google Sheets spreadsheet with “Booked Leads” and “Follow Up” tabs (and matching columns), then select the document and sheet names in the Google Sheets nodes.
4. Copy the production webhook URL and configure your website chat widget to POST `message` and `history` and to echo back the prior response state (`slotsOffered`, `meetingBooked`, `leadInfo`, `cancelUrl`, `rescheduleUrl`, and `availableWindowText`).

## Requirements
- Calendly account with API access and one event type
- Google Gemini API key
- Groq API key (used as fallback)
- Google Sheets and Gmail accounts

## Customization
- Change booking hours and timezone in the Set Workflow Parameters node
- Edit the step prompts in the Generate AI Prompt node
- Swap the Lark nodes for Slack or Microsoft Teams

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
