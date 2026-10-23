# ⚙️ Triage risky Docker image migrations with What’s Up Docker, OpenAI and Ollama

> ⚡ **2 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily, checks What's Up Docker for containers with pending image tag upgrades, pulls the related GitHub release notes and migration diffs, uses an LLM (Ollama or OpenAI-compatible) to triage data-risky migrations, and sends a verdict to ntfy, Slack, Discord, or a webhook.

## How it works
1. Runs every day at 06:30 on a schedule.
2. Requests the container list from your What's Up Docker (WUD) instance and filters to images with tag-based updates available.
3. For each pending upgrade, detects the GitHub repository from the WUD link template and resolves the current and target release tags.
4. Fetches GitHub release notes for the target tag and compares the two tags to collect any changed migration files and SQL patches.
5. Classifies the upgrade as SAFE/CAUTION/DANGER/UNKNOWN based on simple SQL patterns and builds a prompt that asks an LLM to summarize why and provide pre-check SQL.
6. Calls either an OpenAI-compatible Chat Completions endpoint or an Ollama endpoint, normalizes the response, and formats a notification payload.
7. Posts the verdict, LLM summary, and GitHub compare link to ntfy, Slack, Discord, or your custom webhook.

## Setup
1. Run a What's Up Docker (WUD) instance and set its base URL in the Template Config.
2. Configure your LLM settings (provider, endpoint, model) and add an API key if you use an OpenAI-compatible endpoint.
3. (Optional) Add a GitHub token in Template Config to avoid low unauthenticated rate limits when fetching release and compare data.
4. Choose a notification provider (ntfy/Slack/Discord/webhook) and set the target URL, plus ntfy topic and/or Bearer auth token if required.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
