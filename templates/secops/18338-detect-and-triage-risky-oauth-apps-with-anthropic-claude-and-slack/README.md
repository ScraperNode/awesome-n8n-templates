# 🔒 Detect and triage risky OAuth apps with Anthropic Claude and Slack

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs every 30 minutes to detect new or changed OAuth-authorized apps, enriches them with publisher reputation data, scores risk with Anthropic Claude, and then auto-revokes high-risk grants or posts Slack alerts for review while updating a baseline whitelist store.

## How it works
1. Runs every 30 minutes on a schedule.
2. Fetches the current list of authorized OAuth apps from an identity provider API and the current baseline whitelist from a baseline store API.
3. Compares the live app list to the baseline and stops the run if no new apps or scope changes are detected.
4. Sends the flagged apps to an app reputation API to add publisher/domain reputation signals.
5. Uses Anthropic Claude to assign each flagged app a High/Medium/Low risk tier with a short justification, defaulting to Medium if the model output cannot be parsed.
6. Automatically revokes High-risk OAuth grants via the identity provider API and posts a critical Slack alert, posts Medium-risk apps to a Slack review channel, and silently logs Low-risk apps.
7. Merges all outcomes and upserts the processed app records back into the baseline store so future runs only evaluate new or changed grants.

## Setup
1. Add HTTP header authentication credentials for your identity provider API endpoints used to fetch authorized apps and revoke grants.
2. Add HTTP header authentication credentials for your baseline store API endpoints used to fetch and upsert the whitelist/baseline.
3. Add HTTP header authentication credentials for the app reputation lookup API.
4. Add an Anthropic credential and confirm the Claude model selection in the Anthropic chat model configuration.
5. Add a Slack credential and ensure the target channel IDs (for critical alerts and review alerts) match channels in your Slack workspace.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
