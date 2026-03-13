# 🎣 Generate qualified Instagram leads from hashtags with Apify and Google Sheets

> ⚡ **1,690 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Instagram Hashtag Lead Generation

Automate the process of finding and qualifying Instagram leads based on hashtags. This workflow reads hashtags from Google Sheets, scrapes Instagram for posts using Apify, analyzes caption content and language, compiles unique usernames, gathers detailed user info, and filters leads based on follower count.

---

## How It Works

1. **Fetch Hashtags**  
   The workflow starts and pulls a list of hashtags from a Google Sheet.

2. **Scrape Instagram Posts**
   For each hashtag, it builds Instagram explore URLs and scrapes posts using Apify.

3. **Analyze Captions**
   Each caption is cleaned, hashtags and links are removed, and language/content is analyzed (English/French/Spanish).

4. **Extract & Filter Usernames**
   Usernames are combined and deduplicated, their Instagram profiles scraped for follower counts and other details.

5. **Qualified Leads**
   Only users with followers in your target range are kept as qualified leads for outreach or analysis.

---

## Requirements

- An n8n instance.
- Apify API key.
- Google account with a Sheet containing hashtags.
- Apify Instagram Scraper actor access.
- The Google Sheet should have a column with hashtags.

---

## Setup Instructions

1. **Add Credentials**  
   In n8n, add your Apify API key and Google Sheets credentials.

2. **Configure Google Sheets Nodes**  
   Choose your credentials, spreadsheet, and sheet name in the “Get list of Hashtags” node.

3. **Configure Apify Request Nodes**  
   Enter your Apify API key and select the Instagram scraper actors.

4. **Adjust Filtering**  
   Edit the min/max follower count in the relevant filter node to match your needs.

5. **Test & Run**  
   Manually execute the workflow or add a trigger to run on a schedule.

---

## Customization Options 💡

- **Trigger:** Add a schedule or webhook to automate execution.
- **Language Filtering:** Modify keyword lists or add language detection logic.
- **Lead Output:** Extend the workflow to save leads to a CRM or send notifications.

---

## Details

**Nodes used in workflow:**
- Manual Trigger
- Google Sheets
- Code
- HTTP Request (Apify)
- IF (Conditional)
- Aggregate
- Remove Duplicates
- Sticky Note

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
