# 🤝 Optimize procurement approval workflows with OpenAI, Slack, and Gmail

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs weekly to review procurement approval performance, detect policy changes, and generate a compliant optimization proposal using a demo recommendation or OpenAI. It validates the suggestion against company rules, waits for manager approval, versions the process update, and notifies stakeholders via Slack and Gmail.

## How it works
1. Runs weekly on a schedule to start a procurement workflow review.
2. Checks whether the company procurement policy version has changed, then loads recent purchase approval history, current approval-step rules, and buying policies.
3. Normalizes the transaction and approval-step data, calculates per-role bottleneck metrics, and scores overall approval performance to decide whether optimization is needed.
4. If optimization is needed, prepares a structured prompt and generates a recommendation using either a built-in demo output or OpenAI.
5. Parses the AI response into JSON and validates it against compliance guardrails such as allowed roles, allowed actions, and mandatory approver preservation.
6. If the recommendation is valid, creates a change request and pauses until a manager approves or rejects via the workflow’s resume webhook.
7. When approved, creates a new version of the approval process (preserving the previous version for rollback), applies the updated configuration, records an audit log, and sends stakeholder notifications through Slack and Gmail.

## Setup
1. (Optional for live AI) Add an OpenAI API credential for the OpenAI node and set the workflow to use live AI instead of the demo recommendation.
2. Add Slack credentials and select the target channel for stakeholder notifications.
3. Add a Gmail OAuth2 credential and update the recipient addresses used for approval and rejection emails.
4. After enabling the workflow, copy the wait node’s resume webhook URL and use it to send manager approval payloads (for example, approvalStatus=APPROVED or REJECTED, and additionalApproval=APPROVED when required).

## 🔗 Nodes Used

Slack, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
