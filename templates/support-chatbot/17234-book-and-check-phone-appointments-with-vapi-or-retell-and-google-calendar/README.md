# 💬 Book and check phone appointments with Vapi or Retell and Google Calendar

> ⚡ **155 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes a webhook for a Vapi or Retell voice agent to check Google Calendar availability or book an appointment, then returns a short, spoken-friendly reply for the agent to read to the caller.

## How it works
1. Receives a POST request from your Vapi/Retell voice agent via a webhook with an action, caller details, and a requested start time.
2. Loads business settings (business name, Google Calendar ID, and appointment slot length) and calculates the appointment end time from the start time.
3. Routes the request based on whether the action is to check availability or book an appointment.
4. For availability checks, queries Google Calendar free/busy for the requested time window and builds a confirmation or rejection sentence.
5. For bookings, creates a Google Calendar event for the requested time and includes the caller’s name and phone in the event details, then builds a booking confirmation sentence.
6. If the action is missing or unrecognized, returns a fallback prompt asking the caller to clarify.
7. Responds to the webhook with JSON containing the reply text for the voice agent to speak back to the caller.

## Setup
1. Add a Google Calendar credential in n8n.
2. Update the business name, calendar ID, and slot length in the “Your Settings (EDIT ME)” step to match your scheduling rules.
3. Activate the workflow, copy the webhook URL, and configure your Vapi/Retell tool to POST JSON containing action (check/book), name, phone, and start (ISO datetime).

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
