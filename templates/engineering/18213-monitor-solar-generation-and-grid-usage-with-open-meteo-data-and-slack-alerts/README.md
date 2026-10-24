# ⚒️ Monitor solar generation and grid usage with Open-Meteo data and Slack alerts

> ⚡ **20 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to pull solar production, grid usage, and Open‑Meteo weather data, estimate expected solar output, calculate net energy balance and costs, and post a Slack summary or escalate underperformance through an acknowledgement and resolution check.

## How it works
1. Runs every day at 19:00 (or via a manual test run) to start the monitoring cycle.
2. Fetches today’s hourly solar production data from your solar provider API and today’s hourly grid/meter usage data from your utility or smart‑meter API.
3. Pulls the day’s hourly cloud cover and shortwave radiation forecast from the Open‑Meteo API.
4. Models expected solar generation from the weather data, compares it to actual production, and flags efficiency drops or zero production during daylight.
5. Combines production and usage by time interval to calculate self-consumption, grid import/export totals, peak usage, and a peak/off‑peak tariff-weighted grid import cost.
6. Builds a daily report with a severity level (none/warning/critical) and a troubleshooting checklist, then posts a Slack daily summary if no alert is required.
7. If an alert is required, pauses for acknowledgement and then resolution confirmation via wait webhooks, posting to Slack either a resolution-confirmed message or an escalation for unacknowledged or unresolved issues.

## Setup
1. Create HTTP Header Auth credentials for your solar monitoring API and your utility/smart‑meter API, and attach them to the two HTTP Request nodes.
2. Add a Slack OAuth credential with permission to post messages and set the target channel name in the config (for example, #solar-monitoring).
3. Update the configuration values for API URLs, latitude/longitude, system capacity (kW), performance thresholds, peak-hour window, and tariff rates.
4. Copy the two Wait node resume webhook URLs and connect them to whatever UI/process you use to send “acknowledged” and “resolved” callbacks.
5. Adjust the schedule trigger cron expression if needed, then activate the workflow and run a manual test to validate the data formats returned by your APIs.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
