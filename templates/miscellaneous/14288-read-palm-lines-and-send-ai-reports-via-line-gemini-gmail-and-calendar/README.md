# 🔧 Read palm lines and send AI reports via LINE, Gemini, Gmail and Calendar

> ⚡ **152 views** · 🔧 [Miscellaneous](../)

## Description

# Template description (paste this into the n8n Creator Dashboard)

---

## Who is this for

This workflow is for anyone who wants to offer a fun, automated palm reading experience through LINE — Japan's dominant messaging app with over 90 million active users. It suits indie developers, wellness creators, fortune-telling services, or anyone curious about combining AI vision with multi-channel automation.

## What this workflow does

When a user sends a photo of their palm via LINE, the workflow springs into action across five tools:

1. **LINE Messaging API** receives the image via webhook
2. **Google Gemini** analyzes the palm and produces three outputs: a short LINE-ready summary (under 100 characters), a full reading covering the life line, heart line, head line, and fate line, and three lucky day suggestions with reasons
3. **LINE reply** sends the short summary back to the user instantly
4. **Gmail** delivers a formatted HTML report with the complete reading to a specified address
5. **Google Calendar** registers the three lucky days as calendar events so the user never forgets them

Non-image messages (text, stickers) are caught early and trigger a friendly prompt asking the user to send a palm photo instead.

## How to set up

1. Open the **Set config variables** node and fill in your `LINE_CHANNEL_ACCESS_TOKEN`, `GMAIL_FROM`, `GMAIL_TO`, and `GOOGLE_CALENDAR_ID`
2. Connect your **Google Gemini API** credential to the Google Gemini Chat Model node
3. Connect your **Gmail OAuth2** credential to the Gmail node
4. Connect your **Google Calendar OAuth2** credential to the Calendar node
5. Activate the workflow and copy the webhook URL
6. Paste the webhook URL into your LINE Developer Console under the Messaging API channel settings

## Requirements

- LINE Developer account and a Messaging API channel (free)
- Google Gemini API key (free tier available at Google AI Studio)
- Gmail account with OAuth2 set up in n8n
- Google Calendar with OAuth2 set up in n8n

## How to customize

- **Change the reading language**: edit the prompt in the **Analyze palm lines with Gemini** node — swap English for Japanese, Spanish, or any language Gemini supports
- **Adjust the report destination**: update `GMAIL_TO` in the config node to send the report to the user's own address (you could collect it via a prior LINE conversation)
- **Change lucky day timing**: the Calendar node currently schedules events starting 7 days from now — adjust the `$now.plus()` expression to fit your use case
- **Extend the AI prompt**: add astrology, tarot, or numerology sections to the Gemini prompt for a richer reading experience

## 🔗 Nodes Used

HTTP Request, Webhook, Google Calendar, Gmail, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
