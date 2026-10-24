# 👥 Manage recruitment candidates with Google Sheets, Notion and Gmail

> ⚡ **42 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This n8n template automates repetitive recruitment tasks by connecting Google Forms, Notion, and Gmail into one recruitment workflow.

It collects new applications, adds candidates to a Notion Applicant Tracking System (ATS), and automatically sends personalized emails when a candidate's recruitment status changes.

## How it works
1. Applications submitted through Google Forms are stored in Google Sheets.
2. n8n checks for new applications and identifies candidates who haven't been added to Notion yet.
3. New candidates are automatically added to the Notion Candidates Tracker with their name, email, phone number, role, CV/resume, and initial status.
4. You can manage each candidate's recruitment stage directly from Notion.
5. When a candidate's status changes, n8n detects the change and finds the email template configured for that status.
6. Email templates can use dynamic placeholders such as [Name] to personalize the message.
7. The personalized email is automatically sent to the candidate through Gmail.

## Setup
1. Set up the n8n data tables (example below)
2. Set up the provided Notion Recruitment / Applicant Tracking template.
3. Connect the Google Sheets spreadsheet receiving your Google Forms responses.
4. Configure your recruitment stages and candidate statuses in Notion.
5. Create email templates for each recruitment stage.
6. Customize email subjects and messages using candidate fields such as [Name].
7. Connect your Gmail account.
8. Activate the workflow and let n8n automate your recruitment process.

## Requirements
- n8n datatables
- Notion account
- Google account / Google Sheets
- Gmail account
- Notion Recruitment / Applicant Tracking template

## Additional info
# Notion Data Tables

- id: string
- notion_id: string
- values: string
- created_at: datetime
- updated_at: datetime

# Document Links

## Notion Example Link
https://app.notion.com/p/Recruitment-Board-3d12566679c480fcb916d16c014c8197?source=copy_link

## Google Sheet Example Link
https://docs.google.com/spreadsheets/d/1mjlkvPr2qX3GMaMLSAFuhJ63ptYhXk_Qtprk7y2YfPg/edit?usp=sharing

## 🔗 Nodes Used

Google Sheets, Gmail, Notion, Notion Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
