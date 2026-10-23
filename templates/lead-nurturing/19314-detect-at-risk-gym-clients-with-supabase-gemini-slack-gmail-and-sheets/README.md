# 💬 Detect at-risk gym clients with Supabase, Gemini, Slack, Gmail, and Sheets

> ⚡ **19 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs on a daily schedule to detect at-risk gym clients using Supabase activity data, drafts a re-engagement email with Google Gemini, notifies coaches in Slack, emails clients via Gmail, and logs and syncs alert state to Supabase and Google Sheets.

## How it works
1. Runs daily on a schedule trigger.
2. Loads active clients plus the last 14 days of check-ins and last 21 days of weekly form submissions from Supabase.
3. Merges the datasets per client and calculates engagement metrics (days since last check-in/form, weekly check-in count, missed activities), a risk score/type, and escalation/cooldown timing.
4. Filters to high-risk clients and blocks alerts if the client is still inside the duplicate-alert cooldown window.
5. Builds a personalized prompt and uses Google Gemini to generate a short JSON email draft (subject and body), then formats a coach-facing Slack summary.
6. Sends a Slack alert to the coach channel and a Gmail message to the client, then logs the risk event to a Supabase table and appends the same record to a Google Sheets log.
7. Updates the client’s alert state and escalation fields in Supabase and syncs those fields back to a Google Sheets client master sheet.

## Setup
1. Add Supabase credentials and ensure the `clients`, `checkins`, `weekly_forms`, and `risk_events` tables and required columns (including status, expected check-ins/forms, coach/contact fields, and last alert timestamps) exist.
2. Add Google Gemini (PaLM) API credentials and confirm the model node is allowed to call `models/gemini-2.5-flash`.
3. Add Slack credentials and set the target channel ID for coach alerts.
4. Add Gmail OAuth credentials for the sending mailbox.
5. Add Google Sheets credentials and update the spreadsheet ID and sheet names/columns for `Clients_Master` and `Risk_Alert_Log` to match your document.
6. Set the schedule trigger time and, if needed, adjust the lookback windows (14 days for check-ins, 21 days for forms) and cooldown duration (3 days) in the workflow logic.

## Additional info
## Add Ons

This workflow can be extended with several useful enhancements:

- Add a second branch for medium risk clients that creates a softer reminder instead of a high priority alert. 
- Add a blocked alert log branch to record clients who were skipped because of the cooldown window. 
- Add WhatsApp, SMS, or CRM updates if your environment supports additional communication channels. 
- Add coach assignment rules based on program type, branch location, or trainer availability. 
- Add a dashboard workflow that reads the risk_events table and creates daily or weekly engagement summaries. 
- Add error notification nodes so failed Slack, Gmail, or Sheets actions can be reported to an admin automatically. 


## Use Case Examples

This workflow supports several practical use cases, and there can be many more depending on the business process around it:

- A fitness studio wants to identify clients who stop checking in and notify coaches before the client fully drops off. 
- An online transformation program wants to watch for missed weekly forms and send supportive follow up emails automatically. 
- A coaching team wants every risk case stored in both Supabase and Google Sheets for reporting and handoff. 
- A retention manager wants Slack alerts for at risk clients while still keeping client outreach automated through Gmail. 
- A gym franchise wants a reusable risk scoring workflow that can be adapted for different trainers, programs, and locations. 


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| No clients move past the trigger | Supabase credentials are invalid or the clients table has no active records | Check the Supabase connection and confirm active rows exist in the clients table.  |
| Merge output looks incomplete | One of the three source nodes is returning no records or a filter is too restrictive | Test each Supabase read node separately and review the date filters for checkins and weekly_forms.  |
| No clients pass the risk filter | The risk score logic does not produce records that meet the current threshold | Review the JavaScript in Calculate Client Risk Metrics and test with sample data that should clearly qualify.  |
| Clients are skipped unexpectedly | The cooldown logic is blocking them because alert_allowed_now is false | Check last_alert_sent_at values and confirm the cooldown rule in the Code node matches your intended timing.  |
| Gemini output fails to parse | The model response is not valid JSON or contains extra formatting | Tighten the prompt, keep the JSON only instruction, and inspect the Parse Draft Response node output.  |
| Slack messages are not sent | Slack credentials, channel selection, or app permissions are incorrect | Reconnect Slack credentials, verify the target channel, and confirm the app can post messages.  |
| Gmail emails are not sent | Gmail OAuth is disconnected or sender permissions are incomplete | Reauthenticate Gmail credentials and send a direct test email from the node.  |
| Google Sheets append or update fails | Sheet name, spreadsheet ID, or mapped columns do not match the actual file | Reopen the Sheets nodes and confirm the selected spreadsheet, tab, and column mapping are correct.  |
| Supabase update does not change client status | The update filter does not match the intended client row | Confirm that client_id values match exactly between the workflow output and the clients table.  |


## Need Help

If you need help importing this workflow, connecting credentials, adjusting the risk logic, refining the Gemini prompt or extending the workflow with additional channels and dashboards, support from an experienced n8n team can make the setup faster and more reliable. [WeblineIndia can help](https://www.weblineindia.com/contact-us.html) with workflow deployment, custom business rules, reporting extensions and similar automation solutions tailored to gym operations, coaching workflows and retention systems.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Supabase, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
