# 🔬 Automate event ticketing and waitlists with multi-tier PDFs and PDF Generator API

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automate event registration with capacity management, a waitlist, and multi-tier PDF ticket generation using PDF Generator API. When attendees register, the workflow checks available spots, routes by tier (General / VIP / Backstage), generates a PDF ticket with a QR code, emails it, logs to Google Sheets, and notifies via Slack. Full event? Attendees are waitlisted and automatically promoted when a cancellation opens a spot.

## Who is this for

Event organizers and developers who need automated ticketing with capacity control and waitlist logic — without a custom backend.

## How it works

**Flow A — Registration (form trigger):**
Attendee submits the form → workflow reads Sheets to check capacity → if spots available, a Switch routes by tier, each adding tier-specific perks → PDF Generator API creates a personalized ticket with QR code → confirmation email via Gmail → logged to Sheets → Slack notification. If full → added to waitlist tab → waitlist email sent.

**Flow B — Cancellation & promotion (webhook trigger):**
Webhook receives a ticket ID → validates and removes from Sheets → checks waitlist → if someone is waiting, the first person is auto-promoted: new PDF generated, emailed, logged, waitlist entry removed, organizer notified. If waitlist is empty → cancellation-only Slack alert.

## Set up

1. **PDF Generator API** — Create 3 templates (General, VIP, Backstage) using variables: `ticket_id`, `attendee_name`, `event_name`, `venue`, `event_date`, `seat_number`, `ticket_tier`, `issued_date`. Add a QR Code component bound to `ticket_id`.
2. **Google Sheets** — One spreadsheet, two tabs: **Registrations** and **Waitlist**. Column details are in the workflow's sticky notes.
3. **Code nodes** — Replace placeholder template IDs and set `MAX_CAPACITY` in the "Check Capacity & Prepare Data" and "Promote from Waitlist" nodes.
4. **Credentials** — Connect PDF Generator API, Gmail, Google Sheets, and Slack in their respective nodes.

## Requirements

- [PDF Generator API](https://pdfgeneratorapi.com) account (free trial available)
- Gmail (OAuth), Google Sheets (OAuth)
- Slack workspace (optional — remove the 3 Slack nodes if not needed)

## How to customize

- **Tiers** — Add/rename tiers in the form, update the Switch and both Code nodes accordingly.
- **Perks** — Edit the Set nodes to change tier-specific perks shown in emails.
- **PDF output** — Switch from URL to File output to attach PDFs directly to emails.
- **Payment** — Insert a Stripe node before capacity check for paid tickets.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
