# 🔬 Monitor Clio trust/IOLTA balances and send email alerts

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow monitors Clio trust/IOLTA balances by emailing daily low/negative balance alerts (with compliance checks and partner escalation for negatives) and sending a weekly trust health summary to accounting.

## How it works
1. Runs daily at 7am on a schedule trigger.
2. Fetches all open matters and their trust balances from the Clio API.
3. Calculates a balance tier (healthy/low/negative) and applies a cooldown so the same unresolved issue does not re-alert every day.
4. Builds an individual email for each alert-worthy matter, runs a compliance/guardrail sub-workflow, and sends the alert via SMTP if approved.
5. For any negative-balance matter, builds an urgent partner escalation email, logs it through the guardrail/audit sub-workflow, and sends it via SMTP.
6. Runs weekly on Monday at 8am, fetches all open matters from Clio, computes a trust health rollup, and emails the summary to accounting via SMTP.

## Setup
1. Add a Clio OAuth2 credential and set the CLIO_BASE_URL variable used by the Clio HTTP requests.
2. Configure an SMTP email credential and set FIRM_FROM_EMAIL plus recipient variables like FIRM_TRUST_ACCOUNTING_EMAIL, FIRM_PARTNER_EMAIL, and/or FIRM_EMAIL.
3. Provide and configure the guardrail/compliance sub-workflow and set GUARDRAIL_WORKFLOW_ID to its workflow ID.
4. (Optional) Set LOW_BALANCE_THRESHOLD and ALERT_COOLDOWN_DAYS variables to match your firm’s alert policy.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
