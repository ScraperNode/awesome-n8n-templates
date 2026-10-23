# 🤝 Route craft brewery orders with OpenAI, Google Sheets, and Gmail

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives retailer orders via webhook, looks up territory and allocation data in Google Sheets, uses OpenAI to apply three-tier compliance rules, then emails sales ops or compliance via Gmail and logs the decision back to Google Sheets.

## How it works
1. Receives a retailer order as a POST request to a webhook endpoint.
2. Normalizes the incoming payload into consistent order fields (retailer, state, license type, SKU category, quantity, and delivery date).
3. Looks up the retailer’s assigned territory state, SKU license restriction rule, and limited-release cap remaining from a Google Sheets “Territory & Allocation Map” by retailerId.
4. Uses an OpenAI chat model to evaluate territory exclusivity, license-type eligibility, and limited-release allocation caps and returns a structured decision with category, confidence, reasoning, and approved quantity.
5. Routes the order based on the decision and sends a Gmail notification to sales ops for approvals and allocation-cap issues, or to compliance for territory conflicts and license ineligibility.
6. Appends the full decision record to a Google Sheets “Distribution Order Log” tab for audit history.

## Setup
1. Create and populate a Google Sheets “Territory & Allocation Map” tab with columns retailerId, assignedTerritoryState, skuLicenseRestriction, and limitedReleaseCapCasesRemaining, then set its spreadsheet ID and tab name in the lookup step.
2. Create a Google Sheets “Distribution Order Log” tab with columns matching the logged fields, then set its spreadsheet ID and tab name in the append-to-log step.
3. Add credentials for OpenAI, Google Sheets OAuth2, and Gmail OAuth2, and connect them to the OpenAI model, both Google Sheets steps, and the Gmail steps.
4. Replace the Gmail recipient placeholders with your sales ops and compliance inboxes.
5. Copy the webhook URL and configure your ordering portal (or source system) to POST orders to the webhook path (craft-brewery-order-intake).

## Requirements
- OpenAI API Credentials: An active OpenAI API key with access to model endpoints for evaluating three-tier liquor compliance, territory boundaries, and JSON parsing.
- B2B Portal Webhook Access: Admin access to your wholesale ordering platform (e.g., Ekos, SevenFifty, Encompass) to trigger outgoing webhooks upon order submission.
- Google Sheets Integration: A connected Google account with write permissions to a central log spreadsheet to store territory allocations and audit records.
- Email & Messaging Credentials: Authenticate Gmail and/or Slack/Telegram credentials to dispatch real-time notifications to distributor partners, sales reps, and compliance teams.

## Customization
- Live Franchise & License API Checks: Replace static validation in Normalize Order Intake with HTTP Request nodes querying state alcohol control boards (e.g., TABC, ABC) to verify retail liquor licenses in real time.
- ERP Order Injection: Add downstream HTTP or native ERP nodes (e.g., SAP, NetSuite, QuickBooks) following the approved route to automatically generate wholesale invoices and pick tickets.
- Dynamic Territory Mapping: Connect a database or Google Sheet lookup table to dynamically map ZIP codes to exclusive distributor franchise territories instead of relying solely on prompt rules.

## Additional info
Three-Tier Compliance Protection: Designed to prevent illegal direct-to-retailer shipments, ensuring all orders strictly adhere to state-mandated distributor franchise laws.

Audit Trail Security: Every processed wholesale order records an immutable log entry in Google Sheets containing timestamps, license numbers, assigned distributor IDs, and compliance decision outputs.

Failsafe Route Escalation: Any order flagged with licensing discrepancies, territory overlaps, or direct-ship ambiguities automatically routes to specialized escalation channels rather than auto-dispatching.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
