# 🎫 Fill cancelled appointment slots from a Google Sheets waitlist via Gmail

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every 15 minutes to match cancelled appointments in Google Sheets with eligible clients from a waitlist, sends time-limited slot-offer emails via Gmail, and updates both the Bookings and Waitlist tabs while notifying staff of delivered, failed, and data-quality issues.

## How it works
1. Runs every 15 minutes on a schedule.
2. Validates required settings and checks that the Google Sheets Bookings and Waitlist tabs contain the expected column headers.
3. Reads bookings and waitlist entries from Google Sheets and selects cancelled slots that meet notice/ahead-of-time rules, then picks the longest-waiting eligible clients based on service and date range.
4. Writes “offered” status and offer metadata back to Google Sheets for the chosen waitlist rows and the corresponding booking rows, then sends the slot-offer emails through Gmail (optionally routing all emails to staff in test mode).
5. Records the Gmail delivery result by confirming or rolling back the waitlist row updates and marking undeliverable recipients as “send failed,” then consolidates delivered recipients into the booking row’s offered-to list.
6. Emails staff a summary of offers sent and any delivery failures, and separately emails a once-per-day report of malformed or duplicate rows that are skipped.

## Setup
1. Create a Google Sheets file with two tabs named Bookings and Waitlist. Bookings row 1 headers: Booking ID, Service, Appointment Date (YYYY-MM-DD), Appointment Time (14:30), Status, Waitlist Offered To, Waitlist Offered At. Waitlist row 1 headers: Waitlist ID, Client Name, Client Email, Service, Earliest Date, Latest Date, Status, Added At, Offered Slot, Offered At, Offer Error.
2. Add Google Sheets OAuth2 credentials (for Sheets API and the Google Sheets node) and Gmail credentials for sending client and staff emails.
3. Update Set Configuration Params with your Google Sheet ID, booking page URL, business name, staffEmail, replyToEmail, and your offer rules (claim window, offers per round, notice period, and max days ahead), then switch testMode off when you are ready to write to the sheet and email clients.
4. Set the workflow timezone in n8n so date/time comparisons and email copy match your local scheduling rules.

## Requirements
- Google Sheets account connected with OAuth2 (the header check reuses the same credential)
- Gmail account

## Customization
- Raise offersPerRound in Set Configuration Params to offer a slot to several people at once (first to book wins)
- Change claimWindowHours, minHoursNotice and maxDaysAhead to match your booking rules
- Edit the offer wording in the Prepare Slot Offer Email node

## Additional info
When a client books an offered slot, set their Waitlist status to booked, set the cancelled booking to filled, and add the new booking as a new row.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
