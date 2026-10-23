# ⚙️ Unpublish staged timed workflows via the n8n API and report to Slack

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs nightly on a staging n8n instance, finds published workflows with schedule or polling-style triggers that are not allow-listed by tag, and (optionally) deactivates them via the n8n API before sending a report to Slack.

## How it works
1. Runs every night at 02:00 on a Schedule trigger.
2. Sets the allow-list tag name, instance label, dry-run mode, and whether to include polling triggers.
3. Uses the n8n API to list all active (published) workflows on the instance.
4. Filters out the current workflow and any workflows tagged with the allow-list tag, then keeps only workflows that have schedule/interval/cron triggers or polling configurations.
5. If dry-run mode is disabled, deactivates each matching workflow via the n8n API.
6. Builds a summary report of the workflows found (and unpublished if applicable) and posts it to a Slack channel.

## Setup
1. Create an n8n API key on the staging instance and configure an n8n API credential with the instance base URL (for example, https://staging.example.com/api/v1).
2. Add a Slack credential, select the target Slack channel, and ensure the workflow can post messages there.
3. Update the configuration values (allow-list tag, instance label, includePollingTriggers, and dryRun) to match your environment, and keep dryRun set to true until the report output looks correct.

## 🔗 Nodes Used

Slack, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
