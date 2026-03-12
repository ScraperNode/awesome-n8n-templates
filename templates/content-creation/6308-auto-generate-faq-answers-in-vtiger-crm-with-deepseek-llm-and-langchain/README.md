# 🎬 Auto-generate FAQ answers in Vtiger CRM with DeepSeek LLM and LangChain

> ⚡ **634 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 🧠 Vtiger CRM – Auto-Answer FAQs with DeepSeek AI

**Description:**

This workflow automates the process of answering FAQ drafts in Vtiger CRM using DeepSeek LLM via LangChain. It's perfect for teams who want to accelerate knowledge base creation, improve support response consistency, or reduce the manual effort of writing FAQ content.

Every **1 minute**, this workflow:

* 📥 Retrieves the most recent FAQ record marked as `Draft` in Vtiger CRM
* 🧠 Sends the question to a **LangChain agent** powered by **DeepSeek AI**
* 📝 Receives a plain-text answer
* 📤 Updates the original FAQ with the generated answer and changes its status to `Published`

---

## ⚙️ How It Works

* **Trigger:** Scheduled to run every 1 minute
* **Query:** Pulls the latest FAQ from Vtiger where `faqstatus = 'Draft'`
* **AI Agent:** Uses LangChain + DeepSeek to generate a natural-language answer
* **Memory Buffer:** Keeps context using LangChain memory
* **Update:** Pushes the answer back to Vtiger and marks it as `Published`

---

## 🛠️ Setup Instructions

1. **Connect Credentials** for:

   * Vtiger CRM API
   * DeepSeek API
2. Ensure your Vtiger CRM has a `Faq` module with fields:

   * `question`
   * `faq_answer`
   * `faqstatus`
3. **Install the required Community Node**:

   * Go to `Settings` → `Community Nodes`
   * Click **Install Node** and enter:

     ```bash
     n8n-nodes-vtiger-crm
     ```
   * Restart your instance when prompted.
4. Optionally customize the schedule or field names as needed.

---

## 👤 Who Is This For?

* Customer support teams building a knowledge base
* Businesses using Vtiger as a CRM or internal helpdesk
* Teams looking to automate repetitive content creation using LLMs

---

## 🔐 Credentials Required

* ✅ Vtiger CRM API credentials
* ✅ DeepSeek AI API key

---

## ✅ Highlights

* Fully automated LLM-powered FAQ generation
* Uses custom community node for Vtiger support
* Lightweight and runs on a short interval (1 min)
* Includes sticky note for clarity and onboarding
* Clean conditional logic and memory context built-in

---

## 🏷 Tags

```
vtiger, crm, faq automation, ai automation, deepseek, langchain, llm, open source crm,
faq generation, customer support, n8n, n8n community nodes, workflow automation,
ai generated answers, vtiger integration, deepseek ai, langchain integration
```

## 🔗 Nodes Used

Schedule Trigger, AI Agent, Simple Memory, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
