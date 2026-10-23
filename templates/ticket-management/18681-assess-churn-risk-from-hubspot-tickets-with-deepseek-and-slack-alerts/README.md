# 🎫 Assess churn risk from HubSpot tickets with DeepSeek and Slack alerts

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs daily to pull HubSpot support tickets, aggregates them per contact, uses a DeepSeek AI Agent to assess churn risk, writes the risk level and summary back to HubSpot, and alerts Customer Success in Slack while creating HubSpot follow-up tasks for high-risk accounts.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Fetches all HubSpot tickets and collects key fields like subject, priority, create date, and associated contact/company identifiers.
3. Aggregates the tickets by contact email to compute ticket volume, urgent/high-priority count, days since the most recent ticket, and a short subject summary.
4. Sends each contact’s ticket summary to a DeepSeek chat agent to return a structured churn-risk level, qualitative assessment, and recommended next action.
5. Updates the HubSpot contact with the churn risk level and summary in custom contact properties.
6. Posts a churn-risk alert to a Slack channel for medium- and high-risk accounts, and also creates a HubSpot follow-up task due the next day for high-risk accounts.

## Setup
1. Connect a HubSpot credential with permission to read tickets and update contacts (and create tasks if you want the follow-up task step).
2. Add a DeepSeek API credential for the chat model used by the AI Agent and structured output auto-fix.
3. Add a Slack credential and set the target channel (for example, #customer-success).
4. Create HubSpot contact properties named churn_risk_level and churn_risk_summary (and ensure your tickets include the association fields used in this template, such as associated_contact_email and associated_contact_id).
5. Adjust the schedule timing and any ticket priority conventions (for example, how “HIGH”/“URGENT” is represented in your HubSpot ticket priority property).

## 🔗 Nodes Used

Slack, HubSpot, Schedule Trigger, AI Agent, Structured Output Parser, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
