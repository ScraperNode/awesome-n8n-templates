# 💬 Discord AI ChatBot : Context-Aware, Replies to Mentions AND also DMs

> ⚡ **1,157 views** · 💬 [Support Chatbots](../)

## Description

**[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_XVAx_5246)**.

---

# Get your own custom ChatGPT inside your Discord Server
![DS.png](fileId:1737)


## Description
This n8n workflow enables a fully autonomous AI assistant within your Discord server. It listens for both public mentions and direct messages (DMs), and replies in real-time using a language model (OpenAI's GPT-4o by default). The assistant can dynamically fetch previous messages for better context, providing smart, coherent, and personalized responses.

---

### 🔧 **Key Features**

- **Dual Trigger**: Reacts to both public bot mentions and private DMs.
- **Context-Aware AI**: Dynamically fetches the last 30 messages from either public or private conversations.
- **Smart Routing**: Replies either in the original public channel or via DM, depending on where the message came from.
- **Custom Prompting**: Easily modify the system prompt to define the AI’s tone, behavior, and personality.
- **Fully Autonomous**: No manual intervention required — the bot always replies instantly.

---

### ✅ Requirements

- An operational **n8n instance**.
- A **Discord bot** with at least these permissions:
  - Send Messages  
  - Read Message History  
  - Manage Messages
- **OpenAI API key** (or compatible LLM credentials).
- The community package: `n8n-nodes-discord-trigger`.

---

### 🧰 **Setup Instructions**

#### 1. **Discord Bot Setup**
- Create and invite your Discord bot to your server with required permissions.
&gt; You will find in the next step a complete tutorial to craft your own bot with the right code and permissions for this workflow to work
- Set your Discord bot token in n8n's credential manager.

#### 2. **Install the Community Node** (please read ⚠️ Disclaimer first)
- Go to `Settings &gt; Community Nodes &gt; Install`
- Paste: `n8n-nodes-discord-trigger` and install.

#### 3. **Configure the Workflow**
- Add your Discord bot credentials.
- Update the LLM credentials with your OpenAI key or alternative.
- Customize the AI agent system prompt if needed.

---

### 🤖 **How It Works**

- When a **public mention** is detected, the bot replies directly in the channel, referencing the original message.
- When a **DM** is received, it responds privately.
- The AI uses tools to **read the latest 30 public or private messages** to build accurate context before replying.

---

### 🛠 **Customization Options**

- **Change LLM**: Swap out OpenAI with any LLM that has an API.
- **Edit Prompt Behavior**: Modify the system prompt to control tone and personality.
- **Adjust Trigger Filters**: Choose which roles, channels, or patterns activate the flow.

---
### If you just need a tutorial on setting up your Discord bot, be my guest ➡️ [Here](https://www.bonzai.pro/theo_marcadet/posts/oNz0_19715/discord-bot-setup-tutorial)

---

### And if you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018/)**

## 🔗 Nodes Used

Webhook, Discord, AI Agent, OpenAI Chat Model, Simple Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
