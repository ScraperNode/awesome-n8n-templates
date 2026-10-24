# 🤝 Monitor contract renewal risk with HubSpot, Asana, Slack, and Gmail

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs daily to pull closed-won HubSpot deals with upcoming renewal dates, scores each contract for renewal risk based on usage and engagement fields, and alerts the team by creating an Asana task, logging a HubSpot note, posting to Slack, and sending an email via Gmail.

## How it works
1. Runs every day at 08:00 using a scheduled trigger.
2. Searches HubSpot CRM for closed-won deals and retrieves renewal, owner, and usage/engagement properties.
3. Keeps only deals with a valid owner and renewal date within the next 60 days.
4. Calculates a 0–100 renewal risk score from usage, engagement, inactivity, and time-to-renewal signals and flags items at or above the threshold.
5. For at-risk renewals, assigns a Medium/High risk tier and builds alert text and a follow-up due date.
6. Creates an Asana task for the account owner, logs a note back to the associated HubSpot deal, posts a Slack alert, and sends an email digest via Gmail.

## Setup
1. Provide a HubSpot Private App token (or access token) and replace the placeholder `Authorization: Bearer YOUR_HUBSPOT_API_KEY` values in both HubSpot HTTP Request steps.
2. Ensure your HubSpot deals include the properties used by the workflow (`renewal_date`, `hubspot_owner_id`, `product_usage_score`, `engagement_score`, `last_login_days`, `amount`, `dealname`) or update the request and scoring logic to match your schema.
3. Connect your Asana credentials and set the target project/assignee settings in the Asana task creation step.
4. Connect your Slack credentials and replace `YOUR_SLACK_CHANNEL_ID` with the channel that should receive renewal-risk alerts.
5. Connect your Gmail credentials and update the recipient address in the email step.
6. Adjust the schedule time, the warning window (60 days), and the risk threshold (50) to fit your process.

## 🔗 Nodes Used

Asana, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
