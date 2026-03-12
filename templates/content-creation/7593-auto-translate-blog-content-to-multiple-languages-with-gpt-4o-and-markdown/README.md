# 🎬 Auto-translate blog content to multiple languages with GPT-4o and Markdown

> ⚡ **742 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow takes a blog post (title + content) and automatically translates it into multiple languages of your choice using **OpenAI** inside **n8n**. The translated output is formatted in Markdown, making it ready for publishing or direct use in content management systems.  

It’s ideal for content creators, marketers, and businesses who want to **instantly localize blogs** into different languages without manual effort.  

### 🔑 Key Features
- **Multi-language support**: Translate your content into as many languages as you configure.  
- **Clean Markdown output**: Ensures translated blogs are properly formatted.  
- **Flexible input**: Works with any blog content passed into the workflow.  
- **Scalable**: Add or remove target languages with a single change in the Set node.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Choose Your Target Languages
1. Open the **Set Node** called `Set Languages`  
2. Edit the array of languages to include the ones you want to translate into, e.g.:  

```json
[
  "spanish",
  "french",
  "german"
]

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
