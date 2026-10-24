# ⚙️ Diagnose incident root causes and plan remediation with Claude and WhatsApp

> ⚡ **29 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow ingests a production incident via webhook or manual trigger, fetches logs, metrics, traces, GitHub activity, infrastructure changes, and deployment history, then uses Anthropic Claude to correlate evidence, propose root-cause hypotheses, and draft a remediation plan that can be approved and executed with status updates over WhatsApp.

## How it works
1. Receives a production incident via a POST webhook (or a manual test run) and initializes the incident details, service name, and correlation window.
2. Pulls incident-window evidence in parallel from your log aggregator, APM/metrics system, distributed tracing system, GitHub (recent commits and merged pull requests), infrastructure audit/change logs, and your deployment platform.
3. Combines the evidence into a unified, time-sorted timeline and scores events by proximity to the incident start.
4. Sends the incident description and timeline to Anthropic Claude to generate a ranked list of root-cause hypotheses with confidence scores and cited events.
5. Sends the top hypotheses to Anthropic Claude again to rank supporting evidence and produce an ordered remediation plan with risk and rollback details.
6. Sends the root-cause report and plan to an on-call recipient via WhatsApp and waits for a human decision to execute or dismiss.
7. If approved, triggers the remediation action via an HTTP API, waits a grace period, re-checks metrics, and then sends a WhatsApp confirmation of resolution or an escalation if health has not recovered.

## Setup
1. Configure the incident source to call the webhook URL (POST `/production-incident-triggered`) and ensure it sends at least `incident_id`, `description`, and `started_at` (or adjust the workflow’s input mapping).
2. Add HTTP Header Auth credentials for your log aggregator, metrics/APM, tracing, infrastructure change/audit log, and deployment platform APIs, and update the corresponding API URLs in the configuration step.
3. Add a GitHub API credential with access to the target repository and set `repoOwner` and `repoName`.
4. Add an Anthropic (Claude) API credential (HTTP Header Auth with `x-api-key`) and confirm the model name used in the configuration step.
5. Add WhatsApp Business Cloud credentials for the WhatsApp nodes, and set your `phoneNumberId` and recipient phone number values.
6. Connect the wait/resume webhook used for the human decision step to your incident-response tooling so it can resume the workflow with a decision value like `execute` or `dismiss`.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
