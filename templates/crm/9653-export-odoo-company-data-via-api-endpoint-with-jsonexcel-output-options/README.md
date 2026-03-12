# 🤝 Export Odoo company data via API endpoint with JSON/Excel output options

> ⚡ **533 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow provides an API endpoint `/api/v1/get-companies` that retrieves company records directly from your Odoo database. It’s built for teams who need to query or export company data — either as structured JSON for integrations or as Excel (.xlsx) for reporting.

When a request is made, the workflow:
1. Accepts query parameters (`name`, `response_format`).
2. Validates the name input (required for company search).
3. Fetches all matching companies from Odoo using a `like` filter for partial name matches.
4. Returns results as a JSON response or Excel file depending on the `response_format` parameter.

This makes it ideal for quickly exporting or syncing company information with other tools.



## Setup steps
1. Open the Webhook node and note the endpoint `/api/v1/get-companies`.
2. Connect your Odoo API credentials in the Odoo node.
3. Optionally update the `fieldsList` in the Odoo node to include more company details (VAT, address, etc.).
4. Test using a browser or Postman:  
   - `/api/v1/get-companies?name=Tech&response_format=json`  
   - `/api/v1/get-companies?name=Tech&response_format=excel`

## 🔗 Nodes Used

Function, Webhook, Odoo, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
