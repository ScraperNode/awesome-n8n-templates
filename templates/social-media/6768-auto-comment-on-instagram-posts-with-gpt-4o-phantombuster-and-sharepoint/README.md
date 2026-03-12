# 📱 Auto-comment on Instagram posts with GPT-4o, Phantombuster, and SharePoint

> ⚡ **586 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who’s it for  
Social-media teams and influencers who want to grow engagement by
automatically posting short, relevant comments on new Instagram posts
under rotating hashtags—while staying under platform limits.

## How it works / What it does  
1. **Schedule Trigger** fires every 2 h at a specified minute.  
2. **Select Cookie** chooses a rotating Instagram session-cookie by
   time slice.  
3. **Generate Random Hashtag** (GPT-4o) outputs a realistic AI/BPA tag.  
4. **Hashtag Agent** (Phantombuster) scrapes up to
   `ENV_MAX_POSTS_PER_HASHTAG` recent posts.  
5. **Get Random Post** picks one; **Create Comment** (GPT-4o) crafts a
   ≤150-character reply in the chosen language.  
6. Builds `instagram_post_to_comment.csv`, uploads to SharePoint, then
   launches the **Auto-comment Agent** which posts the reply.  
7. Post URL is logged to `instagram_posts_already_commented.csv`
   to avoid duplicates.  
8. **Wait** nodes throttle launches to ≈80 comments/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` – one cookie per line.  
   • `instagram_posts_already_commented.csv` with header `postUrl`.  
3. Edit **Set ENV Variables** to set default language, prompt, and max
   posts per scrape.  
4. Activate the workflow; it will comment every 2 h.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account (GPT-4o)  
- Microsoft 365 SharePoint tenant

## How to customize  
- Change tone/length: tweak prompt in **Create Comment**.  
- Comment more often: raise `ENV_MAX_POSTS_PER_HASHTAG`,
  adjust cron, and agent limits.  
- Swap SharePoint for Drive/Dropbox by replacing storage nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
