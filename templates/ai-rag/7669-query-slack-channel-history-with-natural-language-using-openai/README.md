# 🔍 Query Slack channel history with natural language using OpenAI

> ⚡ **275 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Chat with a Slack channel using AI. This workflow fetches the channel’s message history and lets you ask natural-language questions (“what were the decisions?”, “who’s blocked?”, “summarize yesterday”). The assistant **only** answers from the channel’s actual messages—no guessing.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n

### 2️⃣ Connect Slack API
1. Create an app → &lt;https://api.slack.com/apps&gt;  
2. **OAuth & Permissions** → add scopes you need to read channel history (typical:  
   `channels:history`, `groups:history`, `im:history`, `mpim:history`, plus `channels:read`, `groups:read`, `users:read`. Add `chat:write` if you want the bot to reply in Slack.)  
3. **Install** the app to your workspace → copy the **Bot User OAuth Token**  
4. In n8n → **Credentials → New → Slack OAuth2 API** → paste token and save  
5. In the **Slack History** node, select your Slack credential and the **Channel ID** to read

---

## 🗣️ Example Questions You Can Ask
- “Give me a 5-bullet summary of the last 24 hours.”  
- “What action items were assigned, and to whom?”  
- “List open questions that haven’t been answered yet.”  
- “Who was mentioned most this week?”  
- “Summarize decisions from the last sprint planning.”  
- “Show messages with the word ‘blocker’ from the past 2 days.”  
- “What files/links were shared today?”

---

## 📬 Contact
Need help customizing this or adding auto-replies back into Slack?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
