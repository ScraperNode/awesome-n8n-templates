# 🤝 Send SAP XML sales orders from GoHighLevel to a warehouse via Make.com SFTP

> ⚡ **21 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives GoHighLevel (LeadConnector) opportunity webhooks, pulls the opportunity’s related product records via the LeadConnector API, builds an SAP-style sales order XML file with product SAP codes and quantities, and sends the XML to a Make.com webhook that uploads it to a warehouse system via SFTP.

## How it works
1. Receives a POST webhook from GoHighLevel containing an `opportunity_id`.
2. Calls the LeadConnector API to fetch the opportunity details and then fetches the opportunity’s association relations.
3. Splits the relations into individual records, filters out non-product relations, and retrieves full details for each associated opportunity product record from LeadConnector.
4. Builds an SAP sales order XML document using the opportunity ID as the order number and adds one sales line per product that has both an SAP code and a quantity.
5. Converts the XML text into a binary file and posts it to a Make.com webhook for SFTP delivery to the warehouse/ERP.

## Setup
1. Configure your GoHighLevel workflow/automation to send a POST request to this n8n webhook URL and include `opportunity_id` in the request body.
2. Add your LeadConnector (GoHighLevel) API token to the Authorization header in all three LeadConnector HTTP requests and set the required `locationId` query parameter.
3. Update the SAP placeholders in the XML builder step (`YOUR_SAP_CUSTOMER_NUMBER`, `YOUR_SAP_COMPANY_CODE`, `YOUR_SAP_PARTNER_ID`) to match your SAP configuration.
4. Create a Make.com scenario that accepts the incoming binary file via webhook and uploads it to your warehouse SFTP server, then replace `YOUR_MAKE_SCENARIO_WEBHOOK_ID` in the Make.com webhook URL.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
