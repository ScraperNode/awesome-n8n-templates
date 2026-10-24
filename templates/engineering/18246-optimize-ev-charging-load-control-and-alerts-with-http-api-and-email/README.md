# ⚒️ Optimize EV charging load control and alerts with HTTP API and email

> ⚡ **5 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow polls an EV charging-network API every 5 minutes, calculates site-wide grid load and tariff status, generates per-station charging recommendations, and emails either a standard schedule update or an overload warning with a mitigation plan using SMTP.

## How it works
1. Runs every 5 minutes on a schedule.
2. Requests live station demand, vehicle/queue details, grid capacity, and tariff information from a charging-network HTTP API endpoint.
3. Normalizes the returned station list into consistent fields (demand, capacity, battery level, and priority) for downstream processing.
4. Calculates total site demand versus grid capacity to derive grid load percentage, headroom, and a grid status, and flags whether the current tariff period is peak.
5. Builds a per-station recommended action (Charge Now, Throttle 50%, or Delay to Off-Peak) prioritizing queued and low-battery vehicles.
6. If grid load is high (≥80%) or marked as overload risk, waits 10 minutes, computes an estimated load reduction and projected grid load, and emails an overload warning and mitigation summary.
7. Otherwise, emails the standard charging schedule notification.

## Setup
1. Configure HTTP Header Auth credentials for the charging-network API and replace the request URL with your real site status endpoint.
2. Configure an SMTP credential and update the from/to email addresses used by both email notifications.
3. Review and adjust the grid-load thresholds and prioritization rules in the JavaScript code steps to match your site capacity and operating policy.

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
