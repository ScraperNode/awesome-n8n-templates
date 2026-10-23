# ⚙️ Pause risky Instantly sending accounts with Slack alerts and Google Sheets logs

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs every morning to check Instantly sending accounts for deliverability risk using warmup analytics, DNS vitals, and recent bounce stats, then auto-pauses risky accounts and posts alerts and a daily digest to Slack while logging account health history to Google Sheets.

## How it works
1. Runs every morning on a schedule.
2. Retrieves all sending accounts from the Instantly API and batches them for bulk checks.
3. Pulls warmup health analytics, DNS vitals (MX/SPF/DKIM/DMARC), and daily sent/bounced stats from Instantly for the configured lookback window.
4. Scores each account against the configured thresholds to label it healthy, watch, pause recommended, or already paused.
5. Pauses active accounts in Instantly when auto-pause is enabled and the account crosses a pause threshold, then sends a Slack alert with the reason.
6. Sends a daily Slack digest summarizing overall account health and appends one row per account to a Google Sheets “Health log” tab for trend tracking.

## Setup
1. Create an Instantly API key with API v2 access and add it to n8n as an HTTP Bearer Auth credential used by the Instantly HTTP Request steps.
2. Add a Slack credential and set the target channel name in the thresholds (for example, #deliverability).
3. Add a Google Sheets credential, create a spreadsheet with a sheet tab named “Health log”, and replace the tracker Google Sheets URL with your document URL.
4. Review and adjust the thresholds (bounce rate limits, lookback days, warmup score limits, batch size, and autoPause/pauseOnDnsFailure toggles) before activating the workflow.

## Requirements
- Instantly account with an API v2 key (accounts read and update scopes)
- Bearer Auth credential in n8n for the Instantly API key
- Slack workspace
- Google Sheets with a tab named Health log (optional)

## Customization
- Change maxBounceRatePct (default 3%) or minSentForBounceCheck in Set Bounce Alert Thresholds
- Adjust warnBelowWarmupScore and pauseBelowWarmupScore to fit your warmup standards
- Set pauseOnDnsFailure to true to pause accounts whose domain fails SPF, DKIM or DMARC
- Set notifyWhenAllHealthy to false to only get Slack messages when something is wrong
- Change the schedule to run before each sending window
- Delete the Google Sheets nodes if you don't need a history log

## Additional info
Run it once with autoPause set to false to review the verdicts before letting it pause anything. Paused accounts are never resumed automatically: fix the cause, then resume them in Instantly. The Instantly API is called through HTTP Request nodes with a Bearer Auth credential, so no API key is stored in the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
