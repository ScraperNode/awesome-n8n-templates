# 💬 Book and manage WhatsApp appointments with OpenAI and Google Calendar

> ⚡ **23 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Someone messages your WhatsApp asking for an appointment. I work out whether they want to book, move or cancel, check your real Google Calendar, and handle it. Anything I cannot read confidently goes to you on Slack instead of being guessed at.

## How it works
1. A customer messages your WhatsApp Business number, and that is the only thing that starts this off.
2. I cut the payload down to phone, name and message text, then ask OpenAI what they actually want: book, reschedule, cancel, a plain question, or something I cannot tell. I pull out any date or time they mentioned.
3. For a new booking I read your Google Calendar across the window they asked about, work out the nearest free slot inside your business hours, and check that exact slot again right before I book it.
4. Before writing anything I look up an idempotency key in a Data Table, so the same message never creates two events. Then I create the calendar event and read it straight back to prove the write landed.
5. I confirm to the customer on WhatsApp. A reminder can go out ahead of the appointment, but it ships switched off.
6. A reschedule or a cancel finds the customer's latest booking by phone number and acts on the real event id, then confirms the change.
7. Anything I cannot classify, a plain question, a booking I could not verify, or a reschedule with nothing to reschedule, goes to a Slack channel for a person.

## Setup
1. Connect four credentials: WhatsApp Business Cloud for the trigger and for sending, Google Calendar, an OpenAI chat model, and Slack.
2. Open the Settings node and fill in your calendar id, WhatsApp phone number id, business hours and days, slot length, how far ahead to search, and your timezone.
3. Create a Data Table called whatsapp_bookings with string columns idempotencyKey, customerPhone, customerName, slotStartIso, slotEndIso and eventId.
4. Pick the Slack channel that should catch the escalations and put it in Settings, so they reach someone who will act on them.
5. Reminders ship off. If you want them, set sendRemindersAutomatically to true, adjust reminderLeadTimeMinutes, and test the timing against your own WhatsApp messaging policy before you point it at customers.

## Requirements
- An n8n instance with Data Tables switched on, plus a WhatsApp Business Cloud number. You also need a Google Calendar it is allowed to write to. An OpenAI key does the intent reading, and Slack catches anything I will not guess at.

## Customization
- I keep business hours, slot length, search window and timezone in one Settings node, so you change them in one place. Be clear on what the second availability check is though. It closes the gap between reading the calendar and writing to it, which is the case that actually bites. It is a re-check and not a lock, so if you take genuinely simultaneous bookings, add your own reservation step.

## Additional info
Built by Fractional HQ. I run automation like this on my own estate before I sell it. If you want this wired into your stack rather than handed over as a file, send me a brief at https://fractionalhq.uk/brief

Where it can still go wrong, and who should not build it, are on my page at https://fractionalhq.uk/use-cases/whatsapp-appointment-booking

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Slack, Google Calendar, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
