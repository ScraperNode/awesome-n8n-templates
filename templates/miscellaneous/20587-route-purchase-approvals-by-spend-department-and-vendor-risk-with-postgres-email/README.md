# 🔧 Route purchase approvals by spend, department and vendor risk with Postgres, email and Slack

> ⚡ **0 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow receives purchase requests via webhook, evaluates spend tiers, department budget status, and vendor risk using Postgres data, then either auto-approves, rejects, or runs a sequential email approval chain, finally notifying the requester by email and posting an audit message to Slack.

## How it works
1. Receives a purchase request via a POST webhook and validates required fields, normalizing currency amounts to USD.
2. Loads vendor risk/approval status, department budget and manager details, and the last 30 days of spend with the same vendor from Postgres.
3. Applies policy rules (spend tiers with cumulative 30‑day vendor spend, budget limits, self-approval avoidance, and vendor risk checks) to decide whether to auto-approve, reject, or require specific approval levels.
4. Saves the request as pending in Postgres and immediately responds to the webhook caller with the request ID, current status, and required approval levels.
5. If approvals are required, sends an approval email to the next approver with approve/reject links, waits for a response, and repeats with reminders until the chain completes or expires.
6. Finalizes the request in Postgres by recording the decision, generating a PO number and committing budget on approval, writing an audit log entry, then emails the requester and posts an audit notification to Slack.

## Setup
1. Add Postgres credentials for the database that stores vendors, departments, requests, and audit logs.
2. Add SMTP credentials for the Email Send nodes and confirm the configured sender address is allowed (the fromEmail value in the policy).
3. Run the manual setup once to create the required Postgres tables/sequence and seed the demo vendor and department records.
4. Update the policy configuration values (spend tiers, approver email addresses, currency rates, reminder settings, max request limit, and Slack webhook URL) in the policy step.
5. Copy the production webhook URL for the purchase-request endpoint and configure your requesting system to POST the expected JSON payload to it.

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
