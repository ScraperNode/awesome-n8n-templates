# ⚡ Send weekly timesheet reminders to employees from SharePoint CSV with Outlook

> ⚡ **14 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every Monday and Wednesday and downloads an employee CSV from Microsoft SharePoint, then sends each employee a time-tracking reminder email via Microsoft Outlook with their manager in CC, and finally clears recipient fields in the CSV and uploads the updated file back to SharePoint.

## How it works
1. Runs on a schedule every Monday and Wednesday at 13:00.
2. Downloads a CSV file from Microsoft SharePoint and parses it into structured rows.
3. Builds a recipient list (first name, employee email, manager email) from the CSV and filters out rows missing a name or email.
4. Iterates through the recipient list and sends a Microsoft Outlook reminder email to each employee with the manager copied (CC).
5. Clears the recipient-related columns in the original CSV data, converts the result back into a CSV file, and uploads it to Microsoft SharePoint.

## Setup
1. Connect Microsoft SharePoint OAuth2 credentials and select the correct SharePoint site and target CSV file for both the download and upload steps.
2. Connect Microsoft Outlook OAuth2 credentials for sending emails.
3. Ensure the CSV contains the expected columns (MA, CROSS_MA.email, CROSS_MA.VG_email) or update the mapping to match your CSV headers.
4. Review and adjust the email subject/body text, recipients, and CC logic, and test with a safe email address before enabling the workflow.

## 🔗 Nodes Used

Microsoft Outlook, Schedule Trigger, Convert to File, Extract from File, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
