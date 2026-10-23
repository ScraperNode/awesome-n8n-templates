# 💬 Triage telehealth appointments with GPT-4o-mini, Telegram, Google Calendar

> ⚡ **71 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow collects telehealth appointment details via an n8n Form, uses OpenAI (GPT-4o-mini) to score no-show risk, then sends Telegram reminders and confirmations and updates Google Calendar based on the patient’s response, with Slack alerts on workflow errors.

## How it works
1. Receives a new appointment submission from an n8n Form with patient, appointment, and Telegram chat details.
2. Sends the appointment data to OpenAI (GPT-4o-mini) to generate a 0–100 no-show risk score and explanation.
3. Routes the flow based on the risk score, sending a single friendly Telegram reminder for low-risk patients.
4. For high-risk patients, sends escalating Telegram reminders and a final message that waits for a confirmation or cancellation reply.
5. If the patient cancels, creates a new “rescheduled” time slot in Google Calendar and sends the patient a Telegram reschedule acknowledgement.
6. If the patient confirms, updates the existing Google Calendar event to note the confirmation and sends a Telegram confirmation message.
7. If any step fails, posts an error notification to a Slack channel.

## Setup
1. Add credentials for OpenAI (Chat), Telegram Bot, Google Calendar OAuth2, and Slack OAuth2 used for error notifications.
2. Update the n8n Form path/fields as needed and ensure patients provide a valid Telegram Chat ID for messaging.
3. Replace the placeholder Google Calendar ID (for example, "your-calendar@example.com") and ensure your events have the correct Event ID available to update when confirming.
4. Review and adjust the high-risk threshold (default score ≥ 70) and the wait duration for patient replies to match your operational process.
5. Set the Slack channel target for error alerts and verify your workspace allows the app to post messages.

## 🔗 Nodes Used

Slack, Telegram, Google Calendar, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
