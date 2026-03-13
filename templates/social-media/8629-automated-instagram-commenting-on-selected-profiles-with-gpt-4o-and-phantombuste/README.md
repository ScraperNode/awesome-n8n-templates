# 📱 Automated Instagram commenting on selected profiles with GPT-4o and Phantombuster

> ⚡ **584 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for  
Influencers and social-media teams who want to *comment automatically on posts from selected Instagram profiles*—scaling engagement while staying within platform limits.  

## How it works / What it does  
1. **Schedule Trigger** runs every 2 h.  
2. **Profile Post Extractor** fetches up to 20 posts per profile from your CSV.  
3. **Select Cookie** rotates Instagram session-cookies.  
4. **Get Random Post** selects one.  
5. **Create Comment** (GPT-4o) writes ≤150-character reply in your chosen language.  
6. Builds `instagram_post_to_comment.csv`, uploads to SharePoint.  
7. **Phantombuster Autocomment Agent** posts it.  
8. Logged in `instagram_posts_already_commented.csv` to prevent repeats.  

## How to set up  
- Same as the auto-liker, but also add `instagram_posts_already_commented.csv` (header `postUrl`).  
- Define tracked profiles in `profiles_instagram.csv`.  
- Configure comment prompt & language in **Set ENV Variables**.  

## Profile CSV format  
Your `profiles_instagram.csv` must contain a header `profileUrl` and valid Instagram profile URLs. Example:  
```csv
profileUrl
https://www.instagram.com/brand_account/
https://www.instagram.com/influencer123/

## 🔗 Nodes Used

HTTP Request, Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
