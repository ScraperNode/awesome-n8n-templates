# 📊 Monitor AI citation changes for your domain with TriRank and SMTP email

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Read a domain’s cached AI citation measurements from TriRank each Monday and email a baseline or changed reading. The workflow watches existing measurements; it does not run new AI checks. Missing or stale measurements are reported separately from measured zero citations.

## How it works
1. Run every Monday at 09:00 in the n8n workflow timezone.
2. Sets the domain to monitor (and whether to notify on the first run).
3. Read cached measurements from https://trirankai.com/api/signals/<domain>. This is a read-only request; it does not trigger new AI probes. HTTP errors and rate limits are reported as unavailable data.
4. Compare the stored reading with this run using n8n workflow static data. Report measured citations, measured zero citations, partial coverage or no fresh measurement as distinct states. Unchanged readings produce no email; the first run can send a baseline.
5. Checks whether a message was produced and, if so, sends it as a plain-text email via SMTP.

## Setup
1. Run the free audit for your domain at https://trirankai.com/audit to seed its measurement. Complete the human verification yourself. Old citation data can expire and needs a fresh audit; this workflow does not refresh it.
2. Set your domain in Configure domain and choose notifyOnFirstRun. Activate the workflow after SMTP setup, and check its timezone. Static data persists during active scheduled runs, not manual test executions.
3. Add an SMTP credential, then set the From and To addresses in the email step.
4. (Optional) Create a TriRank API key and configure it as an `x-api-key` header credential on the HTTP request to increase the daily read allowance.

## Requirements
- An n8n instance and an SMTP credential. No TriRank account is required for 60 anonymous reads per IP per day. Store optional x-api-key authentication in a Header Auth credential; never include credentials in the workflow JSON.

## Customization
- Change the schedule or disable the first-run baseline. Keep missing measurements separate from measured zero citations. Quiet weeks send no email.

## Additional info
TriRank: https://trirankai.com
Free audit and measurement setup: https://trirankai.com/audit
This email version is intended for users without a Slack workspace. It sends existing cached results, not fresh AI-check results.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
