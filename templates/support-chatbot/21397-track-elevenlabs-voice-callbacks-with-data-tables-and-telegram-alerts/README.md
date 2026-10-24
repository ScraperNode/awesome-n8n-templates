# 💬 Track ElevenLabs voice callbacks with data tables and Telegram alerts

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
For small businesses that use an ElevenLabs voice agent as an AI receptionist: every call is verified, logged once in a Data Table and sent to Telegram with Called back / No answer / Spam buttons, open callbacks get timed reminders, and a daily report shows who is still waiting.

## How it works
1. **Verify:** ElevenLabs sends a post-call webhook. The `ElevenLabs-Signature` HMAC is checked against the raw body with the Crypto node; forged or old requests get 401.
2. **Log:** caller, phone, reason, topic, urgency and summary are saved once per conversation in an n8n Data Table. Topics you list as spam are stored without an alert. If saving fails, you still get a Telegram alert with the caller's details.
3. **Act from Telegram:** each alert has three buttons. They are signed links to a second webhook that update the call (status, attempts, time handled), edit the original message and show a short confirmation page.
4. **Remind:** every 15 minutes, open callbacks that waited too long get a new alert. Urgent calls are reminded sooner, "no answer" calls are retried later, only during working hours and up to a maximum number of reminders.
5. **Report:** every day at 18:00 you get the day's calls, topics, callbacks, average wait and the oldest open callers.
6. Failed outbound calls are logged and alerted too.

## Setup
1. Execute *Run once: create the callbacks table*.
2. Add Data collection items to your ElevenLabs agent: `caller_name`, `reason`, `callback_number`, `urgency`, `callback_time`, `topic`.
3. Publish the workflow and add the production URL of *Receive ElevenLabs post-call webhook* as a post-call webhook in ElevenLabs.
4. Create a Crypto credential with the webhook HMAC secret and a Telegram credential.
5. In **Settings**, set your chat ID, the production URL of *Receive callback action link* and your timezone. About 20 minutes.

## Requirements
- An ElevenLabs Agents account with post-call webhooks
- A Telegram bot and your chat ID
- n8n with Data Tables, reachable over HTTPS (n8n Cloud or self-hosted with a public URL)

## Customization
- Change reminder times, working hours, maximum reminders and spam topics in **Settings**.
- Replace Telegram with Slack or email, or add a Google Calendar task for urgent callbacks.
- Use the Data Table as a simple CRM, or export it for reporting.

## Additional info
### Who's it for
Service businesses, clinics, workshops and agencies whose phone is answered by an ElevenLabs voice agent when nobody can pick up. The agent takes the message; this workflow makes sure somebody actually calls back.

### Good to know
- The topic and urgency come from ElevenLabs' own AI analysis (Data collection), so no extra LLM key is needed.
- Anyone with a button link can change that one call's status; links are signed per conversation and cannot be guessed.

## 🔗 Nodes Used

Webhook, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
