# 🧾 Parse invoice XML files and update sales opportunities in GoHighLevel

> ⚡ **5 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives a posted invoice XML file via webhook, parses it into JSON, and for each invoice searches and updates a matching GoHighLevel (LeadConnector) opportunity with invoiced amount, pipeline stage, and custom field values.

## How it works
1. Receives a POST request to an n8n webhook containing a binary invoice XML file.
2. Extracts and decodes the XML content from the uploaded binary file.
3. Converts the raw XML string into a structured JSON object.
4. Iterates through each invoice record in the parsed payload.
5. Calls the GoHighLevel (LeadConnector) Opportunities Search API to find an opportunity by order reference (configured as a test query).
6. Updates the matched GoHighLevel opportunity with monetary value, pipeline and stage IDs, and custom fields such as invoiced amount and transaction date.

## Setup
1. Configure the source system (warehouse ERP or middleware) to POST the invoice XML file to the webhook URL for the `invoice-webhook` path.
2. Add your GoHighLevel (LeadConnector) Private Integration token and replace `YOUR_GHL_API_TOKEN` in both HTTP requests.
3. Replace `YOUR_GHL_LOCATION_ID`, `YOUR_GHL_PIPELINE_ID`, `YOUR_GHL_PIPELINE_STAGE_ID`, and the three custom field IDs in the update request body.
4. Update the opportunity search payload to use the real order reference from the parsed invoice instead of the placeholder `YOUR_TEST_ORDER_REF`.
5. Send a sample XML invoice to the webhook to verify parsing and updates, then activate the workflow.

## 🔗 Nodes Used

HTTP Request, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
