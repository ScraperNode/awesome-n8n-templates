# ⚒️ Build an MCP server with Airtable

> ⚡ **8,260 views** · ⚒️ [Engineering](../)

## Description

### Who is this for?
This template is designed for anyone who wants to integrate MCP with their AI Agents using Airtable. Whether you're a developer, a data analyst, or an automation enthusiast, if you're looking to leverage the power of MCP and Airtable in your n8n workflows, this template is for you.

### What problem is this workflow solving?
This template caters to MCP beginners seeking a hands-on example and developers looking to integrate Airtable MCP service. When integrating MCP with Airtable, manually updating AI Agents after changes to Airtable data on the MCP Server is time-consuming and error-prone.

This template automates the process, enabling the AI Agent to instantly recognize changes made to Airtable on the MCP Server. In data management, for example, it ensures that record updates or additions in Airtable are automatically detected by the AI Agent. With detailed steps, it simplifies the integration process for all users.

### What this workflow does
This workflow focuses on integrating MCP with Airtable within n8n. Specifically, it allows you to build an MCP Server and Client using Airtable nodes in n8n. Any changes made to the Airtable Base/Table on the MCP Server are automatically recognized by the MCP Client in the workflow. This means that you can make changes to your Airtable (such as adding, deleting, or modifying records) on the MCP Server, and the MCP Client in the n8n workflow will immediately detect these changes without any manual intervention.

### Setup

#### Requirements
An active n8n account.
Access to Airtable API.
A sample base and rows in Airtable that you can use to test.
An API key from your preferred LLM to power the AI agent.

#### Step-by-step guide
1.  **Create a new workflow in n8n:** Log in to your n8n account and create a new workflow.
2.  **Add Airtable nodes:** Search for and add the Airtable nodes to your workflow that you wish the MCP client to have access to.
3.  **Set up the MCP Server and Client:** Use the appropriate nodes in n8n to set up the MCP Server and Client. Connect the Airtable nodes to the MCP nodes as required.
4.  **Activate and test the workflow:** Talk to the chat trigger once all credentials have been updated and table data synced and try adding some rows, deleting or finding and updating cells.

### How to customize this workflow to your needs
If you want to customize this workflow, you can:
* **Modify the triggers:** You can change the conditions under which the MCP Client detects changes. For example, you can set it to detect changes only in specific fields or based on certain record values in Airtable.
* **Integrate with other services:** You can add more nodes to the workflow to integrate with other services, such as sending notifications to Slack or triggering further actions based on the detected Airtable changes.

---

### Need help?

Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
