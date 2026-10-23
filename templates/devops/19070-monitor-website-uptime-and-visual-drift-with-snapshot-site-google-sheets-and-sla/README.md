# ⚙️ Monitor website uptime and visual drift with Snapshot Site, Google Sheets and Slack

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every 10 minutes to monitor a list of URLs from Google Sheets using Snapshot Site for uptime and visual comparisons, then posts Slack alerts only when a page’s state changes (up, down, or visual-drift) and writes the latest state back to the sheet.

## How it works
1. Runs every 10 minutes on a schedule trigger.
2. Reads the Watchlist tab in Google Sheets and processes each row one URL at a time.
3. Uses Snapshot Site Analyze (with quality checks) to determine whether the page is up or down and records a reason and screenshot link.
4. If the page is up, uses Snapshot Site Compare to check the live page against the baseline screenshot URL and flags visual drift when the mismatch percentage crosses the threshold.
5. Compares the newly computed state to the previous lastState from Google Sheets and formats a Slack message only when a state transition occurs (including recoveries).
6. Posts the state-change alert to a Slack channel when needed and updates Google Sheets with lastState and lastCheckedAt for the URL.

## Setup
1. Install the n8n-nodes-snapshot-site community node and add Snapshot Site API credentials.
2. Add Google Sheets OAuth credentials and set the spreadsheet URL/ID and sheet name in the read and update steps.
3. Create a Google Sheets Watchlist tab with columns url, label, baselineUrl, lastState, and lastCheckedAt, and fill in url and baselineUrl values (including https://) for each page.
4. Add Slack credentials and set the target channel for notifications.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
