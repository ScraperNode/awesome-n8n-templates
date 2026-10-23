# 📋 Calculate litigation deadlines from intake forms with Google Calendar, Sheets, Slack and Gmail

> ⚡ **6 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow collects litigation matter intake details via an n8n form, calculates limitation and procedural deadlines using a built-in rules table, then creates deadline and reminder events in Google Calendar, logs each deadline to Google Sheets, and sends a summary via Slack and Gmail.

## How it works
1. Receives a submission from an n8n form with the matter details, jurisdiction, claim type, and trigger dates.
2. Loads the configured limitation rules, procedural rules, holidays, reminder offsets, and target Google Calendar/Google Sheets/Slack/email settings.
3. Calculates limitation and procedural due dates (and any review notes) from the provided dates, rolling deadlines off weekends/holidays and generating reminder dates.
4. Appends each calculated deadline record to a Google Sheets register.
5. Creates an all-day Google Calendar event for each calculated deadline and separate all-day events for each upcoming reminder offset.
6. Posts a consolidated deadline summary to a Slack channel and emails the same summary via Gmail to the responsible lawyer (or a fallback team email).

## Setup
1. Connect credentials for Google Calendar, Google Sheets, Slack, and Gmail.
2. In the rules/settings step, replace the placeholder Google Calendar ID, Google Sheets document ID, sheet name, Slack channel, and fallback notification email.
3. Review and update the limitationRules, proceduralRules, and holidays lists to match your jurisdiction(s) and current law, and adjust the timezone, reminder offsets, and business-day rolling options as needed.

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
