# 📊 Get comments from Facebook page

> ⚡ **12,703 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

**This workflow automates the collection of comments from posts on a Facebook Page.**  

Providing clean, structured data for analysis or further automation.

**What this workflow does**
- Fetches recent posts from a Facebook Page.
- Retrieves comments for each post.
- Outputs structured data of Comments and Posts for further use.

**Setup**
- Facebook Graph API: Connect your Access Token with the required permissions (pages_read_engagement, pages_read_user_content).
- Workflow: Set the Page ID and the number of posts to fetch in the "Set Number of Latest Posts to Fetch" node.

## 🔗 Nodes Used

Facebook Graph API, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
