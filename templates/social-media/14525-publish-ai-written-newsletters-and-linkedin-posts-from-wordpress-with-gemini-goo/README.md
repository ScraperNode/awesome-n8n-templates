# 📱 Publish AI-written newsletters and LinkedIn posts from WordPress with Gemini, Google Sheets and Gmail

> ⚡ **69 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works  
This workflow fetches the latest blog post from a WordPress API and checks against a Google Sheets tracker to prevent duplicate processing. If a new post is found, the workflow updates the tracker and cleans the blog data. The cleaned content is then sent to a Gemini-powered AI agent to generate a newsletter and LinkedIn teaser. Finally, the workflow distributes the content via LinkedIn and Gmail to subscribers.

## Step-by-step  

- **Detect new blog content**  
  - **Schedule Trigger** – Runs the workflow automatically at intervals.  
  - **HTTP Request** – Fetches the latest blog post from WordPress.  
  - **Last ID** – Retrieves the last processed blog ID from Google Sheets.  
  - **If** – Compares IDs to check if the blog is new.  
  - **Update Last ID** – Updates the sheet with the latest blog ID.  

- **Clean and generate AI content**  
  - **data cleanse** – Cleans HTML, extracts title, content, and image.  
  - **AI Agent2** – Generates newsletter and teaser content.  
    - **Google Gemini Chat Model** – Provides AI model for content generation.  

- **Distribute content across channels**  
  - **Format Response** – Parses and structures AI output.  
  - **Create a post** – Publishes content on LinkedIn.  
  - **Email List** – Fetches subscriber emails from Google Sheets.  
  - **Loop Over Items** – Iterates through each recipient.  
  - **Send Email** – Sends HTML newsletter via Gmail.  

## Why use this?  
- Automates end-to-end blog promotion workflow  
- Prevents duplicate publishing using ID tracking  
- Uses AI to generate engaging content instantly  
- Saves time on manual posting and emailing  
- Easily scalable for growing audiences

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, LinkedIn, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
