# 🤝 Build a Pipedrive MCP server with Google Gemini AI

> ⚡ **1,492 views** · 🤝 [CRM & Sales Operations](../)

## Description

This n8n workflow leverages the power of AI and automation to streamline Pipedrive's CRM operations using natural language commands. It allows you to interact with your Deals, Leads, Persons, and Organizations simply by sending a message.

### How it Works
The workflow initiates the process by sending the incoming message to an AI Agent. The AI Agent is powered by Google Gemini Chat Model and utilizing n8n's Simple Memory to maintain context, interprets the natural language command. Based on the interpreted command, the AI Agent instructs the MCP Client node to perform specific actions. The MCP Client then interacts with various nodes from Pipedrive designed to manage Deals, Leads, Persons, and Organizations within your CRM. These nodes can perform actions like creating, getting, updating, or searching for data in each category. Finally, a Gmail node sends a summary  compiling the actions executed.

### Set Up Steps
- **Set up your MCP Client:** Paste the MCP URL from your MCP Trigger node into the MCP Client node.
- **Configure the AI Agent:** Connect your Google Gemini Chat Model credentials or your desired LLM.
- **Configure [Pipedrive](https://aff.trypipedrive.com/gfq51z688ekq):** The individual nodes for Deals, Leads, Persons, and Organizations will need to be connected to your specific CRM. Add your Oath credentials for Pipedrive by creating a private app.
- **Configuring each specific node** (Create Deal, Get Lead, Update Person, Search Organization, etc.) to perform the desired action.
- **Configure Send Summary:** Set up the Gmail node to send the summary email.

### Benefits
- **Significant Time Saving:** Automates data entry, retrieval, and updates in your CRM, freeing up valuable time for sales teams and managers.
- **Increased Efficiency:** Perform multiple CRM actions with a single natural language command.
- **Simplified CRM Interaction:** Interact with your CRM using natural language instead of navigating complex interfaces.
- **Reduced Errors:** Automation minimizes manual data entry errors.

### Suggested Enhancements
- **Integrate More CRM Operations:** Add nodes for additional CRM functionalities like logging activities, managing tasks, or working with other modules and tools.
- **Connect to Other Tools:** Integrate with other sales or marketing tools to create a more comprehensive workflow.
- **Advanced AI Capabilities:** Explore fine-tuning the AI model for better understanding of specific industry jargon or complex requests. Should you add more nodes and tools, you might want to insert a specific prompt to the AI agent to give more context about the tools and actions to perform.
- **User Management and Permissions:** Customize the private app's permissions on your Pipedrive account to limit access.
- **Error Handling and Notifications:** Add more robust error handling and notification systems to be alerted if a workflow run fails.

### Need help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 🔗 Nodes Used

Telegram Trigger, Gmail, AI Agent, Simple Memory, Google Gemini Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
