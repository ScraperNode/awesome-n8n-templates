# 💬 Follow up on abandoned carts with WhatsApp and Google Sheets

> ⚡ **65 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every hour to read abandoned cart rows from Google Sheets, sends a WhatsApp reminder (with a discount for high-value carts), and then updates the sheet to log the follow-up count and timestamp.

## How it works
1. Runs every hour on a schedule trigger.
2. Loads configuration values (sheet details, WhatsApp phone number ID, value threshold, discount settings, and follow-up rules).
3. Fetches cart records from a Google Sheets worksheet.
4. Filters to carts abandoned before the configured cutoff, not marked as purchased, and still under the maximum follow-up count.
5. Sends a WhatsApp message via WhatsApp Business Cloud with a discount offer for carts above the high-value threshold, or a plain reminder for lower-value carts.
6. Updates the matching row in Google Sheets to increment the follow_up_count and set last_follow_up_at to the current timestamp.

## Setup
1. Add Google Sheets OAuth2 credentials and set the Google Sheet ID and sheet name in the configuration values.
2. Add WhatsApp Business Cloud credentials and set your WhatsApp phone number ID in the configuration values.
3. Ensure your Google Sheet includes the required columns: row_id, customer_name, phone_number, cart_value, items_summary, abandoned_at, purchased, follow_up_count, and last_follow_up_at.
4. Adjust the follow-up rules in the configuration values (follow_up_delay_hours/eligible_cutoff and max_follow_ups) and set the high_value_threshold, discount_percent, and discount_code to match your offer.
5. Change the schedule interval in the schedule trigger if you don’t want it to run hourly.

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
