# 💬 Audit sales payment follow-ups with HighLevel, Stripe, Gemini and Slack

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/Fp2L7VmWtkk?si=o_F7GmxOtk0yYRDL

This workflow runs hourly to audit unpaid closed-won opportunities in GoHighLevel by combining Stripe payment status, conversation history, and tasks, then uses Google Gemini to generate a follow-up verdict and posts alerts to Slack while logging notifications to Google Sheets.

## How it works
1. Runs every hour on a schedule and fetches closed-won opportunities from a specific GoHighLevel pipeline stage.
2. Filters for opportunities with a monetary value greater than 0 and removes opportunities that have already been alerted by checking a Google Sheets “Notification Log”.
3. For each remaining opportunity, pulls the contact’s latest GoHighLevel conversation, message history, and open/overdue tasks.
4. Looks up the related Stripe customer and retrieves their charges, then calculates how much has been paid since the deal was closed and how much remains outstanding.
5. Builds an audit context with deterministic flags (for example no rep follow-up, stale follow-up, unanswered customer reply, overdue tasks, partial payment, or escalation due).
6. Sends the context to Google Gemini to produce a structured JSON verdict including severity, evidence, and a suggested customer follow-up message.
7. If an alert is needed, posts a formatted message to a Slack channel and appends or updates the notification record in Google Sheets.

## Setup
1. Connect your GoHighLevel OAuth2 credential and update the pipelineId, stageId, and locationId values used to fetch opportunities and build GHL links.
2. Connect your Stripe credential and adjust the Stripe customer lookup logic (currently filtered by a fixed email) so charges are retrieved for the correct customer.
3. Add your Google Gemini (Google PaLM) API credential for the AI verdict generation.
4. Connect your Slack credential and choose the channel where alerts should be posted.
5. Connect a Google Sheets service account, set the spreadsheet ID and “Notification Log” sheet name, and ensure the sheet has columns such as opportunity_id and notified_at for deduping and logging.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Stripe, HighLevel, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
