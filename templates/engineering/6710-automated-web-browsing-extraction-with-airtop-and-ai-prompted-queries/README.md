# ⚒️ Automated web browsing & extraction with Airtop and AI-prompted queries

> ⚡ **1,131 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# 🤖 Autonomous Web Interaction with Airtop (via MCP Trigger)

This workflow uses **Airtop** to perform fully automated web interactions—triggered by an AI agent through the **native MCP Server Trigger** in n8n.

&gt; 💡 Perfect for browser automation, intelligent data extraction, and agent-based workflows.

---

## ✨ Features

* ✅ Triggered via **native MCP Server** (no need for external LangChain services)
* 🚀 Automates full browser sessions: open window, load page, scroll, click, fill forms
* 🧠 Supports **AI-prompt-based extraction** from web content
* 📷 Captures screenshots and **waits for downloads** when needed
* 🧼 Cleans up with session and window termination
* 🔄 Fully adaptable to agent-based automation flows

---

## 🧰 Workflow Breakdown

1. **Trigger**: Native MCP Server Trigger receives instructions
2. **Create Session & Window**: Starts browser automation in Airtop
3. **Load Web Page**: Loads target URL
4. **Page Interaction**:

   * Click elements
   * Scroll inside containers
   * Fill forms with dynamic data
5. **Extract Content**:

   * Query using prompts
   * Paginated extraction
6. **Wait & Capture**:

   * Waits for downloadable content
   * Takes a screenshot
7. **Cleanup**:

   * Closes windows and terminates session

---

## 📦 Requirements

* ✅ **n8n 1.90+** with [MCP Server Trigger](https://docs.n8n.io/integrations/builtin/mcp/)
* ✅ Active **Airtop account** with API credentials
* ✅ Installed `Airtop Tool` node (n8n-nodes-base)
* 🧠 External agent (optional) to send prompt/data to MCP endpoint

---

## 🔍 Use Cases

* 🤖 Agents that browse and extract data from the web
* 📝 Fill and submit forms from structured data
* 🔎 Intelligent page querying using prompt-based automation
* 🧪 Visual testing and screenshot capturing for QA workflows

---

## 🔧 Nodes Used

* `MCP Server Trigger` (native)
* `Airtop Tool`(native):

  * Session creation and termination
  * Window control (open, close, screenshot)
  * Interaction (click, scroll, fill)
  * Extraction (query, pagination)
  * Download waiters

---

## 🧠 AI-Automation Ready

This workflow is designed to be controlled by external AI agents or orchestration tools. Combined with prompt-based querying and DOM control, it brings a human-like browsing experience into automated pipelines.

---

## 🔗 License

Open-source under MIT. Commercial usage allowed with attribution.

---

Let me know if you'd like to add:

* 🧪 A **test mcp client** to validate triggers
* 🌐 A **public link to the deployed workflow**
* 📎 A **JSON download** for users to import directly

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
