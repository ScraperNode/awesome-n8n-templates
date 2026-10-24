# ⚙️ Draft incident postmortems with PagerDuty, Confluence, Slack and Google Sheets

> ⚡ **25 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow creates a Confluence postmortem draft for resolved PagerDuty incidents, then notifies the incident owner in Slack and optionally logs the draft in Google Sheets.

## How it works
1. Triggers manually for testing or receives a PagerDuty webhook when an incident is resolved.
2. Loads shared configuration values like PagerDuty and Confluence URLs, Confluence space and parent page, Slack channel, and optional Google Sheets settings.
3. Normalizes the incoming incident payload and fetches the incident details and log entries from the PagerDuty API.
4. Builds an HTML postmortem draft containing an incident summary, placeholders for impact and root cause, a basic timeline, and action-item prompts.
5. Creates a new Confluence page under the configured parent page using the generated postmortem content.
6. Posts a Slack message to the configured channel and optionally appends a row to a Google Sheets “Postmortems” tab with key incident metadata.

## Setup
1. Add PagerDuty API credentials to the PagerDuty HTTP Request steps and configure a PagerDuty webhook pointing to this workflow’s webhook URL for resolved incidents.
2. Add Confluence (Atlassian) credentials and set your Confluence base URL, space key, and parent page ID in the workflow variables.
3. Add Slack OAuth credentials and update the target Slack channel ID (and optionally the default postmortem owner) in the workflow variables.
4. (Optional) Add Google Sheets OAuth credentials, set the spreadsheet ID, and ensure a sheet/tab named “Postmortems” exists with columns A–G for the appended log row.

## Requirements
- PagerDuty API access and a PagerDuty webhook for resolved incidents.
- Confluence access with permission to create pages in the selected space.
- Slack OAuth credentials with permission to post messages to the review channel.
- Optional: Google Sheets OAuth credentials and a sheet named “Postmortems” if you want to log incident drafts.

## Customization
- Change the postmortem sections to match your internal incident review format.
- Adjust the Confluence parent page, space key, and Slack channel in the workflow variables.
- Disable the Google Sheets logging step if your team does not need a separate postmortem register.
- Add severity-based routing if only P1 or P2 incidents require postmortems.

## Additional info
This workflow creates a draft only. Review the Confluence page before sharing or publishing it, since incident reports may contain sensitive customer, security, or infrastructure details.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
