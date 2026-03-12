# 📖 Slack AI ChatBot : context-aware, replies to mentions AND also DMs

> ⚡ **245 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

**[Click here to access this Workflow for free](https://www.bonzai.pro/auth?action=buyPrice%2Cpri_zmMq_5350)**.

---

# Get your own custom ChatGPT inside your Slack Workspace 
![sl.png](fileId:1734)

## Description
This n8n workflow enables a fully autonomous AI assistant within your Slack Workspace. It listens for both public mentions and direct messages (DMs), and replies in real-time using a large language model (OpenAI's GPT-4o by default). The assistant can dynamically fetch previous messages for better context, providing smart, coherent, and personalized responses.

---

### 🔧 **Key Features**

- **Dual Trigger**: Reacts to both public bot mentions and private DMs.
- **Context-Aware AI**: Dynamically fetches the last 20 messages from either public or private conversations.
- **Smart Routing**: Replies either in the original public channel or via DM, depending on where the message came from.
- **Custom Prompting**: Easily modify the system prompt to define the AI’s tone, behavior, and personality.
- **Fully Autonomous**: No manual intervention required — the bot always replies instantly.

---

### ✅ Requirements

- An operational **n8n instance**.
- A Slack workspace (you can create one for free [here](https://slack.com/get-started?entry_point=workspaces))
- A Slack account with **Admin** or **Owner** privileges (required to install apps)

---

### 🧰 **Setup Instructions**

#### **Slack Bot Setup**
- Create a Slack App with the necessary permissions and configurations
&gt; You will find in the next step a complete tutorial to craft your own bot with the right confirguration and permissions for this workflow to work
- Set your Slack bot token in n8n's credential manager.

---

### 🤖 **How It Works**

- When a **public mention** is detected, the bot replies directly in the channel, referencing the original message.
- When a **DM** is received, it responds privately.
- The AI uses a tool to **read the latest 20 public or private messages** to build accurate context before replying.

---

### 🛠 **Customization Options**

- **Change LLM**: Swap out OpenAI with any LLM that has an API.
- **Edit Prompt Behavior**: Modify the system prompt to control tone and personality.

---
### If you just need a tutorial on setting up your Slack bot, be my guest ➡️ [Here](https://www.bonzai.pro/theo_marcadet/posts/xZ18_21698/slack-bot-setup-tutorial)

---

### And if you need any help, or have any question, feel free to come discuss about it on **[Telegram](https://www.bonzai.pro/theo_marcadet/lp/7018/)**

## 🔗 Nodes Used

Slack, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
