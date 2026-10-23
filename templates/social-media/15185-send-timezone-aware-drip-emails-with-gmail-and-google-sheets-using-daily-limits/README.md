# 📱 Send timezone-aware drip emails with Gmail and Google Sheets using daily limits

> ⚡ **27 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

- Three scheduled triggers fire on weekdays at region-appropriate working hours: EU/UK at 10:00 UTC, North America at 18:00 UTC, and Australia at 01:00 UTC
- All three feed one shared pipeline, so there is no duplicated logic across regions
- A code node detects the active region from the current UTC hour and picks a daily send limit (45 / 90 / 15 by default)
- Reads your contact list from Google Sheets, filters by country-to-region mapping, skips rows already marked sent, and caps at the daily limit
- Sends a personalised email via Gmail using expressions like `{{ $json['First Name'] }}` and `{{ $json['Company'] }}`
- Writes success or error status back to the same row (`email_sent`, `sent_date`, `status`, `group_sent`, `error_msg`)
- No `Wait` nodes, no long-running executions - timing is driven entirely by Cron schedules

## Set up steps

- Setup takes about 10-15 minutes
- Connect a **Google Sheets OAuth2** credential with read + write access to your contacts sheet
- Connect a **Gmail OAuth2** credential for the sending account
- Create a Google Sheet with these columns: `First Name`, `Company`, `Email`, `Country`, `email_sent`, `sent_date`, `status`, `group_sent`, `error_msg`
- In all three Google Sheets nodes, select your spreadsheet and the contacts tab
- Open the **Build Email** node and replace the placeholder subject and HTML body with your own copy
- In the **Send Gmail** node, set `senderName` to your display name
- Optional: adjust daily send caps inside **Determine Group** and edit the country-to-region lookup inside **Filter and Limit**
- Detailed per-step notes live inside the workflow as sticky notes

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
