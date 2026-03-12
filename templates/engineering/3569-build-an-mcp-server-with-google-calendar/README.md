# ⚒️ Build an MCP server with Google Calendar

> ⚡ **5,461 views** · ⚒️ [Engineering](../)

## Description

### Who is this for?
This template is designed for anyone who wants to integrate MCP with their AI Agents. Whether you're a developer, a data analyst, or an automation enthusiast, if you're looking to leverage the power of MCP and Google Calendar in your n8n workflows, this template is for you.

### What problem is this workflow solving?
This template caters to MCP beginners seeking a hands - on example and developers looking to integrate Google Calendar MCP service. When integrating MCP with Google Calendar, manually updating AI Agents after changes to Google Calendar tools on the MCP Server is time - consuming and error - prone. 

This template automates the process, enabling the AI Agent to instantly recognize changes made to Google Calendar on the MCP Server. In project management, for example, it ensures that task schedule updates in Google Calendar are automatically detected by the AI Agent. With detailed steps, it simplifies the integration process for all users. 

### What this workflow does
This workflow focuses on integrating MCP with Google Calendar within n8n. Specifically, it allows you to build an MCP Server and Client using Google Calendar nodes in n8n. Any changes made to the Google Calendar tools on the MCP Server are automatically recognized by the MCP Client in the workflow. This means that you can make changes to your Google Calendar (such as adding, deleting, or modifying events) on the MCP Server, and the MCP Client in the n8n workflow will immediately detect these changes without any manual intervention.

### Setup
#### Requirements
- An active n8n account.
- Access to Google Calendar API. You need to  enable the Google Calendar API, and create the necessary credentials (OAuth 2.0 client ID).
- Basic knowledge of n8n workflows and MCP concepts.

#### Step - by - step guide
1. **Create a new workflow in n8n**: Log in to your n8n account and create a new workflow.
2. **Add Google Calendar nodes**: Search for and add the Google Calendar nodes to your workflow. Configure the nodes with your Google Calendar API credentials.
3. **Set up the MCP Server and Client**: Use the appropriate nodes in n8n to set up the MCP Server and Client. Connect the Google Calendar nodes to the MCP nodes as required.
4. **Test the workflow**: Make some changes to your Google Calendar on the MCP Server and check if the MCP Client in the n8n workflow can detect these changes.

### How to customize this workflow to your needs
If you want to customize this workflow, you can:
- **Modify the triggers**: You can change the conditions under which the MCP Client detects changes. For example, you can set it to detect only specific types of events in Google Calendar.
- **Integrate with other services**: You can add more nodes to the workflow to integrate with other services, such as sending notifications to Slack or saving data to a database when a change is detected.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
