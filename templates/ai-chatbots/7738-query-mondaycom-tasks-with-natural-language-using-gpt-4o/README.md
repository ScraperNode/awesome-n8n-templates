# 🤖 Query Monday.com tasks with natural language using GPT-4o

> ⚡ **502 views** · 🤖 [AI Chatbots & Agents](../)

## Description

Ask natural-language questions about your Monday.com tasks (e.g., “Which tasks are overdue?”, “Show me all items stuck”, “Summarize what’s due this week”).  
The assistant fetches **real data from your Monday.com board** and answers based only on that.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

### 2️⃣ Connect Monday.com Node
1. In **Monday.com** → go to your **Admin → API**  
   - Copy your **Personal API Token**  
   - Docs: [Generate Monday API Token](https://developer.monday.com/api-reference/docs/authentication)  
2. In **n8n** → **Credentials → New → Monday.com API**  
   - Paste your token and save.  
3. Open the **Get many items** node → choose your credential → select your **Board ID** and **Group ID**.  

---

## 🧠 How it works
- **Sample Chatbot**: webhook/chat trigger for your questions  
- **Get many items (Monday.com)**: pulls board/group tasks  
- **Set Fields → Combine → Convert to text**: formats task data  
- **OpenAI Chat Model + Memory**: lets you ask questions and keeps context across turns  
- **Chat with Monday.com**: generates the final AI answer  

---

## 📬 Contact
Need help customizing this for your own board structure?

📧 **robert@ynteractive.com**  
🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Monday.com, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
