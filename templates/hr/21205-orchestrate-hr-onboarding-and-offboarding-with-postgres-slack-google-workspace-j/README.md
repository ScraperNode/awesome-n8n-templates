# 👥 Orchestrate HR onboarding and offboarding with Postgres, Slack, Google Workspace, Jira and Notion

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow orchestrates HR onboarding and offboarding by receiving HRIS webhook events, logging cases in Postgres and Google Sheets, notifying teams in Slack, creating an IT task in Jira, provisioning/suspending Google Workspace accounts via the Admin API, creating a Notion onboarding page, and collecting manager approval via Gmail.

## How it works
1. Receives a new-hire event from your HRIS via a webhook and validates the payload while generating a department-specific onboarding checklist and work email address.
2. If the payload is invalid, posts an alert to a Slack People Ops channel and stops.
3. If the payload is valid, creates or updates an onboarding case in Postgres, notifies People Ops in Slack, logs the case to a Google Sheets tracker, and creates a Jira IT provisioning task.
4. Waits until the configured lead time before the employee’s start date, then provisions the user by creating a Google Workspace account via the Google Admin Directory API and creating a Notion onboarding page.
5. Emails the manager an approval message in Gmail with approve/reject links that resume the workflow, then updates the Postgres case status based on the manager’s decision.
6. If approved, sends the new hire a welcome email with the day-1 checklist and posts an “onboarding ready” confirmation to Slack; if rejected, posts a rejection notice to Slack.
7. Receives a termination event from your HRIS via a webhook, builds an offboarding checklist, suspends the user via the Google Admin Directory API, alerts a Slack Security channel, and closes the case in Postgres.

## Setup
1. Create and configure the two HRIS webhooks to POST to this workflow’s “new hire” and “termination” webhook URLs with the required payload fields.
2. Add Postgres credentials and ensure an `hr.cases` table exists with a unique constraint on `(employee_id, start_date)` and fields used by the insert/update queries.
3. Add Slack credentials and set the People Ops and Security channel IDs (and optionally your Slack workspace domain) in the HR Config values.
4. Add Google Sheets credentials and update the spreadsheet ID and sheet name used for the onboarding tracker.
5. Add Jira credentials and set the target project key/issue type for the IT provisioning task.
6. Configure the Google Workspace Admin Directory API HTTP credentials (header auth) and Notion + Gmail credentials, then update the Notion database ID and email sender/recipient settings as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Slack, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
