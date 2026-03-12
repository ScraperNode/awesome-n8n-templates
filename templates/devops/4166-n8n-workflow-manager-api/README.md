# ⚙️ n8n workflow manager API

> ⚡ **1,059 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow provides a secure API endpoint to remotely trigger other n8n workflows with custom data and to retrieve information about your existing workflows. It's perfect for users who want to integrate n8n into external systems or programmatically manage their automations.

_example usage: I use this workflow in a Raycast extension i have build, to execute n8n workflows from within Raycast: [see Github](https://github.com/jwa91/n8n-manager-raycast)_

++**How it works**++
1.  **Receives API Calls:** A webhook listens for incoming HTTP requests (e.g., POST to trigger, GET to retrieve info).
2.  **Triggers Workflows:** If the request is to trigger a workflow, it dynamically identifies the target workflow ID (from query parameters) and any input data (from the request body), then executes that workflow. This means you can control any of your workflows without modifying this manager template.
3.  **Retrieves Workflow Info:** Similarly, if the request is to get information, it dynamically uses query parameters (`workflowId`, `mode`, `includedWorkflows`) to fetch details about one or more n8n workflows (e.g., specific, all, active, inactive; full or summarized data).
4.  **Responds:** Sends back a JSON response indicating success/failure or the requested workflow data.

++**Set it up**++
1.  **Configure Webhook Security:** Set up "Header Auth" credentials for the main Webhook node. This is the API key your external services will use.
2.  **Add n8n API Credentials:** For the nodes that fetch workflow information (like "Get specific workflowid", "get all active workflows", etc.), connect your n8n API credentials. This allows the workflow to query your n8n instance.
3.  **Note Your Webhook URL:** Once active, n8n provides a production URL for the webhook (path: `workflow-manager`). Use this URL to make API calls.
4.  **Understand API Parameters:**
    * To trigger: Use `?workflowId=[ID_OF_WORKFLOW_TO_RUN]` and send JSON data in the request body.
    * To get info: Use parameters like `?workflowId=[ID]`, `?includedWorkflows=[all/active/inactive]`, and `?mode=[full/summary]`.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
