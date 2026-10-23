# 🤝 Track HubSpot deal lead-response SLAs using activity history

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every five minutes (or manually) to monitor HubSpot Deals that are awaiting a first response, checks associated emails, calls, and meetings from the assigned owner, and updates HubSpot SLA fields to reflect whether the lead was responded to within a 30-minute window.

## How it works
1. Runs on a manual trigger or on a 5-minute schedule and searches HubSpot Deals that are DELIVERED and either awaiting response or already breached without a recorded first response.
2. Validates each Deal’s required SLA fields (owner, lead received timestamp, and status) and routes invalid cases for manual review.
3. Searches HubSpot for Deal-associated email activities, then for calls, then for meetings, stopping with a failure output if any search request fails.
4. Filters activities to those owned by the Deal owner, within the window from lead receipt to workflow start, and identifies the earliest qualifying email, completed call, or completed meeting.
5. Applies a 30-minute calendar SLA to determine whether the Deal is still within target, breached, or has a recorded response in or out of SLA.
6. If an update is needed, patches the HubSpot Deal with the new lead_response_sla_status (and first_human_response_at when found) and verifies HubSpot confirms the requested values.
7. Returns a compact per-Deal result indicating the SLA outcome or a HubSpot failure reason.

## Setup
1. Create and populate the required HubSpot Deal properties used by this workflow (lead_received_at, first_human_response_at, lead_response_sla_status, and delivery_status).
2. Add a HubSpot Private App token credential with scopes for Deals read/write and activity read for emails, calls, and meetings, and connect it to all HubSpot HTTP requests.
3. Review and adjust the SLA rule (currently 30 minutes from lead_received_at) and confirm the workflow uses your intended custom object/type endpoints.
4. Run the workflow with the manual trigger to verify results on test Deals, then enable the disabled 5-minute schedule trigger to activate monitoring.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
