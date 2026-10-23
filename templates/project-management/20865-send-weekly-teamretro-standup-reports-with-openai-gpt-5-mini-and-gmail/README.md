# 📋 Send weekly TeamRetro standup reports with OpenAI GPT-5 Mini and Gmail

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow stores closed TeamRetro standups in an n8n Data Table, then every Friday uses OpenAI to generate a per-team weekly standup report and sends it as an HTML email via Gmail, while pruning older standup entries.

## How it works
1. Triggers when a TeamRetro standup is completed via the TeamRetro Trigger webhook event.
2. Skips duplicate webhook deliveries and ignores standups with no participant updates.
3. Builds a plain-text transcript for the day and stores the standup summary in the n8n Data Table named `standup_days`.
4. Every Friday at 4 PM, loads the last N days of rows (default 7) from `standup_days` and groups them by team.
5. Sends each team’s weekly standup text to OpenAI (GPT-5 Mini) to produce a Markdown report with sections for progress, lingering blockers, and next-week risks.
6. Converts the Markdown to HTML and emails the report to the configured recipients using Gmail.
7. Deletes Data Table rows older than four weeks to keep `standup_days` small.

## Setup
1. In TeamRetro, enable a webhook integration for the **Standup Completed** event, paste in the workflow’s production webhook URL, and add the webhook signing secret to the TeamRetro Trigger node.
2. Create an n8n Data Table named `standup_days` with columns for `date`, `day`, `team`, `standup`, `people`, and `transcript`.
3. Add credentials for OpenAI (Chat model access) and Gmail (OAuth) in n8n.
4. Update the recipient list and reporting window (the `recipients` and `days` values) in the workflow’s report settings.

## 🔗 Nodes Used

Gmail, Markdown, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
