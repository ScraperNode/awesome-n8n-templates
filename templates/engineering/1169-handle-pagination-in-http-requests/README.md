# ⚒️ Handle pagination in HTTP requests

> ⚡ **13,252 views** · ⚒️ [Engineering](../)

## Description

This example workflow demonstrates how to handle pagination. 

This example assumes that the API you are making the request to has pagination, and returns a cursor (something that points to the next page).

This example workflow makes a request to the HubSpot API to fetch contacts. You will have to modify the parameters based on your API.

![workflow-screenshot](fileId:520)

**Config URL node:** This node sets the URL that the HTTP Request node calls.

**HTTP Request node:** This node makes the API call and returns the data from the API. Based on your API, you will have to modify the parameters of the node.

**NoOp node and Wait node:** These nodes help me avoiding any rate limits. If you're API has rate limits, make sure you configure the correct time in the Wait node.

**Check if pagination:** This IF node checks if the API returns any cursor. If the API doesn't return any cursor, it means that there is no data to be fetched, and the node returns false. If the API returns a cursor, it means that there is still some data that needs to be fetched. In this case, the node returns true.

**Set next URL:** This Set node is used to set the URL. In the next cycle, the HTTP Request node makes a call to this URL.

**Combine all data:** This node combines all the data that gets returned by the API calls from the HTTP Request node.

## 🔗 Nodes Used

Function, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
