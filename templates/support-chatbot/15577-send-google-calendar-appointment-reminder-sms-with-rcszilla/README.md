# 💬 Send Google Calendar appointment reminder SMS with RCSZilla

> ⚡ **24 views** · 💬 [Support Chatbots](../)

## Description

## Description

Send free SMS appointment reminders from Google Calendar with n8n and RCSZilla.

This workflow turns Google Calendar into a simple appointment reminder system for opted-in customers. n8n checks tomorrow's events, reads the customer phone number and SMS consent from the calendar event description, prepares a short reminder message, and queues the SMS through RCSZilla.

RCSZilla lets you use your own Android phone and SIM card as the SMS gateway, so you do not need a separate SMS API subscription just to send basic appointment reminders. The workflow is free to run in n8n, and RCSZilla supports device-based sending through your own mobile network. Your mobile carrier plan, country, and message volume can still affect real-world SMS costs, so check your plan before sending production traffic.

## Why This Workflow Is Useful

Many appointment-based businesses need a practical SMS reminder service, but do not want to start with a paid SMS provider such as Twilio just to reduce no-shows. This template gives you a direct, phone-based setup:

- Google Calendar stores the appointment.
- n8n handles the automation logic.
- RCSZilla queues the SMS.
- Your connected Android device sends the message through its SIM/mobile plan.

This is a good fit for salons, clinics, dentists, consultants, repair shops, real estate viewings, local agencies, auto service businesses, and other teams that already manage bookings in Google Calendar.

## How It Works

### 1. Daily Schedule

The workflow runs once per day at 09:00. You can change the Schedule Trigger if your business sends reminders earlier, later, or on the same day as the appointment.

### 2. Google Calendar Lookup

The Google Calendar node fetches tomorrow's events from the selected calendar. It only requests the fields needed for the reminder: event ID, title, description, start/end time, and location.

### 3. Appointment Data Parsing

The Code node reads the event title, description, and location. It looks for:

- `Phone:` or a phone-like number
- `SMS consent: yes`
- optional customer name
- optional location

If the event has no phone number, no positive SMS consent, or an opt-out phrase, the workflow does not send a message.

### 4. Consent Gate

The IF node separates eligible reminders from skipped events. This makes the workflow safer to test because events without consent are routed away from the sending step.

### 5. SMS Queue With RCSZilla

Eligible reminders are sent to the RCSZilla node using the SMS channel. RCSZilla then queues the message for the connected device that acts as your SMS/RCS gateway.

### 6. Skipped Reminder Summary

Skipped events go to a summary node so you can inspect why a reminder was not sent. During setup, this helps you fix calendar descriptions before activating the workflow.

## RCSZilla Features Used Here

This template uses RCSZilla as a phone-based messaging gateway for n8n:

- Android device sending: connect your own Android phone and SIM card.
- API access: generate an API key in RCSZilla and use it from n8n.
- SMS channel: queue appointment reminders through the RCSZilla node.
- Device-first setup: send through your own mobile network instead of starting with a paid SMS API provider.
- Optional cloud sending: RCSZilla also documents optional credit-based cloud provider routing for users who do not want to send from a phone.

RCSZilla setup guide: https://docs.rcszilla.com/?page=get_started

## Requirements

- n8n Cloud or self-hosted n8n.
- RCSZilla account and API token.
- Android device connected to RCSZilla and able to send SMS messages.
- Active SIM/mobile plan for the device that will act as the SMS gateway.
- Community node package: `n8n-nodes-rcszilla`.
- Google Calendar OAuth credential in n8n.
- Google Calendar events that include a customer phone number and SMS consent in the description.

## Setup Instructions

1. Install the RCSZilla community node in n8n: `n8n-nodes-rcszilla`.
2. Import the workflow JSON: `Google Calendar appointment reminder SMS n8n - RCSZilla.json`.
3. Create and assign the Google Calendar OAuth credential to the Google Calendar node.
4. Create and assign the RCSZilla API credential to the RCSZilla node.
5. Connect the Android device that will send SMS messages through RCSZilla. If you have not connected a device yet, follow the RCSZilla getting started guide: https://docs.rcszilla.com/?page=get_started
6. In the Google Calendar node, choose the calendar that stores appointments.
7. Add this format to appointment event descriptions:

```text
Name: Maria
Phone: +40700000000
SMS consent: yes
```

8. Run the workflow manually with one internal test appointment.
9. Check the skipped summary output. If a reminder is skipped, confirm the event has a valid phone number and `SMS consent: yes`.
10. Activate the workflow when testing is complete.

## Example SMS

```text
Hi Maria, reminder: Dental cleaning is scheduled for Thu, May 21, 10:00 AM at Main Street Clinic. Reply STOP to opt out.
```

## Compliance And Consent

This workflow is designed for consent-based appointment reminders, not unsolicited marketing.

Only send SMS reminders to customers who have clearly agreed to receive appointment messages. Keep consent records in your booking process, respect opt-outs, follow quiet hours, and check local SMS rules for every region where you send messages.

The workflow requires `SMS consent: yes` before sending and includes this opt-out text in the message:

```text
Reply STOP to opt out.
```

If your appointments involve medical, legal, financial, or other sensitive information, keep event titles and SMS wording generic.

## Customization

- Change the Schedule Trigger time to match your reminder policy.
- Change the Google Calendar time window if you want same-day reminders instead of next-day reminders.
- Edit the Code node message template to match your brand voice.
- Keep appointment titles generic if customers should not receive sensitive details by SMS.
- Change the RCSZilla channel later if your RCSZilla setup supports another channel for your use case.
- Add delivery monitoring later by using RCSZilla queue/status features.

## Troubleshooting

- No events returned: confirm the selected calendar and the tomorrow time window.
- Event is skipped: add `Phone:` and `SMS consent: yes` to the event description.
- Google Calendar credential fails: for self-hosted n8n, use a public HTTPS domain for the OAuth redirect URL.
- RCSZilla fails: confirm the API credential, connected device status, SIM status, and phone number country code.
- Message is too specific: make the calendar event title generic or edit the Code node message template.
- Reminders send at the wrong time: check the n8n instance timezone and the Schedule Trigger settings.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
