# ⚒️ Detect LLM prompt regressions with Data Tables, OpenAI APIs, and Telegram

> ⚡ **6 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Continuous quality checks for your production LLM prompts. Keeps a golden test set in n8n Data Tables, runs it on a schedule against any OpenAI-compatible API, compares each run to a blessed baseline, and pings Telegram only when quality actually changes.

## How it works
1. A Schedule Trigger starts each run. The Execute workflow button runs it on demand.
2. Prompt profiles (system prompt, model, temperature) and test cases (input, expected output, check type) load from two Data Tables. When both tables are empty the workflow seeds demo rows, so the first run works immediately.
3. Every case calls its own model through a generic OpenAI-compatible HTTP request with retries. Failed calls are recorded and reported, never silently dropped.
4. Deterministic checks (exact, contains, regex, numeric) grade most answers for free. An LLM judge scores only the free-form cases marked llm-judge on a 1-5 scale.
5. The run is aggregated, snapshotted to an eval history table, and compared to the blessed baseline: a flipped case must fail two runs in a row to count, while a broad pass-rate or judge-score drop alerts at once.
6. A Telegram digest goes out on baseline capture, regression, recovery, or an ops failure, and stays silent while quality holds.

## Setup
1. Create three Data Tables: eval_profiles (profileName, systemPrompt, model, temperature), eval_cases (profile, label, input, expected, checkType), eval_history (runAt, isBaseline, summary, results), and select them in the Data Table nodes.
2. Create an HTTP Header Auth credential (name Authorization, value Bearer YOUR_API_KEY) and select it in both HTTP Request nodes. Point apiBaseUrl in the Config node at your provider.
3. Add a Telegram bot credential and replace YOUR_CHAT_ID in the Telegram node with your chat ID.
4. Tune thresholds, alertMode, and judgeModel in the Config node.
5. Run once with Execute workflow to seed demo data and capture the first baseline, then add your own prompts and cases as table rows. No canvas edits needed.

## Requirements
- n8n 1.113 or later with Data Tables available on your instance
- An API key for any OpenAI-compatible chat API (OpenRouter, OpenAI, Groq, self-hosted Ollama). The demo uses free OpenRouter models
- A Telegram bot token and the chat ID that should receive reports

## Customization
- Swap the Telegram node for Slack, email, or a webhook. The message text and a ready subject line are already prepared in the Compose message step
- Add a new check type as a single entry in the checker map inside the Deterministic check node
- Set rebaseline to true in Config for one run to bless the current state as the new baseline
- Raise regressionPassRatePp on small test suites so a single flaky case does not trigger an alert
- Point apiBaseUrl at a self-hosted model to keep all evaluation traffic local

## Additional info
The eval history table grows by one row per run; prune old non-baseline rows from time to time. Setting alertMode to always sends a digest after every run, which is handy to verify the Telegram wiring. Free-tier models on OpenRouter come and go. If a demo model stops routing, change judgeModel or the model column in eval_profiles.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
