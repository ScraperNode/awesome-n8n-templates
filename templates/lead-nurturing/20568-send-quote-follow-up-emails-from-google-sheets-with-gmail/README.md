# 💬 Send quote follow-up emails from Google Sheets with Gmail

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs every weekday morning to read quote requests from Google Sheets and send timed follow-up emails via Gmail to customers whose quotes are still unanswered, then updates the same sheet to track follow-up steps and next follow-up dates.

## How it works
1. Runs on a schedule every weekday at 9:00 AM.
2. Reads all rows from the Google Sheets document’s “Requests” sheet.
3. Filters for rows with Status set to “Quote sent” and where the next follow-up is due based on the configured day sequence and the current Follow-up Step.
4. Composes the next follow-up email (optionally including the quoted amount) and sends it to the customer via Gmail.
5. Updates the matching row in Google Sheets with the incremented Follow-up Step, Last Follow-up At timestamp, and calculated Next Follow-up At date.

## Setup
1. Connect Google Sheets credentials with access to the spreadsheet and Gmail credentials for the sending mailbox.
2. Update the Config values, especially the Google Sheet ID, business/owner details, currency symbol, followUpDays, maxEmailsPerRun, and unsubscribe text.
3. Ensure the Google Sheet has a “Requests” tab with columns matching the workflow’s expected headers (including Request ID, Email, Status, Quote Amount, Quote Sent At, Follow-up Step, Last Follow-up At, and Next Follow-up At).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
