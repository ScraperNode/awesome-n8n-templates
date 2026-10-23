# 🎫 Notify customers of resolved Jira bugs with Gmail, HubSpot, Slack and Sheets

> ⚡ **142 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How it works
This workflow automatically handles every resolved Jira bug by verifying the fix, notifying the customer, updating HubSpot, commenting on the Jira issue, alerting the team on Slack, and logging everything to Google Sheets — all without any manual effort. If customer contact details are missing, it routes to a manual follow-up alert instead.

## Step-by-step
- **Trigger & filter**
  - **Jira Trigger** – Listens for `jira:issue_updated` events on your Jira project.
  - **Filter: Bug Resolved?** – Checks that the issue type is `Bug`, the status moved to `Done`, and the changelog contains a status change before proceeding.

- **Normalize & deduplicate**
  - **Normalize & Enrich Payload** – Extracts and enriches all issue data including summary, priority, components, fix versions, labels, sprint, assignee, reporter, resolution comment, customer email, days open, and a direct Jira issue URL.
  - **Deduplication Check** – Uses workflow static data to check if this issue key has already been processed, preventing duplicate notifications.
  - **Already Processed?** – Stops the workflow if the issue was previously handled; continues only for first-time resolutions.

- **Customer contact check**
  - **Has Customer Email?** – Routes to the full notification path if a customer email is found, or to the manual follow-up path if not.

- **Data enrichment (parallel)**
  - **Get Jira Issue Details** – Fetches the full Jira issue including comments, attachments, and worklogs to extract the latest resolution comment.
  - **Search HubSpot Contact** – Searches HubSpot by customer email to retrieve existing contact details including name and company.
  - **Merge Jira + HubSpot Data** – Combines both parallel fetch results into a single data object.
  - **Merge Data & Build Templates** – Builds the complete HTML customer email, HubSpot note body, and email subject line using all enriched data.

- **Notifications & CRM updates**
  - **Send Gmail to Customer** – Sends a polished HTML resolution email to the customer with issue summary, fix details, resolution notes, assignee, days to resolve, and a link to the Jira issue.
  - **Add Jira Comment** – Posts a resolution summary comment directly on the Jira issue confirming the customer was notified.
  - **Create/Update HubSpot Contact** – Creates or updates the HubSpot contact record with the customer's details.
  - **Log HubSpot Note** – Logs a full resolution note on the HubSpot contact linked to their record.
  - **Slack Team Notification** – Posts a detailed resolution summary to the team Slack channel including issue details, assignee, days open, HubSpot status, and resolution notes.
  - **Log to Google Sheets** – Appends or updates the resolution record in Google Sheets with issue key, priority, component, fix version, customer details, assignee, days open, sprint, HubSpot status, and email status.

- **Missing email fallback**
  - **Log: No Email Found** – Flags the issue for manual follow-up and logs a warning when no customer email is available on the Jira ticket.
  - **Alert: Manual Follow-Up** – Sends a Slack alert to the team requesting manual customer outreach for issues where no email could be found.

## Why use this?
- Instantly notifies customers the moment a bug is resolved with a professional HTML email including full resolution details
- Built-in deduplication prevents customers from receiving the same resolution notification twice
- Automatically handles missing contact info by routing to a manual follow-up Slack alert so no resolved issue goes uncommunicated
- Keeps HubSpot fully in sync with resolution notes logged directly on the customer contact record
- Gives the engineering team a real-time Slack summary and a permanent Google Sheets audit trail of every resolved bug

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, Jira Software, Jira Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
