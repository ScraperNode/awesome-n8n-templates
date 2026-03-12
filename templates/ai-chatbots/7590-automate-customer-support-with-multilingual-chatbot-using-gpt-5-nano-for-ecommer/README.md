# 🤖 Automate customer support with multilingual chatbot using GPT-5 Nano for eCommerce

> ⚡ **1,921 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This workflow creates a **multilingual eCommerce chatbot** that automatically detects the customer’s language and provides tailored responses. It is designed for online shops to improve customer support in English, Spanish, and French.

The chatbot is powered by **OpenAI’s GPT-5 Nano** and runs entirely inside **n8n**, with built-in memory to keep conversations contextual and helpful.

### 🔑 Key Features
- **Language Detection**: Identifies customer language automatically (English, Spanish, or French).  
- **Localized Responses**: Uses pre-defined system prompts for each language.  
- **Customer Support Ready**: Handles product questions, order tracking, returns, and general inquiries.  
- **Human Handoff**: If details are missing, it guides the user to contact human support.  
- **Conversation Memory**: Tracks sessions for smoother, contextual replies.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
#### Get API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Go to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Configure Your Languages & Prompts
- Open the **Set Node** named `Ecommerce Language Prompts`.  
- Update or expand the list of languages and their **system prompts**.  
- Example already includes:  
  - English  
  - Spanish  
  - French  

That’s it! Your chatbot is ready to run 🎉  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 Email: [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 LinkedIn: [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 Website: [ynteractive.com](https://ynteractive.com)  

---

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
