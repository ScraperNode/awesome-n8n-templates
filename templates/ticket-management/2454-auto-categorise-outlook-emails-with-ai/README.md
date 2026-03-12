# 🎫 Auto categorise Outlook emails with AI

> ⚡ **63,719 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Automate your email management** with this workflow, designed for freelancers and business professionals who receive high volumes of emails. By leveraging AI-powered categorisation and dynamic email processing, this template helps you organise your inbox and streamline communication for better efficiency and productivity.


**[Check out the YouTube video for step-by-step set up instructions!](https://www.youtube.com/watch?v=EhRBkkjv_3c)**

### **How it works:**

1. **Fetch & Filter Emails:** The workflow retrieves emails from your Microsoft Outlook account, filtering out flagged emails and those already categorised.
2. **Content Preparation:** Each email is cleaned up and converted to a structured format using Markdown, making it easier for AI processing.
3. **AI Categorization:** The content is analysed using an AI model, which categorises the emails into predefined categories (e.g., Action, Junk, Business, SaaS) based on the context and content.
4. **Email Categorization & Folder Management:** The categorised emails are updated in Microsoft Outlook and moved to respective folders such as "Junk Email" or "Receipts" based on the AI's classification.
5. **Conditional Processing & Final Checks:** Additional checks and conditions ensure that only unread emails are processed, and errors are gracefully managed to maintain workflow stability.

### **Set up steps:**

1. **Connect Microsoft Outlook:** Link your Microsoft Outlook account using the built-in credentials node to enable email fetching, updating, and folder management.
2. **Configure AI Model (Ollama API):** Set up the AI model by connecting to the Ollama API and choosing your desired language model for categorisation.
3. **Modify Email Categories (Optional):** Customize the categories and subcategories within the workflow to suit your unique email management needs.
4. **Set Up Error Handling:** Review the error handling node settings to ensure smooth workflow execution.

This template offers a robust solution for managing and organising your inbox, helping you save time and keep your focus on important emails.

## 🔗 Nodes Used

Microsoft Outlook, Markdown, Filter, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
