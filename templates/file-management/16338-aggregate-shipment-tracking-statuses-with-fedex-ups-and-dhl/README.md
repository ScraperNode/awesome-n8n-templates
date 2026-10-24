# 📁 Aggregate shipment tracking statuses with FedEx, UPS and DHL

> ⚡ **89 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to fetch active shipments from an n8n Data Table, query FedEx, UPS, or DHL tracking APIs with circuit-breaker protection, normalize each response into a shared status schema, and upsert the latest status back into the same table.

## How it works
1. Runs every 15 minutes on a schedule.
2. Loads all rows from the n8n Data Table `shipment_tracking` and filters out shipments already marked as DELIVERED or RETURNED_TO_SENDER.
3. Routes each remaining shipment by `carrier` and marks unsupported carriers with a canonicalStatus of UNKNOWN.
4. For FedEx, UPS, and DHL shipments, checks a per-carrier circuit breaker and either calls the carrier’s tracking API or skips the call when the breaker is open.
5. Normalizes each carrier response (or skip) into a canonical status (for example PRE_TRANSIT, IN_TRANSIT, OUT_FOR_DELIVERY, DELIVERED, EXCEPTION, UNKNOWN) while updating the breaker state based on 429/5xx/network failures.
6. Merges all carrier results and upserts the latest fields back into the `shipment_tracking` Data Table using `trackingNumber` as the match key.

## Setup
1. Create the n8n Data Table named `shipment_tracking` with columns such as `trackingNumber`, `carrier`, `canonicalStatus`, `rawStatus`, `breakerState`, `httpStatus`, and `checkedAt`, and seed it with shipments (use lowercase carriers: `fedex`, `ups`, `dhl`).
2. Add OAuth2 credentials for the FedEx Track API and select them in the FedEx HTTP request step.
3. Add OAuth2 credentials for the UPS Track API and select them in the UPS HTTP request step.
4. Add DHL API authentication (as configured for the DHL request in this template) and select it in the DHL HTTP request step.
5. Activate the workflow so workflow static data persists between runs and the circuit breaker state is maintained.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
