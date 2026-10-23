# 📊 Monitor TikTok hashtag trends with Apify and send ranked reports via Gmail

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for social media managers, content strategists, and marketing teams who need to track TikTok engagement trends across multiple hashtags on a recurring basis — without manually checking each one.

## How it works

1. A schedule trigger fires the workflow at a configured interval (e.g., daily or hourly).
2. A list of hashtag queries is retrieved from an n8n Data Table.
3. Each query is processed in a loop: a POST request is sent to the Apify TikTok scraper API, which returns up to 50 recent posts per hashtag from the past 7 days.
4. A first Code node computes a weighted engagement score for each post: `likes × 1 + comments × 2 + shares × 3 + views / 1000`.
5. A second Code node re-ranks the posts, assigns a level (High / Medium / Low), and formats the top 15 results.
6. The ranked results are saved to an n8n Data Table for persistence and simultaneously sent as a styled HTML email report via Gmail.
7. The loop continues to the next query batch until all hashtags are processed.

## How to set up

- [ ] Connect your Apify account credentials to the **Scrape TikTok via Apify** HTTP Request node
- [ ] Connect your Gmail account (OAuth2) to the **Send TikTok Report by Email** node and set the recipient address
- [ ] Configure the **Get Queries from Table** node to point to your Data Table containing the list of hashtags to monitor
- [ ] Configure the **Save Rankings to Table** node to point to the destination Data Table where results should be stored
- [ ] Set the desired run frequency in the **When Schedule Triggers** node
- [ ] Adjust the scoring weights in the **Score and Sort TikTok Posts** code node if needed

## Requirements

- Apify account with access to the `clockworks~tiktok-scraper` actor
- Gmail account with OAuth2 credentials configured in n8n
- Two n8n Data Tables: one for input queries, one for storing ranked results

## How to customize

- Adjust the engagement scoring formula in the `Score and Sort TikTok Posts` node to weight views, shares, or comments differently based on your priorities.
- Extend the email template to include additional social platforms (Reddit, Instagram) by adding parallel scraping branches before the ranking step.
- Change the `resultsPerPage` or `oldestPostDateUnified` parameters in the Apify API call to control the volume and recency of posts fetched.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
