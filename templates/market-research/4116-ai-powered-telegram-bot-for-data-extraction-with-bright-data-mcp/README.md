# 📊 AI-powered Telegram bot for data extraction with Bright Data MCP

> ⚡ **1,726 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

![IMG_0889.jpeg](fileId:1341)

## 📌 **AI Agent Template with Bright Data MCP Tool Integration**

This template enables natural-language-driven automation using Bright Data MCP tools. It extracts all available tools from MCP, processes the user’s query through an AI agent, then dynamically selects and executes the appropriate tool.

---

### ❓ Problem It Solves

Traditional automation often requires users to understand APIs, interfaces, or scripts to perform backend tasks. The Bright Data MCP integration solves this by allowing natural language interaction, intelligently classifying user intent, and managing context-aware execution of complex operations—ideal for data extraction, customer support, and workflow orchestration.

---

### 🧰 Pre-requisites

Before deploying this template, make sure you have:

* An active **N8N** instance (self-hosted or cloud).
* A valid **OpenRouter API key** (or another compatible AI model).
* Telegram bot and its API token
* Access to the **Bright Data MCP API** with credentials.
* Basic familiarity with N8N workflows and nodes.

---

### ⚙️ Setup Instructions

1. #### Setup and obtain API token and other necessary information from Bright Data

   In your Bright Data account, obtain the following information:
   - API token
   - Web Unlocker zone name (optional)
   - Browser Zone name (optional)
   

2. #### Host SSE server from STDIO command
   The methods below will allow you to receive SSE (Server-Sent Events) from Bright Data MCP via a local Supergateway or Smithery

   ******

   ***Method 1: Run Supergateway in a separate web service (Recommended)***

   This method will work for both cloud version and self-hosted N8N.

   Signup to any cloud services of your choice (DigitalOcean, Heroku, Hetzner, Render, etc.).

   ##### For NPM based installation:

   - Create a new web service.
   - Choose Node.js as runtime environment and setup a custom server without repository.
   - In your server’s settings to define environment variables or .env file, add:
`API_TOKEN=your_brightdata_api_token
WEB_UNLOCKER_ZONE=optional_zone_name
BROWSER_ZONE=optional_browser_zone_name`
   - Paste the following text as a start command: `npx -y supergateway --stdio "npx -y @brightdata/mcp" --port 8000 --baseUrl http://localhost:8000 --ssePath /sse --messagePath /message`
   - Deploy it and copy the web server URL, then append `/sse` into it.
   - Your SSE server should now be accessible at: `https://your_server_url/sse`

   ##### For Docker based installation:
   - Create a new web service.
   - Choose Docker as the runtime environment.
   - Set up your Docker environment by pulling the necessary images or creating a custom Dockerfile.
   - In your server’s settings to define environment variables or .env file, add:
`API_TOKEN=your_brightdata_api_token
WEB_UNLOCKER_ZONE=optional_zone_name
BROWSER_AUTH=optional_browser_auth`
    - Use the following Docker command to run Supergateway: `docker run -it --rm -p 8000:8000 supercorp/supergateway \
    --stdio "npx -y @brightdata/mcp /" \
    --port 8000`
   - Deploy it and copy the web server URL, then append `/sse` into it.
   - Your SSE server should now be accessible at: `https://your_server_url/sse`

   For more installation guides, please refer to [https://github.com/supercorp-ai/supergateway.git](https://github.com/supercorp-ai/supergateway.git).
   ******

   ***Method 2: Run Supergateway in the same web service as the N8N instance***

   This method will only work for self-hosted N8N.

   ##### a. Set Required Environment Variables

   In your server's settings to define environment variables or `.env` file, add:

   ```
   API_TOKEN=your_brightdata_api_token
   WEB_UNLOCKER_ZONE=optional_zone_name
   BROWSER_ZONE=optional_browser_zone_name
   ```

   ##### b. Run Supergateway in Background

   ```bash
   npx -y supergateway --stdio "npx -y @brightdata/mcp" --port 8000 --baseUrl http://localhost:8000 --ssePath /sse --messagePath /message
   ```
   Use the command above to execute it through the cloud shell or set it as a pre-deploy command.


   Your SSE server should now be accessible at:  
   `http://localhost:8000/sse`

 
   For more installation guides, please refer to [https://github.com/supercorp-ai/supergateway.git](https://github.com/supercorp-ai/supergateway.git).

   ***

   ***Method 3: Configure via Smithery.ai* (Easiest)**
If you don't want additional setup and want to test it right away, follow these instructions:

   Visit [https://smithery.ai/server/@luminati-io/brightdata-mcp/tools](https://smithery.ai/server/@luminati-io/brightdata-mcp/tools) to:
   * Signup (if you are new to Smithery)
   * Create an API key
   * Define environment variables via a profile
   * Retrieve your SSE server HTTP URL

3. **Import the Workflow**

   * Open N8N.
   * Import the JSON workflow file included with this template.
   * Update any nodes referencing external services (e.g., OpenRouter, Telegram).

4. **Setup Telegram Integration**

   * If you haven't setup a bot in Telegram, below is the instruction how to create one using BotFather:
     - Search for **@BotFather** in Telegram and start a conversation with it.
     - Send the command `/newbot` to create a new bot. You'll be prompted to enter a name and a unique username for your bot.
     - BotFather will provide you with an access token, which you'll need to use to interact with the bot's API. 

   * Edit the **HTTP Request** node in the workflow.
   * Configure the URL as follows:  
     ```
     https://api.telegram.org/bot+your_telegram_bot_token+/setWebhook?url=+your_webhook_url
     ```
   * Replace `+your_telegram_bot_token+` with your actual Telegram bot token.
   * Replace `+your_webhook_url+` with the URL from the **Webhook Trigger** node in the workflow.
   * This will set up Telegram to forward messages to your n8n agent.

---

### 🔄 Workflow Functionality (Summary)

* The user submits a message via chat.
* **Memory** nodes retain context for multi-turn conversations.
* The mapped tool is executed and results are returned contextually.

🧠 *Optional memory buffers and memory manager nodes keep the interaction context-aware.*

---

### 🧩 Use Cases

* **Data Scraping on Demand**: Launch scraping tasks via chat.
* **Lead Generation Bots**: Enrich or validate leads with MCP tools.
* **AI-Powered Customer Support**: Classify and answer queries with real-time data tools.
* **Workflow Assistants**: Let teams run backend processes like lookups or report generation using plain language.

---

### 🛠️ Customization

* **Classifier Prompt & Logic**: Tweak the AI’s prompt and tool-matching schema to better fit your use case.
* **Memory Configuration**: Adjust retention policies and context depth.
* **Tool Execution Sub-Workflow**: Extend for retries, logging, or chaining actions.
* **Omni-Channel Support**: Connect via webhooks to chat interfaces like Slack, WhatsApp, Telegram, or custom UIs.

---

### ✅ Summary

This template equips you with a powerful no-code/low-code AI agent that translates conversation into real-world action. Using Bright Data’s MCP tools through natural language, it enables teams to automate and scale data-driven tasks effortlessly.

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Execute Sub-workflow, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
