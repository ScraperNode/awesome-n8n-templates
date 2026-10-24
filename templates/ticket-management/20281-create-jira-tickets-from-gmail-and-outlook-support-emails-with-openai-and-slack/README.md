# 🎫 Create Jira tickets from Gmail and Outlook support emails with OpenAI and Slack

> ⚡ **51 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail and Microsoft Outlook for new support emails, uses OpenAI to classify and prioritize them, creates or updates Jira issues, notifies the right Slack channels (optionally Microsoft Teams), and logs every processed email to Google Sheets for auditing.

## How it works
1. Triggers every minute when a new email arrives in Gmail (Inbox with filters) or Microsoft Outlook.
2. Normalizes each message into a common format, removes quoted history, trims the body, and skips internal or automated/no-reply senders.
3. Uses OpenAI (GPT-4.1-mini) to classify the email (Bug/Issue/New Requirement/Other) and extract priority, title, summary, product area, sentiment, and confidence.
4. Routes high-confidence customer requests to Jira by finding an existing open issue for the email thread and adding a comment, or creating a new Jira issue if none exists.
5. Posts the Jira result to the appropriate Slack channel based on the category and optionally sends an Adaptive Card to Microsoft Teams if a webhook URL is configured.
6. Optionally replies to the customer in the original thread via Gmail or Outlook (or creates a draft) based on the acknowledgement mode setting.
7. Sends low-confidence or failed classifications to a Slack review channel and appends an audit row with the outcome to Google Sheets.

## Setup
1. Connect credentials for Gmail and/or Microsoft Outlook, OpenAI, Jira Software Cloud, Slack, and Google Sheets.
2. Update the workflow configuration values (internal domains, confidence threshold, Jira base URL/project key/issue types, Slack channel names, and acknowledgement mode).
3. Select the target Google Sheets document and sheet for the triage log.
4. Select the Slack channel used for workflow error alerts and set this workflow as its own error workflow in n8n workflow settings.
5. (Optional) Add a Microsoft Teams incoming webhook URL to enable Teams notifications, and disable the unused email trigger (Gmail or Outlook) before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Jira Software, Execute Sub-workflow, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
