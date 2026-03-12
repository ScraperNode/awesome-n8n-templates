# ⚒️ Avoid rate limiting by batching HTTP requests

> ⚡ **4,497 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates the use of the Split In Batches node and the Wait node to avoid API rate limits.

**Customer Datastore node:** The workflow fetches data from the Customer Datastore node. Based on your use case, replace it with a relevant node.

**Split In Batches node:** This node splits the items into a single item. Based on the API limit, you can configure the Batch Size.

**HTTP Request node:** This node makes API calls to a placeholder URL. If the Split In Batches node returns 5 items, the HTTP Request node will make 5 different API calls.

**Wait node:** This node will pause the workflow for the time you specify. On resume, the Split In Batches node gets executed node, and the next batch is processed.

**Replace Me (NoOp node):** This node is optional. If you want to continue your workflow and process the items, replace this node with the corresponding node(s).

## 🔗 Nodes Used

HTTP Request, Start, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
