# 🎫 Track HVAC maintenance agreements and automate reminders with Google Sheets, Gmail, and OpenAI

> ⚡ **35 views** · 🎫 [Ticket Management & Triage](../)

## Description

Maintenance agreements only pay off when someone remembers the next service date. This [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) workflow takes a new agreement from a webhook, has gpt-6-luna write the welcome email, logs it to Google Sheets, then handles the follow-up: a daily check for services due within 3 days or overdue, and a weekly AI review of the agreement book.

*Last updated: October 2026.*

## Quick Overview
Agreements arrive on a webhook, get normalized and validated, and anything missing key details is rejected by email instead of being saved. Valid agreements get an AI-written welcome and land in the Agreements tab in Google Sheets with status active. Every morning at 07:00 the workflow checks the book: agreements due within 3 days or overdue get a reminder to the customer, and when anything is overdue the office gets one escalation email listing who to call. Every Monday at 09:00 an AI review goes to the office.

## How it works
1. Receives the new agreement on the "When Agreement Added" webhook (POST, path hvac-agreement-intake-0930).
2. Normalize New Agreement builds the record: agreement_id (auto-generated as AG-yyyyMMdd-### when not supplied), customer name, email, phone and address, system_type, filter_size, service_frequency_months, last_service_date, next_due_date, agreement_end_date, status set to active, office_email and welcomed_at.
3. Validate Agreement requires customer_name, customer_email, next_due_date and office_email. Anything missing goes to Alert Office on Invalid Entry, which emails the office what was missing plus the posted values, and nothing is saved.
4. Valid entries go to Draft Welcome Email, where gpt-6-luna writes a welcome under 130 words with a subject and a body. Prepare Welcome Email parses that JSON and merges it onto the agreement.
5. Add Agreement to Tracker appends the record to the Agreements tab with reminder_count 0, then Email Welcome to Customer sends the welcome.
6. Daily Service Check runs at 07:00, reads the Agreements tab, and Flag Due Agreements keeps active agreements with 3 days or fewer until next_due_date, adding days_left and an is_overdue flag.
7. Draft Reminder Email has gpt-6-luna write a reminder under 120 words for each due agreement and Email Reminder to Customer sends it. Collate Overdue for Office then builds one email covering only overdue customers, with due date, days overdue and phone, and Email Overdue Alert to Office sends it. With nothing overdue, no office email goes out.
8. Weekly Agreement Review runs every Monday at 09:00 and Collate Agreement Stats counts active agreements, services due within 7 days, overdue ones and renewals ending within 60 days. Draft Weekly Review has gpt-6-luna write the review and Email Weekly Review to Office sends it.

## Setup
1. Create a Google Sheets file with a tab named "Agreements" and these columns: agreement_id, customer_name, customer_email, customer_phone, address, system_type, filter_size, service_frequency_months, last_service_date, next_due_date, agreement_end_date, status, office_email, welcomed_at, last_reminded_at, reminder_count.
2. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model.
3. Paste your spreadsheet id into the three Google Sheets nodes (Add Agreement to Tracker, Read Agreements, Read Agreements for Review).
4. Set the office email in the webhook payload, or change the default in Normalize New Agreement, so rejections, alerts and the weekly review reach the right inbox.
5. Point the webhook URL (path hvac-agreement-intake-0930) at your CRM, form tool or intake process.
6. Confirm the daily 07:00 and Monday 09:00 schedules match your office timezone, then activate the workflow.
7. To change the reminder window, adjust the 3-day threshold in Flag Due Agreements and the 7-day and 60-day windows in Collate Agreement Stats.

### Quick Answers
**What happens if an agreement arrives incomplete?**
Validate Agreement checks customer name, customer email, next due date and office email. If any are missing, nothing is added to the tracker and the office gets an email listing what was missing plus the posted values.

**What does gpt-6-luna actually do?**
It writes the customer welcome on intake, the service reminder for each agreement due within 3 days or overdue, and the Monday review of the agreement book for the office.

**Who gets notified when a service is overdue?**
The customer gets a reminder email first, then the office gets one escalation email listing each overdue customer with due date, days overdue and phone number.

**How do I know the state of the agreement book?**
Every Monday at 09:00 it reads the Agreements tab and emails the office a review covering active agreements, services due this week, overdue agreements by name and renewals in the next 60 days.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
