# ⚙️ Monitor workflow errors with n8n API, log to Google Sheets, and alert via Slack

> ⚡ **54 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this for?

This workflow is built for **n8n admins**, **automation agencies**, **solopreneurs**, and **ops teams** running multiple workflows in production who need to know the moment something breaks.

If you're manually checking your n8n execution logs every day to catch failures or worse, finding out about broken workflows days later this template gives you real-time monitoring with zero effort.

## What problem does this solve?

- Failed workflows go unnoticed for hours or days because nobody checks the execution log
- When you do find a failure, you have to dig through execution data to figure out what went wrong
- No centralized error history you can't spot patterns or recurring issues
- Alert fatigue from generic monitoring tools that don't tell you *why* something failed or *how* to fix it

## What this workflow does

This workflow monitors your **entire n8n instance** for failed executions and handles the full error lifecycle automatically:

- **Continuous monitoring** runs every minute on a schedule (or on-demand via webhook)
- **Smart filtering** only processes failures from the last 5 minutes and excludes its own executions to prevent alert loops
- **Automatic error classification** categorizes every failure into one of 7 types: Auth Error, Rate Limit, Network, Data/Config Error, Not Found, Server Error, and Permission
- **Severity assignment** tags each error as 🔴 Critical, 🟠 High, or 🟡 Medium
- **Suggested fixes** — generates an actionable fix suggestion for each error category (e.g., "Re-authenticate credential for: [node name]")
- **Google Sheets logging** appends a detailed row to your error log with timestamp, workflow name, error category, severity, message, suggested fix, and retry status
- **Color-coded Slack alerts** sends a formatted message to your alerts channel with the workflow name, failed node, error type, error message, suggested fix, and clickable links to the workflow and execution

## Setup

### Credentials needed
- **n8n API Key** HTTP Header Auth credential with header name `X-N8N-API-KEY`
- **Google Sheets** OAuth credentials
- **Slack** OAuth credentials

### Configuration
1. Create an API key in your n8n instance (Settings → API)
2. Add it as an HTTP Header Auth credential in n8n with the header name `X-N8N-API-KEY`
3. Open the **Get Failures** and **Get Execution Detail** nodes and replace `YOUR-N8N-INSTANCE-URL` with your actual n8n domain (e.g., `n8n.yourcompany.com`)
4. Create a Google Sheet with these columns: Timestamp, Workflow Name, Workflow ID, Execution ID, Failed Node, Error Category, Severity, Error Message, Suggested Fix, Retryable, Status, Notes
5. Open the **Log to Sheet** node and update the spreadsheet ID
6. Open the **Slack Alert** node and set the channel to your alerts channel (e.g., `#n8n-errors`)

### Test it
Manually trigger the webhook, or intentionally break a test workflow and wait one minute for the scheduled check. You should see a Slack alert and a new row in your Google Sheet.

## How to customize this workflow

- **Different alerting channel?** Replace or duplicate the Slack node to send alerts to Microsoft Teams, Discord, email, or PagerDuty
- **Auto-retry?** Add a retry branch after the Classify Error node that automatically re-runs retryable executions (Rate Limit, Network, Server Error) via the n8n API
- **Different logging?** Replace the Google Sheets node with Airtable, Notion, or a database insert for more structured tracking
- **Adjust the schedule?** Change the Schedule Trigger from every minute to every 5 minutes, 15 minutes, or hourly depending on your needs
- **Add more error categories?** Extend the classification logic in the Classify Error code node to handle domain-specific errors (e.g., Stripe payment failures, Shopify API errors)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
