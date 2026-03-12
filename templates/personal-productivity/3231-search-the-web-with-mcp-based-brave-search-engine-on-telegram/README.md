# ⚡ Search the web with MCP-based Brave Search Engine on Telegram

> ⚡ **8,002 views** · ⚡ [Personal Productivity](../)

## Description

This workflow enables users to perform web searches directly from Telegram using the Brave search engine. By simply sending the command /brave followed by a query, the workflow retrieves search results from Brave and returns them as a Telegram message.

This workflow is ideal for users who want a quick and private way to search the web without switching between apps. 🚀

This workflow is a powerful tool for automating interactions with Brave tools through Telegram, providing users with quick and easy access to information directly in their chat.

Below is a breakdown of the workflow:

---

#### **1. How It Works**
The workflow is designed to process user queries from Telegram, execute a Brave tool via the MCP Client, and send the results back to the user. Here's how it works:

1. **Telegram Trigger**:
   - The workflow starts with the **Telegram Trigger** node, which listens for new messages in a Telegram chat.
   - When a message is received, the workflow checks if it starts with the command `/brave`.

2. **Filter Messages**:
   - The **If** node filters messages that start with `/brave`. If the message doesn't start with `/brave`, the workflow stops.

3. **Edit Fields**:
   - The **Edit Fields** node extracts the text of the message for further processing.

4. **Clean Query**:
   - The **Clean Query** node removes the `/brave` command from the message, leaving only the user's query.

5. **List Brave Tools**:
   - The **List Brave Tools** node retrieves the list of available tools from the MCP Client.

6. **Execute Brave Tool**:
   - The **Exec Brave Tool** node executes the first tool in the list using the cleaned query as input.

7. **Send Message**:
   - The **Send Message** node sends the result of the Brave tool execution back to the user in the Telegram chat.

---

#### **2. Preliminary Steps**
- Access to an n8n self-hosted instance and install the Community node "n8n-nodes-mcp". Please see this [easy guide](https://github.com/nerding-io/n8n-nodes-mcp)
- Get your Brave Search API Key: https://brave.com/search/api/
- Telegram Bot Access Token

In "List Brave Tools" create new credential as shown in  this image
![image](https://github.com/nerding-io/n8n-nodes-mcp/raw/main/assets/credentials-envs.png)

In Environment field set this value:
BRAVE_API_KEY=your-api-key

---


#### **3. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **Telegram Configuration**:
   - Set up **Telegram** credentials in n8n for the **Telegram Trigger** and **Send Message** nodes.
   - Ensure the Telegram bot is authorized to read messages and send responses in the chat.

2. **MCP Client Configuration**:
   - Set up **MCP Client** credentials in n8n for the **List Brave Tools** and **Exec Brave Tool** nodes.
   - Ensure the MCP Client is configured to interact with Brave tools.

3. **Test the Workflow**:
   - Send a message starting with `/brave` followed by a query (e.g., `/brave search for AI tools`) to the Telegram chat.
   - The workflow will:
     - Process the query.
     - Execute the Brave tool via the MCP Client.
     - Send the result back to the Telegram chat.

4. **Optional Customization**:
   - Modify the workflow to include additional features, such as:
     - Adding more commands or tools.
     - Integrating with other APIs or services for advanced use cases.
     - Sending notifications via other channels (e.g., email, Slack)

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
