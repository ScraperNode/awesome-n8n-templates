# 💬 Send Guesty new booking SMS confirmations and reminders with Aloware

> ⚡ **44 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description
Automate the entire guest communication lifecycle for your short-term rental properties. From the moment a reservation is confirmed in Guesty, this workflow sends a booking confirmation SMS, enrolls guests in a check-in reminder sequence, and automatically triggers a post-checkout review request.
Property managers juggle dozens of bookings across multiple platforms. This workflow ensures every guest gets a consistent, professional communication experience — whether they booked on Airbnb, VRBO, or direct — by routing all guest messaging through Aloware's SMS platform via n8n.

## How it works

1. A Webhook receives new reservation data from Guesty (via Guesty Automations or API webhooks).
2. A Set node normalizes the booking data — guest phone, name, email, check-in/check-out dates, listing name, confirmation code, and guest count.
3. An HTTP Request creates the guest as a contact in Aloware, storing the property name, dates, and confirmation code in custom fields and notes.
4. A second HTTP Request sends an instant booking confirmation SMS with the reservation details and confirmation code.
5. An HTTP Request enrolls the guest in an Aloware Check-in Reminder Sequence (you configure the sequence in Aloware to send reminders at 3 days, 1 day, and day-of with check-in instructions).
6. A Wait node pauses until 18 hours after the checkout date.
7. A final HTTP Request enrolls the guest in a Post-Stay Review Sequence — a thank-you SMS with a review link.

## How to use

1. Import the JSON into n8n.
2. Add these n8n Variables: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_CHECKIN_SEQUENCE_ID, ALOWARE_REVIEW_SEQUENCE_ID, and PROPERTY_COMPANY_NAME.
3. In Aloware, create two Sequences:
4. 
5. Check-in Reminder Sequence: 3-day, 1-day, and day-of SMS reminders with check-in instructions (WiFi, door codes, parking).
6. Post-Stay Review Sequence: thank-you SMS with a review link (Airbnb, Google, etc.).
7. 

In Guesty, configure an Automation or API webhook for "New Reservation" events, pointing to this workflow's URL.
Activate and test with a test booking.

## Requirements

Aloware account with API access and an outbound line
Guesty account with webhook or automation capabilities

#### Customising this workflow

Add an IF node to route by listing — different check-in instructions per property.
Include an MMS node to send a property photo or a map pin alongside the check-in instructions.
Add a cancellation webhook that disenrolls guests from the reminder sequence when a booking is cancelled.
Duplicate the workflow for Guesty's "Reservation Updated" event to send change-of-dates notifications.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
