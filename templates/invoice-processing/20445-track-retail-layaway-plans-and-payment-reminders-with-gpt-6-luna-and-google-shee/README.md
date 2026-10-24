# 🧾 Track retail layaway plans and payment reminders with gpt-6-luna and Google Sheets

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

Layaway plans are easy to start and easy to lose track of, which is where the money quietly walks out of the store. This workflow logs each new plan to Google Sheets, emails the customer their payment schedule, chases due and overdue payments every morning, and has gpt-6-luna write the owner a monthly review of what is still owed.

*Last updated: October 2026.*

## Quick Overview

Three flows share one Google Sheets tracker. A webhook takes each new layaway plan, validates it, appends it to the "Plans" tab and emails the customer their schedule. Every morning at 08:00 it reads all open plans, finds payments due within three days and payments already overdue, reminds those customers and logs each alert to "Alerts". Overdue plans also roll into one escalation email to the store, and on the 1st at 09:00 gpt-6-luna drafts the owner's monthly review.

## How it works

1. "When Layaway Plan Created" receives the new plan on a POST webhook (path layaway-intake-0927) that your POS or a form can call.
2. "Normalize Plan" builds the record: plan_id as LAY-YYYYMMDD-1234, the customer name, email and phone, item, price_total, deposit_paid, installment_amount, installments_total, interval_days, payments_made, status, office_email, created_at, balance_due and next_due_date.
3. "Validate Plan" checks that customer_name, item and next_due_date are filled in, otherwise "Email Reject Notice" tells the store office what was posted.
4. Valid plans are appended to the "Plans" tab in Google Sheets across 15 columns, from plan_id through created_at.
5. "Email Plan Confirmation" sends the customer the price, deposit, balance, next installment and due date, plus the payment counter and plan reference.
6. "Daily Payment Sweep" runs every day at 08:00, reads the "Plans" tab, and "Compute Payment State" works out days_until_due for every row.
7. Each plan is tagged overdue, due_soon (0 to 3 days out) or ok, plus a needs_reminder flag. COMPLETE or CANCELLED plans are skipped.
8. Overdue rows go to "Prepare Overdue Pack", then "Log Overdue Alert" appends the record to "Alerts" and "Email Overdue Reminder" emails the customer.
9. "Aggregate Office Escalations" folds that run's overdue plans into one body dated in Asia/Pontianak, and "Email Office Escalation" sends it as "Overdue layaway plans: <count>" for the office to call.
10. Due-soon rows go to "Prepare Reminder Pack", then "Log Reminder Alert" appends the record to "Alerts" and "Email Payment Reminder" sends the reminder.
11. On the 1st at 09:00 "Monthly Plan Review" reads "Plans" again and "Compute Month Stats" reduces it to active plans, total balance, overdue count and value, due-soon count and the top 8 overdue customers.
12. "AI Write Review" passes those stats to gpt-6-luna through "Monthly Review Model", which drafts a plain text body under 180 words, and "Email Monthly Review" sends it to the store.

## Setup

1. Create a Google Sheets file with a "Plans" tab using these columns: plan_id, customer_name, customer_email, customer_phone, item, price_total, deposit_paid, balance_due, installment_amount, installments_total, interval_days, next_due_date, payments_made, status, created_at.
2. Add an "Alerts" tab using these columns: alert_id, plan_id, customer_name, item, alert_type, sent_to, sent_at, customer_email, office_email.
3. Add credentials for Google Sheets OAuth2, Gmail OAuth2 and an [OI] chat model, then pick your spreadsheet in the Google Sheets nodes (Log Plan, Read Plans, Log Overdue Alert, Log Reminder Alert, Read Plans Monthly).
4. Point your POS or form at the webhook URL for path layaway-intake-0927, posting customer_name, customer_email, item, price_total, deposit_paid, installment_amount and interval_days.
5. Set the store email in the office_email field of the payload, or change the fallback in "Normalize Plan".
6. Confirm both schedules match your timezone, daily at 08:00 and on the 1st at 09:00, then activate the workflow.
7. Optional: change the 3 day reminder window in "Compute Payment State" or the 30 day interval default in "Normalize Plan".

### Quick Answers

**What happens when a layaway plan is created?**
The webhook receives it, "Normalize Plan" builds the plan_id, balance_due and next_due_date, "Validate Plan" checks the customer name, item and due date, the row lands in "Plans" and the customer gets a confirmation email.

**How does the daily sweep decide who gets a reminder?**
"Compute Payment State" works out days_until_due for every open plan. Due in 0 to 3 days is due_soon, past its date is overdue, and COMPLETE or CANCELLED plans are skipped.

**What is the difference between the customer email and the office escalation?**
Due-soon customers get one friendly reminder with the amount and date. Overdue customers get an action needed email, and every overdue plan from that run is also collected into one escalation email to the store.

**What does gpt-6-luna do here?**
On the 1st of the month it takes the stats, active plans, total balance, overdue count and value, payments due soon and the largest overdue balances, and writes the owner's review email in plain language under 180 words.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
