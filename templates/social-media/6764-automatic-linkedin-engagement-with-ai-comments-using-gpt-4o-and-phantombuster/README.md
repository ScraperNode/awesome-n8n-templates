# 📱 Automatic LinkedIn engagement with AI comments using GPT-4o and Phantombuster

> ⚡ **198 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who’s it for  
B2B marketers, recruiters, and personal-brand builders who want to spark
conversations on LinkedIn by automatically posting short, relevant comments on
fresh industry content—while staying under daily limits.

## How it works / What it does  
1. **Schedule Trigger** fires every hour.  
2. **Select Cookie** picks a rotating LinkedIn session-cookie (time-slice logic).  
3. **Generate Random Search Term** (GPT-4o) outputs a realistic AI/BPA keyword.  
4. **LinkedIn Search Agent** (Phantombuster) scrapes recent posts.  
5. **Get Random Post** chooses one post and passes its text to **Create Comment**
   (GPT-4o) which returns a ≤150-character reply in the chosen language.  
6. Builds `linkedin_posts_to_comment.csv`, uploads to SharePoint, and launches
   the **Auto-comment Agent** to post the reply.  
7. Post URL is logged to `linkedin_posts_already_commented.csv` to avoid
   duplicates.  
8. **Wait** nodes throttle launches to ~120 comments/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `linkedin_session_cookies.txt` – one cookie per line.  
   • `linkedin_posts_already_commented.csv` with header `postUrl`.  
3. Edit **Set ENV Variables** to set default language, comment prompt,
   company ID, etc.  
4. Adjust schedule or comments-per-launch as needed.  
5. Activate the workflow; it will run hourly and comment on one new post each
   launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change tone/length: edit the prompt in **Create Comment**.  
- Comment more often: raise `numberOfLinesPerLaunch` and schedule frequency.  
- Use Google Drive/Dropbox instead of SharePoint by swapping storage nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
