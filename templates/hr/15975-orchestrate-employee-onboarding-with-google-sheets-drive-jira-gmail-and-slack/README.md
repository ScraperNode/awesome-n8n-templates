# 👥 Orchestrate employee onboarding with Google Sheets, Drive, Jira, Gmail, and Slack

> ⚡ **66 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow accepts new-hire details via a webhook, logs them to Google Sheets, creates an onboarding folder in Google Drive, opens onboarding work items in Jira, and notifies the employee and internal teams via Gmail and Slack, then updates the tracker with links and status.

## How it works
1. Receives a POST webhook request containing new hire details.
2. Normalizes the incoming payload and appends the employee record to a Google Sheets onboarding tracker.
3. Validates that the request is in a pending state and includes required fields (full name, work email, department, and manager email).
4. Creates a dedicated Google Drive onboarding folder and shares it with the employee’s work email.
5. Creates a Jira onboarding epic and two Jira tasks for IT access setup and the HR onboarding checklist.
6. Looks up the created Google Drive folder to capture its web link, emails the employee a welcome message via Gmail, and posts an onboarding notification to a Slack channel.
7. Updates the Google Sheets tracker row to mark the employee as processed, stores the Jira epic reference and Drive folder link, and sends a completion summary email to HR via Gmail.

## Setup
1. Configure the Webhook trigger URL in your HRIS or request form to send a POST payload with fields like status, full_name, work_email, department, and manager_email.
2. Add Google Sheets OAuth2 credentials and set the target spreadsheet and sheet, ensuring columns exist for employee_id (match key), status, processed_at, drive_folder_link, and jira_epic_key.
3. Add Google Drive OAuth2 credentials and set the parent folder where onboarding folders should be created.
4. Add Jira Software Cloud credentials and select the Jira project and issue types (Epic and Task) used for onboarding.
5. Add Gmail OAuth2 credentials and update the HR recipient email address and email content as needed.
6. Add Slack credentials and choose the destination channel for onboarding notifications.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
