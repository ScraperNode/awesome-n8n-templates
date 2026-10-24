# 🔬 Create daily ClickUp task reports with OpenRouter o3-mini

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs each morning, pulls all tasks from a specified ClickUp list, merges their names and descriptions, and uses an OpenRouter-hosted OpenAI chat model to generate a daily report. It then creates a new ClickUp list for the current run and adds the report as a task.

## How it works
1. Runs every morning at the configured hour using a schedule trigger.
2. Fetches all tasks from the specified ClickUp list.
3. Merges the retrieved tasks into a single formatted text block for summarization.
4. Checks that task data exists and, if not, creates an error list in ClickUp and stops with an error.
5. Creates a new ClickUp list named with the current date/time to store the report.
6. Sends the merged task text to an AI Agent backed by an OpenRouter (OpenAI) chat model to generate the report content.
7. Creates a ClickUp task named “Report” in the newly created list and stores the AI-generated summary in the task description.

## Setup
1. Add ClickUp OAuth2 credentials in n8n and select the correct Team/Space/Folder/List details in the ClickUp nodes (including the source list to read from).
2. Add an OpenRouter credential and choose the chat model in the AI Chat Model node.
3. Set the schedule time (hour) in the Morning Report trigger to match when you want the daily report to run.

## 🔗 Nodes Used

ClickUp, Stop and Error, Schedule Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
