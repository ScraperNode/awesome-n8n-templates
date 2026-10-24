# 📊 Compare Google SERPs between markets using HasData and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Compare Google search results for paired English queries in two countries before adapting content. This workflow records shared URLs and domains, reads a bounded sample of ranking pages, and saves titles, headings, excerpts and unvisited sources to Google Sheets for an editor's localization review.

## How it works
1. Read topic IDs and paired queries from the Topics tab. Validate both market settings and reject duplicate topics or oversized batches before making paid requests.
2. Read existing Results once and check saved keys. Search each topic in both markets using the configured location and country code, with desktop device and English interface language.
3. Retain both SERPs and compare their returned URLs and domains. Failed searches or fewer than five usable results in either market produce insufficient evidence, not an intent conclusion.
4. Select unique pages from the top three results of each search in round-robin order. The shared page limit applies across all topics and markets, rather than separately to each query.
5. Read selected pages with HasData and extract main text, titles and headings. Keep source URLs attached to responses. Failed reads and truncated excerpts remain visible. An empty sample skips page requests without discarding the SERPs.
6. Save the paired comparison, page samples, unvisited URLs and editorial questions to Google Sheets. Editors review local terminology, page formats and customer needs before deciding whether to adapt one page or plan separate pages. Optional reviewer columns remain untouched.

## Setup
1. Install the verified HasData community node. Connect HasData credentials to Fetch search evidence and Read source pages. Connect Google Sheets credentials to Read input, Read Results and Save review queue.
2. Create a Topics tab with topic_id, query_a and query_b. Add one topic with two confirmed English queries. For example, compare football tickets in the US and UK.
3. Create a Results tab with result_key, checked_at, topic, status, summary, market_a_query, market_b_query, shared_url_count, shared_domains, page_samples and evidence_json. Optionally add review_status and editor_notes.
4. Set spreadsheet_id, location, gl, location_b and gl_b. Choose canonical locations in the HasData playground and matching country codes for the two countries.
5. Start with max_pages set to 2, run manually and inspect the search contexts and page excerpts. Check status and unvisited sources before drawing a localization conclusion.

## Requirements
- An n8n workspace with the verified HasData community node installed.
A HasData account with credits for Google SERP and Web Scraping requests.
A Google account with access to the spreadsheet and an editor who can review the two English-language markets.

## Customization
- Choose your countries, locations and paired queries. The workflow is designed for English-language comparisons, not automatic translation.
Set max_items from 1 to 10 topics and max_pages from 1 to 10 pages across the whole run.
Adjust content_selector when page text is missing. Enable js_rendering only for pages that need it. Export Results before rerunning if you need historical snapshots.

## Additional info
Designed for SEO editors planning localization. URL overlap does not prove search intent, and different results do not automatically justify separate pages. Each topic uses two paid Google SERP requests plus the selected Web Scraping reads. No model account is required, and automatic paid retries are disabled. Run one execution at a time. Matching rows retain the latest review, not an archive. The workflow does not measure demand, translate content, publish pages or change hreflang.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
