# 💬 Send scheduled real estate lead follow-up emails with Google Sheets and Gmail

> ⚡ **13 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs every weekday at 9am to read real estate leads from Google Sheets, send the next scheduled follow-up email via Gmail based on each lead’s intent and status, and then updates the lead row with the new follow-up step and next due date.

## How it works
1. Runs every weekday at 9am on a schedule.
2. Reads lead rows from the “Leads” sheet in Google Sheets.
3. Checks each lead’s status, last contact date, and follow-up step against the configured follow-up day sequence and skips leads in stop statuses (for example replied or unsubscribed).
4. Builds a personalized HTML follow-up email (buy/sell/rent) with your booking link and unsubscribe text for leads that are due, up to the maximum emails per run.
5. Sends each follow-up email through Gmail.
6. Updates the matching lead in Google Sheets with the new status, incremented follow-up step, last contact timestamp, and next follow-up date.

## Setup
1. Connect Google Sheets credentials with access to the spreadsheet that contains the “Leads” sheet.
2. Connect Gmail credentials for the mailbox you want to send follow-ups from.
3. In the Config step, paste your Google Sheet ID and set your agency name, agent name, booking link, follow-up day sequence, stop statuses, and per-run email limit.
4. Ensure your Google Sheet “Leads” tab includes the required columns (at minimum Email, Lead ID, Status, Follow-up Step, Last Contact At/Last Enquiry At, Intent, and Name) and that “Lead ID” uniquely identifies each row for updates.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
