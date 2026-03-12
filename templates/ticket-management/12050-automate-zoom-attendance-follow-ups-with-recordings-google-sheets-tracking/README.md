# 🎫 Automate Zoom attendance follow-ups with recordings & Google Sheets tracking

> ⚡ **106 views** · 🎫 [Ticket Management & Triage](../)

## Description

Workflow Overview
Zoom Attendance Evaluator with Follow-up is an n8n automation workflow that automatically evaluates Zoom meeting attendance and sends follow-up emails to no-shows and early leavers with recordings and materials.
Who's it for
* Companies and organizations that regularly host online seminars and webinars
* Educational institutions conducting online classes
* Anyone looking to streamline participant attendance management and follow-up processes
How it works
1. Scheduled execution: Runs automatically every hour
2. Fetch meeting data: Retrieves recent Zoom meetings and participant information
3. Evaluate attendance: Automatically classifies participants into four categories:
   * No-show: 0 minutes attended
   * Early-leaver: Less than 50% attendance
   * Partial attendance: 50-80% attendance
   * Full attendance: Over 80% attendance
4. Automatic follow-up: Sends automated emails with recording links and materials to no-shows and early leavers
5. Record keeping: Logs all follow-ups to Google Sheets for tracking
Requirements
* Zoom account: OAuth2 authentication setup required
* SMTP email server: Configuration needed (Gmail, SendGrid, etc.)
* Google Drive: For storing handout materials
* Google Sheets: For attendance logging
* Credentials for each service configured in n8n
How to customize the workflow
* Adjust attendance thresholds: Modify the 50% and 80% values in the "Evaluate Attendance" node code
* Change execution frequency: Configure the time interval in the "Schedule Trigger" node
* Customize email template: Edit subject and body in the "Prepare Email Data" node
* Next session registration link: Replace the placeholder URL in the code with your actual registration link
This workflow completely automates post-meeting follow-up tasks, helping improve participant engagement and reduce manual work.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Google Drive, Zoom, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
