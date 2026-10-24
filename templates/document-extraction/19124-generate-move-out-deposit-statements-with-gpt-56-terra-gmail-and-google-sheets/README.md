# 🔬 Generate move-out deposit statements with gpt-5.6-terra, Gmail, and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Move-outs without the paperwork headache. This workflow takes inspection data via webhook, has AI separate chargeable damages from normal wear-and-tear, computes the deposit refund or amount owed, emails an itemized statement to the tenant, and keeps the landlord posted with daily pending reminders.

*Last updated: September 2026.*

## Quick Overview
This workflow accepts move-out inspection data via a webhook, logs it to Google Sheets, uses OpenAI to classify damages as chargeable or wear-and-tear, computes the security deposit refund or amount owed, emails an itemized statement via Gmail, and notifies the landlord via Telegram with daily pending reminders.

## How it works
1. Receives a POST webhook request with move-out details (tenant, unit, deposit, unpaid balances, and a damages list).
2. Normalizes the payload, validates required fields, and either alerts the landlord about an invalid intake via Telegram and Gmail or continues.
3. Appends the move-out as pending to a Google Sheets MoveOutLog tab and prepares the inspection details for review.
4. Uses OpenAI to classify each damage item as chargeable or wear-and-tear with estimated costs, then parses and cleans the returned JSON.
5. Calculates total deductions, applies unpaid rent/utilities, and generates an itemized deposit disposition statement with the net refund or amount owed.
6. Emails the statement to the tenant via Gmail, updates the matching row in Google Sheets, and notifies the landlord via Telegram (plus a copy by Gmail when the tenant owes money).
7. Runs daily on a schedule to scan Google Sheets for move-outs pending 3+ days and sends the landlord a Telegram/Gmail reminder or an all-clear message.

## Setup
1. Create and connect credentials for Google Sheets, OpenAI (Chat), Gmail, and Telegram.
2. Create a Google Sheet with a MoveOutLog tab and columns that match the workflow’s fields (at minimum moveout_id, tenant_name, tenant_email, unit, move_out_date, deposit_amount, unpaid_rent, unpaid_utilities, damages, status, received_at, plus disposition outputs like deduction_total, unpaid_total, net_refund, classified_at).
3. Update the Google Sheets document ID, sheet name, and matching column (moveout_id) if you use a different spreadsheet structure.
4. Configure the webhook URL in your move-out intake source (property system or form) to POST to /lease/moveout with the expected fields, including a damages array.
5. Set the landlord notification targets by updating the Telegram chat ID and the landlord email address used for invalid-intake, owed-copy, and daily sweep emails.
6. Adjust the daily sweep cron schedule and the pending threshold (currently 3+ days) to fit your operations.

### Quick Answers
**How are damages judged?**  
AI classifies each item as chargeable or wear-and-tear with estimated costs.  
**Who gets notified?**  
Tenants get the itemized statement by Gmail. Landlords get Telegram updates plus a Gmail copy when money is owed.  
**What if a case stalls?**  
A daily sweep flags move-outs pending 3+ days, or sends an all-clear when nothing is stuck.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
