# 📋 Track inventory levels with automated alerts

> ⚡ **5 views** · 📋 [Project Management](../)

## Description

Receive inventory movements via webhook, validate data, update stock levels, and trigger automatic alerts when products need reordering.

WHAT IT DOES:

Accepts inventory movements (sales, purchases, adjustments, transfers) via webhook
Validates required fields including product ID, quantity, and movement type
Records each movement via REST API
Retrieves current stock levels after each movement
Compares stock against configurable reorder points
Routes alerts by severity through Slack and email
Logs every movement to audit trail for traceability
Returns movement ID, stock level, and alert status to the caller

INCLUDED FLOWS:

Valid movement: Webhook receives data → Validate fields and type → Record via API → Get current stock → Compare against thresholds → Route alerts by severity → Log to audit trail → Return movement ID, stock level, and alert status
Invalid movement: Missing product ID, quantity, or invalid type → Return 400 error with validation details
Workflow error: Any node fails → Error trigger → Slack alert to #errors channel

ALERT LEVELS:

Critical (stock is zero): Slack alert to #inventory-critical AND email to purchasing team with suggested reorder quantity
Urgent (stock below 50% of reorder point): Slack alert to #inventory with stock percentage and suggested order
Warning (stock at or below reorder point): Slack alert to #inventory with current level
None (stock above reorder point): No alert, movement logged normally

SETUP:

HTTP Header Auth credential with API key and base URL for your inventory API
Gmail credential for critical stock email alerts
Slack credential with access to #inventory-critical, #inventory, and #errors channels
Backend API with /inventory/movement, /inventory/product, and /inventory/audit endpoints

CUSTOMIZABLE:

Alert thresholds are adjustable in the Check Stock Levels code node (default: 0 for critical, 50% for urgent, 100% for warning)
Movement types can be extended in the Validate Movement code node
Critical alert email recipient is configurable in the Email - Critical Alert node
Slack message format for each alert level is editable in the corresponding Format Alert code nodes

IDEAL FOR:

E-commerce, retail, and warehouse teams that need real-time inventory tracking with automatic reorder alerts across multiple severity levels.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
