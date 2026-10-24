# ⚡ Send monthly timesheet reminder emails from SharePoint CSV with Outlook

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs on a monthly schedule, downloads an employee CSV from Microsoft SharePoint, and sends time-tracking reminder emails via Microsoft Outlook to each employee (CC’ing their manager) for the previous month, then clears the recipient columns and uploads the updated CSV back to SharePoint.

## How it works
1. Runs at 07:00 on the 1st, 2nd, and 3rd calendar day of each month.
2. Checks whether today is the first business day (Mon–Fri) of the month and stops if it is not.
3. Downloads the employee CSV file from Microsoft SharePoint and parses it into records.
4. Builds a recipient list by extracting name, employee email, and manager email, filters out incomplete rows, and calculates the previous month label for the email text.
5. Loops through the employee list and sends a Microsoft Outlook email reminder to each employee with their manager in CC.
6. Clears the email-related columns in the CSV content, converts the updated data back into a CSV file, and uploads it to Microsoft SharePoint.

## Setup
1. Add Microsoft SharePoint OAuth2 credentials and select the correct SharePoint site and CSV file in both the download and upload steps.
2. Add Microsoft Outlook OAuth2 credentials with permission to send emails from the mailbox you want to use.
3. Ensure your CSV has the expected columns (e.g., MA, CROSS_MA.email, CROSS_MA.VG_email) or update the column mappings used to build the recipient list.
4. Review and adjust the email subject/body text, recipients, and CC logic, and test with a safe address before enabling the workflow.

## 🔗 Nodes Used

Microsoft Outlook, Schedule Trigger, Convert to File, Extract from File, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
