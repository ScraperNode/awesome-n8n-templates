# ⚒️ Detect idle device activity from Prey screenshots with Claude Vision

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow detects device idleness by sampling recent Prey screenshot reports and analyzing them with Anthropic Claude Vision, returning a JSON verdict (idle true/false plus summary) while enforcing a configurable cooldown and minimum data window.

## How it works
1. Receives a POST request via a webhook (or runs manually for testing) to start an idle-check execution.
2. Checks a workflow-level cooldown timer and stops early if an analysis ran too recently.
3. Fetches recent device reports from Prey and keeps only those with screenshots within the configured time window.
4. Stops with an idle: null result if there are not enough screenshots or the screenshots do not span the minimum required time.
5. Evenly samples up to the maximum number of screenshots, downloads each image from Prey, and packages them in chronological order.
6. Sends the screenshot set to the Anthropic Messages API (Claude Vision) to determine whether meaningful on-screen changes indicate activity.
7. Parses the model’s JSON response and outputs a final JSON verdict including idle status, a short summary, and the analyzed report metadata.

## Setup
1. Add a Prey API credential and select the target device ID for fetching reports and downloading screenshots.
2. Add an Anthropic API credential for the Claude Vision HTTP request.
3. If using the webhook trigger, copy the webhook URL and configure Prey (or your source system) to POST to /prey-idle-check.
4. Review and adjust the window and control values (window_minutes, min_reports, min_span_minutes, max_images, cooldown_minutes) to match your monitoring needs.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
