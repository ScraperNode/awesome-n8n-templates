# 🧾 Triage invoice disputes from Gmail with OpenAI and Jira

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow monitors a Gmail inbox for invoice dispute emails, pulls related invoice, payment, usage, pricing, and line-item data from n8n Data Tables, and uses OpenAI to classify the dispute before creating the appropriate Jira ticket and optionally emailing the finance team.

## How it works
1. Triggers every minute when a new dispute email arrives in Gmail.
2. Retrieves the related payment records, invoice header, pricing rule, usage logs, and invoice items from n8n Data Tables.
3. Merges the fetched records, removes duplicates, calculates total usage, recomputes expected charges, and summarizes paid and pending amounts.
4. Sends the normalized dispute context to OpenAI to classify the dispute, assess billing validity, and draft recommended next steps in structured JSON.
5. Parses and validates the OpenAI JSON output, flagging cases for escalation when billing is invalid, confidence is below 0.8, or the classification requires human review.
6. Creates a Jira task for the dispute, using “Highest” priority for escalations and standard priority for normal disputes.
7. Sends an escalation email via Gmail to the finance team when a highest-priority Jira ticket is created.

## Setup
1. Connect Gmail credentials for the Gmail Trigger and the Gmail action used to notify the team, and set the escalation recipient address in the notification email.
2. Provide an OpenAI API credential and select the model used for dispute classification.
3. Configure Jira credentials and confirm the target project, issue type, and priority mappings used for normal versus escalation tickets.
4. Create and populate the required n8n Data Tables (payments, invoice data, pricing rules, usage logs, and invoice items) and update the Data Table IDs if you use different tables.

## 🔗 Nodes Used

Jira Software, Gmail, Gmail Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
