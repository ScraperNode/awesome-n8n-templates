# 🎯 Resume reviewer with GPT-4o-mini and human validation via gotoHuman

> ⚡ **776 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow reviews resumes against a job description using **OpenAI** for automated scoring and **gotoHuman** for human validation before continuing.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

### 2️⃣ Set Up gotoHuman Connection
1. In n8n, go to **Settings → Community Nodes → Install**  
   - Package: `@gotohuman/n8n-nodes-gotohuman`  
2. Create a **gotoHuman account** and generate an **API key**  
   - Save it in n8n as **gotoHuman API credentials**  
3. In **gotoHuman**, create a **Review Template** with fields:  
   - **Resume (string)**  
   - **Summary (string)**  
   - **Rating (number)**  
4. Copy the **Template ID** into the `Send review request and wait for response` node  
5. Map fields in the node:  
   - Resume → extracted resume text  
   - Summary → OpenAI output summary  
   - Rating → OpenAI score  

---

## 📬 Contact Information
Need help customizing this workflow or building similar automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
