# ⚒️ Demo workflow - how to use workflowStaticData()

> ⚡ **11,729 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates how to use the `workflowStaticData()` function to set any type of variable that will persist within workflow executions. 

[https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/](https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/)

This can be useful for example when working with access tokens that expire after a certain time period. Using `staticData` we can keep a record of that access token and the expiry time and build our workflow logic around it. 


## Important

Static Data only persists across **_production_** executions, i.e. triggered by Webhooks or Schedule Triggers (not manual executions!)
For this the workflow will have to be activated. 

## Setup

- configure HTTP Request node to fetch access token from your API (optional)
- activate workflow
- test the workflow with the webhook production link
- you can check the population of the static data in the single executions

### Feedback

If you found this useful or want to report some missing information - I'd be happy to hear from you at [ria@n8n.io](mailto:ria@n8n.io)

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
