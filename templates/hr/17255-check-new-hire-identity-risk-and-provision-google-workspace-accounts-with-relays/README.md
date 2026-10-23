# 👥 Check new-hire identity risk and provision Google Workspace accounts with RelayShield

> ⚡ **25 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives a new-hire webhook, checks the hire’s personal email in RelayShield for breach and infostealer exposure, provisions a Google Workspace account via the Admin SDK, and logs both the risk check and provisioning outcomes to Notion with Slack notifications for flagged identities or provisioning failures.

## How it works
1. Receives an HTTP POST webhook from your HR system with the new hire’s details (including personal email, corporate email, org unit path, and a temporary password).
2. Checks the new hire’s personal email in RelayShield for known credential breaches and infostealer log exposure.
3. If any prior exposure is found, logs a flagged event to a Notion onboarding database and posts an awareness alert to a Slack channel.
4. If no exposure is found, logs a clean identity-check result to the same Notion database.
5. In parallel, creates the new hire’s Google Workspace user account using the Google Admin SDK (via HTTP) and forces a password change at next login.
6. If provisioning succeeds, logs the success to Notion and posts a confirmation message to Slack.
7. If provisioning fails, logs the failure to Notion and posts an urgent Slack alert for manual follow-up.

## Setup
1. Create and configure your HR system’s new-hire webhook to POST to this workflow’s webhook URL with the expected fields (personal_email, corporate_email, name, department, manager_email, job_title, org_unit_path, temp_password).
2. Add RelayShield API credentials for the breach and infostealer checks.
3. Connect Notion OAuth2 credentials, create a Notion database for onboarding/audit logs, and set the n8n variable notionOnboardingDbId.
4. Connect Slack credentials and set the n8n variable slackSecurityChannelId to the target channel for security/IT notifications.
5. Create a Google Workspace Admin SDK domain-wide delegated service account credential (scope: https://www.googleapis.com/auth/admin.directory.user) and ensure org_unit_path values match your Google Workspace org structure.

## 🔗 Nodes Used

Slack, Webhook, Google Workspace Admin, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
