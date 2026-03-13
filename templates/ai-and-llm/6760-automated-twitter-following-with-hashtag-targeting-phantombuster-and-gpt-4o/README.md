# ✨ Automated Twitter following with hashtag targeting, Phantombuster, and GPT-4o

> ⚡ **60 views** · ✨ [AI & LLMs](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for  
Growth marketers, community managers, and personal-brand builders who want to steadily grow their Twitter (X) network by following new, relevant accounts on autopilot—while respecting daily limits.

## How it works / What it does  
1. **Schedule Trigger** fires every hour at a specified minute.  
2. **Select Cookie** picks a rotating Twitter session-cookie based on time slices.  
3. **AI Agent** creates a realistic AI/BPA hashtag.  
4. **Phantombuster Hashtag Agent** scrapes recent tweets → extracts profile handles.  
5. **Set Item** builds a small CSV with one profile; **Launch AF Agent** instructs the Phantombuster Auto-follow agent to follow it.  
6. Rate-limit nodes cap follows to roughly 50-80 per day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `twitter_session_cookies.txt` – one cookie per line.  
3. Adjust schedule or search parameters as needed.  
4. Activate the workflow; it will run hourly and follow 1 new profile each launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change niche: edit hashtag prompt in **AI Agent**.  
- Follow more accounts: raise `numberOfAddsPerLaunch` and schedule frequency.  
- Use Google Drive/Dropbox instead of SharePoint: swap the cookie download node.

## 🔗 Nodes Used

Phantombuster, Schedule Trigger, AI Agent, OpenAI Chat Model, Extract from File, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
