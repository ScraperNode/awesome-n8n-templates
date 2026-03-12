# 🎣 Capture leads from forms to Google Sheets and send Gmail reminders

> ⚡ **41 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## System Overview
## Workflow Name: New Lead and Reminder System

##  What This System Does:

This n8n automation captures new leads from a form submission and automatically:

Saves them to a Google Sheet database

Sends personalized emails to prospects based on their budget

Sends you admin notifications of new leads

Reminds you daily about leads you haven't called yet

Helps you track which leads have been contacted

How It Works - Step by Step:

## PART 1: NEW LEAD CAPTURE

Form Submission Trigger - Someone fills out "Test Form" with:

First Name

Last Name

Email

Budget (dropdown: 0-100, 0-1000, 1000+)

Message

Budget Filter - Rejects leads with "0-100" budget (too small)

Google Sheets - Stores the lead with:

All form data

Submission date

"Called" status (starts as FALSE)

"Rejected" status (TRUE if budget &lt; 1000, FALSE if 1000+)

Lead Routing (Switch Node) - Routes leads to different email templates:

Budget 0-1000: Gets email saying "I'll give you a call later this week"

Budget 1000+: Gets email saying "Book a call on my Calendly link"

Your Notifications - You receive 2 admin emails for every lead:

One showing lead details

Another with full lead summary

## PART 2: DAILY REMINDER SYSTEM

Schedule Trigger - Runs every day at 8 PM (20:00)

Google Sheets Query - Pulls all leads from today that have Called = FALSE

Data Processing:

Filter1 - Checks if Called = TRUE and deletes completed leads

Filter2 - Checks if Called = FALSE and keeps uncalled leads

Code Node - Formats uncalled leads into readable text:

text
Name: [First Name] [Last Name]
Email: [Email]
Budget: [Budget]
Message: [Message]
Reminder Email - Sends you the formatted list of uncalled leads to your Gmail

After You Call - Mark Called = TRUE in the spreadsheet to remove from tomorrow's reminder

## Key Features:

✅ Automatic lead qualification - Only accepts budgets of 1000+
✅ Personalized outreach - Different emails based on budget
✅ Lead database - All leads tracked in Google Sheet
✅ Daily reminders - Never forget uncalled leads
✅ Admin alerts - You get notified immediately when new leads arrive
✅ Lead tracking - Mark "Called" status to track progress

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
