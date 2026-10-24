# 🔒 Monitor Have I Been Pwned breaches with Google Sheets, Gmail, and Slack

> ⚡ **89 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Checks Have I Been Pwned daily for new breaches, scores each one against your own risk criteria and watchlist, logs every result to Google Sheets, and sends Gmail and Slack alerts only when a breach clears your configured threshold.

## How it works
1. Runs on a daily schedule at 08:00, or on demand via the manual trigger.
2. Checks row 1 of your Google Sheet and writes the header row automatically if it's missing, so no manual setup is required.
3. Calls the Have I Been Pwned latestbreach endpoint to retrieve the most recent breach record. No API key needed.
4. Loads the breach history from Google Sheets and skips processing if this exact breach has already been logged, unless HIBP has revised it or reprocessing is enabled.
5. Scores the breach 0–10+ based on records exposed, sensitive data types (passwords, financial data, government IDs, health data), HIBP's own verified/sensitive flags, and your domain or keyword watchlist, producing a LOW/MEDIUM/HIGH/CRITICAL rating.
6. Writes the scored breach to Google Sheets, appending new rows or updating existing ones, so you keep a complete audit trail regardless of whether an alert fires.
7. If the score meets your configured threshold, sends a formatted HTML email via Gmail and a Slack Block Kit card via the Slack API; otherwise the run ends quietly with nothing sent.

## Setup
1. Create a Google Sheet, note its ID from the URL and the tab name you'll use, then connect a Google Sheets OAuth2 credential in n8n.
2. Connect a Gmail OAuth2 credential for email alerts, and set your recipient address in the Configuration node.
3. Connect a Slack OAuth2 credential with the chat:write scope on the Post Slack Card node, invite the Slack app to your target channel, and set that channel (e.g. #security-alerts) in Configuration.
4. Open the Configuration node and set sheetId, sheetTabName, minimum severity, watchlist domains/keywords, and whether to reprocess known breaches. Run the workflow once manually to bootstrap the sheet and confirm everything is wired correctly before activating the schedule.

## Requirements
- Google Sheets account
- Gmail account
- Slack workspace with permission to add an app (only if using Slack alerts)
- No Have I Been Pwned API key required

## Customization
- Adjust the scoring weights and severity thresholds in the Score Breach Severity node to match your own risk model
- Add your organization's domains or sector keywords to the watchlist so relevant breaches always alert regardless of score
- Swap or add delivery channels using the included but disabled Teams/webhook and SMTP nodes
- Change the schedule trigger's time or interval to run more or less frequently

## Additional info
Google Sheets is used as the state store instead of local disk, so this workflow runs on n8n Cloud and Starter plans as well as self-hosted instances with no filesystem access required.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
