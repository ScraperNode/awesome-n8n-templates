# 🔬 Find broken links and redirect chains from sitemaps with Slack reports

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or on demand) to crawl your sitemap, extract and deduplicate links from your pages, check each link’s HTTP response without following redirects, and post a summary of new broken links and redirect chains to Slack while tracking findings in an n8n Data Table.

## How it works
1. Runs every Monday on a schedule or starts manually, then loads the sitemap URL and crawl limits from the workflow settings.
2. Fetches the sitemap XML and parses it as either a sitemap index (child sitemaps) or a flat sitemap (page URLs).
3. Selects and caps the page URLs to crawl, then fetches each page’s HTML in batches.
4. Extracts all anchor links from the fetched pages, resolves relative URLs, filters unwanted link types, and deduplicates to a capped list of distinct internal and (optionally) external URLs.
5. Requests each distinct URL once using HTTP GET with redirects disabled, then classifies results as ok, blocked, broken, or redirected-to-a-different-target.
6. Compares broken/redirected findings against previously reported items stored in an n8n Data Table and keeps only newly changed problems.
7. Posts a formatted report with counts and new findings to a Slack channel and upserts the newly reported problems back into the Data Table.

## Setup
1. Add a Slack credential and set the target channel name in the workflow settings.
2. Create an n8n Data Table named `link_rot` with columns `link_key`, `url`, `status`, `verdict`, `found_on`, and `last_seen`.
3. Update the sitemap URL (and optionally `max_pages`, `max_links`, `url_must_contain`, and `check_external`) in the workflow settings to match your site and crawl scope.

## Requirements
- A Slack credential. Nothing else - no API keys, no model, no scraping service.

## Customization
- check_external in Settings decides whether links to other sites are checked. Leaving it on is the point: your own pages rarely rot, the sites you linked to three years ago do.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
