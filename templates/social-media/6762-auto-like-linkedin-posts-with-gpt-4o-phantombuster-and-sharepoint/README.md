# 📱 Auto-like LinkedIn posts with GPT-4o, Phantombuster and SharePoint

> ⚡ **127 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for  
Recruiters, B2B marketers, and thought-leadership builders who want to boost their LinkedIn engagement by automatically liking fresh, relevant posts—while staying under LinkedIn’s daily limits.

## How it works / What it does  
1. **Schedule Trigger** runs hourly at a specified minute.  
2. **Select Cookie** chooses a rotating LinkedIn session-cookie (time-slice logic).  
3. **Generate Random Search Term** (GPT-4o) outputs a realistic AI/BPA keyword.  
4. **Phantombuster LinkedIn Content Search Agent** scrapes recent posts → **Get Posts**.  
5. **Get Random Post** selects one post, checks it isn’t already liked (SharePoint CSV) and appends the company-ID query param. If a personal LinkedIn Account is used, no company-ID is needed.
6. Creates `linkedin_posts_to_like.csv`, uploads to SharePoint, and provides the URL to **Autolike Agent** which likes the post.  
7. The post URL is added to `linkedin_posts_already_liked.csv` to avoid duplicates.  
8. **Wait** nodes throttle launches to ≈400 likes/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `linkedin_session_cookies.txt` – one cookie per line.  
   • `linkedin_posts_already_liked.csv` with header `postUrl`.  
3. Update **Set ENV Variables** with your LinkedIn company ID (`ENV_COMPANY_ID_LINKEDIN`).  
4. Adjust schedule or likes-per-launch as needed.  
5. Activate the workflow; it will run hourly and like one new post per launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account (GPT-4o)  
- Microsoft 365 SharePoint tenant

## How to customize  
- Change niche: edit the prompt in **Generate Random Search Term**.  
- Like more posts: raise `numberOfLinesPerLaunch` and schedule frequency.  
- Swap SharePoint for Google Drive/Dropbox: replace the upload/download nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
