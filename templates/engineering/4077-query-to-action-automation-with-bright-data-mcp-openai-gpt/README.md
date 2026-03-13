# ⚒️ Query-to-action automation with Bright Data MCP & OpenAI GPT

> ⚡ **823 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 📌 **AI Agent Template with Bright Data MCP Tool Integration**

This template obtains all the possible tools from Bright Data MCP, process this through chatbot, then run any tool based on the user's query

---

### ❓ Problem It Solves

The problem that the MCP solves is the complexity and difficulty of traditional automation, where users need to have specific knowledge of APIs or interfaces to trigger backend processes. By allowing interaction through natural language, automatically classifying and routing queries, and managing context and memory effectively, MCP simplifies complex data operations, customer support, and workflow orchestration scenarios where inputs and responses change dynamically.

---

### 🧰 Pre-requisites

Before deploying this template, ensure you have:

* An active **n8n** instance (self-hosted or cloud).
* A valid **OpenAI API key** (or any AI models)
* Access to **Bright Data MCP API** with credentials.
* Basic familiarity with n8n workflows and nodes.

---

### ⚙️ Setup Instructions

1. **Install the MCP Community Node in N8N

   * In your N8N self-hosted instance, go to **Settings → Community Nodes**.
   * Search and install `n8n-nodes-mcp`.

2. **Configure Credentials:**

   * Add your OpenAI API key or any AI mdeols to the relevant nodes. If you want other AI model, please replace all associated nodes of OpenAI in the workflow
   * Set up Bright Data MCP client credentials in the installed community node (STDIO)
   * Obtain your API in Bright Data and put it in Environment field in the credentials window. It should be written as API_Key=&lt;your api key from Bright Data&gt;
![Screenshot 20250516 at 1.52.24 AM.png](fileId:1314)


---

### 🔄 Workflow Functionality (Summary)

* **User message** triggers the workflow.
* **AI Classifier** (OpenAI) interprets the intent and maps it to a tool from Bright Data MCP.
* If no match is found, the user is notified.
* If more information is needed, the AI requests it.
* **Memory** preserves context for follow-up actions.
* The tool is executed, and results are returned contextually to the user.

&gt; 🧠 *Optional memory buffer and chat memory manager nodes keep conversations context-aware across multiple messages.*

---

### 🧩 Use Cases

* **Data Scraping Automation**: Trigger scraping tasks via chat.
* **Lead Generation Bots**: Use MCP tools to fetch, enrich, or validate data.
* **Customer Support Agents**: Automatically classify and respond to queries with tool-backed answers.
* **Internal Workflow Agents**: Let team members trigger backend jobs (e.g., reports, lookups) by chatting naturally.

---

### 🛠️ Customization

* **Tool Matching Logic**: Modify the AI classifier prompt and schema to suit different APIs or services.
* **Memory Size and Retention**: Adjust memory buffer size and filtering to fit your app’s complexity.
* **Tool Execution**: Extend the `"Execute the tool"` sub-workflow to handle additional actions, fallback strategies, or logging.
* **Frontend Integration**: Connect this with various platforms (e.g., WhatsApp, Slack, web chatbots) using the webhook.

---

### ✅ Summary

This template delivers a powerful no-code/low-code agent that turns chat into automation, combining AI intelligence with real-world tool execution. With minimal setup, you can build contextual, dynamic assistants that drive backend operations using natural language.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Memory Manager

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
