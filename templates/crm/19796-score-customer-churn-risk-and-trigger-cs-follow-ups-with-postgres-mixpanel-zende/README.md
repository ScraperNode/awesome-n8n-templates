# 🤝 Score customer churn risk and trigger CS follow-ups with Postgres, Mixpanel, Zendesk, Gmail, Calendly, ClickUp, and Slack

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every 6 hours to combine customer usage and NPS data from Postgres with Mixpanel engagement and Zendesk ticket signals, calculate a churn risk score, and trigger Customer Success interventions via Gmail, Calendly, ClickUp, Slack, and a Postgres intervention log.

## How it works
1. Runs every 6 hours on a schedule trigger.
2. Pulls recent product usage and last-login data from Postgres, fetches engagement data from Mixpanel, fetches recent NPS responses from Postgres, and retrieves recent tickets from Zendesk.
3. Merges the four data sources into a single per-customer record keyed by customer_id.
4. Calculates a composite churn score and risk level (low/medium/high) based on login recency, feature usage change, seat utilization, NPS score, and ticket signals.
5. Skips customers below the churn-risk threshold and routes at-risk customers to intervention steps.
6. Sends a personalized check-in email via Gmail for churn-risk customers, and for high-risk customers also creates a Calendly scheduled event, opens a follow-up task in ClickUp, and posts an escalation message to a Slack channel.
7. Logs the intervention details back to Postgres.

## Setup
1. Add Postgres credentials and update the SQL queries and table/column names for usage snapshots, NPS responses, and the churn_intervention_log insert.
2. Add Mixpanel API credentials and replace YOUR_MIXPANEL_PROJECT_ID in the Mixpanel request body.
3. Add Zendesk credentials and set any required account/subdomain settings to retrieve the right ticket data.
4. Add Gmail OAuth2 credentials and ensure your customer records provide contact_email and (optionally) contact_first_name.
5. Add Calendly API credentials and replace YOUR_CS_CALL_EVENT_TYPE_ID (or adjust the step if you only want to include a booking link in the email).
6. Add ClickUp and Slack credentials, then replace YOUR_CS_LIST_ID, set the target Slack channel and ACCOUNT_MANAGER_SLACK_ID, and adjust churn score thresholds in the scoring logic as needed.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Zendesk, ClickUp, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
