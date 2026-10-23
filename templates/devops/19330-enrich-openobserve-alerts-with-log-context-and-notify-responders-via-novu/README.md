# ⚙️ Enrich OpenObserve alerts with log context and notify responders via Novu

> ⚡ **4 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow triggers on selected OpenObserve alerts, queries nearby logs for context, redacts sensitive fields, suppresses duplicate notifications with a cooldown, and sends an enriched incident payload to Novu responders (or outputs a preview) while recording notification state in an n8n Data Table.

## How it works
1. Triggers when a selected OpenObserve alert fires and receives the alert payload via the OpenObserve trigger.
2. Normalizes and validates key fields (alert ID/name, service, severity, and timestamp) and derives a stable incident key.
3. Builds a bounded OpenObserve SQL query for the configured log stream and service field, then searches a time window around the alert time.
4. Picks the log record closest to the alert and, if found, uses OpenObserve Search Around to fetch additional surrounding context.
5. Constructs a responder-ready incident brief by limiting evidence size and redacting common secret-like fields, then prepares the Novu payload and an idempotent notification key.
6. Checks an n8n Data Table for a prior notification and suppresses alerts still in cooldown unless severity has increased.
7. If allowed, either returns a preview payload (preview mode) or triggers a Novu notification and then upserts the cooldown state to the n8n Data Table.

## Setup
1. Add OpenObserve API credentials and select the OpenObserve alert(s) that should trigger this workflow.
2. Update the enrichment settings (log stream name, service field, optional default service, search window/limits, cooldown minutes, and OpenObserve URL) in the configuration step.
3. Add Novu API credentials and set the Novu workflow identifier plus either a subscriber ID or a topic key, matching the chosen recipient type.
4. Create or verify the n8n Data Table used for cooldown tracking and keep its ID referenced in the read and upsert steps.
5. Run with preview_only enabled to validate the Novu payload structure, then disable preview_only to send live notifications.

## 🔗 Nodes Used

Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
