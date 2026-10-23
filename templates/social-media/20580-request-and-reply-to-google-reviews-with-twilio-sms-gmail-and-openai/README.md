# 📱 Request and reply to Google reviews with Twilio SMS, Gmail, and OpenAI

> ⚡ **32 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Local service businesses — plumbers, clinics, salons, contractors, restaurants — that live or die by Google reviews but never remember to ask, and agencies that want a review engine they can deploy for clients.

## How it works
1. Three lanes. (1) Review requests: every day at 6 PM the workflow pulls today's completed jobs from Google Sheets, filters for customers with a mobile number who have not been asked in 90 days, texts them your Google review link via Twilio, waits 5 days, then sends one gentle reminder if no review appeared. Every ask and reminder is logged.
2. (2) Review monitoring: every 6 hours it polls for new Google reviews; an AI agent drafts a reply to each one, emails the draft to the owner, and queues it in the PendingReplies tab.
3. (3) Post approved replies: every morning at 9 AM it reads the PendingReplies tab and posts the rows the owner marked Approved, then logs them. Nothing ever posts without human approval.
4. Filters the fetched reviews to only those newer than the last check time, then uses OpenAI to draft a 2–3 sentence reply for each review.
5. Appends each draft to the PendingReplies tab in Google Sheets and emails the draft to the owner via Gmail for manual approval.
6. Runs daily at 9 AM, reads PendingReplies from Google Sheets, posts replies for rows marked Approved to the Google Business Profile API, and logs the posted reply to the ReviewLog tab.

## Setup
1. Connect your own Twilio, Google Sheets and Gmail credentials (all slots are placeholders — none are included).
2. Fill the three CONFIG nodes (business name, Google review link, owner phone/email, Twilio number, tracker sheet ID).
3. Create Google Sheets tabs named Jobs, ReviewLog, PendingReplies and State.
4. Edit both HTTP nodes with your real Google Business Profile endpoint + credentials; activate the workflow.

## Requirements
- A Twilio account with a phone number, a Google account (Sheets + Gmail), an OpenAI API key, and access to your Google Business Profile (for reading and replying to reviews).

## Customization
- Change the ask/reminder timing and the 90-day cooldown in the Schedule and Wait nodes, edit the SMS copy in the Twilio nodes, adjust the AI reply tone in the agent's system prompt, or add a second review site (Yelp, Facebook) alongside Google.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
