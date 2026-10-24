# 🤝 Publish reviewed appointment services to Square Appointments and Wix Bookings

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow collects a canonical appointment service definition via an n8n Form, validates and previews it, then publishes the approved service to both Square Appointments (Catalog API) and Wix Bookings (Bookings Services API), storing service IDs in a companion journal and verifying each provider by API readback.

## How it works
1. Receives a service definition from an authenticated n8n Form (or runs a synthetic demo product from a manual trigger).
2. Validates the canonical JSON (title, description, currency/precision, fixed price, and duration) and maps it into provider-specific payloads for Square Catalog and Wix Bookings.
3. Presents a human review form showing the exact mapped requests and stops if the operator rejects the plan.
4. Registers the approved publication plan in an external companion journal API and claims a Square execution slot to either reuse a previously stored Square service ID or create the service in Square Catalog using an idempotency key.
5. Persists the Square service ID to the companion journal, reads the saved Square catalog object back from the Square API, and records whether the returned fields match the approved plan.
6. Claims a Wix execution slot to either reuse a previously stored Wix service ID or create the service in the Wix Bookings Services API, then persists the Wix service ID.
7. Reads the saved Wix service back from Wix, verifies it matches the approved plan, retrieves the combined two-provider result from the companion journal, and displays a completion message with each provider’s verification status.

## Setup
1. Download and run the included companion journal service (run the “Export setup files” path to get companion.zip), then set the workflow’s automationBaseUrl to your running companion service URL.
2. Create HTTP Header Auth credentials in n8n for the companion journal API, the Square API (sandbox and/or production), and the Wix API, and select them in the workflow’s HTTP Request nodes.
3. Fill in destination IDs in the configuration step: Square environment (sandbox/production), Square location ID and team member ID, plus Wix site ID, category ID, staff resource ID, and business location ID.
4. Ensure Square Appointments and Wix Bookings are already configured with the relevant staff/resources, working hours, and locations so the created services can be bookable.
5. Run the synthetic demo first to review the mapped payloads, then submit your own canonical product JSON through the form and approve it to publish to Square and Wix.

## Requirements
- Self-hosted companion journal (complete source, README and license embedded in Export setup files), Python 3.11+, Square Appointments with Catalog API access, and a Wix site with Wix Bookings and API access. Configure Square staff and location, Wix category, staff resource and business location, working hours and published booking sites beforehand. Use separate Header Auth credentials for each provider and the journal.

## Customization
- Adjust the canonical service title, plain-text description, fixed price, supported currency and duration. This template supports new one-to-one appointment services with capacity 1. Square defaults to sandbox. Other booking SaaS can replace the request and readback adapters while retaining operator approval, independent claims, stored provider IDs and the documented canonical-product contract.

## Additional info
This workflow registers new appointment services; it does not create customer bookings, collect payments, synchronize availability or update existing products automatically. Taxes, fees, working hours and site layout are configured separately. Identical plans reuse stored service IDs. Changed content under the same key stops for reconciliation. Partial success is retained; uncertain creates are never blindly retried. Persisted IDs and API readback do not prove customer-facing visibility. Local n8n validation used synthetic input and mock provider APIs; real Square/Wix authentication, live service creation and customer-facing booking-site visibility were not tested. Full companion source and setup instructions are included in the workflow JSON and downloadable from Export setup files. No credentials, personal information or real account IDs are included.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
