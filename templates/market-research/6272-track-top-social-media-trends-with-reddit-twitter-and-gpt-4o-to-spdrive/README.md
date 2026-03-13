# 📊 Track top social media trends with Reddit, Twitter, and GPT-4o to SP/Drive

> ⚡ **946 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who’s it for  
Content creators, marketers, journalists, and product teams who need a quick, automated snapshot of what the internet is talking about—served as a ready-to-use spreadsheet every morning.

## How it works / What it does  
1. **Manual Trigger / Cron** starts the flow.  
2. **Set Config** picks today’s date and a topic keyword (default “Artificial Intelligence”).  
3. **API calls** gather trend data:  
   • **Reddit API** → /r/artificial “hot” posts.  
   • **Twitter (X) Trends** via our own plemeo endpoint or any other social API.  
   (Add additional sources before the **Merge Data** node—Instagram, YouTube, TikTok, etc.)  
4. **Aggregate Content** concatenates raw titles; **AI Agent** (GPT-4o) analyses them and returns the top 5 trends in JSON.  
5. **Prepare Excel** formats each trend into rows; **Create Excel** turns them into an `.xlsx` file.  
6. **Upload** the file to **SharePoint** (swap for Google Drive, Dropbox, S3—just replace the node).  

## How to set up  
1. Import the template into n8n (cloud or self-hosted).  
2. Create credentials: Reddit OAuth2, OpenAI, and your preferred storage (SharePoint, Drive, etc.).  
3. In **Set Config** choose your default `topic`; adjust the cron schedule if required.  
4. If you’re using Google Drive/Dropbox: delete the SharePoint node and add the corresponding upload node instead.  
5. (Optional) Add more APIs—duplicate **Merge Data** inputs and map their results in **Aggregate Content**.  
6. Save & activate. A spreadsheet called `social-media-trends.xls` appears in your target folder each run.

## Requirements  
- n8n 1.33 +  
- Reddit app (OAuth2)  
- OpenAI account
- One storage credential: SharePoint, Google Drive, Dropbox, or any other supported provider

## How to customize  
- Change the number of trends: edit the limit in **Aggregate Content** and the prompt in **AI Agent**.  
- Want CSV instead of Excel? Swap **Create Excel** for **Spreadsheet File → to File (CSV)**.  
- Push trends to Slack/Teams: branch after **Prepare Excel** and add a chat node.  
- Fully serverless? Trigger via webhook instead of manual/cron.

## 🔗 Nodes Used

HTTP Request, Spreadsheet File, AI Agent, OpenAI Chat Model, Microsoft SharePoint

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
