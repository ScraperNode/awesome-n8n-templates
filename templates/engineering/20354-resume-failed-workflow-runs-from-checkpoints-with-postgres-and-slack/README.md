# ⚒️ Resume failed workflow runs from checkpoints with Postgres and Slack

> ⚡ **1 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow implements a checkpoint-and-resume system for a multi-stage pipeline, storing stage outputs in Postgres and sending failure/recovery alerts to Slack, with manual, webhook, and scheduled triggers to start runs and automatically resume failed or stalled executions.

## How it works
1. Starts a new run via Manual Trigger, receives a POST request via webhook, or runs every 10 minutes on a schedule to sweep for resumable runs.
2. Ensures the required Postgres tables for runs, checkpoints, and run events exist.
3. For scheduled sweeps, queries Postgres for failed runs whose retry time has passed or running runs whose lease expired, then calls this workflow’s webhook to resume each run.
4. For manual/webhook runs, loads the run state and completed checkpoints from Postgres, restores prior stage outputs into context, and determines the first stage that still needs to run.
5. Acquires a lease-based lock in Postgres to ensure only one execution owns the run, and exits if the run is already completed or currently locked by another execution.
6. Executes the pipeline stages in order (validate order, reserve inventory, charge payment, create shipment, send confirmation), saving a Postgres checkpoint and event after each successful stage.
7. On stage failure, retries the stage inline with exponential backoff when allowed, otherwise marks the run as failed or dead-lettered in Postgres and sends a Slack alert, and on completion marks the run completed and optionally posts a Slack recovery notification when resuming from checkpoints.

## Setup
1. Add Postgres credentials for the database where the workflow can create and update the workflow_runs, workflow_checkpoints, and workflow_run_events tables.
2. Add Slack credentials and set the target Slack channel in the configuration (and update the Slack nodes if you want a different channel behavior).
3. Update the selfWebhookUrl value in the configuration to this workflow’s production webhook URL ending in /webhook/checkpoint-run so the sweeper can trigger resumes.
4. If you want crash notifications, enable the Error Trigger node and set this workflow as the Error workflow in your n8n instance settings.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
