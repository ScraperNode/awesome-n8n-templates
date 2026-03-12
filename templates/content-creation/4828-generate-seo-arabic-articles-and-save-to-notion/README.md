# 🎬 Generate SEO Arabic articles and save to Notion

> ⚡ **778 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automatically creates in-depth, SEO-friendly Arabic articles based on any keyword you provide. It researches the topic, generates a full article outline, writes every section in Arabic, and saves the final article directly to your Notion workspace—all in a few clicks.

---

### How It Works

- **Step 1:** You submit a simple web form with your keyword and (optionally) an article title.
- **Step 2:** The workflow researches the topic using advanced AI, gathers trending questions from Google, and creates a detailed, structured outline.
- **Step 3:** Each section of the article is written in Arabic by AI, following best SEO practices and including real FAQs.
- **Step 4:** The completed article is automatically formatted and saved to your Notion database, ready for review or publishing.

---

### Setup Instructions

- **What you need:**
    - An **OpenAI API key** (for AI-powered writing and outline generation)
    - An **OpenRouter API key** (for research via Perplexity/Sonar AI)
    - A **Notion account** and **Notion API integration** (for saving articles)
    - **DataForSEO account** (for fetching Google "People Also Ask" questions)
- **How to set up:**
    1. Import the workflow into your n8n instance.
    2. Connect your API credentials for OpenAI, OpenRouter, Notion, and (optionally) DataForSEO.
    3. Update your Notion database ID in the workflow settings.
    4. Deploy the workflow. Fill out the web form to generate your first article.
- **Setup time:** 10–20 minutes if you already have your accounts.

---

**Tip:**

You can fully customize the outline and writing prompts for your target audience or topic. The workflow is modular—easy to adapt for different languages or content styles.

## 🔗 Nodes Used

HTTP Request, Notion, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
