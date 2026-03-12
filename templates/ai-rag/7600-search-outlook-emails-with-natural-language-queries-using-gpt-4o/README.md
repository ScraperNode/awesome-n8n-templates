# 🔍 Search Outlook emails with natural language queries using GPT-4o

> ⚡ **1,058 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

This workflow allows you to **search your Outlook mailbox with natural language**. You type what you’re looking for (e.g., “invoice from last week”), and the workflow:  
1. Uses **OpenAI** to generate a search query.  
2. Searches Outlook emails and ranks them by relevance.  
3. Outputs results in a simple table with **score + link** to each email.  

👉 The number of results can be changed (default: **5**).  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up Outlook Connection
1. In n8n → **Credentials → New → Microsoft Outlook OAuth2 API**  
2. Log in with your Outlook account & approve access  
3. Attach this credential to the **Search Outlook** node in the workflow  
4. (Optional) Change the `limit` parameter in the node if you want more/less than 5 results  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)

## 🔗 Nodes Used

Microsoft Outlook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
