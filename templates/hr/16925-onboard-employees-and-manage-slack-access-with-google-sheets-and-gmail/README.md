# 👥 Onboard employees and manage Slack access with Google Sheets and Gmail

> ⚡ **17 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow automates HR onboarding by capturing new hires via a webhook, saving them to Google Sheets, emailing a Slack invite via Gmail, and notifying managers in Slack, then listening for Slack team_join events to add new hires to department channels and update onboarding status.

## How it works
1. Receives a POST webhook request from an HR form with new employee details and validates required fields.
2. Appends the employee record to a Google Sheets spreadsheet and assigns a department-based list of Slack channels plus a static Slack invite link.
3. Sends the new hire a welcome email through Gmail containing their start details and the Slack workspace invite link.
4. Sends a Slack direct message to a manager user with the new hire details and the channels they will be added to, then updates the Google Sheets row to “Invite Sent” with a timestamp and responds to the HR form.
5. Receives Slack Events API requests for the workspace and replies to url_verification challenges or immediately acknowledges real team_join events within 3 seconds.
6. Extracts the joining user’s Slack ID and email, looks up the matching employee row in Google Sheets, and resolves the department’s target channels.
7. For each target channel, fetches Slack channel IDs, invites the user to the channel, sends the user a welcome DM in Slack, and updates the Google Sheets row status to “Joined” with a timestamp.

## Setup
1. Create and connect credentials for Google Sheets OAuth2, Gmail OAuth2, and Slack OAuth2.
2. Prepare a Google Sheets spreadsheet (Sheet1) with columns for full_name, email, department, role, manager_email, start_date, status, slack_invited_at, and slack_user_id, and update the spreadsheet ID/sheet selection if needed.
3. Update the static Slack invite link and the department-to-channel mapping in the workflow code so it matches your workspace channels.
4. Configure your HR form/dashboard to POST to the onboarding webhook URL (/webhook-test/onboard-employee for testing and /webhook/onboard-employee when active).
5. Create a Slack app with Events API enabled, subscribe to the team_join event, set the Request URL to the Slack events webhook, and invite the bot user into each target channel so it can add members.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
