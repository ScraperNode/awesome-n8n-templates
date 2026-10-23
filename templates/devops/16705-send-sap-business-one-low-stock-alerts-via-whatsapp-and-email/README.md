# ⚙️ Send SAP Business One low stock alerts via WhatsApp and email

> ⚡ **106 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow polls SAP Business One every 6 hours for active, unfrozen items whose on-hand quantity is below the minimum inventory level, then sends de-duplicated low-stock alerts via WhatsApp (Meta API) and email, storing the last-alerted quantity in an n8n Data Table to prevent repeated notifications.

## How it works
1. Runs every 6 hours on a schedule.
2. Logs in to SAP Business One Service Layer and queries the Items endpoint for valid, non-frozen items where QuantityOnStock is less than MinInventoryQuantity.
3. Splits the SAP response into one item per record and skips the alert flow if no items are returned.
4. Looks up each item’s previous alert state in an n8n Data Table and only continues if the item has never been alerted before or its stock has dropped further since the last alert.
5. Formats a WhatsApp message and an HTML email (including an “out of stock” message when QuantityOnStock is 0).
6. Sends the alert via the WhatsApp Business Cloud API (Meta Graph API) and via SMTP email, then upserts the latest alerted quantity to the Data Table.
7. Logs out of SAP Business One.

## Setup
1. Configure SAP Business One Service Layer access by updating the server URL in the SAP login, item query, and logout HTTP requests, and set CompanyDB, UserName, and Password.
2. Create or select an n8n Data Table with fields for itemCode and lastAlertedQty, and update the Data Table ID used for the look-up and upsert steps.
3. Add a WhatsApp Graph API token (HTTP Header Auth with `Authorization: Bearer <token>`), then set your WhatsApp Phone Number ID in the Graph URL and update the recipient phone number in the request body.
4. Add an SMTP credential for sending email and set the From and To email addresses used for the alerts.
5. (Optional) Adjust the schedule interval and the SAP OData query parameters (e.g., $top, $orderby, or filter) to match your inventory monitoring needs.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
