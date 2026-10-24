# 👥 Send security agent onboarding checklists with Gmail and Google Sheets

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs every morning, reads a Google Sheets agent roster for rows marked as New, sends each agent an onboarding checklist via Gmail, and then updates the same sheet to mark those agents as Onboarding.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Loads configuration values (Google Sheets URL, company name, and HR email address) used in the email content.
3. Reads all agent rows from Google Sheets and computes each row’s sheet row number for later updates.
4. Filters the roster to agents whose Status equals New.
5. Sends each new agent a personalized HTML onboarding checklist email through Gmail.
6. Updates the corresponding Google Sheets row to set Status to Onboarding.

## Setup
1. Connect Google Sheets OAuth2 credentials and ensure n8n has access to the spreadsheet.
2. Connect Gmail OAuth2 credentials for the mailbox that sends onboarding emails.
3. Update the sheet URL, company name, and HR email address in the configuration step.
4. Ensure the Google Sheet includes columns named Agent_Name, Email, Status, and Start_Date, and set Status to New for newly added agents.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
