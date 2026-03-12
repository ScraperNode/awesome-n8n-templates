# 📱 Send notifications across email, Slack, and webhook channels

> ⚡ **25 views** · 📱 [Social Media & Email Marketing](../)

## Description

Deliver coordinated messages through multiple channels with priority-based formatting, delivery tracking, and compliance logging.

WHAT IT DOES:

Receives notification requests via webhook with message, recipients, channels, and priority
Validates required fields before processing
Builds formatted message templates per channel automatically
Stores notification record via REST API
Delivers simultaneously across email, Slack, and webhook channels
Tracks each channel delivery independently with success or skip status
Updates delivery status via REST API for audit trail
Returns complete delivery summary to the caller

INCLUDED FLOWS:

Valid request: Webhook receives notification → Validate fields → Build templates → Store via API → Route to channels simultaneously → Track delivery per channel → Update status via API → Return summary
Invalid request: Missing message or recipients → Return 400 error with validation details
Workflow error: Any node fails → Error trigger → Slack alert to #errors channel

PRIORITY LEVELS:

Urgent: Subject prefix [URGENT], Slack emoji rotating_light
High: Subject prefix [HIGH], Slack emoji warning
Normal: Subject prefix [INFO], Slack emoji blue_circle
Low: Subject prefix [FYI], Slack emoji white_circle

CHANNELS:

Email: Sends to all recipients via Gmail with priority-prefixed subject line
Slack: Posts formatted message with priority emoji to #notifications channel
Webhook: Forwards JSON payload to external URL for third-party integrations

SETUP:

HTTP Header Auth credential with API key and base URL for your notifications API
Gmail credential for email delivery
Slack credential with access to #notifications and #errors channels
Backend API with /notifications and /status endpoints for storing and updating delivery records

CUSTOMIZABLE:

Priority levels and emoji mapping are editable in the Build Templates code node
Email subject format and body template are customizable in the same node
Slack message format including emoji and layout is adjustable
Webhook payload structure can be modified for your integration requirements

IDEAL FOR:

Teams that need a centralized notification API to send coordinated messages across email, Slack, and external webhooks with full delivery tracking and audit logging.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
