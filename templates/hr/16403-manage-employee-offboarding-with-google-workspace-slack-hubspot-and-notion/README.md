# 👥 Manage employee offboarding with Google Workspace, Slack, HubSpot and Notion

> ⚡ **52 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow receives an HR offboarding webhook, validates and enriches the employee record, suspends the user in Google Workspace, deactivates the user in Slack, looks up the matching HubSpot contact, logs the event to Notion and Google Sheets, and notifies HR/IT via Gmail and Slack.

## How it works
1. Receives a POST webhook from the HR system with employee offboarding details.
2. Parses the payload to normalize key fields (name, email, department, manager, last day) and flags invalid requests.
3. Posts an alert to a Slack IT channel when the record is invalid and stops further processing.
4. Enriches valid records with an offboarding ID, risk level, revocation deadline, and an actions summary.
5. Suspends the employee in Google Workspace via the Admin Directory API, deactivates the user in Slack via the Slack API, searches for the contact in HubSpot, and creates an offboarding entry in a Notion database.
6. Combines the revocation results and appends a compliance log row to a Google Sheets “Offboarding Log” tracker.
7. Emails an offboarding completion summary to the manager and HR using Gmail and posts a completion digest to the Slack IT channel.

## Setup
1. Copy the n8n webhook URL from the HR offboarding webhook trigger and configure your HR system to POST the offboarding payload to it.
2. Provide credentials/tokens for the Google Admin Directory API and Slack API (both used via HTTP requests) and replace the placeholder Bearer tokens in the request headers.
3. Add a HubSpot App Token credential with access to search contacts.
4. Create a Notion database for offboarding logs, add a Notion API integration, and set the Notion database ID and API key in the Notion request.
5. Add Google Sheets OAuth credentials, set your Google Sheet ID, and ensure the “Offboarding Log” sheet contains the columns mapped in the append step.
6. Add a Gmail connection for sending summary emails and set the target Slack channel ID for the invalid-record alert and IT ops digest messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
