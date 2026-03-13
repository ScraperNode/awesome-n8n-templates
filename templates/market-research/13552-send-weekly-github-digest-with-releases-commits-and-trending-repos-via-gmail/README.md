# 📊 Send weekly GitHub digest with releases, commits and trending repos via Gmail

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Send Weekly GitHub Digest with Releases, Commits, and Trending Repos                                    
                                                       
  
Stay on top of the GitHub ecosystem with a single automated weekly email covering it all.  
                                                       
## How it works    

1. A schedule trigger fires every Monday at 9am and reads your config variables. Feel free to modify schedule.

2. Three branches run in parallel:
- Releases: fetches the latest release from each watched repo via the GitHub API
- Commits: fetches recent commits or public events for each tracked repo or username
- Trending: scrapes github.com/trending for that day's actual trending repositories

3. All three branches merge into a single Code node that builds one HTML email with three labeled sections.

4. If any content was found, the email is sent via Gmail. Otherwise the workflow exits silently.

## Setup steps

1. Connect your Gmail account.
2. Open Set Variables and configure:
- recipient_email — where to send the digest
- release_repos — list of repos to watch for releases (e.g. n8n-io/n8n)
- tracked_entities — GitHub usernames or owner/repo paths to track commits- days_back — lookback window in days (default: 7)
3. Activate.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
