# 📊 Get Google search results (SERPs) for SEO research

> ⚡ **14,744 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Use Case
Research search engine rankings for SEO analysis:
- You need to track keyword rankings for your website
- You want to analyze competitor positions in search results
- You need data for SEO competition analysis
- You want to monitor SERP changes over time

## What this Workflow Does
The workflow uses ScrapingRobot API to fetch Google search results:
- Retrieves SERP data for your target keywords
- Captures URL rankings and page titles
- Processes up to 5000 searches with free account
- Organizes results for SEO analysis

## Setup
1. Create a [ScrapingRobot account](https://billing.scrapingrobot.com/aff.php?aff=2) and get your API key
2. Add your ScrapingRobot API key to the HTTP Request node's `GET SERP` token parameter
3. Either connect your keyword database (column name "Keyword") or use the "Set Keywords" node
4. Configure your preferred output database connection

## How to Adjust it to Your Needs
- Modify keyword source to pull from different databases
- Adjust the number of SERP results to capture
- Customize output format for your reporting needs


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 🔗 Nodes Used

HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
