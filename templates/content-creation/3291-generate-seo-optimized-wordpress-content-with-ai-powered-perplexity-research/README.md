# 🎬 🔍🛠️Generate SEO-optimized WordPress content with AI powered perplexity research

> ⚡ **69,755 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate SEO-Optimized WordPress Content with Perplexity Research

### **Who is This For?**
This workflow is ideal for content creators, marketers, and businesses looking to streamline the creation of SEO-optimized blog posts for WordPress. It is particularly suited for professionals in the AI consulting and workflow automation industries.

---

### **What Problem Does This Workflow Solve?**
Creating high-quality, SEO-friendly blog posts can be time-consuming and challenging, especially when trying to balance research, formatting, and publishing. This workflow automates the process by integrating research capabilities, AI-driven content creation, and seamless WordPress publishing. It reduces manual effort while ensuring professional-grade output.

---

### **What This Workflow Does**
1. **Research:** Gathers detailed insights from Perplexity AI based on user-provided queries.
2. **Content Generation:** Uses OpenAI models to create structured blog posts, including titles, slugs, meta descriptions, and HTML content optimized for WordPress.
3. **Image Handling:** Automatically fetches and uploads featured images to WordPress posts.
4. **Publishing:** Drafts the blog post directly in WordPress with all necessary formatting and metadata.
5. **Notification:** Sends a success message via Telegram upon completion.

---

### **Setup Guide**
1. **Prerequisites:**
   - A WordPress account with API access.
   - OpenAI API credentials.
   - Perplexity AI API credentials.
   - Telegram bot credentials for notifications.

2. **Steps:**
   - Import the workflow into your n8n instance.
   - Configure API credentials for WordPress, OpenAI, Perplexity AI, and Telegram.
   - Customize the form trigger to define your research query.
   - Test the workflow using sample queries to ensure smooth execution.

---

### **How to Customize This Workflow to Your Needs**
- Modify the research query prompt in the "Form Trigger" node to suit your industry or niche.
- Adjust content generation guidelines in the "Copywriter AI Agent" node for specific formatting preferences.
- Replace the image URL in the "Set Image URL" node with your own source or dynamic image selection logic.

## 🔗 Nodes Used

HTTP Request, Telegram, Wordpress, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
