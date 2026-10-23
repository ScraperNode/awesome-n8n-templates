# 🎫 Triage and resolve stale Jira tickets with OpenAI, Notion, and Slack

> ⚡ **22 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This scheduled workflow scans Jira for long-lived unresolved issues, uses OpenAI to classify their status and sentiment, searches Notion and similar Jira issues for answers, then posts reminders or resolutions, closes tickets, and alerts a Slack channel when manual follow-up is needed.

## How it works
1. Runs on a schedule and queries Jira for issues in “To Do” or “In Progress” that were created at least 7 days ago.
2. Processes each issue individually by collecting the issue metadata and all Jira comments, then formatting the thread into AI-friendly text.
3. Uses OpenAI to classify the ticket as resolved, pending more information, or still waiting on a response.
4. For resolved tickets, uses OpenAI sentiment analysis to decide whether to request feedback and close the issue, autoclose with a neutral message and close the issue, or alert a Slack channel if the sentiment is negative.
5. For tickets still waiting, checks the last comment is not an automated message, then uses OpenAI to generate and post a reminder comment in Jira.
6. For tickets pending more information, uses an OpenAI agent that searches Notion and similar Jira issues, then either posts the found answer and closes the issue or notifies Slack and still closes the issue.

## Setup
1. Add Jira credentials and ensure the workflow has permission to read issues/comments, add comments, and transition issues to your “Done” status.
2. Add an OpenAI API credential for the models used for classification, sentiment analysis, reminders, and the knowledge-base agent.
3. Add a Notion credential and ensure the Notion search tool can access the workspace/pages that contain your support knowledge base.
4. Add a Slack credential and set the target channel for both Slack alert messages.
5. Update the Jira JQL filter (currently `status IN ("To Do", "In Progress") AND created <= -7d`) and confirm the “Done” status ID (currently `31`) matches your Jira workflow.
6. Replace the placeholder review link in the Jira feedback comment text with your real review/CSAT URL.

## 🔗 Nodes Used

Slack, Jira Software, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
