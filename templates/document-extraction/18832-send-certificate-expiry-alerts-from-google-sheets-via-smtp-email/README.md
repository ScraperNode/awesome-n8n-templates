# 🔬 Send certificate expiry alerts from Google Sheets via SMTP email

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily at 7am to read an expiry register from Google Sheets, categorize items by how soon they expire, and send escalating reminder emails via SMTP for already-expired items and upcoming renewals.

## How it works
1. Runs every day at 7am on a schedule.
2. Reads all rows from a Google Sheets compliance register that includes expiry dates.
3. Calculates days remaining for each item and groups them into expired, within 7 days, within 30 days, and within 90 days lists.
4. Stops without sending anything when there are no items due or expired.
5. Sends an urgent email when one or more items are already expired, optionally including items expiring within 7 days.
6. Sends a renewals summary email when there are no expired items, including the 90-day horizon list only on Mondays.

## Setup
1. Add Google Sheets credentials and select the target spreadsheet and sheet in the Google Sheets read step.
2. Ensure your sheet has the columns Item, Type, Holder, Expires, RenewalContact, and Notes (with Expires in a parseable date format).
3. Add SMTP/Email Send credentials and replace the recipient address (owner@example.com) in both email steps.
4. Adjust the 7am cron expression if you want the check to run at a different time.

## Requirements
- A Google account for the Sheets register; an SMTP or Gmail account for the alert emails; an n8n instance (cloud or self-hosted) that can run a daily schedule.

## Customization
- Change the 90/30/7-day escalation windows in the Code node; add SMS or Slack alongside the email alerts; track any dated item - insurance, licences, MOT, certifications, contracts - by adding rows to the same register.

## Additional info
The escalation logic is deliberately asymmetric: expired items alert every day, approaching deadlines only at 90, 30 and 7 days - so the alert inbox stays meaningful instead of training you to ignore it. Reminders are grouped into one digest email per run rather than one email per item. Built by Digital Dots (https://digitaldotsent.com), who build automation for small service businesses.

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
