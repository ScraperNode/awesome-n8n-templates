# 📊 Scrape and summarize posts of a news site without RSS feed using AI and save them to a NocoDB

> ⚡ **30,212 views** · 📊 [Market Research & Insights](../)

## Description

The [News Site](https://www.colt.net/resources/type/news/) from Colt, a telecom company, does not offer an RSS feed, therefore web scraping is the choice to extract and process the news.

The goal is to get only the newest posts, a summary of each post and their respective (technical) keywords.

Note that the news site offers the links to each news post, but not the individual news. We collect first the links and dates of each post before extracting the newest ones.

The result is sent to a SQL database, in this case a NocoDB database.

This process happens each week thru a cron job.

**Requirements**:
- Basic understanding of CSS selectors and how to get them via browser (usually: right click &rarr; inspect)
- ChatGPT API account - normal account is not sufficient
- A NocoDB database - of course you may choose any type of output target

**Assumptions**:
- CSS selectors work on the news site
- The post has a date with own CSS selector - meaning date is not part of the news content

**"Warnings"**
- Not every site likes to be scraped, especially not in high frequency
- Each website is structured in different ways, the workflow may then need several adaptations.

## 🔗 Nodes Used

HTTP Request, NocoDB, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
