# 🔬 Generate concert ticket PDFs with QR codes using PDF Generator API

> ⚡ **1,591 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Generate personalized concert ticket PDFs with QR codes using PDF Generator API, then email them to attendees, log sales to Google Sheets, and notify organizers via Slack — all triggered from a simple web form.

## Who is this for

Event organizers, ticketing teams, and developers who need an automated pipeline to issue branded PDF concert tickets with unique QR codes for venue entry — without building a custom backend.

## How it works

1. An attendee fills out a **web form** with their name, email, event details, seat number, and ticket tier (General / VIP / Backstage).
2. The workflow generates a unique ticket ID and prepares all data for the PDF template.
3. **PDF Generator API** renders a personalized PDF ticket. The QR code is a native template component that encodes the ticket ID automatically.
4. A styled **HTML confirmation email** with a download link is sent to the attendee via Gmail.
5. The ticket details are logged to a **Google Sheets** spreadsheet for tracking and attendance management.
6. A **Slack notification** alerts the event organizer with a summary of the newly issued ticket.

## Set up

1. **PDF Generator API** — Sign up at [pdfgeneratorapi.com](https://pdfgeneratorapi.com), create a ticket template with a QR Code component bound to `{{ ticket_id }}`, and note your template ID.
2. **Template ID** — Open the "Prepare Ticket Data" Code node and replace the `TEMPLATE_ID` value with your own.
3. **Credentials** — Connect your accounts in each node: PDF Generator API, Gmail, Google Sheets, and Slack.
4. **Google Sheets** — Create a spreadsheet with columns: `Ticket ID`, `Attendee`, `Email`, `Event`, `Venue`, `Date`, `Seat`, `Tier`, `PDF URL`, `Issued At`. Set the spreadsheet ID in the "Log Ticket Sale" node.
5. **Slack** — Choose a channel (e.g. `#tickets`) in the "Notify Event Organizer" node.

## Requirements

- [PDF Generator API](https://pdfgeneratorapi.com) account (free trial available)
- Gmail account (OAuth)
- Google Sheets account (OAuth)
- Slack workspace (optional — remove the last node if not needed)

## How to customize

- **Output format** — The PDF node returns a hosted URL by default (valid 30 days). Switch to `File` output to attach the PDF directly to the email instead.
- **Ticket tiers** — Add or rename tiers in the form node and update the tier mapping logic in the "Prepare Ticket Data" Code node.
- **Email design** — Edit the "Build Confirmation Email" Code node to match your brand colors and layout.
- **Remove Slack** — Simply delete the "Notify Event Organizer" node if you don't need organizer alerts.
- **Add payment** — Insert a Stripe or payment node before the form confirmation to handle paid tickets.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
