# 💬 Automate WooCommerce customer support with Gemini & GPT via Telegram & Gmail

> ⚡ **484 views** · 💬 [Support Chatbots](../)

## Description

## 🤖 AI Support Bot for WooCommerce with Gemini & GPT (Telegram & Gmail)

Managing customer support across multiple platforms like email and chat can be a huge time sink. Answering the same questions about order status repeatedly takes your focus away from growing your business. This workflow solves that problem by deploying a 24/7 conversational AI agent to act as your first line of support for your WooCommerce store.

This AI-powered bot can handle customer inquiries from both **Telegram** and **Gmail**, understand conversational follow-ups, and use a tool to fetch live order data directly from your WooCommerce store. It's designed to be reliable, with a primary/fallback AI model setup, and robust enough to prevent the common pitfalls of email automation like infinite reply loops.


### How It Works ⚙️
The workflow operates in a clear, logical sequence:

1.  **📢 Multi-Channel Ingestion:** The workflow starts when it receives a message from one of two sources:

      * **Telegram:** An instant webhook trigger fires for every new message.
      * **Gmail:** A polling trigger checks your inbox every minute for new, unread emails.

2.  **💎 Data Normalization:** All incoming requests are merged and processed by a `Set` node. This crucial step transforms the platform-specific data into a universal format that the rest of the workflow can understand (e.g., `platform`, `sender_id`, `query_text`).


3.  **🧠 AI Processing:** The standardized query is sent to a **LangChain Agent**. This agent is the "brain" of the operation. It uses **Conversational Memory** to understand the context of the conversation (like when a user provides an order ID in a follow-up message).

4.  **🛠️ Tool Usage:** Based on its prompt, the AI Agent determines if it has enough information to use its one available tool: **Get an order in WooCommerce**. If a valid Order ID is present, it calls the tool to fetch live order details.

5.  **📮 Response & Routing:** The agent formulates a natural language response. A `Switch` node then inspects the `platform` field and routes the response to the correct channel.

6.  **✅ Cleanup:** For the Gmail path, two final actions occur in parallel: the reply is sent, and the original incoming email is marked as 'Read'. This is a critical step to prevent the workflow from re-triggering on the same email in an infinite loop.


### Nodes Used 🔗

This workflow uses a combination of standard nodes and AI nodes to achieve its goal:

  * [**Telegram Trigger**](https://docs.n8n.io/nodes/n8n-nodes-base.telegramTrigger/): To receive messages from Telegram in real-time.
  * [**Gmail Trigger**](https://www.google.com/search?q=https://docs.n8n.io/nodes/n8n-nodes-base.gmailTrigger/): To poll for new unread emails.
  * [**Merge**](https://docs.n8n.io/nodes/n8n-nodes-base.merge/): To combine inputs from multiple triggers.
  * [**Set**](https://docs.n8n.io/nodes/n8n-nodes-base.set/): To normalize data into a consistent format.
  * [**LangChain Agent**](https://docs.n8n.io/advanced-ai/langchain/langchain-n8n/): The core AI "brain" that orchestrates the logic, memory, and tools.
  * [**Google Gemini**](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/) & [**OpenAI**](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/): Used as the primary and fallback language models for the agent.
  * [**WooCommerce Tool**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/): The tool the AI agent uses to fetch order data.
  * [**Switch**](https://docs.n8n.io/nodes/n8n-nodes-base.switch/): To route the final reply to the correct platform.
  * [**Telegram**](https://docs.n8n.io/nodes/n8n-nodes-base.telegram/): To send the final response to Telegram.
  * [**Gmail**](https://docs.n8n.io/nodes/n8n-nodes-base.gmail/): To reply to emails and mark them as read.


### Prerequisites 🔑

To use this workflow, you will need:
  * An active n8n instance (self-hosted or cloud).
  * A **Telegram Bot** account and its API token.
  * A **Gmail** account with OAuth2 credentials configured in n8n.
  * A **WooCommerce** store with API credentials (Consumer Key and Secret).
  * An **OpenAI** API key.
  * A **Google AI (Gemini)** API key.

### Usage 🚀

Follow these steps to set up the workflow:

1.  **Download the Workflow:** Import the workflow JSON file into your n8n instance.

2.  **Configure Credentials:**
      * **Telegram:** Select your Telegram API credentials in the `Fetch user query` and `Send Telegram Response` nodes.

      * **Gmail:** Select your Gmail OAuth2 credentials in the `Fetch support mail`, `Send Response via Mail`, and `Mark received mail as read` nodes.

      * **WooCommerce:** Select your WooCommerce API credentials in the `Get an order in WooCommerce` node.

      * **AI Models:** Select your OpenAI and Google AI credentials in the `Fallback Model` and `Primary Model` nodes, respectively.

3.  **Activate Telegram Webhook:**
      * Open the `Fetch user query` (Telegram Trigger) node.
      * Copy the **Webhook URL**.
      * Register this URL with your Telegram bot using the `/setWebhook` command in the BotFather chat.

4.  **Customize AI Prompt (Optional):**
      * Open the `WooCommerce Customer support Agent1` node.
      * You can edit the prompt in the **Text** field to change the AI's personality, rules, or language.

5.  **Activate the Workflow:** Save the workflow and toggle the "Active" switch ON.
Your multi-channel AI support agent is now live\! Send a message to your Telegram bot or a new, unread email to your connected Gmail account to test it out.

### Resources 📚
  * [**n8n Documentation**](https://docs.n8n.io/)
  * [**n8n Community Forum**](https://community.n8n.io/)
  * [**LangChain in n8n**](https://docs.n8n.io/advanced-ai/langchain/langchain-n8n/)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
