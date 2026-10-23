# 🔬 Summarize meeting transcripts with GPT-4o, Jira, Notion, Slack, and Sheets

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow ingests meeting transcripts from a Fathom webhook or a Google Drive folder, uses OpenAI to extract structured notes, creates Jira issues for action items, writes a formatted meeting page to Notion, posts a recap to Slack, and schedules 24-hour-before-due Slack reminders via Google Sheets.

## How it works
1. Receives a meeting transcript via a Fathom POST webhook or triggers when a new transcript file is created in a watched Google Drive folder.
2. If the input is a Drive file, downloads it and extracts plain text (including DOCX conversion or PDF extraction) before normalizing the transcript, metadata, and destination settings.
3. Sends the transcript to OpenAI (GPT-4o) to extract a 3-bullet summary, decisions, action items, open questions, and risks in JSON, then parses and validates the structured output.
4. Loads a roster from Google Sheets to match action-item owners to Jira account IDs and Slack member IDs, and resolves relative due-date phrases into YYYY-MM-DD dates.
5. Creates one Jira issue per action item, merges the resulting issue keys back into the meeting record, and builds a Notion page payload containing the recap sections plus the full transcript.
6. Creates the meeting page in Notion and posts a formatted recap to the configured Slack channel, including Jira links/keys, owner mentions, due dates, and the Notion URL.
7. If any owners are unmatched, posts a Slack warning, and if reminders are enabled, appends reminder rows to a Google Sheets tab and an hourly schedule later sends due reminders to Slack and marks them as sent.

## Setup
1. Add credentials for OpenAI, Google Drive OAuth2, Google Sheets OAuth2, Jira Software Cloud, Notion, and Slack.
2. Choose a single transcript intake path by configuring either the Fathom webhook (with `include_transcript=true`) or the Google Drive folder trigger and its folder ID.
3. Update the Google Sheets document and ensure you have a roster sheet with `name`, `aliases`, `jira_account_id`, and `slack_member_id`, plus a reminders sheet with `task`, `owner`, `slack_member_id`, `channel`, `jira_key`, `due_date`, `reminder_datetime`, and `sent`.
4. Share your target Notion database with the Notion integration used by the workflow and set the correct database ID (and ensure it has at least `Title` and optionally `Date` properties).
5. Set the Jira project/issue type and confirm the Slack channel ID where recaps and reminders should be posted, and ensure the Slack app/bot has access to that channel.

## Requirements
- Credentials: OpenAI, Google Drive, Google Sheets, Jira, Notion, Slack
- Roster sheet columns: name, aliases, jira_account_id, slack_member_id
- Reminders sheet columns: task, owner, slack_member_id, channel, jira_key, due_date, reminder_datetime, sent
- Notion database shared with your integration (properties: Title, Date)
- Slack bot invited to the target channel

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Google Drive, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
