# 💬 Manage dental appointments via ElevenLabs voice, OpenAI and Google Sheets

> ⚡ **81 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives appointment requests from a voice agent via webhook and uses OpenAI plus Google Sheets to book, reschedule, or cancel dental aAn AI dental receptionist that uses ElevenLabs, OpenAI, and Google Sheets to handle patient conversations and manage dental appointments automatically.ppointments, optionally sending confirmation emails through Gmail.

## How it works
1. Receives a POST webhook request (for example from an ElevenLabs voice agent) containing an `intent` and patient details.
2. Routes the request based on the `intent` value to booking, rescheduling, or cancellation handling.
3. For booking requests, an OpenAI agent checks existing appointments in Google Sheets, appends or updates the appointment row, and sends a confirmation email via Gmail.
4. For rescheduling requests, an OpenAI agent looks up existing appointments in Google Sheets and appends or updates the matching appointment with the new date and time.
5. For cancellation requests, an OpenAI agent searches Google Sheets for the matching appointment and deletes the relevant row(s).
6. Returns the workflow result back in the webhook response for the calling voice agent to relay to the patient.

## Setup
1. Configure the Webhook URL in your calling system (for example, set it as the endpoint in your ElevenLabs agent) and ensure it sends the expected JSON fields such as `intent`, `full_name`, and `phone_number`.
2. Add an OpenAI credential and select the models you want to use for the booking, rescheduling, and cancellation agents.
3. Add a Google Sheets credential and update the spreadsheet ID/sheet tab to point to your appointments sheet with columns like Full Name, Phone Number, Email, Preferred Date, Preferred Time, and Reason.
4. Add a Gmail credential and set the email inputs used by the workflow (recipient, subject, and message) for booking confirmations.
5. Review matching logic (for example, matching appointments by “Full Name”) and adjust it to a unique identifier if your sheet can contain duplicate names.

## Requirements
- ElevenLabs account
- OpenAI API access
- Google Sheets account
- n8n instance

## Customization
- Customize the AI receptionist instructions.
- Change the Google Sheets appointment structure.
- Add additional appointment actions or clinic-specific information.

## Additional info
This workflow is designed as a starting point for a dental clinic voice receptionist and can be extended with additional tools, notifications, and patient-management systems.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
