# 🎣 Qualify TikTok influencers from username with Dumpling AI + GPT-4

> ⚡ **178 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who’s it for

This workflow is for marketers, influencer agencies, or outreach teams who want to quickly check if a TikTok user meets certain criteria before adding them to an influencer list. No manual profile checking—just drop in a username, and the system does the rest.

---

## What it does

This workflow takes a TikTok username submitted via form, fetches the user’s profile using **Dumpling AI**, then evaluates the user using **GPT-4** to decide if they qualify for influencer outreach based on predefined rules:

- 40+ videos  
- 100,000+ followers  
- 300,000+ total likes

It then checks Google Sheets:
- If the user **does not exist**, it **adds a new row**
- If the user **already exists**, it **updates the row**

---

## How it works

1. **Form Trigger**: Collects TikTok username  
2. **Dumpling AI**: Pulls TikTok profile (username, ID, followers, videos, likes, etc.)  
3. **GPT-4**: Checks if the user meets outreach criteria  
4. **Google Sheets**:  
   - Checks if user already exists  
   - Updates or appends user data + qualification status

---

## Requirements

- ✅ Dumpling AI API key (HTTP Header Auth)
- ✅ OpenAI API key (GPT-4)
- ✅ Google Sheets integration with the following columns:
  - `Tik Tok user`
  - `User ID`
  - `Follower Count`
  - `Following Count`
  - `Heart Count`
  - `Video Count`
  - `Qualified?`

---

## How to customize

- Change the qualification logic in the GPT-4 prompt  
- Add additional TikTok data (bio, profile pic, location, etc.)  
- Send a notification if the user is qualified  
- Push the qualified leads to Airtable, Notion, or your CRM

---

&gt; This workflow gives you a plug-and-play tool to qualify TikTok influencers instantly using AI—without leaving your browser or spreadsheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
