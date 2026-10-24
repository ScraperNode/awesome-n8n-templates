# 🤝 Send SAP Business One order and invoice alerts via WhatsApp Cloud API

> ⚡ **98 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow polls SAP Business One every 15 minutes for newly updated Sales Orders and AR Invoices and sends a formatted alert for each document via the WhatsApp Cloud API, using an n8n Data Table timestamp to prevent duplicate notifications between runs.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads the last-checked timestamp from an n8n Data Table and falls back to 15 minutes ago if no value exists.
3. Logs in to the SAP Business One Service Layer and queries the Orders and Invoices OData endpoints for documents updated after the last-checked date.
4. Normalizes the returned records, labels each one as a Sales Order or AR Invoice, and combines them into a single stream.
5. For each new document found, formats a WhatsApp text message with key fields like document number, date, customer, total, currency, and comments.
6. Sends the message through the WhatsApp Cloud API (Meta Graph) and then logs out of SAP Business One.
7. Upserts the current timestamp back into the Data Table so the next run only alerts on newer documents.

## Setup
1. Provide your SAP Business One Service Layer URL and credentials (CompanyDB, UserName, Password) in the SAP login request and ensure the Orders/Invoices URLs point to your server.
2. Create a WhatsApp Cloud API bearer-token credential (HTTP Header Auth) and replace YOUR_PHONE_NUMBER_ID plus the recipient phone number used for alerts.
3. Create or select an n8n Data Table with columns for configKey and lastCheckedAt, and update the Data Table ID used to store sap_b1_alert_last_checked.
4. Adjust the polling interval and the OData query settings (for example $top and the entity paths /Orders and /Invoices) to match your expected volume and document types.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
