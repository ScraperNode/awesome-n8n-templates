# 🎬 Generate YouTube scripts for shorts & long-form with Gemini AI and Tavily Research

> ⚡ **2,221 views** · 🎬 [Content Creation & Video](../)

## Description

## **🤖 Automated YouTube Script Generator (Shorts & Long-Form)**

This workflow is a content multiplier. Provide a single video topic via a form, and it automatically researches, outlines, and writes two separate scripts: one for a **YouTube Shorts** and another for a **Long-form video**, saving both directly to Google Docs.

---

### **✨ Key Features**

- **Dual-Format Output:** Creates tailored scripts for both Shorts and long-form videos from one idea.
- **AI-Powered Writing:** Uses **Google Gemini** for all creative steps, from building a structured outline to writing the final scripts.
- **Up-to-Date Research:** Integrates **Tavily AI** to pull fresh, relevant information from the web.
- **Fully Automated:** An end-to-end process that takes a form submission and delivers final documents to your Google Drive with no manual steps.

---

### **⚙️ How It Works**

After a topic is submitted, the workflow splits into two parallel branches:

1.  **The Shorts Branch:** This path is built for speed. It performs a quick web search and immediately uses an AI agent to write a short, punchy script.
2.  **The Long-Form Branch:** This path focuses on structure. It conducts a web search, uses an AI agent to first create a detailed outline, and then uses another AI agent to write a comprehensive script based on that outline.

---

### **🔑 Prerequisites**

- An active n8n instance.
- A form to submit your video topic.
- API keys for **Tavily AI** and **Google Gemini**.
- Google Account credentials (OAuth2) configured in n8n for **Google Docs**.

---

### **🛠️ Setup Guide**

1.  **On form submission Trigger:** Configure your form to accept a field for your video topic (e.g., a field named `topic`).
2.  **Tavily Nodes:** In both `Tavily` nodes, select or create your Tavily API credential and paste in your **API key**.
3.  **Google Gemini Chat Model:** In the nodes labeled `AI Agent` and `Create Outline`, select your Google AI credential linked to your Gemini **API key**.
4.  **Google Docs Nodes:** For all four Google Docs nodes (`Create Doc`, `Update Doc`, etc.), select your **Google OAuth2** credential.
5. **Activate the Workflow:** Once all credentials are in place, save and activate the workflow.

---

### **🚀 How to Use**

1.  **Activate** the workflow.
2.  **Submit** your topic via the connected form.
3.  **Check** your Google Drive a few moments later for your the new script!

## 🔗 Nodes Used

HTTP Request, Google Docs, AI Agent, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
