# ⚙️ Monitor workflow liveness with the n8n API and SMTP email alerts

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
Daily watchdog for self-hosted or cloud n8n: checks whether your scheduled workflows actually ran and emails you only when something is overdue, failing or unusually slow. No catalog to maintain – the expected rhythm is read from each Schedule Trigger.

## How it works
1. Runs once a day (or manually) and loads all active workflows via the n8n API.
2. Reads the rhythm from every enabled Schedule Trigger (interval, weekdays or cron). The largest gap between two planned runs becomes the threshold, so Mon–Fri schedules don't alarm on weekends.
3. Loads the last 50 executions of each watched workflow. Manual test runs never count.
4. Reports four findings: OVERDUE (no successful run within the expected gap plus tolerance), NO_SUCCESS (no successful run in the stored executions), ERROR_RATE (more than 20% failed runs in the last 7 days, at least one in the last 24 hours) and SLOW (latest run more than 3x the median).
5. Sends one HTML email with all findings – only when there is something to report. Workflows that can't be assessed are listed separately.

## Setup
1. Add an n8n API credential to both n8n nodes.
2. Add an SMTP credential to the email node.
3. Open the Config node and set notifyTo and notifyFrom.
4. Set executionRetentionDays to the execution retention of your instance (default 14).
5. Set your own error workflow in the workflow settings.
6. Run the workflow once manually, check the result, then activate it.

## Requirements
- n8n API key (self-hosted or n8n Cloud)
- SMTP account for sending the report

## Customization
- overrides (JSON in Config): also watch webhook or sub-workflows, or tune a single workflow, e.g. {"Order webhook": {"maxGapHours": 48}}. Use {"ignore": true} to skip one.
- ignoreNamePattern: skip workflows by name (regular expression).
- defaultToleranceHours, errorRateThreshold and minSlowSeconds: adjust how strict the checks are.
- Replace the email node with Slack, Teams or any other notification node.

## Additional info
Limits: workflows that don't save successful executions can't be assessed, and rhythms longer than your execution retention are listed as "not assessed". The watchdog can't report its own absence – run it from a second instance or add it to an external uptime check if that matters to you.

## 🔗 Nodes Used

Send Email, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
