# 💬 Dental clinic appointment & admin system with Supabase, phone integration & AI

> ⚡ **1,375 views** · 💬 [Support Chatbots](../)

## Description

## Dental Clinic Automation: Scheduling, Availability & Patient Lookup
This workflow automates dental appointment management through a phone-based assistant. It listens for requests like booking, rescheduling, canceling, checking insurance, looking up appointments, and finding available time slots. Each request is processed through a Switch node and then routed to your Supabase database for action.

## How it works
Once a request is received, the workflow uses the patient’s phone number to identify them. Then, it:
- Booking: Checks for available time, creates or retrieves the patient record, and stores the appointment.
- Rescheduling: Confirms the new date, avoids double-booking, and updates the record.
- Canceling: Removes the appointment and sends a confirmation.
- Insurance: Looks up the member ID and provides a status (accepted or not).
- Availability: Finds the doctor’s existing appointments and generates available 60-minute slots.
- Appointment & doctor lists: Retrieves and presents clean, structured information for the assistant.
Each action ends with a webhook response that the phone system reads back to the patient.

## Setup steps
1. Add your Supabase credentials to the Supabase nodes.
2. Connect your phone/voice system to the webhook URL.
3. Ensure Supabase table and column names match the workflow.
4. Test all actions (booking, rescheduling, canceling, etc.) before going live.

## Customization tips (optional)
You can update working hours, appointment durations, or add new services by modifying the availability logic or Switch node routing.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, OpenAI Chat Model, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
