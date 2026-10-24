# 🎫 Triage and escalate Twenty CRM support cases with owner tasks

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow triggers on new Twenty CRM custom supportCase records, applies an urgent or standard SLA based on priority, creates or reuses a deterministic owner task, and updates the support case with triage metadata for replay-safe escalation.

## How it works
1. Triggers when Twenty CRM sends a record-created event for the custom `supportCase` object.
2. Fetches the full support case record from Twenty CRM using the received record ID.
3. Skips the case if it already has a `triagedAt` timestamp to avoid re-triaging replayed events.
4. Normalizes priority, sets an urgent (2-hour) or standard (24-hour) due date, and builds a deterministic task title for idempotent task creation.
5. Searches Twenty CRM tasks for an existing task with the same title and creates a new task assigned to the case owner when none exists.
6. Updates the Twenty CRM support case with the triage status, `triagedAt`, the linked task ID, and a recorded triage outcome.

## Setup
1. Create a Twenty CRM custom object with API name `supportCase` and fields for `name`, `summary`, `priority`, `customerEmail`, `status`, `triagedAt`, `triageOutcome`, and `lastTaskId` (plus an optional assignee/workspace member reference used for task assignment).
2. Add Twenty API credentials for the Twenty CRM trigger and action nodes, and ensure the trigger’s webhook is configured in Twenty with the correct shared secret/signature settings.
3. Update your priority values and SLA timing rules in the workflow’s triage logic (for example, which priorities count as urgent and the due date offsets).
4. Create a few test support cases in Twenty CRM (urgent, standard, and already-triaged) to confirm task reuse/creation and the support case update behavior.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
