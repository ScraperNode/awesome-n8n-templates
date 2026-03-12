# 🤝 Fetch Odoo customer data and export to JSON or Excel

> ⚡ **651 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Odoo Customers API – Export to JSON or Excel

Odoo Customers API – Export to JSON or Excel provides a simple way to fetch customer records from your Odoo database and get them back either as a structured JSON response or a downloadable Excel (.xlsx) file.

## ⚙️ What it does
- Listens for HTTP `GET` requests on the endpoint `/api/v1/get-customers`.
- Checks for the required `name` parameter and builds a search filter automatically.
- Queries the `res.partner` model to return only customer contacts (`is_company = false`).
- Delivers results in JSON by default, or as an Excel (.xlsx) export when `response_format=excel` is included.

## 📥 Parameters

- `name` — Required. Used for partial matching on customer names (via Odoo’s `Like` filter).
- `response_format` — Optional. Accepts `json` (default) or `excel`.


## 🔗 Examples
##### Excel Example
`GET /api/v1/get-customers?name=Demo&response_format=excel`
##### JSON Example
`GET /api/v1/get-customers?name=Demo&response_format=json`

## 🧩 Default fields
`display_name, name, email, phone, mobile, parent_id, company_id, country_code, country_id`

## 🛠️ Setup
- Open the Odoo node and connect your Odoo API credentials.
- Adjust the fieldsList in the node if you want to include more data fields (e.g., address, city, or VAT).
- Trigger the flow from its webhook URL or run it manually inside n8n to test the output.

## 💡 Notes
- Built and tested for n8n v1.108.2+

## 🔗 Nodes Used

Function, Webhook, Odoo, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
