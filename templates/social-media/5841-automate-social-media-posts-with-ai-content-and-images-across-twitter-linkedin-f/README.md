# 📱 Automate social media posts with AI content and images across Twitter, LinkedIn & Facebook

> ⚡ **37,344 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Auto-generate & post content using AI

This workflow helps you create daily content using just a topic prompt. It writes a tweet, generates an image, and publishes across Twitter, Facebook, and LinkedIn — all on autopilot.

---

### How it works

- Triggers daily at 10 PM to start the flow  
- Uses OpenAI to generate a niche topic title  
- Writes a short-form post (tweet style) with hashtags  
- Generates a Japanese anime-style image for visual context  
- Saves everything in Google Sheets  
- Publishes automatically on Twitter, LinkedIn, and Facebook  

---

### Set up steps

- You’ll need OpenAI, Google Sheets, and social media credentials (Twitter, Facebook, LinkedIn)  
- Takes about **10–15 minutes** to configure if you already have the credentials ready  
- Make sure your Sheet and API keys are properly linked before activating  

📝 Keep detailed notes inside the workflow with sticky notes for easier handoff or collaboration.

## 🔗 Nodes Used

Google Sheets, Facebook Graph API, X (Formerly Twitter), LinkedIn, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
