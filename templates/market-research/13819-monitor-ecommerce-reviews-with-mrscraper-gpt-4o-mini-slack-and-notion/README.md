# 📊 Monitor ecommerce reviews with MrScraper, GPT-4o-mini, Slack and Notion

> ⚡ **68 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically monitor ecommerce product reviews across multiple platforms using MrScraper, GPT-4o-mini, Slack, Notion, and Google Sheets. Extract reviews, analyze customer sentiment and brand signals with AI, send urgent Slack alerts, archive results in Notion, and receive a daily brand health digest.


## How it works
1. The workflow runs automatically every morning using the Schedule Trigger and reads the products you want to monitor from Google Sheets.
2. For each product, MrScraper's Map Agent discovers review pages or identifies reviews embedded directly on the product page.
3. MrScraper's General Agent extracts review data including review text, star rating, reviewer name, review date, photos, helpful votes, verified purchase status, and seller replies.
4. Reviews are filtered and deduplicated before being sent to GPT-4o-mini. Short reviews are normally skipped, except for 1- and 2-star reviews, which are retained because even brief negative feedback can contain important signals.
5. GPT-4o-mini analyzes each review and returns structured brand intelligence including sentiment, sentiment score, emotions, affected product dimensions, CX score, competitor mentions, viral risk, urgency, and a suggested customer service response.
6. Reviews requiring immediate attention trigger an alert in Slack, while all processed reviews and their metadata are stored in Notion.
7. After all products have been processed, the workflow calculates a Brand Awareness Score (BAS) and generates a daily digest containing sentiment trends, praises, complaints, competitor mentions, viral risks, and recommended actions. The report is then posted to Slack.

## Setup
1. Create a Google Sheet containing your products with these columns: `Platform`, `Product_URL`, `Brand_Name`, `SKU_Code`, `Category`, and `Active`. Add one row for each product SKU you want to monitor.
2. Create two scrapers in MrScraper:
3. * A Review List Scraper using the Map Agent to discover review URLs.
4. * A Review Detail Scraper using the General Agent to extract review details such as review text, rating, reviewer name, date, photo count, helpful votes, verified purchase status, and seller replies.
5. Copy the `scraperId` from each MrScraper scraper and add it to the corresponding nodes in the n8n workflow.
6. Make sure API access is enabled for your MrScraper account.
7. Connect your MrScraper, OpenAI, Slack, Notion, and Google Sheets credentials in n8n.
8. Create or configure the Notion database used to store review data. Match its properties with the fields described in the setup notes inside the workflow.
9. Update the configuration in the `Filter & Enrich Review Data` node, including your Slack monitoring channel, alert channel, Notion database ID, competitor keywords, and review alert threshold.
10. Adjust the Map Agent include/exclude patterns for the ecommerce platforms you want to monitor, such as `/review` or `/ulasan`.
11. Finally, configure the Schedule Trigger for your preferred monitoring frequency and timezone.

## Requirements
- MrScraper account with API access
- OpenAI API access for GPT-4o-mini
- Slack workspace with OAuth connected
- Notion workspace with a configured database
- Google Sheets with OAuth2 connected
- An n8n instance where the workflow can run on a schedule

## Customization
- Monitor multiple brands by using separate product lists or adapting the workflow for multiple brand configurations.
- Add Jira, Asana, or Trello to automatically create customer service tickets for critical reviews.
- Add Gmail to send the daily brand health digest by email.
- Connect stored review data to Looker Studio or Metabase for sentiment and BAS dashboards.
- Customize competitor keywords, alert thresholds, Slack channels, scraping patterns, and workflow frequency.
- Add a dedicated alert branch when customers mention switching to a competitor.

## Additional info
The Brand Awareness Score (BAS) combines average star rating, positive review rate, AI sentiment, brand loyalty signals, and viral-risk penalties into a single brand health score.
Short negative reviews with 1 or 2 stars are retained even when they contain fewer than 10 words, helping capture concise but important complaints.
The workflow uses separate Slack outputs for immediate critical-review alerts and the final daily brand health digest.
Reviews embedded directly on product pages can still be processed through the workflow's fallback logic when a dedicated review URL is unavailable.
GPT-4o-mini usage costs depend on the number and length of reviews processed and current OpenAI API pricing.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
