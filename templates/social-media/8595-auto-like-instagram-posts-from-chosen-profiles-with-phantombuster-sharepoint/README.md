# 📱 Auto-like Instagram posts from chosen profiles with Phantombuster + SharePoint

> ⚡ **2,492 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for  
Social-media managers, growth hackers, and brands who want to keep their Instagram accounts active by auto-liking posts from *specific profiles* they track—without scrolling feeds manually.  

## How it works / What it does  
1. **Schedule Trigger** runs every 2 h.  
2. **Profile Post Extractor** pulls up to 20 recent posts from each Instagram profile in your CSV.  
3. **Select Cookie** rotates Instagram session-cookies.  
4. **Get Random Post** picks one and checks against `instagram_posts_already_liked.csv`.  
5. Builds `instagram_posts_to_like.csv`, uploads to SharePoint.  
6. **Phantombuster Autolike Agent** likes the post.  
7. Liked URLs are appended to prevent duplicates.  
8. **Wait nodes** throttle activity (~12 likes/profile/day).  

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` (one per line).  
   • `instagram_posts_already_liked.csv` (header `postUrl`).  
   • `profiles_instagram.csv` with profile URLs.  
3. Adjust schedule if needed.  
4. Activate the workflow—likes will run automatically.  

## Requirements  
- n8n 1.33+  
- Phantombuster Growth plan  
- Microsoft 365 SharePoint tenant  

## How to customize  
- Add/remove tracked profiles in `profiles_instagram.csv`.  
- Adjust throttle by changing `Wait` intervals.  
- Swap SharePoint for Google Drive/Dropbox if needed.

## 🔗 Nodes Used

HTTP Request, Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
