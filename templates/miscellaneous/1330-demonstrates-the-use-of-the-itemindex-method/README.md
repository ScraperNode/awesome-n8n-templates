# 🔧 Demonstrates the use of the $item(index) method

> ⚡ **2,055 views** · 🔧 [Miscellaneous](../)

## Description

This workflow demonstrates the use of the `$item(index)` method. This method is useful when you want to reference an item at a particular index.

This example workflow makes POST HTTP requests to a dummy URL.

![workflow-screenshot](fileId:566)

**Set node:** This node is used to set the API key that will be used in the workflow later. This node returns a single item. This node can be replaced with other nodes, based on the use case.

**Customer Datastore node:** This node returns the data of customers that will be sent in the body of the HTTP request. This node returns 5 items. This node can be replaced with other nodes, based on the use case.

**HTTP Request node:** This node uses the information from both the Set node and the Customer Datastore node. Since, the node will run 5 times, once for each item of the Customer Datastore node, you need to reference the API Key 5 times. However, the Set node returns the API Key only once. Using the expression `{{ $item(0).$node["Set"].json["apiKey"] }}` you tell n8n to use the same API Key for all the 5 requests.

## 🔗 Nodes Used

HTTP Request, Start, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
