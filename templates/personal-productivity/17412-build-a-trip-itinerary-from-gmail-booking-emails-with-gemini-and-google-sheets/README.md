# ⚡ Build a trip itinerary from Gmail booking emails with Gemini and Google Sheets

> ⚡ **19 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow polls Gmail for unread travel confirmation emails, uses Google Gemini to detect real bookings and extract structured trip details, then upserts each booking into a Google Sheets itinerary and sends a tailored confirmation email before marking the message as read.

## How it works
1. Runs every hour and searches Gmail for unread emails with subjects matching confirmation/booking/reservation/itinerary.
2. Sends each email’s sender, subject, and body to Google Gemini to determine whether it is a genuine booking and to extract key fields like type, provider, reference number, dates/times, location/address, details, and total cost.
3. Normalizes the extracted data, generates a fallback reference when missing, and filters out non-booking messages.
4. Appends or updates the booking in a Google Sheets “Itinerary” tab using the confirmation number to prevent duplicates.
5. Marks the processed email as read in Gmail.
6. Emails you a confirmation message via Gmail with content tailored for flights, hotels, or other booking types.

## Setup
1. Connect your Gmail account (for reading messages, marking them as read, and sending notifications).
2. Add a Google Gemini (PaLM) API credential for the extraction step.
3. Connect Google Sheets and select the target spreadsheet and the “Itinerary” sheet/tab in the Google Sheets node.
4. Set your notification email address in the “Set Your Email” step.
5. Review and adjust the Gmail search query to match how your booking providers format email subjects.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
