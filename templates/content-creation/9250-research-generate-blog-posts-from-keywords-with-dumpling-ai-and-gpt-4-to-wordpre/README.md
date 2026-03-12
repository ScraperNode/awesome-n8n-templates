# 🎬 Research & generate blog posts from keywords with Dumpling AI and GPT-4 to WordPress

> ⚡ **804 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for

This template is perfect for SEO writers, niche bloggers, and content marketers who want to generate high-quality blog posts from a single keyword without spending hours on research and writing. If you often find yourself stuck at the research stage or manually drafting blog content, this workflow automates the entire process from topic discovery to publication.

---

## What it does

The workflow takes a **keyword**, performs a Google search using **Dumpling AI**, analyzes the top-ranking pages and People Also Ask (PAA) questions, and then uses **GPT-4** to generate a detailed blog post based on the most valuable question. The blog draft is sent for approval via email, and once approved, it’s automatically published to **WordPress**.

Here’s what happens step by step:  
1. Receives a keyword through a simple form  
2. Uses **Dumpling AI** to perform a Google search and extract:  
   - Top 2 organic search results  
   - People Also Ask (PAA) questions and answers  
   - Top related searches  
3. Filters for insightful PAA questions  
4. Sends the data to **GPT-4** to generate a blog post in JSON format  
5. Emails the draft blog post for manual review and approval  
6. If approved, publishes the post automatically to WordPress

---

## How it works

1. **Form Trigger**: Captures the keyword input  
2. **Dumpling AI**: Searches Google and extracts SEO data including top results, PAA, and related searches  
3. **Code Node**: Processes the raw search data into a structured format for GPT-4  
4. **Filter Node**: Checks if PAA questions are available  
5. **GPT-4**: Chooses a strong PAA question and writes the blog post  
6. **Gmail**: Sends the draft blog post to your inbox for review  
7. **Approval Node**: Waits for manual approval  
8. **WordPress**: Publishes the approved post automatically

---

## Requirements

- ✅ **Dumpling AI API key** stored securely as credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Gmail account** with OAuth2 connected to n8n  
- ✅ **WordPress account** with API credentials configured

---

## How to customize

- Edit the GPT-4 prompt to control the blog structure, tone, or style  
- Add extra filters to select specific types of PAA questions (e.g., how-to, guides)  
- Change the review recipient email in the Gmail node  
- Add additional formatting or SEO optimization steps before publishing  
- Integrate with Notion, Airtable, or Slack to log or notify team members after publication

---

&gt; This workflow turns a single keyword into a fully researched, GPT-4 generated, and auto-published blog post — helping you scale content creation efficiently while maintaining quality.

## 🔗 Nodes Used

HTTP Request, Wordpress, Gmail, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
