# ⚙️ Manage mobile canary rollouts with Anthropic Claude and WhatsApp alerts

> ⚡ **59 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow monitors a mobile app canary rollout by fetching crash/ANR and API error/latency metrics, comparing them to the previous release baseline, asking Anthropic Claude for a proceed/pause/rollback recommendation, and then updating rollout percentage and notifying the on-call team via WhatsApp.

## How it works
1. Receives a POST webhook (or manual test trigger) from your CI/CD pipeline with the new version, previous version, app ID, and platform.
2. Waits for the configured observation window and then fetches canary-versus-baseline crash/ANR metrics and API error/latency metrics from your crash reporting and APM APIs.
3. Compares canary metrics to the baseline, flags threshold breaches, and detects correlated regression patterns such as OS-version concentration or a dominant crash signature.
4. Sends the metric deltas and regression signals to Anthropic Claude for a rollout recommendation, then parses the response and forces an automatic rollback if crash/ANR regression is severe.
5. If the decision is proceed, increases the rollout percentage via your app store rollout-control API and loops back to observe the next stage until 100%.
6. If the decision is pause, sends a WhatsApp alert with the AI reasoning and waits for a human resume/rollback signal before continuing or halting.
7. If the decision is rollback (from AI, safety override, or human choice), halts the rollout via the app store API and sends a WhatsApp rollback notification.

## Setup
1. Create credentials for your crash reporting metrics API, APM metrics API, app store rollout-control API, Anthropic API, and WhatsApp Business Cloud in n8n.
2. Update the config values for rollout stages, observation window, delta thresholds, API base URLs, and WhatsApp sender/recipient numbers.
3. Copy the webhook URL for the release-deployed trigger and configure your CI/CD post-deploy hook to send newVersion/previousVersion/appId/platform.
4. Use the resume webhook URL from the human-decision wait step in your release-management tooling so on-call can resume or roll back after a pause.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
