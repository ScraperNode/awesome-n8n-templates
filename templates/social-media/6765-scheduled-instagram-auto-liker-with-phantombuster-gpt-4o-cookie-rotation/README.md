# 📱 Scheduled Instagram auto-liker with Phantombuster, GPT-4o & cookie rotation

> ⚡ **1,797 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for  
Social-media managers and brands that want to keep their Instagram
accounts active by automatically liking fresh posts under selected
hashtags—hands-free and rate-limited.

## How it works / What it does  
1. **Schedule Trigger** runs every 2 hours at a specified minute.  
2. **Select Cookie** chooses a rotating Instagram session-cookie
   (time-slice logic).  
3. **Generate Random Hashtag** (GPT-4o) outputs a realistic AI/BPA
   hashtag.  
4. **Instagram Hashtag Agent** (Phantombuster) scrapes up to
   `ENV_MAX_POSTS_PER_HASHTAG` recent posts.  
5. **Get Random Post** selects one; **duplicate checker** ensures it
   hasn’t been liked before (SharePoint CSV).  
6. Builds `instagram_posts_to_like.csv`, uploads to SharePoint, then
   launches the **Auto-like Agent** which likes the post.  
7. Post URL is appended to `instagram_posts_already_liked.csv` to avoid
   duplicates.  
8. **Wait** nodes throttle launches to ~12 likes per profile daily.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API
   key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` – one cookie per line.  
   • `instagram_posts_already_liked.csv` with header `postUrl`.  
3. Adjust **Set ENV Variables** to change max posts per scrape.  
4. Activate the workflow; it will like one post every 2 hours.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account
- Microsoft 365 SharePoint tenant

## How to customize  
- Target a different niche: edit hashtag prompt in **Generate Random Hashtag**.  
- Like more posts: raise `ENV_MAX_POSTS_PER_HASHTAG`,
  `numberOfPostsPerLaunch`, or schedule frequency.  
- Replace SharePoint with Drive/Dropbox by swapping storage nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
