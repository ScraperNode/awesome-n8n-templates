# 🎬 Create AI-driven social media posts and publish to all major platforms

> ⚡ **346 views** · 🎬 [Content Creation & Video](../)

## Description

# This n8n template is a complete, two-part social media engine: it automates competitor/inspiration research, uses AI to recreate viral formats for your niche, and handles multi-platform distribution with auto-generated visuals.

Instead of staring at a blank page, this workflow scrapes top-performing content, breaks down the psychological hooks, rewrites it for your specific audience, and drafts a custom text graphic. Once you approve the draft, n8n handles the heavy lifting of posting it everywhere.

You curate and approve. n8n researches, writes, designs, and publishes.

## How it works
**Part 1: Research & Recreating**

1. A scheduled trigger runs daily to pull a target username from your Airtable database.
2. Apify scrapes the latest tweets from that user, filtering out replies and links, and sorts them by the highest view count.
3. An AI Analysis Agent (Gemini) breaks down the top post's structure and creates a reusable template.
4. An AI Writing Agent (GPT) uses that template to write a fresh, original post tailored to your niche.
5. A Caption Agent (GPT) writes an engaging, long-form caption with hooks and hashtags.
6. The draft is saved into Airtable for your review.

**Part 2: Auto-Posting & Repurposing**

1. When you change a draft's status to **"Approved"** in Airtable, the second flow triggers.
2. An AI Image generator creates a sleek text-graphic based on your short post.
3. The image is uploaded to ImgBB to generate a public URL.
4. The pure text version is pushed directly to X (Twitter) and Threads (via authenticated HTTP requests).
5. The generated image and long-form caption are published to LinkedIn, Facebook, and Instagram.
6. Finally, the Airtable record is marked as **"Posted."**

## How to use

1. Set up an Airtable base with your target usernames and a table for content drafts.
2. Update the AI Agent system prompts (Writing and Caption) to match your specific target audience, expertise, and tone.
3. Connect all your platform credentials in n8n (ensure you use the credential manager for the HTTP nodes, like HTTP Header Auth for Threads and Query Auth for ImgBB—no hardcoded API keys!).
4. Let the schedule scrape and draft content for you.
5. Simply mark a draft as "Approved" in Airtable when you want it to go live.

## What you get

* Automated viral content research and curation
* AI-driven structural analysis and rewriting
* Auto-generated text-graphics for visual platforms
* Hands-free publishing to 5 platforms (X, Threads, IG, FB, LinkedIn)
* A centralized content approval system

## Requirements

* Airtable account
* Apify account (Twitter Scraper actor)
* OpenAI & Google Gemini API credentials
* ImgBB account
* X (Twitter), Threads, LinkedIn, Facebook, and Instagram accounts

Need help tweaking the AI agents for your specific funnel?

Ask in the [n8n Forum](https://community.n8n.io/) or shoot me a DM on [LinkedIn](https://www.linkedin.com/in/vincentthenguyen/)

Happy automating 🚀

## 🔗 Nodes Used

Airtable, HTTP Request, Facebook Graph API, X (Formerly Twitter), LinkedIn, Airtable Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
