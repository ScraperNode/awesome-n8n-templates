# 💬 Send appointment confirmations, reminders and reviews with Sheets, Gmail & Twilio

> ⚡ **13 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs every 3 hours to read appointments from Google Sheets and send confirmation, reminder, win-back, and review-request messages via Gmail and/or Twilio SMS, then updates the sheet and notifies the owner with an email and optional Slack digest.

## How it works
1. Runs every 3 hours (or on manual trigger) to process the latest appointment rows.
2. Reads appointments from a Google Sheets “Appointments” sheet and evaluates each row’s status and appointment date in the configured timezone.
3. Builds personalized email and/or SMS content from configurable templates, validates email/phone fields, and skips rows that can’t be contacted.
4. Sends messages via Gmail for email and Twilio for SMS based on each row’s Channel setting (or the default channel configuration).
5. Updates the Google Sheets row with the new status and LastContacted date to prevent duplicate sends.
6. If a send fails after retries, emails the owner with the appointment details and error information.
7. Creates a run summary and sends the digest to the owner by email and (optionally) posts it to a Slack channel.

## Setup
1. Connect your Google Sheets OAuth2 credential and set the Google Sheet ID in both Google Sheets nodes.
2. Connect a Gmail OAuth2 credential for sending customer messages, owner failure alerts, and the owner digest.
3. If you send SMS, add a Twilio credential and set your Twilio “from” number in the Configuration.
4. If you want Slack notifications, add a Slack credential and set the target channel ID in the Configuration.
5. Create a sheet named “Appointments” with columns like AppointmentID (unique), Name, Email, Phone, AppointmentDate, Status, Channel, and LastContacted, and update the Configuration values (timezone, links, reminder days, and templates) before activating.

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
