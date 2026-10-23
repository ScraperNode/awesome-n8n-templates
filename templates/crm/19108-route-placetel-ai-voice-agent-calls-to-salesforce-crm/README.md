# 🤝 Route Placetel AI Voice Agent calls to Salesforce CRM

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow exposes a secured webhook for a Placetel AI Voice Agent and routes each request to Salesforce to either look up an existing contact by phone, create a callback task, open a case, update a contact via REST PATCH, or create a new lead, then returns a JSON response.

## How it works
1. Receives a POST webhook request from Placetel AI and reads the `vorgang` field in the request body to determine the requested operation.
2. For `bestandskunde_pruefen`, normalizes the phone number, searches Salesforce Contacts by Phone/MobilePhone, and returns whether a matching customer was found along with contact details.
3. For `rueckruf_erfassen`, creates a high-priority Salesforce Task with the caller details and preferred callback time, then returns a success response with the task ID.
4. For `ticket_anlegen`, creates a Salesforce Case with the provided subject, description, and priority, then returns a success response with the case ID.
5. For `kontakt_aktualisieren`, builds a field map from only the provided values and sends a Salesforce REST API PATCH request to update the Contact, then returns a success response.
6. For `lead_anlegen`, creates a Salesforce Lead using the supplied name/company/phone/email and returns a success response with the lead ID.
7. If `vorgang` is not recognized, returns an HTTP 400 error with the list of allowed operations.

## Setup
1. Add a Salesforce OAuth2 connection and select it for the Salesforce nodes and the REST API request that updates Contacts.
2. Replace `https://YOUR_INSTANCE.my.salesforce.com` in the contact update request URL with your Salesforce My Domain.
3. Configure the webhook header authentication credential (for example, a shared token header) and set the same header in Placetel AI.
4. Copy the webhook URL from n8n and configure Placetel AI to call it via POST while sending the required `vorgang` and corresponding fields in the JSON body.

## 🔗 Nodes Used

HTTP Request, Webhook, Salesforce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
