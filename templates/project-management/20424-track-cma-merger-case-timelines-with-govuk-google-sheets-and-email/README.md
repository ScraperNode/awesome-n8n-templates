# 📋 Track CMA merger case timelines with GOV.UK, Google Sheets and email

> ⚡ **3 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs on demand or on weekday mornings to pull Competition and Markets Authority (CMA) merger case updates from GOV.UK, write a dated timeline into Google Sheets, and generate an email-friendly summary plus an attached HTML timeline report via SMTP.

## How it works
1. Runs manually or on a cron schedule at 08:00 Monday–Friday (workflow timezone).
2. Builds a list of GOV.UK CMA case API URLs from your configured case paths and validates that they are unique and correctly formatted.
3. Fetches each case’s GOV.UK JSON content and extracts dated milestones from change history, attachments, and dated HTML entries while marking deadlines as planned.
4. Creates a status row per case (including parse errors or “needs review” flags) and generates stable row keys for upserting.
5. Upserts all status and milestone rows into a Google Sheets “Timeline” tab using the Row Key column to update existing entries without deleting history.
6. Builds an HTML email summary and a full HTML timeline report for this run and prepares the report as an attached .html file.
7. Sends the digest email with the HTML attachment via SMTP (when the email node is enabled).

## Setup
1. Create a Google Sheet with a “Timeline” tab. Copy the exact column names from the “Google Sheets Headers and First Run” sticky note into row 1, including “Row Key”.
2. Connect Google Sheets credentials to “Upsert Sheets Timeline Rows”. In “Set Email and Sheet Config”, enter your spreadsheet ID, sheet name, sender and recipient addresses, and CMA case list.
3. Run manually and check the sheet rows and HTML attachment produced by “Format Timeline as HTML”.
4. For email delivery, connect SMTP credentials and enable “Email Timeline Digest”, which is disabled by default.
5. Confirm the workflow timezone, which defaults to Europe/London. Adjust the weekday 08:00 schedule if needed, then activate/publish the workflow after your manual test succeeds.

## Requirements
- An n8n instance with access to GOV.UK
- Google Sheets credentials with permission to edit the destination spreadsheet.
- Valid GOV.UK CMA merger case paths.
- SMTP credentials only if email delivery is enabled.
- No AI model, community nodes or GOV.UK API key required

## Customization
- Replace the sample cases with the CMA merger cases you want to track.
- Change the schedule, timezone, destination spreadsheet and email addresses
- Adapt milestone extraction rules and HTML report styling

## Additional info
Two historical CMA cases are included as examples. The workflow covers GOV.UK CMA case pages only. Email delivery is disabled until configured.

The HTML report contains the current run’s extracted entries. Google Sheets retains previous milestone rows; changed or removed source entries are not automatically deleted. Planned dates remain labelled as planned. Verify important dates against the linked official source.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
