# ⚙️ Detect cloud cost anomalies with AWS Cost Explorer, GCP Billing and GPT-4o-mini

> ⚡ **25 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily to detect AWS and optional GCP cost spikes, enriches AWS anomalies with CloudTrail context and an OpenAI explanation, posts actionable alerts and a run summary to Slack, and logs anomalies plus approve/ignore decisions to Google Sheets via one-time webhook links.

## How it works
1. Runs every day on a schedule (9 AM IST) and loads threshold/config values plus the existing anomaly log from Google Sheets.
2. Pulls recent daily AWS spend by service and region from AWS Cost Explorer (and optionally queries GCP costs from a BigQuery billing export) and normalizes both into a common structure.
3. Detects day-over-day cost anomalies using dollar, percent, and z-score thresholds while skipping already-seen anomalies and those muted by prior “ignore” decisions.
4. Posts a one-message run summary to Slack listing the anomalies alerted in this run.
5. For each anomaly, fetches recent AWS CloudTrail write events for the affected region when available and sends the anomaly context to OpenAI (gpt-4o-mini) to generate a probable root cause and suggested actions.
6. Posts a Slack alert with key metrics, AI explanation, and buttons to approve as expected or ignore for 7 days, then records the anomaly in Google Sheets.
7. When a button link is clicked, a webhook validates the one-time token, updates the anomaly status (Approved or Ignored with a suppression date) in Google Sheets, returns a confirmation/error page, and posts the decision back to Slack.

## Setup
1. Create a Google Sheet with an “Anomaly Log” tab and paste its spreadsheet ID into all Google Sheets steps.
2. Add AWS credentials that allow Cost Explorer (GetCostAndUsage) and CloudTrail (LookupEvents), and enable AWS in the config values.
3. If using GCP, add Google OAuth2 credentials with BigQuery access, enable GCP in the config values, and set the GCP project ID and billing export table name.
4. Add OpenAI credentials (for gpt-4o-mini) and Slack credentials, then set the target Slack channel ID for both the run summary and anomaly alerts.
5. Set the webhook base URL in the config values and ensure the “cost-anomaly-action” webhook URL is reachable from Slack button clicks.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
