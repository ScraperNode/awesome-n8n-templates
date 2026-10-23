# 🔬 Send daily ops digests and age-based anomaly alerts with OpenAI and Gmail

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every morning to fetch sales, support, calendar, and finance operational metrics via HTTP endpoints, summarizes the deterministic status with OpenAI, emails a daily digest via Gmail, and sends a separate throttled Gmail alert when oldest-item age thresholds are breached.

## How it works
1. Runs on a daily schedule at 08:30.
2. Requests operational data from four configured HTTP endpoints (sales, support, calendar, and finance) and continues even if a source fails.
3. Normalizes each source into consistent fields such as open count, oldest open item ID, and oldest age, marking the digest as degraded when a source is unavailable or malformed.
4. Aggregates the normalized results, detects age-threshold anomalies per source, and prepares a fact-only prompt for OpenAI to draft a short prose summary.
5. Validates the OpenAI output to ensure it is safe and contains no numbers, falling back to a fixed summary message when validation fails.
6. Builds and sends an HTML daily operations digest email via Gmail with the summary and per-source status table.
7. Filters anomalies against a once-per-day throttle key, sends an HTML anomaly alert email via Gmail when any unthrottled anomalies remain, and records the throttle keys after a successful send.

## Setup
1. Provide four reachable endpoints and set the workflow variables `OPS_SALES_URL`, `OPS_SUPPORT_URL`, `OPS_CALENDAR_URL`, and `OPS_FINANCE_URL`.
2. Add an HTTP Header Auth credential for the HTTP Request nodes to authenticate to your ops endpoints.
3. Add an OpenAI credential for the OpenAI (LangChain) node and confirm the model selection fits your account.
4. Add a Gmail OAuth2 credential and replace `ops@example.com` with your real recipients in both Gmail send steps.
5. Review and tune the per-source age thresholds and healthy-count limits in the normalization code to match your SLAs.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
