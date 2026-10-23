# 💬 Send Aloware SMS confirmations, reminders, and no-show rebooking for appointments

> ⚡ **43 views** · 💬 [Support Chatbots](../)

## Description

## Description
Automate your entire patient appointment communication lifecycle: instant booking confirmation, timed reminders, and automatic no-show detection with re-booking outreach — all powered by Aloware sequences and n8n.
No-shows cost healthcare practices an estimated $150 billion per year in the US alone. This workflow tackles the problem end-to-end by confirming appointments the moment they're booked, sending graduated reminders leading up to the visit, and automatically re-engaging patients who don't show up.

## How it works

1. A Webhook receives new appointment data from your booking system (Calendly, Acuity Scheduling, Jane App, SimplePractice, Mindbody, or any system that sends webhooks).
2. A Set node normalizes the payload — patient phone, name, email, appointment type, date/time (formatted for SMS), provider name, and appointment ID.
3. An HTTP Request creates or updates the patient contact in Aloware with appointment type and date stored in custom fields and notes.
4. A second HTTP Request sends an instant confirmation SMS: "Your {appointment type} is confirmed for {date} at {time}. Location: {address}. Reply CANCEL or RESCHEDULE."
5. An HTTP Request enrolls the patient in a timed Aloware Reminder Sequence (you configure this in Aloware to send reminders at 48h, 24h, and 2h before the appointment).
6. A Wait node pauses execution until 1 hour after the scheduled appointment time.
7. An HTTP Request checks the contact's tags in Aloware to detect whether a "no-show" tag has been applied.
8. An IF node routes:

	- No-show detected → enrolls in a No-Show Re-booking Sequence (e.g., "We missed you today — reply to rebook").
	- Appointment completed → no further action.



## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_REMINDER_SEQUENCE_ID, ALOWARE_NOSHOW_SEQUENCE_ID, PRACTICE_NAME, and PRACTICE_ADDRESS.
3. In Aloware, create two Sequences:

Reminder Sequence: steps at 48h, 24h, and 2h before appointment (SMS reminders).
No-Show Sequence: re-booking outreach (SMS → wait 1 day → call → SMS).


Configure your booking system's webhook to POST to this workflow's URL (Calendly → Webhooks, Acuity → API Webhooks, etc.).
Set up a process in Aloware (or your EHR) to tag contacts as "no-show" when they miss their appointment — the workflow checks for this tag.
Activate and test with a sample booking.

## Requirements

Aloware account with API access and an outbound line
Booking/scheduling system that supports webhooks (Calendly, Acuity, Jane App, SimplePractice, Mindbody, etc.)
A process to apply a no-show tag in Aloware when patients miss appointments (manual or automated via your EHR)

#### Customising this workflow

Edit the confirmation SMS to include prep instructions (e.g., "Please arrive 15 minutes early" or "Remember to fast before your blood work").
Add a Slack or email notification to front-desk staff when a no-show is detected.
Add an additional branch for cancellation handling — if the patient replies CANCEL, disenroll from the reminder sequence and notify the scheduler.
Adjust the Wait node timing if your practice wants to check for no-shows immediately after the appointment window rather than 1 hour later.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
