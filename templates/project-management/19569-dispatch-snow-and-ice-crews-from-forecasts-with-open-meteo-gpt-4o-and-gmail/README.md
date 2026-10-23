# 📋 Dispatch snow and ice crews from forecasts with Open-Meteo, GPT-4o and Gmail

> ⚡ **21 views** · 📋 [Project Management](../)

## Description

Snow and ice dispatches that trigger themselves. This workflow checks Open-Meteo forecasts for each site stored in Google Sheets, automatically dispatches crews when a site’s trigger is met, writes the crew brief and client notice with AI, and tracks every dispatch through confirmation and follow-up webhooks.

*Last updated: September 2026.*

## Quick Overview
This workflow checks Open-Meteo forecasts for sites stored in Google Sheets and automatically dispatches snow/ice crews when per-site triggers are met, using OpenAI to generate crew briefs and client notices, then notifying teams via Gmail and Telegram and tracking status through confirmation and follow-up webhooks.

## How it works
1. Runs every 3 hours on a schedule or on demand via a webhook to start a forecast sweep.
2. Reads the Sites tab in Google Sheets, validates required fields (IDs, coordinates, triggers, and emails), and sends invalid rows to an admin Gmail address, a Telegram chat, and the Errors tab.
3. Fetches a 2-day hourly forecast from Open-Meteo for each valid site and evaluates the next 12 hours against the site’s snow trigger and freezing-precipitation criteria.
4. Logs each sweep to the CheckLog tab in Google Sheets with counts of checked sites, dispatches, no-action sites, and rejected rows.
5. When one or more sites need dispatch, sends the dispatch list to an OpenAI chat model to generate a storm summary, crew brief, and client notice for each site.
6. Creates a dispatch entry in the DispatchLog tab and sends the crew brief and client notice via Gmail, while also posting a dispatch alert to Telegram.
7. Receives crew completion updates via a confirmation webhook, updates the matching DispatchLog row, emails the client a completion notice, and alerts the owner in Telegram (or reports errors if the dispatch ID is missing/unknown).
8. Runs a daily sweep (or manual follow-up webhook) to find dispatches still marked “dispatched” after 6 hours and sends a Gmail and Telegram nudge, or reports that all dispatches are confirmed.

## Setup
1. Create a Google Sheets workbook with tabs named Sites, DispatchLog, CheckLog, and Errors, and ensure columns match the fields the workflow reads and writes (for example: site_id, lat, lon, trigger_cm, crew_email, contact_email, dispatched_at, status, completed_at).
2. Add Google Sheets OAuth credentials and update the spreadsheet document ID (and sheet names if different) in all Google Sheets steps.
3. Add an OpenAI API credential (or compatible OpenAI chat provider) and select the model used to generate dispatch briefs.
4. Add Gmail OAuth2 credentials and replace the admin/owner email addresses where reports and invalid-row alerts are sent.
5. Add Telegram bot credentials and update the target chat ID used for dispatch, error, and follow-up notifications.
6. Copy the webhook URLs for /snow/check, /snow/confirm, and /snow/followup and share them with your team or connect them to your preferred crew reporting method.

### Quick Answers
**How often does the workflow check the forecast?**
Every 3 hours on a schedule, or on demand via the webhook to start a forecast sweep.

**What makes a site trigger a dispatch?**
The next 12 hours of the 2-day hourly forecast are evaluated against the site’s snow trigger and freezing-precipitation criteria; when they are met, a dispatch list is sent to an AI chat model for the storm summary, crew brief, and client notice.

**What happens when a crew confirms the job?**
The confirmation webhook updates the matching DispatchLog row, the client receives a completion notice by email, and the owner is alerted on Telegram.

**How do stuck dispatches get followed up?**
A daily sweep finds dispatches still marked “dispatched” after 6 hours and sends a Gmail and Telegram nudge, or reports that all dispatches are confirmed.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
