# ✨ Convert RSS feeds into LinkedIn & X posts with GPT-4o & AI images & approval

> ⚡ **86 views** · ✨ [AI & LLMs](../)

## Description

## 🚀 Overview

Stop letting your valuable blog content collect dust! This automation is your 24/7 content repurposing engine. It monitors any blog or news feed you choose. The moment a new article goes live, it instantly creates engaging, platform-aware posts for LinkedIn and X (Twitter), generates a custom image with AI, and packages it all up for your review. You get the final say with a simple approval email, ensuring your brand voice stays perfectly on point.

![Screenshot_2025_07_04_at_21_49_22_0c19860a25.png](fileId:2156)

---

## 😩 The Problem

You've invested hours writing the perfect blog post. But the work isn't over. Now you have to manually copy, paste, and rewrite that content for different social platforms. You need a professional tone for LinkedIn, something short and snappy for X, and you have to find or create visuals for both. This tedious, repetitive task drains your creative energy and leads to your social media presence becoming stale or inconsistent.

---

## ✨ The Solution

This workflow acts as your automated content marketing assistant, elegantly solving the problem. Here’s the magic in action:

1. **New Blog Post Detected:** The workflow constantly watches a specific RSS feed (e.g., your company blog).
2. **AI Content Generation:** When a new post appears, the AI (powered by **OpenAI GPT-4o-mini**) reads the article, performs a quick web search for context (via SerpAPI), and drafts optimized posts for LinkedIn and X. It also generates a brand-new image based on the article’s topic.
3. **Secure Image Hosting:** The generated image is uploaded to your Imgbb account for a shareable link.
4. **Approval Workflow:** A notification is sent directly to your email inbox with the generated text and image for review.
5. **One-Click Go-Live:** If approved, the workflow automatically publishes the content to the correct social media profiles.

---

## ⚙️ Setup Instructions

### **What You'll Need**

* **RSS Feed URL** (e.g., `https://yourwebsite.com/feed`)
* **OpenAI API key** (for content + image generation)
* **SerpAPI API key** (optional, for extra context)
* **Imgbb API key** (for image hosting)
* **Connected Accounts:** Gmail, LinkedIn, and X (Twitter)

### **Steps**

1. **Upload:** Import the JSON file into n8n.
2. **Connect:** Link your credentials for Gmail, LinkedIn, X, OpenAI, SerpAPI, and add Imgbb with “Header Auth.”
3. **Configure:**

   * Add your RSS URL to the `RSS Feed Trigger` node.
   * Update the **“Send To”** field in both `Gmail User for Approval` nodes with your own email.
4. **Activate:** Switch on the workflow and let automation handle the heavy lifting.

---

## 🎨 Customizations

* **Expand to More Networks:** Duplicate an existing branch to add Facebook or Instagram.
* **Add Smart Filters:** Only generate posts for articles containing specific keywords (e.g., “AI” or “Case Study”).

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, X (Formerly Twitter), Gmail, LinkedIn, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
