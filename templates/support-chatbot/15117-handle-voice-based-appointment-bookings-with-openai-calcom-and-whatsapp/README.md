# 💬 Handle voice-based appointment bookings with OpenAI, Cal.com and WhatsApp

> ⚡ **202 views** · 💬 [Support Chatbots](../)

## Description

This workflow handles incoming voice calls or audio messages, transcribes them using Whisper (OpenAI) or ElevenLabs, extracts booking intent and preferred time slots using AI, checks availability on Cal.com or Google Calendar, books the appointment automatically, and sends a confirmation via WhatsApp, SMS, or Email.

### Who's it for
• Service businesses (clinics, salons, consultants, coaches)
• Solopreneurs who want a 24/7 voice booking assistant
• Teams that receive appointment requests via phone/WhatsApp voice notes

### How it works / What it does
1. Receives incoming voice call or audio file via Webhook
2. Transcribes audio using OpenAI Whisper or ElevenLabs STT
3. AI extracts booking intent: name, date, time, service type
4. Validates and normalizes extracted date/time
5. Checks real-time availability on Cal.com or Google Calendar
6. If slot is free → books the appointment automatically
7. If slot is taken → AI suggests next 3 available slots
8. Generates a voice or text confirmation response
9. Sends confirmation via WhatsApp, SMS, or Email
10. Logs all bookings to Google Sheets

### How to set up
1. Import this workflow into n8n
2. Configure credentials: OpenAI (Whisper), Cal.com API, Google Calendar, Twilio, SendGrid
3. Update your business name, services list, and timezone
4. Point your phone/WhatsApp webhook to the n8n webhook URL
5. Activate workflow

### Requirements
• OpenAI API key (Whisper STT + GPT for intent extraction)
• Cal.com API key OR Google Calendar OAuth
• Twilio account (WhatsApp / SMS confirmation)
• SendGrid (email confirmation, optional)
• Google Sheets (booking log)

### How to customize
• Swap Whisper with ElevenLabs STT in the transcription node
• Add service-specific booking rules in the AI Extraction node
• Change confirmation channel in the Set Preferences node
• Extend slot suggestion logic in the JS Availability node

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
