# 📱 Auto-summarize blog posts to social media with Gemma and Postiz

> ⚡ **629 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Auto-Summarize Blog Posts to Social Media with Gemma and Postiz

This workflow automates fetching the latest post from a Blogspot RSS feed, summarizes it with an LLM (e.g., Gemma via Ollama), extracts and uploads an image, generates three relevant hashtags, and posts to Facebook, LinkedIn, X (Twitter), and Instagram via the Postiz API.

It ensures content fits platform limits (e.g., 280 characters for X) and prevents duplicates using hashing.

**Pros:**  
- Efficient for content creators  
- Local LLM ensures privacy  
- Customizable for any RSS/blog source  

**Cons:**  
- Dependent on stable APIs (Postiz/social platforms)  
- LLM outputs may vary in quality without human review  

**Target Audience:** Bloggers, content marketers, or social media managers looking to automate cross-platform posting from RSS sources, especially those focused on niches like health, tech, or personal development. Ideal for users with technical setup skills for self-hosting.

**Customization Options:**  
- Adapt prompts in "Generate Summary and Hashtags with LLM" for tone/style (e.g., professional vs. casual).  
- Modify maxChars/hashtag reserve in "Calculate Summary Character Limit" for different platforms.  
- Extend for multiple RSS feeds by adjusting "Calculate Summary Character Limit" array.  
- Add error handling (e.g., IF node after "Create and Post Content via Postiz API") for API failures.

**Disclaimer:** This template is designed for self-hosted n8n instances to leverage local Ollama for privacy. For cloud use, modify as follows: 1) Use an n8n cloud account, 2) Replace Ollama with a cloud API-based LLM like ChatGPT in the "Configure Local LLM Model (Ollama)" node, 3) Switch to cloud-hosted Postiz in the HTTP Request node.

**Template Image:**
![template.png](fileId:2793)
---

## How it works

1. Set the RSS feed URL in **"Set RSS Feed URLs"**.  
2. Fetch the latest post via RSS.  
3. Normalize fields and calculate the maximum summary length.  
4. Use the LLM to summarize the text, append hashtags, and include the link.  
5. Extract and process an image from the post HTML.  
6. Validate inputs and post to social platforms via the Postiz API.  

---

## Setup Instructions

1. **Install n8n** (self-hosted recommended for Ollama integration).  
2. **Set up Ollama** with the Gemma (or a similar) model using **"Ollama Model"** credentials.  
3. **Add Postiz API credentials** in the **"Create and Post Content via Postiz API"** node.  
4. **Replace placeholders:**
   - RSS URL in **"Set News RSS Feeds"**
   - Integration IDs in the Postiz HTTP body  
5. *(Optional)* Add error handling for API failures.  
6. Activate the workflow and test with a sample post.  

---

## Uncertainties

- Changes in social media APIs may break posting functionality.  
- LLM output consistency depends on model choice and prompt configuration.  

---

## Required n8n Version

Tested on **n8n v1.107.3** (self-hosted).  
Works with the community node **n8n-nodes-langchain**.  

---

## Resources

- [n8n Docs: RSS Feed Read](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.rssfeedread/)  
- [n8n Docs: HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)  
- [Ollama Setup](https://ollama.ai)  
- [Postiz Documentation](https://postiz.com)

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Schedule Trigger, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
