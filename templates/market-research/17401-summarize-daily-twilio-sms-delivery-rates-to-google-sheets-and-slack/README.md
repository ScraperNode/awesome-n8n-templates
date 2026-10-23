# 📊 Summarize daily Twilio SMS delivery rates to Google Sheets and Slack

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning to pull yesterday’s SMS message data from the Twilio Messages API, calculates delivery and failure counts plus a delivery-rate percentage, appends a daily summary row to Google Sheets, and posts the same delivery digest to a Slack channel.

## How it works
1. Runs every day at 07:15 on a scheduled trigger.
2. Builds a UTC date window for yesterday (00:00:00–23:59:59) to use as the Twilio query range.
3. Calls the Twilio Messages API to fetch up to 1,000 messages sent within that window.
4. Counts messages by status (delivered, failed, undelivered, and others) and calculates the total.
5. Computes a delivery rate percentage as delivered divided by delivered + failed + undelivered.
6. Appends the daily metrics as a new row in a Google Sheets tab.
7. Posts a formatted delivery summary with the same figures to a Slack channel.

## Setup
1. Create a Twilio API credential (Account SID + Auth Token) and replace the Account SID in the Twilio Messages API URL.
2. Connect your Google Sheets OAuth credential, then select the target spreadsheet and sheet tab and ensure headers exist for date, total, delivered, failed, undelivered, and delivery_rate_pct.
3. Connect your Slack credential and set the destination channel for the daily digest message.
4. (Optional) Adjust the schedule time to match your reporting needs and timezone expectations.

## Requirements
- A Twilio account (Account SID and Auth Token) that actually sends messages, since an account with no traffic produces an empty report.
- A Google account with a spreadsheet you can write to.
- A Slack workspace, a channel, and a Slack app credential.

## Customization
- Change the window from yesterday to a rolling week or a custom range for a weekly rollup.
- Post to Slack only when the delivery rate drops below a threshold, by adding a condition before the Slack step.
- Add columns for per-error-code counts or message cost by reading those fields from the Messages payload.
- Split the tally by Messaging Service or sender number for per-line delivery rates.

## Additional info
It writes one summary row per day rather than one row per message, which keeps the sheet a trend line you can chart directly instead of a log you have to pivot first. The workflow only reads the Messages API and never creates or sends anything, so running it costs nothing. The day boundary is UTC, so if your reporting day is local time you will want to shift the window to match, and because it reads a single page it would need pagination added for very high-volume days. There is no AI, so a given day always rolls up to the same numbers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
