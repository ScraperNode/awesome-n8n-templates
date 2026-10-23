# ⚡ Triage Connectively tech questions with OpenAI and send alerts to Telegram

> ⚡ **6 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow allows you to fetch questions from Connectively and check if the questions match your background. If so, it sends a notification to your Telegram account with the question and AI-based reasoning.

## How it works
1. Runs every hour on a schedule.
2. Logs in to Connectively via its API and fetches questions.
3. Filters by Technology category and removes questions already seen in previous executions.
4. Filters questions by asking an OpenAI-compatible model to decide whether to answer based on the background you provided.
5. Sends the matched question to Telegram.

## Setup
1. Fill the login & password for "Authorize" node. Hint: Credentials can be obtained from https://www.connectively.us/api-integration/sign-up
2. Fill your background at "Message a model" node. Hint: You can use either OpenAI's paid APi or a self-hosted LLM like google/gemma-4b through LM Studio.
3. Fill your Telegram chat id at "Send notification" node

## Requirements
- Telegram account
- Self-hosted LLM or OpenAI account
- Connectively credentials (free tier)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
