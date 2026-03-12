# 📱 Send personalized emails from Google Sheets via SMTP

> ⚡ **113 views** · 📱 [Social Media & Email Marketing](../)

## Description

# What problem does this solve?

This workflow automates sending personalized emails using a contact list stored in Google Sheets and a professional SMTP email account.

It removes manual work such as identifying who should receive an email, filtering no-show or specific leads, avoiding duplicate sends, and updating records after emails are sent. The entire process runs automatically in a controlled and repeatable way.

This is useful when you want to send targeted emails without using a full email marketing platform.

## How this workflow operates

This workflow works with any type of email list stored in Google Sheets and sends emails based on conditions you define.

1. No-show workshop or webinar attendees
Mark contacts as No-Show in the sheet and the workflow will send personalized follow-up emails only to those contacts.

2. Cold email lists
Use the same workflow for cold outreach by adjusting the filter condition (for example, status = “Cold”).

3. Old or re-engagement lists
Re-engage inactive contacts by updating their status (for example, “Re-engage” or “Inactive”) and running the workflow.

4. Custom filtering logic
The filter conditions can be customized to match any column value (status, tag, campaign, or label), giving you full control over who receives emails.

In all cases, emails are sent one by one, duplicate sends are prevented, and Google Sheets is updated after each successful send.

## What does it do?

1. Fetches contact data from Google Sheets

2. Processes contacts one by one to ensure safe delivery

3. Filters contacts based on a no-show or custom status
 
4. Checks whether an email has already been sent

5. Sends personalized emails via SMTP
 
6. Adds a delay between emails to respect provider limits
 
7. Updates Google Sheets to mark emails as sent

## Key features

- Google Sheets–based contact management

- SMTP email sending (works with any professional provider)

- No-show and status-based filtering

- Built-in duplicate email prevention

- Configurable delay between emails

- Beginner-friendly and easy to customize

- No external email marketing tools required


## Ideal for

- Marketers sending follow-ups or reminders

- Sales teams running targeted outreach

- Coaches and course creators following up with attendees

- Founders and small teams managing email outreach via spreadsheets

- Anyone who wants simple, rule-based email automation

## 🔗 Nodes Used

Send Email, Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
