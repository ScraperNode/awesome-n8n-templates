# 🤖 Query your Trello board using natural language with OpenAI GPT

> ⚡ **619 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# 💬 Chat with Your Trello Board (n8n + OpenAI)

## 📖 Description
Turn your Trello board into a conversational assistant. This workflow pulls your board → lists → cards, aggregates the context, and lets you **ask natural-language questions** (“what’s overdue?”, “summarize In Progress”, “what changed this week?”). OpenAI reasons over the live board data and replies with concise answers or summaries. Great for standups, planning, and quick status checks—without opening Trello.

&gt; Setup steps are already embedded in the workflow (Trello API + OpenAI + board URL). Just follow the sticky notes inside the canvas.

---

## 🧪 Example prompts
- “Give me a one-paragraph summary of the board.”
- “List all cards due this week with their lists.”
- “What’s blocking items in ‘In Progress’?”
- “Show new cards added in the last 2 days.”

---



## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key**: https://trello.com/app-key  
2. Generate a **token** (from the same page → **Token**)
3. In n8n → **Credentials → New → Trello API**, paste **API Key** and **Token**, save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.

### 2️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 3️⃣ Add Your Board URL to “Get Board”
1. Copy your Trello board URL (e.g., `https://trello.com/b/DCpuJbnd/administrative-tasks`).  
2. Open the **Get Board** node → **Resource: Board**, **Operation: Get**.  
3. In **ID**, choose **URL** mode and paste the **board URL**.  
   - The node will resolve the board and output its `id` → used by **Get Lists** / **Get Cards**.

## 📬 Contact
Need help customizing this or adding Slack/Email outputs?

- 📧 **robert@ynteractive.com**
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Trello, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
