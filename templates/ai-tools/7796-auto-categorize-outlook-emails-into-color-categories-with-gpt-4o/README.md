# 🎯 Auto-categorize Outlook emails into color categories with GPT-4o

> ⚡ **836 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow fetches recent emails from Outlook and uses OpenAI to assign a category (e.g., **Red**, **Yellow**, **Green**). It then updates each message’s category in Outlook.

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up Outlook Connection
1. In n8n → **Credentials → New → Microsoft Outlook OAuth2 API**  
2. Log in with your Outlook account & approve access  
3. Attach this credential to the **Get Messages from Outlook** and **Update Category** nodes in the workflow  
4. (Optional) Adjust the **limit** field in **Get Messages from Outlook** if you want more/less than 5 results  

---

### 2️⃣ Set Up OpenAI Connection
1. Go to the **[OpenAI Platform](https://platform.openai.com/api-keys)**  
2. Navigate to **[OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)**  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI** credentials in n8n and select it on the **OpenAI Chat Model** and **Categorizing Agent** nodes  

---

## ✅ Notes
- The agent reads `subject` + `bodyPreview` and returns a JSON category.  
- The **Update Category** node writes that category back to Outlook.  
- You can tweak the category names or logic in the **Categorizing Agent** system message.  

---

## 📬 Contact
Need help customizing the categorization rules or routing categories to folders?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Microsoft Outlook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
