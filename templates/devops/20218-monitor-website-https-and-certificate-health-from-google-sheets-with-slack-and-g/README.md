# ⚙️ Monitor website HTTPS and certificate health from Google Sheets with Slack and Gmail alerts

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to read a list of client websites from Google Sheets, check each site’s HTTPS and certificate status via weio.ai, write results back to the sheet, and send Slack and Gmail alerts for new or ongoing problems.

## How it works
1. Runs every Monday at 08:00 (or when executed manually) and loads alert thresholds and the digest email address.
2. Reads website rows from Google Sheets and keeps only rows with a non-empty website and not marked inactive.
3. Calls the weio.ai HTTPS check API for each website (batched one at a time with a delay) to evaluate reachability, HTTPS redirect behavior, and certificate validity/expiry.
4. Classifies each result as ok, warning, or critical, compares it to the previous status stored in the sheet, and timestamps the check.
5. Updates the matching rows in Google Sheets with the latest severity and HTTPS status details.
6. Sends an urgent Slack message for any critical issue that is new or has changed since the last run, and emails a single Gmail digest listing all non-ok sites.
7. If the workflow execution fails, posts an error notification to Slack via an Error Trigger.

## Setup
1. Create a Google Sheet with columns like website, active (set to "no" to skip), owner (optional), and output columns severity, https_status, https_detail, cert_expires, and checked_at.
2. Add Google Sheets OAuth credentials and select the target document and sheet in both the read and update steps.
3. Add a Slack credential and choose the channel for both the urgent alert and the workflow-failed notification.
4. Add a Gmail OAuth credential for sending the email digest.
5. Update the Settings values (email_to, warn_days, critical_days) to match your recipients and certificate warning windows, and (optionally) add an Authorization bearer token to the weio.ai request if you need higher throughput.

## Requirements
- Google Sheets, Slack and Gmail accounts connected as n8n credentials.
- No account is needed for the weio.ai HTTPS check: the free tier allows 5 checks a minute, and the workflow spaces requests 15 seconds apart (about 240 sites an hour).

## Customization
- Change warn_days and critical_days in Settings to move the expiry thresholds.
- For bigger lists, add a Header Auth credential (Authorization: Bearer <your key>) on Check HTTPS and shorten the batch interval.

## Additional info
API docs and keys: https://weio.ai/services/site-check-api.html?utm_source=n8n&utm_medium=templates&utm_campaign=https-watch . Built and maintained by Weio, Inc.; AI operators did most of the work.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
