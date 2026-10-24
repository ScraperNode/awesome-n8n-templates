# 🔒 Run weekly security audits via the n8n API, Data Tables, and Telegram

> ⚡ **66 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
The native n8n security audit misses tokens pasted into node parameters, active workflows without an error handler, plain http:// calls and leftover pinned data. This workflow runs the native audit plus five custom checks weekly, scores the result 0-100 and reports what changed to Telegram.

## How it works
1. A weekly Schedule Trigger starts the run.
2. The n8n node generates the native security audit and lists every workflow over the n8n API.
3. Five chained Code nodes scan all workflows for hardcoded secrets, unauthenticated webhooks, plain http:// URLs, missing error workflows and pinned data.
4. Findings from the native audit and custom checks merge into a 0-100 score with a severity summary.
5. A Data Table snapshot of the previous run gives new findings, fixed findings and the score delta.
6. The current snapshot is saved back and the report goes to Telegram: totals by severity, new, fixed and all current findings.

## Setup
1. Create an API key with the securityAudit:generate and workflow:list scopes, save it as an n8n API credential and select it in both n8n nodes.
2. Create a Data Table named security_audit_history with columns runAt (string), score (number), summary (string) and findings (string), and select it in both Data Table nodes.
3. Set your Telegram credential and the target chat ID.
4. Pick the weekday and hour, run once manually to seed the history, then activate.

## Requirements
- n8n 1.113 or newer (Data Tables)
- An n8n API key for your own instance
- A Telegram bot and a chat ID

## Customization
- Reword or reorder the report in the Compose message node - it is a plain template, no code changes
- Separate subject and text fields make the Telegram node swap for Slack, email or a webhook
- Disable any check node you do not need - the chain keeps working
- Adjust severity weights in the Score the audit node

## Additional info
Built for admins of self-hosted n8n instances and anyone keeping a shared instance clean. Everything runs inside n8n - no external storage, no AI calls - only the report message leaves your instance.

## 🔗 Nodes Used

Telegram, n8n, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
