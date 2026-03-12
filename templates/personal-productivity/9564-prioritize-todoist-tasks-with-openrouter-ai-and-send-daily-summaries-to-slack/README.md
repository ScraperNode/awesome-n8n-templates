# ⚡ Prioritize Todoist tasks with OpenRouter AI and send daily summaries to Slack

> ⚡ **173 views** · ⚡ [Personal Productivity](../)

## Description

## Title

**Prioritize Todoist tasks and send a daily summary to Slack**

## Who’s it for

Busy professionals, team leads, and freelancers who want a plug-and-play, AI-assisted morning briefing that turns messy task lists into a clear, actionable plan.

## What it does / How it works

At **08:00** every morning, the workflow pulls open tasks from **Todoist**. An **AI agent** scores and ranks them by urgency, importance, dependencies, and effort, then produces a concise plan. You receive the summary in **Slack** (Markdown). Overdue or critical items are highlighted with **warnings**.

## How to set up

1. Connect OAuth for **Todoist** and **Slack**.
2. Select your posting channel in **Send to Slack**.
3. Adjust the time in **Morning Schedule Trigger** (default **08:00**).
4. Run once to verify the parser output and Slack preview, then set the workflow **Active**.

## Requirements

* n8n (cloud or self-hosted)
* Todoist account / Slack workspace
* LLM provider connected in the AI node (**do not** hardcode keys in HTTP nodes)

## How to customize the workflow

* Edit the prompt in **AI Task Analyzer** to tweak prioritization rules.
* Adjust **Format AI Summary** to match your tone and structure.
* Add filters in the Todoist node (e.g., due today).
* (Optional) Log results to Google Sheets or a database for analytics.

## Disclaimer (community node)

This template uses a community **LangChain** node for AI features and is intended for **self-hosted** n8n. Add a workflow image at the top of your submission page for a clearer preview.

## 🔗 Nodes Used

Slack, Todoist, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
