# 💬 Manage medical appointment bookings and reminders with Google Sheets, Calendar, Gmail, and Supabase

> ⚡ **101 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow monitors a Google Sheets form response sheet for new patient appointment requests, checks availability in Google Calendar, creates confirmed appointments, stores booking details in Supabase, and sends confirmation and reminder emails via Gmail.

## How it works
1. Triggers every hour when a new row is added to the Google Sheets form responses sheet.
2. Normalizes the submitted patient details and combines the preferred date and time into an ISO appointment start datetime.
3. Checks the doctor’s Google Calendar for existing events in the requested 30‑minute time window.
4. If the slot is unavailable, sends an “Appointment Slot Unavailable” email via Gmail.
5. If the slot is available, creates the appointment event in Google Calendar and captures the calendar event ID.
6. Saves the appointment details (patient, doctor, time, symptoms, event ID, and status) to a Supabase table and sends a confirmation email via Gmail.
7. Waits until two hours before the appointment time, sends a reminder email via Gmail, and updates the Supabase record status to “Reminder Sent.”

## Setup
1. Connect Google Sheets credentials and select the spreadsheet and sheet that receives Google Form responses.
2. Connect Google Calendar credentials and choose the calendar where appointments should be checked and created.
3. Connect Gmail credentials and update the recipient fields and message templates for the unavailable, confirmation, and reminder emails.
4. Connect Supabase credentials, create a table (for example, “Appointment booking data”) with fields that match the workflow mappings, and update the table/field IDs if needed.
5. Verify the appointment duration and reminder timing logic (the calendar check uses a 30‑minute window and the reminder waits until two hours before the appointment).

## Additional info
## How To Customize Nodes

### Customize Appointment Duration

Modify the Google Calendar node:

*   Change 30-minute appointments
*   Create longer consultation slots
*   Add buffer time between appointments
    
### Customize Reminder Timing

Modify the Wait node:

*   Send reminder 1 hour before
*   Send reminder 24 hours before
*   Add multiple reminders
    
### Customize Email Templates

Update Gmail nodes to include:

*   Clinic address
*   Meeting links
*   Prescription instructions
*   Emergency contact details
    
### Customize Database Fields

Add additional fields in Supabase:

*   Patient age
*   Gender
*   Appointment type
*   Payment status
*   Doctor specialization
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Add WhatsApp reminders
*   Add SMS notifications
*   Add AI chatbot appointment booking
*   Add reschedule appointment feature
*   Add cancellation system
*   Add Zoom / Google Meet links
*   Add missed appointment tracking
*   Add dashboard reporting
*   Add multilingual appointment support
    

## Use Case Examples

### Clinic Appointment Booking

Patients can book appointments automatically without manual scheduling.

### Automated Reminder System

Patients receive reminder emails before appointments.

### Doctor Calendar Management

Doctor schedules stay automatically updated.

### Centralized Appointment Tracking

All appointment data stored securely in Supabase.

### Healthcare Workflow Automation

Reduce admin work and improve operational efficiency.


## Need Help?

If you need help customizing or extending this workflow, for ex. adding WhatsApp reminders, AI chatbot integration, appointment rescheduling, dashboards or production-level healthcare automation then our **n8n workflow development team at WeblineIndia** can assist with advanced workflow automation and scalable healthcare solutions.

## 🔗 Nodes Used

Google Calendar, Gmail, Supabase, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
