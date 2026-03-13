# 📱 Auto-follow Instagram profiles via Phantombuster and SharePoint

> ⚡ **361 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

## Who’s it for  
Community managers, growth hackers, and brands that want to grow their
Instagram audience by automatically following new, relevant profiles—
while respecting daily limits.

## How it works / What it does  
1. **Schedule Trigger** runs hourly at a specified minute.  
2. **Select Cookie** chooses a rotating Instagram session-cookie (time-slice logic).  
3. **Get List of Accounts** downloads a CSV of seed profiles from SharePoint.  
4. **Follower Collector Agent** (Phantombuster) fetches each seed
   profile’s followers (limit set by `ENV_AMOUNT_FOLLOWERS_PER_PROFILE`).  
5. **Autofollow Agent** follows up to `ENV_PROFILES_TO_PROCESS` of those
   followers per launch.  
6. **Wait** nodes pause between Phantombuster calls and poll until each
   run is complete.  
7. Rate-limit configuration keeps follows between 1 and 40 per hour.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, (optional) OpenAI API key if you later add AI.  
2. In SharePoint › “Phantombuster” folder add:  
   • `instagram_session_cookies.txt` – one cookie per line.  
   • `accounts_to_follow.csv` – header `profileUrl`, one seed profile per line.  
3. Update **Set ENV Variables** to control profiles/launch and followers/profile.  
4. Adjust schedule frequency or Wait durations to meet your plan limits.  
5. Activate the workflow; it will follow new profiles every hour.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- Microsoft 365 SharePoint tenant

## How to customize  
- Scrape hashtags instead of followers: replace the Follower Collector
  agent with a Hashtag‐to‐Profiles agent.  
- Increase speed: raise `ENV_PROFILES_TO_PROCESS` and cron frequency
  (ensure you stay within Instagram limits).  
- Swap SharePoint for Drive/Dropbox by replacing storage nodes.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Extract from File, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
