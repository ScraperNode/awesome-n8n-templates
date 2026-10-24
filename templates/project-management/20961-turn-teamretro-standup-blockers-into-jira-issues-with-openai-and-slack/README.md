# 📋 Turn TeamRetro standup blockers into Jira issues with OpenAI and Slack

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow triggers when a TeamRetro standup completes, tracks blockers in an n8n Data Table, uses OpenAI to triage new blockers, creates actionable Jira issues, posts them to Slack, and comments on carried-over or cleared blockers until they are resolved.

## How it works
1. Triggers on TeamRetro standup completion and ignores repeat webhook deliveries using the TeamRetro deliveryId.
2. Loads existing open blocker-to-issue mappings for the standup meeting series from an n8n Data Table.
3. Classifies each blocker update as new, carried over, or cleared by matching it to previously tracked updates and who posted in the standup.
4. For carried-over blockers, updates the stored mapping to the latest update and adds a Jira comment every set number of standups the blocker remains open.
5. For cleared blockers, deletes the stored mapping and adds a Jira comment noting the blocker cleared.
6. For new blockers, sends the text to OpenAI to decide whether it is actionable and to generate a category and Jira-ready title.
7. Creates a Jira issue for actionable blockers, stores the new issueKey and updateId mapping in the Data Table, and posts the ticket link to the configured Slack channel.

## Setup
1. In TeamRetro, add an integration webhook for the “Standup Completed” event using the workflow’s production webhook URL and paste the signing secret into the TeamRetro Trigger node.
2. Create an n8n Data Table named standup_blockers with columns updateId, issueKey, meetingSeriesId, personId, and text, and ensure the workflow references this table.
3. Add credentials for OpenAI (Chat Completions), Jira, and Slack, then select the target Jira project and issue type and the Slack channel.
4. Update the Settings values for jiraUrl, teamChannel, staleAfter (how often to nudge), and blockerTopic (the keyword used to identify the blocker question).

## 🔗 Nodes Used

Slack, Jira Software, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
