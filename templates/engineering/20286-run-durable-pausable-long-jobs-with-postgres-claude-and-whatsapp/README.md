# ⚒️ Run durable, pausable long jobs with Postgres, Claude and WhatsApp

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow provides a durable long-running job runner backed by Postgres, executing multi-step tasks with Anthropic Claude and supporting pause/resume/cancel, approvals via WhatsApp, and automatic recovery after crashes or expired leases.

## How it works
1. Receives a POST request on the `/webhook/durable-job` webhook to validate the task and steps, create an idempotent job record, and store the initial job state in Postgres.
2. Claims an atomic lease on the job in Postgres and decides what to do next based on the latest saved state and any requested control action.
3. For runnable steps, sends the current step prompt to the Anthropic Messages API (optionally using the web_search tool) and records output, token usage, and cost back to Postgres as a checkpoint.
4. For steps that require approval, marks the job as awaiting approval in Postgres, sends approve/reject links via WhatsApp, and waits up to 24 hours for a webhook-based decision.
5. Receives a POST request on the `/webhook/durable-job-control` webhook to apply control actions (status, pause, resume, cancel, retry, approve, reject) via guarded SQL updates and re-queues the job when it should resume.
6. Runs every minute on a schedule to find stale or interrupted jobs in Postgres, re-claim them for recovery, and fail jobs that exceed the configured recovery limit.
7. When a job completes or fails, updates the final job state in Postgres and sends a terminal notification via WhatsApp.

## Setup
1. Configure a Postgres credential, select it on all Postgres nodes, and run the manual “Create Tables” trigger once to create the `durable_jobs` table and indexes.
2. Configure an Anthropic API key as an HTTP Header Auth credential (using header `x-api-key`) and select it on the HTTP Request step that calls the Anthropic Messages API.
3. Configure WhatsApp Business credentials for the WhatsApp nodes and set the WhatsApp Phone Number ID and recipient phone number in the workflow’s configuration values.
4. Review and update the durable configuration values (model ID, token limits, max attempts, lease seconds, and pricing catalog) to match your environment.
5. In the workflow settings, set this workflow as the error workflow so failures mark the currently leased job as interrupted for recovery.
6. Activate the workflow and use the provided webhook URLs from n8n in your client that starts jobs and sends control actions.

## 🔗 Nodes Used

HTTP Request, Redis, Webhook, Redis Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
