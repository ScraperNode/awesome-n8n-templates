# 📊 Monitor G2 competitors reviews [Google Sheets, ScrapingBee, Slack]

> ⚡ **3,439 views** · 📊 [Market Research & Insights](../)

## Description

This workflow monitor G2 reviews URLS. 

When a new review is published, it will: 
- trigger a Slack notification 
- record the review in Google Sheets

To install it, you'll need: 
- access to Slack, Google Sheets and ScrapingBee

Full guide here: https://lempire.notion.site/Scrape-G2-reviews-with-n8n-3f46e280e8f24a68b3797f98d2fba433?pvs=4

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
