# 💬 Schedule appointments from a booking form with Google Calendar and Gmail

> ⚡ **2,299 views** · 💬 [Support Chatbots](../)

## Description

## How it works

This workflow creates a complete appointment booking system — no external scheduling tools needed. It serves a styled HTML booking form via webhook, checks your Google Calendar for availability, and lets visitors pick an open 30-minute slot. On submission, it creates a calendar event, sends a confirmation email via Gmail, and shows a success page.

- A GET webhook serves the booking page, which reads your Google Calendar to show only open time slots for the next 30 days
- Visitors pick a date/time, fill in their name, email, and an optional message, then submit
- A POST webhook receives the form, calculates the end time, creates a Google Calendar event, and sends a styled HTML confirmation email with an "Add to Calendar" link
- The visitor sees a branded success page confirming their booking

## Set up steps

1. **Google Calendar OAuth2** — Connect your Google account with Calendar read/write access. Takes ~5 minutes if you already have OAuth credentials in Google Cloud Console.
2. **Gmail OAuth2** — Connect your Gmail account for sending confirmation emails. Can reuse the same Google OAuth app.
3. **Configure your availability** — In the "Calculate Available Slots" node, adjust `workingDays` (default: Mon–Fri), `startHour`/`endHour` (default: 9 AM–2 PM), `slotDuration` (default: 30 min), and the timezone offset (default: `+02:00` for EET).
4. **Activate the workflow** — The booking form will be live at your n8n instance's webhook URL: `your-n8n-url/webhook/booking`
5. **Optional: Customize branding** — Edit the HTML/CSS in the "Build HTML Form" and "Show Success Message" nodes to match your brand colors and copy.

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
