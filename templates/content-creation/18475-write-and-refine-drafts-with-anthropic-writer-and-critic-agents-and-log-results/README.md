# 🎬 Write and refine drafts with Anthropic writer and critic agents and log results

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow generates a draft with an Anthropic chat model, critiques it against your house rules and rubric, and iterates revisions until it meets an approval threshold or hits stop conditions, then logs the run to Google Sheets and optionally posts a completion notice to a webhook.

## How it works
1. Starts when you run the workflow manually or send a message via the n8n Chat trigger.
2. Loads your house rules, rubric, approval score, max rounds, and a default brief, then initializes loop state with the provided brief.
3. Uses an Anthropic-powered writer agent to produce or revise the draft and return a structured result (draft plus self-assessment and any placeholders needed from a human).
4. Uses an Anthropic-powered critic agent to score the draft against the brief, house rules, and rubric, returning structured must-fix items, optional improvements, and any rule violations.
5. Decides whether to continue based on three stop conditions (approved with no must-fix items, round limit reached, or score stalled across recent rounds) and, if continuing, converts the critique into revision instructions for the next round.
6. Finalizes the output with the exit reason, final draft, any remaining must-fix items or human inputs needed, and the score history.
7. Appends a ledger row to Google Sheets with the run details and optionally sends a POST notification to the configured webhook URL.

## Setup
1. Add your Anthropic (or compatible) chat model credentials to both the writer and critic chat model nodes.
2. In the Settings values, customize `houseRules`, `rubric`, `approvalScore`, `maxRounds`, and optionally `defaultBrief` and `notifyWebhookUrl`.
3. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet in the Log run step, ensuring the sheet has columns matching the ledger fields you want to capture.
4. If you use notifications, set `notifyWebhookUrl` to an endpoint that accepts a JSON POST body (or leave it blank to skip notifications).

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Anthropic Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
