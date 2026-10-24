# 🧾 Recover no-show appointment fees with an automated WhatsApp or SMS ladder

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs every Monday at 08:00 to validate last week’s appointment rows, calculate key KPIs (show-up rate, no-show rate, cancellations, revenue, and top booking source), generate a week-over-week digest message, and hand it off to a replaceable delivery step (email/Slack/WhatsApp).

## How it works
1. Runs every Monday at 08:00 on a schedule trigger.
2. Loads last week’s appointment rows (using built-in demo data in the template) and validates required fields like appointment ID, timestamp, status, and numeric revenue.
3. Routes invalid rows to an error output with the reason so they can be logged externally.
4. If there are no valid rows, creates an “empty week” digest message that flags missing data.
5. If valid rows exist, aggregates weekly KPIs and also computes the previous week’s KPIs for comparison.
6. Builds a digest string with week-of date, show-up rate change, no-show rate, revenue change, and top source, then passes the message to a placeholder delivery step.

## Setup
1. Replace the demo data source with your real appointment source (for example, read from Google Sheets) and ensure it provides columns for appointment_id, starts_at (ISO), status (completed|no_show|cancelled), revenue_eur, and source.
2. Replace the placeholder delivery step with your preferred channel (for example, Gmail, Slack, or WhatsApp) and add the required credentials for that service.
3. If you want to keep an audit trail, add a real destination for invalid-row logging (for example, a “kpi_errors” Google Sheet) and update the schedule time/day if needed.

## 🔗 Nodes Used

Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
