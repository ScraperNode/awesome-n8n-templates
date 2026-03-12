# 🎫 Escalate payment issues with Azure OpenAI, Google Sheets, Slack and Zendesk

> ⚡ **81 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 📘 Description

This workflow automates payment-related customer support escalation by validating reported issues against transaction data and coordinating all downstream actions in a controlled, auditable way. It is designed for support teams that need to quickly separate valid payment failures from false or incomplete reports—while maintaining consistent customer communication and timely human intervention.

The workflow is triggered via a webhook whenever an external system reports a customer issue. Incoming data is normalized and cross-checked against Google Sheets, which acts as the single source of truth for transaction status, payment confirmation, and order creation. An AI escalation engine then applies strict, rule-based logic to determine whether the issue is confirmed, needs clarification, or not valid, without assuming or inventing missing information.

For confirmed cases, the workflow runs parallel actions: it generates a concise escalation summary for human support, logs full context to Slack, creates a Zendesk ticket for traceable resolution, and sends a calm, customer-safe email acknowledging the issue. Transaction records are then updated to reflect confirmation status. Robust error handling ensures any workflow failure is immediately surfaced in Slack.

## ⚙️ What This Workflow Does (Step-by-Step)
 📥 Webhook Intake
 Receives structured payment issue data from external systems.
🧾 Normalize Incoming Payload
 Prepares a consistent data structure for processing.
📊 Transaction Lookup (Google Sheets)
 Fetches payment and order details from the source of truth.
🧠 AI Escalation Decision
 Validates the issue and classifies it as confirmed, needs clarification, or invalid.
🚨 Notify Human Support
 Sends escalation email and logs detailed context to Slack.
✉️ Send Customer-Facing Email
 Delivers a calm, professional acknowledgement to the customer.
🎫 Create Zendesk Ticket
 Opens a support ticket for confirmed cases requiring manual action.
📝 Update Transaction Record
 Marks confirmation status in Google Sheets for auditability.
⚠️ Error Handling → Slack Alert
 Immediately alerts the team if any workflow step fails.

## 🧩 Prerequisites
 • Webhook access for incoming issues
 • Google Sheets OAuth2 (source of truth)
 • Azure OpenAI credentials
 • Gmail OAuth2 for email delivery
 • Slack API access
 • Zendesk API access

## 💡 Key Benefits
 ✔ Prevents false or premature escalations
 ✔ Uses Google Sheets as an authoritative data source
 ✔ Consistent, customer-safe communication
 ✔ Parallel handling for speed and clarity
 ✔ Full audit trail across Sheets, Slack, Email, and Zendesk
 ✔ Strong error monitoring and reliability

## 👥 Perfect For
-  Customer support teams
-  Payment and order operations
-  SaaS and transaction-heavy platforms
-  Businesses handling high-volume support escalations

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Zendesk, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
