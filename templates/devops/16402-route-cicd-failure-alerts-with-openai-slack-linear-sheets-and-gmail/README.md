# ⚙️ Route CI/CD failure alerts with OpenAI, Slack, Linear, Sheets and Gmail

> ⚡ **10 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow receives CI/CD failure webhooks, classifies severity by branch, uses OpenAI to generate a root-cause diagnosis and remediation, then alerts Slack, creates a Linear issue, logs the incident to Google Sheets, and emails a summary via Gmail.

## How it works
1. Receives a POST webhook from your CI/CD system with pipeline run status and metadata.
2. Parses the payload to extract status, pipeline name, branch, commit details, error log, and run URL, and drops malformed events.
3. Filters out non-failure runs and assigns a severity level and Linear priority based on the branch.
4. Sends the error log and context to OpenAI to return a JSON diagnosis, remediation step, and rollback recommendation.
5. Posts a Slack alert to the on-call channel for Critical incidents and posts all incidents to a developer Slack channel.
6. Creates a Linear issue with the failure context and AI diagnosis, appends the incident to a Google Sheets log, and emails a Gmail HTML summary to the engineering lead.

## Setup
1. Copy the workflow’s webhook URL and configure your CI/CD platform (for example GitHub Actions, GitLab CI, or CircleCI) to POST failure events to it.
2. Add credentials for OpenAI, Slack, Google Sheets, and Gmail, and provide a Linear API key for the Linear GraphQL request.
3. Replace placeholders for Slack channel IDs, Linear team ID, Google Sheets spreadsheet ID and sheet name, and the engineering lead email address.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
