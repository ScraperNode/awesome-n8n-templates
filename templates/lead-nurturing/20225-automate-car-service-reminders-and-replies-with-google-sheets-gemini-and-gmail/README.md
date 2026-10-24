# 💬 Automate car service reminders and replies with Google Sheets, Gemini and Gmail

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every morning, reads auto repair customer data from Google Sheets, uses Google Gemini to draft service-due reminder emails, and sends them via Gmail (or a test copy to the shop owner) while logging sent reminders back to the sheet.

## How it works
1. Runs every morning at 9:00 on a schedule.
2. Reads the Customers tab in Google Sheets and calculates each customer’s next service due date from the last service date and interval.
3. Filters to customers due within the configured reminder window, skipping opt-outs, invalid emails, and anyone already reminded for the same due date, and limits sends to the daily cap.
4. Uses Google Gemini to generate a short plain-text reminder email for each due customer, falling back to a default message if generation fails.
5. Sends the email via Gmail to the customer when live mode is enabled, or sends a test copy to the owner email when live mode is disabled.
6. Updates the same Google Sheets row with the reminder timestamp and the due date that was reminded, then waits 7 seconds before processing the next customer.

## Setup
1. Create or copy a Google Sheets document with a Customers tab and columns for customer_name, email, vehicle, last_service_date, last_service_type, service_interval_days, opt_out, reminded_for_due_date, and reminder_sent_at.
2. Add Google Sheets, Gmail, and Google Gemini credentials in n8n.
3. Update the workflow parameters (shop name, phone, booking link, Google Sheet URL, reminder window, default interval, daily cap, live mode, and test email).
4. Run the workflow with live mode disabled to verify the test emails, then enable live mode to send to customers and log reminders.

## Requirements
- Google Sheets account with a Customers tab
- Gmail account
- Google Gemini API key (free tier works)

## Customization
- Change remind_days_before, default_interval_days or daily_send_cap in Set Service Parameters
- Edit the email prompt in Generate Reminder Email
- Change the send time in Every Morning at 9am

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
