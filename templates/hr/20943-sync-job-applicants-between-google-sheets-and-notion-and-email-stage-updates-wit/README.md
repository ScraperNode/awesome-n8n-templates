# 👥 Sync job applicants between Google Sheets and Notion and email stage updates with Gmail

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow syncs new job applicants from Google Sheets into a Notion candidates database on a schedule, and sends stage-based emails via Gmail when a candidate’s Notion status changes using email templates stored in a separate Notion database.

## How it works
1. Runs every hour (or manually) to read unprocessed applicant rows from a Google Sheets form responses sheet.
2. Looks up each applicant by email in a Notion “Candidates Tracker” database and filters out anyone who already exists to prevent duplicates.
3. Creates a new candidate page in Notion for each remaining applicant and then updates the Google Sheets row to mark it as processed.
4. Triggers when a page is updated in the Notion “Candidates Tracker” database and loads the previously stored candidate snapshot from an n8n Data Table.
5. Stores the updated candidate snapshot back to the Data Table and continues only when the candidate’s Status has changed.
6. Fetches the matching email template for the new Status from a Notion “Email Templates” database, fills placeholders with candidate fields, and sends the email to the candidate via Gmail.

## Setup
1. Connect your Notion OAuth2 account, Google Sheets OAuth2 account, and Gmail OAuth2 account in n8n.
2. Provide the correct Notion database IDs for your Candidates Tracker database and your Email Templates database, and ensure the candidate database includes Email and Status properties.
3. Update the Google Sheets document and sheet to your form responses sheet and ensure it has a Processed column and a row_number field available for updates.
4. Create one Notion email template page per Status value, with fields for the subject and body and a “For Status” select that matches your candidate Status options.
5. Ensure the n8n Data Table used for history exists and has columns for notion_id and values so the workflow can detect real Status changes.

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Notion Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
