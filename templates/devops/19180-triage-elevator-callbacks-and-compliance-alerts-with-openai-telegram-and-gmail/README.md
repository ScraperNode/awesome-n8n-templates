# ⚙️ Triage elevator callbacks and compliance alerts with OpenAI, Telegram, and Gmail

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow polls an elevator monitoring API every 30 minutes, compares the latest unit status to a saved prior snapshot in an n8n Data Table, uses OpenAI to extract structured fault details from technician notes, and sends Telegram and Gmail alerts only for newly detected callbacks or imminent certificate expiry.

## How it works
1. Runs every 30 minutes on a scheduled trigger.
2. Fetches current elevator unit status from your elevator monitoring/callback API and reads the prior saved state from an n8n Data Table.
3. Compares current vs prior status per elevatorId to detect newly opened callback IDs and certificates that have just entered a 14-day-to-expiry window.
4. Uses OpenAI to extract faultType, entrapment risk, and estimated down duration from the technician note for each newly detected event.
5. Sends an urgent Telegram message to the on-call mechanic when entrapment risk is true.
6. Sends a Gmail compliance notice to the property manager when the inspection certificate is expiring soon.
7. Upserts the latest callback ID list and certificate flag back into the n8n Data Table so future polls alert only on changes.

## Setup
1. Set the elevator monitoring API endpoint (and any required authentication) in the HTTP request that fetches current elevator status.
2. Create or select an n8n Data Table for state tracking and ensure it contains the expected columns (elevatorId, buildingName, lastKnownCallbackIdsJson, certExpiryIso, certFlagged, lastCheckedAt).
3. Add an OpenAI API credential for the OpenAI Chat Model used by the Information Extractor.
4. Add a Telegram bot credential and paste the on-call mechanic’s Telegram chat ID in the Telegram message step.
5. Add a Gmail OAuth2 credential and set the property manager recipient email address in the Gmail send step.

## Requirements
- OpenAI API: Bound to the OpenAI Chat Model subnode (gpt-5-mini) for extracting callback fault details.
- Telegram Bot API: Bot token and on-call mechanic chat ID configured on the Page On-Call Elevator Mechanic node.
- Gmail Account: Connected to the Send Cert Expiry Compliance Notice node.
- Elevator Monitoring API: Endpoint URL and authentication credentials configured on the Fetch Current Elevator Status HTTP Request node.
- n8n Data Table: Seeded with the elevator_watchdog_state table to persist prior snapshot records across polls.

## Customization
- Mechanic Paging Channels: Swap Telegram with SMS or phone-call APIs (e.g., Twilio) for high-urgency after-hours paging.
- Custom Event Triggers: Extend the Code diff node to alert when units stay down past a custom threshold (e.g., > 4 hours).
- Compliance Lead Time: Adjust the 14-day certificate expiry window inside the diff node to match local jurisdiction lead times.
- Reporting Sink: Direct event record outputs into Google Sheets or PostgreSQL to build historical compliance logs alongside real-time alerts.
- Vertical Adaptation: Re-use the same fetch-diff-alert-writeback architecture for fire alarm panels or backup generator monitoring.

## Additional info
Resilience & Retries: Every external action node features continueRegularOutput with 3 retries at 2-second intervals to prevent dropped state writes.

API Cost Efficiency: OpenAI is only invoked when a new callback event is detected, costing zero AI tokens on routine polls without changes.

Data Privacy: Only technical unit IDs and callback notes are processed by OpenAI—tenant and occupant details are completely excluded.

Known Limitations: Expects consistent elevatorId and openCallbackIds structures from your vendor API. Missed polls due to vendor downtime are safely handled during the subsequent poll's diff.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
