# 📊 YouTube competitor video analytics to Google Sheets

> ⚡ **338 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Screenshot 20251014 191255.png](fileId:2945)

## Short Description:
Automatically collect and analyze your competitor’s YouTube performance. This workflow extracts video titles, views, likes, and descriptions from any YouTube channel and saves the data to Google Sheets — helping creators spot viral trends and plan content that performs.

## Who’s it for  
For content creators, YouTubers, and marketing teams who want to track what’s working for their competitors — without manually checking their channels every day.

## How it works  
This workflow automatically collects data from any YouTube channel you enter.  
You just write the channel name in the form — n8n fetches the channel ID, gets all recent video IDs, and extracts each video’s title, views, likes, and description.  
Finally, all the information is saved neatly into a connected Google Sheet for analysis.

## How to set up  
1. Create a Google Sheet with columns for Title, Views, Likes, Description, and URL.  
2. Connect your Google account to n8n.  
3. Add your YouTube Data API key inside the HTTP Request nodes (use n8n credentials, not hardcoded keys).  
4. Update your form submission or trigger node to match your input method.  
5. Execute the workflow once to test and verify that data is flowing into your sheet.

## Requirements  
- YouTube Data API key  
- Google Sheets account  
- n8n cloud or self-hosted instance  

## How to customize  
You can modify the JavaScript code node to include more metrics (like comments or publish date), filter by keywords, or change the output destination (e.g., Airtable or Notion).

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
