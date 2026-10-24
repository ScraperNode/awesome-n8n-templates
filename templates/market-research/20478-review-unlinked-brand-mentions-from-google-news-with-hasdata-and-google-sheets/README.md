# 📊 Review unlinked brand mentions from Google News with HasData and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Find articles mentioning your brand and check whether the inspected pages link to your website. This workflow searches Google News, combines duplicate articles, reads a limited shortlist and saves matching passages, observed links and review statuses in Google Sheets. It prepares research candidates without sending outreach.

## How it works
1. Load the brand domain, aliases, excluded domains, country and language settings. Validate limits and required values before making paid requests.
2. Read queries from Queries and reject duplicates or oversized batches. Read Results once and check for duplicate saved keys. Every query runs again, rather than skipping previously saved articles.
3. Search Google News with HasData and retain article titles, publishers, publication dates and URLs. Missing responses remain unavailable, not evidence that your brand has no coverage.
4. Combine duplicate article URLs, keep all queries that returned each article and exclude your own domain or configured sources. Prioritize articles returned by several queries, then publication date. Limit page reads across the entire run.
5. Read selected articles and extract text and links. Match brand aliases with word boundaries and look for direct links to your domain or subdomains. Keep failed reads and truncated content distinguishable from usable evidence.
6. Save the discovery inventory and article review queue to Google Sheets. Filter review_unlinked_mention for matching text without an observed direct brand link. Check the complete page, publisher ownership and relevance before contacting anyone. Reviewer columns remain untouched.

## Setup
1. Install the verified HasData community node. Connect HasData credentials to Fetch search evidence and Read source pages. Connect Google Sheets credentials to Read input, Read Results and Save review queue.
2. Create Queries with the header query and add one brand-focused news search. Create Results with result_key, checked_at, topic, status, title, source_url, publisher, published_at, brand_excerpt, observed_links, citing_queries and evidence_json. Optionally add review_status and editor_notes.
3. In Settings, replace spreadsheet_id, own_domain and brand_aliases. Add excluded domains and aliases one per line. Set gl and hl to the country and language codes you need.
4. Start with one query and max_pages set to 2. Run manually and inspect the article text and links. If extraction fails, check content_selector before considering JavaScript rendering.

## Requirements
- An n8n workspace with the verified HasData community node installed.
A HasData account with credits for Google News and Web Scraping requests.
A Google account with access to the spreadsheet and someone to review candidate articles.

## Customization
- Use your brand, product aliases and news queries. Exclude owned publications or sources that are not suitable for your research.
Adjust max_items and max_pages from 1 to 10. The page budget covers all queries together.
Change the main-content selector for your sources and enable js_rendering only when needed. Export Results before refreshing if you need a permanent archive.

## Additional info
A review candidate means a brand match and no direct brand-domain link in the inspected response. It does not prove that the complete article lacks a link. Redirected links, incomplete text and publisher relevance need manual checks. Each query uses one paid Google News request plus selected page reads. No AI model account is required. Automatic paid retries are disabled. Run one execution at a time. Matching result keys are updated. The workflow does not find contacts, draft pitches or send messages.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
