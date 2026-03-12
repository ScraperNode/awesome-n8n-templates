# 🎫 Route support tickets with SLA tracking, Slack alerts, and Gmail confirmations

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

Receive support tickets via webhook, categorize by priority, track SLA deadlines, notify your team on Slack, and send confirmation emails to customers.

WHAT IT DOES:

Receives support tickets from email, forms, or external systems via webhook
Normalizes data from multiple input formats automatically
Validates required fields before processing
Categorizes tickets by keywords into types (technical, billing, question, general)
Assigns priority automatically with override for urgent keywords
Detects duplicate tickets from the same customer within 24 hours
Calculates SLA deadline based on priority level
Stores ticket via REST API and returns ticket ID
Routes by priority to Slack with formatted alerts
Sends confirmation email to customer with ticket ID and SLA

INCLUDED FLOWS:

Valid ticket: Webhook receives data → Normalize → Validate → Categorize → Check duplicates → Assign SLA → Store via API → Route by priority → Slack alert to #support → Confirmation email → Return ticket ID and SLA
Invalid ticket: Validation fails (missing email or message) → Return 400 error response
Duplicate ticket: Same customer and subject within 24 hours → Return existing ticket ID without creating new one
Workflow error: Any node fails → Error trigger → Slack alert to #errors channel

SLA DEADLINES:

Critical: 2 hours (keywords: urgent, asap, critical, down, outage)
High: 8 hours (keywords: bug, error, broken, crash, billing, payment, refund)
Medium: 24 hours (default for general tickets)
Low: 48 hours (keywords: question, how to, feature, suggestion)

SETUP:

HTTP Header Auth credential with API key and base URL for your tickets API
Gmail credential for sending confirmation emails to customers
Slack credential with access to #support and #errors channels
Backend API with /tickets and /check-duplicate endpoints

CUSTOMIZABLE:

Categorization keywords are editable in the Categorize Ticket code node
SLA hours per priority level are adjustable in the Assign SLA code node
Slack alert format is customizable in the four priority format code nodes
Customer confirmation email text is editable in the Send Confirmation Email node

IDEAL FOR:

Support teams, SaaS companies, and service businesses that need to receive tickets from multiple sources, automatically categorize and prioritize them, track SLA compliance, and keep both team and customers informed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
