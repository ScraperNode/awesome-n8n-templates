# 🔬 Track data deletion requests from Gmail with Jira, BigQuery, and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for potential privacy/data deletion requests, classifies each email, creates the appropriate Jira issue, logs a minimal audit record to BigQuery, and alerts the team in Slack, with an optional Gmail confirmation draft for human review.

## How it works
1. Triggers when a new email matching deletion-related keywords arrives in Gmail (or runs manually for testing).
2. Loads shared configuration values like Jira project details, BigQuery destination, SLA window, Slack channel, and confidence threshold.
3. Cleans the email text, extracts the requester address, classifies the request type (deletion/access/correction), and calculates an SLA due date with a confidence score.
4. Creates a Jira task for the privacy team when the classification is confident, or creates a separate Jira task labeled for manual review when it is not.
5. Inserts an audit row into Google BigQuery with metadata such as request type, confidence, received time, due date, and whether a Jira issue was created.
6. Posts a Slack message to the configured channel about the routed request or the need for manual review.
7. Creates a draft confirmation email in Gmail for the requester after a routed request.

## Setup
1. Connect Gmail credentials for the inbox to monitor and ensure the Gmail trigger query matches the keywords you use for privacy requests.
2. Add Jira credentials (or an Atlassian API token via HTTP auth) and set your Jira base URL, project key, and issue type in the workflow variables.
3. Add Google Cloud/BigQuery credentials for the BigQuery API and create the target project, dataset, and table referenced in the workflow variables.
4. Add Slack credentials for the Slack Web API and set the target channel ID in the workflow variables.
5. Update the workflow variables for your SLA days, minimum confidence threshold, and manual-review label, and replace the Gmail draft node with a proper base64url-encoded MIME template if you want to keep the confirmation draft step.

## 🔗 Nodes Used

HTTP Request, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
