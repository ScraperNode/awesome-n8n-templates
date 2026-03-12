# 💬 Automated voice appointment booking with Vapi AI and Google Calendar

> ⚡ **3,796 views** · 💬 [Support Chatbots](../)

## Description

## What this template does

Connect a Vapi AI voice agent to Google Calendar to capture contact details and auto-book appointments.
The agent asks for name, address, service type, and a preferred time. The workflow checks availability and either proposes times or books the slot—no code needed.

## How it works (node map)

- Webhook: Production URL = VAPI Server URL — receives tool calls from Vapi and returns results.
- **1. CONFIGURATION (EDIT ME)** — your timezone, work hours, meeting length, buffers, and cadence.
- **Route by Tool Name** — routes Vapi tool calls:
	- `checkAvailability` → calendar lookup path
	- `bookAppointment` → create event path
- **2. Get Calendar Events (EDIT ME)** — reads events for the requested day.
- **Calculate Potential Slots / Filter for Available Slots** — builds conflict-free options with buffers.
- Respond with Available Times — returns formatted slots to Vapi.
- **3. Book Appointment in Calendar (EDIT ME)** — creates the calendar event with details.
- **Booking Confirmation** — returns success back to Vapi.

&gt; Sticky notes in the canvas show exactly what to edit (required by n8n).
No API keys are hardcoded; Google uses OAuth credentials.

## Requirements

- n8n (Cloud or self-hosted)
- Google account with Calendar (OAuth credential in n8n)
- Vapi account + one Assistant

## Setup (5 minutes)
### A) Vapi → n8n connection

1. Open the **Webhook** node and copy the **Production URL**.
2. In **Vapi** → **Assistant** → **Messaging**, set **Server URL** = that Production URL.
3. In **Server Messages**, enable **only** `toolCalls`.

### B) Vapi tools (names must match exactly)

Create two **Custom Tools** in Vapi and attach them to the assistant:

**Tool 1:** `checkAvailability`

- **Arguments**
	- `initialSearchDateTime` (string, ISO-8601 with timezone offset, e.g. `2025-09-09T09:00:00-05:00`)

**Tool 2:** ```bookAppointment```

- **Arguments**
	- `startDateTime` (string, ISO-8601 with tz)
	- `endDateTime` (string, ISO-8601 with tz)
	- `clientName` (string)
	- `propertyAddress` (string)
	- `serviceType` (string)

&gt; The Switch node routes based on ```message.toolCalls[0].function.name```. If the names differ, nothing will run.

### C) Configure availability

Open **1. CONFIGURATION (EDIT ME)** and set:

- ```timeZone``` (e.g. ```America/New_York```)
- ```workdayStartHour``` / ```workdayEndHour``` (24h integers)
- ```meetingDurationMinutes``` (e.g. ```30``` or ```60```)
- ```bufferBeforeMinutes``` / ```bufferAfterMinutes``` (e.g. ```15```)
- ```bookingCadenceMinutes``` (e.g. ```30```)

### D) Connect Google Calendar

1. Open **2. Get Calendar Events (EDIT ME)** → Credentials: select/create Google Calendar OAuth.
Then choose the calendar to check availability.
2. Open **3. Book Appointment in Calendar (EDIT ME)** → use the same credential and same calendar to book.

### E) Activate & test

- Toggle the workflow **Active**.
- Call your Vapi number (or start a session) and book a test slot.
- Verify the event appears with description fields (client, address, service type, call id).

### Customising

- Change summary/description format in **3. Book Appointment**.
- Add SMS/Email confirmations, CRM sync, rescheduling, or analytics as follow-ups (see sticky note “I’m a note”).

### Troubleshooting

- **No response back to Vapi** → confirm Vapi is set to send toolCalls only and the Server URL matches the Production URL.
- **Switch doesn’t route** → tool names must be exactly checkAvailability and bookAppointment.
- **No times returned** → ensure timezone + work hours + cadence generate at least one future slot; confirm Google credential and calendar selection.
- **Event not created** → use the same Google credential & calendar in both nodes; check OAuth scopes/consent.

### Security & privacy

- Google uses OAuth; credentials live in n8n.
- No API keys hardcoded.
- Webhook receives only the fields needed to check times or book.

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
