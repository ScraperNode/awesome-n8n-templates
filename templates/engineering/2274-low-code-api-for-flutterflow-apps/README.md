# ⚒️ Low-code API for Flutterflow apps

> ⚡ **4,067 views** · ⚒️ [Engineering](../)

## Description

- Flow Start: The flow starts upon receiving an HTTP GET call.
- Webhook: Receives the HTTP GET call and triggers the flow.
- Database: Connects to the database (Customer Datastore) to retrieve all necessary information (getAllPeople).
- Data Processing:
- Variable Insertion: The retrieved data is inserted into a variable.
- Variable Aggregation: The variables are aggregated and prepared for use in FlutterFlow.
- Webhook Response: Sends the response back through the Webhook with the processed data ready for use in FlutterFlow.

## 🔗 Nodes Used

Webhook, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
