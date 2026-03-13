# ⚒️ Pulling data from services that n8n doesn’t have a pre-built integration for

> ⚡ **225,336 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

You still can use the app in a workflow even if we don’t have a node for that or the existing operation for that. With the HTTP Request node, it is possible to call any API point and use the incoming data in your workflow 

**Main use cases:**
- Connect with apps and services that n8n doesn’t have integration with
- Web scraping

**How it works**
This workflow can be divided into three branches, each serving a distinct purpose:

1.Splitting into Items (HTTP Request - Get Mock Albums):
- The workflow initiates with a manual trigger (On clicking 'execute').
- It performs an HTTP request to retrieve mock albums data from "https://jsonplaceholder.typicode.com/albums."
- The obtained data is split into items using the Item Lists node, facilitating easier management.

2.Data Scraping (HTTP Request - Get Wikipedia Page and HTML Extract):
- Another branch of the workflow involves fetching a random Wikipedia page using an HTTP request to "https://en.wikipedia.org/wiki/Special:Random."
- The HTML Extract node extracts the article title from the fetched Wikipedia page.

3.Handling Pagination (The final branch deals with handling pagination for a GitHub API request):
- It sends an HTTP request to "https://api.github.com/users/that-one-tom/starred," with parameters like the page number and items per page dynamically set by the Set node.
- The workflow uses conditions (If - Are we finished?) to check if there are more pages to retrieve and increments the page number accordingly (Set - Increment Page).
- This process repeats until all pages are fetched, allowing for comprehensive data retrieval.

## 🔗 Nodes Used

HTTP Request, HTML Extract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
