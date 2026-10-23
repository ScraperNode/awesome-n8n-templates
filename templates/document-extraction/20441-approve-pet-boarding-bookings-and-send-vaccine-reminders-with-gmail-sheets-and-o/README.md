# 🔬 Approve pet boarding bookings and send vaccine reminders with Gmail, Sheets and OpenAI

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Boarding bookings only get approved when the vaccination records actually hold up. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow takes boarding requests from a form, checks rabies, DHPP and bordetella expiry dates against the stay, has gpt-6-luna write the owner reply for whatever the check decided, logs every booking to Google Sheets, and alerts the kennel inbox when a pet is not cleared. A daily watch emails owners whose vaccine is about to run out, and a Monday digest sums up the week.

*Last updated: October 2026.*

## Quick Overview
This workflow collects pet boarding requests through an [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) Form and compares each pet's rabies, DHPP and bordetella expiry dates against the booked stay. Every booking comes out as approved, conditional or blocked, and gpt-6-luna writes the owner reply for that outcome. All bookings are appended to the "Bookings" tab in Google Sheets, non-approved bookings also alert the kennel inbox, a daily 07:00 watch emails owners whose vaccine expires within 30 days, and a Monday 09:00 digest summarizes the week for the kennel.

## How it works
1. Receives a request through the "Boarding Request Form" with owner name, owner email, pet name, species, check in and check out dates, the rabies, DHPP and bordetella expiry dates, and notes.
2. Normalizes the entry and adds a booking ID in the BKG-YYYYMMDD-### format, a received_at timestamp and the kennel inbox address.
3. Validates that owner name, owner email, pet name, check in date and check out date are present. If anything is missing the booking is not saved and the kennel gets an email listing what was missing.
4. Runs the deterministic check in Check Vaccine Validity: each expiry date is compared against the check out date. A missing or expired record gives blocked (noncompliant), an expiry within 14 days of the stay gives conditional (expiring_soon), and anything further out gives approved (compliant). The node also writes the issues text and the smallest number of days left on any record.
5. Sends the decision to gpt-6-luna, which writes the owner email: a confirmation for approved, a renewal nudge for conditional, or a request for an updated record for blocked. Subject max 10 words, body under 140 words, plain text.
6. Appends the full record to the "Bookings" tab in Google Sheets, including the decision, compliance, issues, the drafted subject and body, and an empty last_watch_at column.
7. Emails the owner the drafted reply, then for any decision that is not approved alerts the kennel inbox with the pet name, owner, stay dates and the vaccine issues so staff can chase the record.
8. Runs daily at 07:00, reads the Bookings tab, keeps the newest row per owner and pet, and emails a heads up to every owner whose pet has a vaccine expiring within 30 days.
9. Runs Monday at 09:00, counts approved, conditional and blocked bookings for the week plus pets with a vaccine expiring in 30 days, and has gpt-6-luna draft the digest email (subject max 12 words, body under 160 words) to the kennel.

## Setup
1. Create a Google Sheets file with a tab named "Bookings" and columns booking_id, received_at, owner_name, owner_email, pet_name, species, check_in_date, check_out_date, rabies_expiry, dhpp_expiry, bordetella_expiry, compliance, decision, issues, notes, kennel_email, email_subject, email_body and last_watch_at.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model, then select them in the nodes.
3. Point the three Google Sheets nodes (Log Booking to Register, Read Booking Register, Read Register for Digest) at your spreadsheet.
4. Set the kennel inbox in the Normalize Booking node (kennel_email) so intake problems, non-approved alerts and the weekly digest reach the right mailbox.
5. Publish the boarding request form and share the link with owners.
6. Confirm the 07:00 daily watch and the Monday 09:00 digest match your timezone, then activate the workflow.

### Quick Answers
**How does a booking get approved, conditional or blocked?**
Check Vaccine Validity compares the rabies, DHPP and bordetella expiry dates against the check out date. A missing or expired record gives blocked, an expiry within 14 days of the stay gives conditional, and anything further out gives approved.

**What does gpt-6-luna actually do?**
Two jobs. On every request it writes the owner reply for the decision that the deterministic check produced. On Monday it drafts the weekly kennel digest from the counts in the register.

**What happens when a booking is not approved?**
The owner still gets the drafted reply asking for an updated record, and the kennel inbox gets a "Booking needs action" alert with the pet name, the decision and the vaccine issues.

**When do the reminders go out?**
Daily at 07:00 the watch reads the Bookings tab and emails owners whose pet has a vaccine expiring within 30 days, including records that already expired. Monday at 09:00 the digest goes to the kennel inbox.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
