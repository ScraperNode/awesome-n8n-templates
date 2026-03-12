# 📱 Generate & schedule social posts with Gemini/OpenAI for X and LinkedIn

> ⚡ **4,842 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 💼 LinkedIn Content Machine – AI-Powered Post Generator & Scheduler for X and LinkedIn

**How it works:**  
This end-to-end workflow automates your personal or brand content strategy by:
- 🧠 Using Google Gemini or OpenAI to generate engaging LinkedIn/X content from a title or trending posts.
- 🗓️ Posting directly to LinkedIn and X (formerly Twitter).
- 📊 Pulling high-performing LinkedIn posts to inspire new ideas.
- ✍️ Saving AI-generated drafts to Google Sheets for review.
- 🔔 Notifying your team on Slack when drafts are ready.

**Steps to set up:**
1. Add your API keys for Google Gemini or OpenAI.
2. Set up your LinkedIn, X (Twitter), Google Sheets, and Slack credentials.
3. Customize prompt logic or post filters if needed.
4. Schedule the idea generation module or trigger it manually.
5. Start generating and posting consistent, high-quality content with zero manual effort!

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Slack, X (Formerly Twitter), LinkedIn

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
