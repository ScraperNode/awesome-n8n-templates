# 📊 Find competitor-citing publishers using HasData and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Find pages cited by Google AI Mode that mention your competitors, then review them as potential publisher opportunities. The workflow reads shortlisted pages and saves matching passages, brand evidence and citing prompts to Google Sheets so SEO and PR teams can decide which sources deserve further research.

## How it works
1. Read customer research questions from the Prompts tab. Validate your brand settings and input limits, rejecting duplicate prompts and oversized batches before making paid requests.
2. Read the existing Results tab and check for duplicate saved keys. Every input prompt is searched again on each run; the saved rows are not a cache that skips previously processed queries.
3. Use HasData to retrieve Google AI Mode citations for each prompt. Combine repeated source URLs and retain all the prompts that cited each page.
4. Prioritize pages cited across several prompts. Exclude your own domain, configured competitor domains and selected social platforms before reading pages. Select up to max_pages for the whole run.
5. Fetch a limited shortlist with HasData Web Scraping and extract page text, titles, headings and links. Keep the source URL attached to each response. Failed reads, excluded sources and sources beyond the page budget remain visible in the results.
6. Look for named competitors and your brand aliases in the extracted text, retaining the actual matching passages. Check returned links for your domain too. Mark pages with competitor mentions and no observed brand match as review_publisher_fit; mark pages with existing brand evidence separately.
7. Save both the prompt-level citation inventory and the page-level research queue to Google Sheets. Filter status to review_publisher_fit and inspect competitors_observed, citing_prompts and source_url before deciding whether a publisher is relevant. Matching saved keys are updated while optional review_status and editor_notes columns are left untouched.

## Setup
1. Install the verified HasData community node. Connect HasData credentials to Fetch search evidence and Read source pages, and Google Sheets credentials to Read input, Read Results and Save review queue. No OpenAI or other model account is required.
2. Create a Prompts tab with the header query and one question per row. Create a Results tab with these headers: result_key, checked_at, topic, status, summary, citing_prompts, competitors_observed, brand_evidence, source_url, evidence_json. You can add review_status and editor_notes for your own decisions.
3. In Settings, enter spreadsheet_id and replace the example own_domain, brand_aliases, competitor_names and excluded_domains with your business and competitors. Use one entry per line for list settings. Add competitor-owned publications to excluded_domains when you identify them.
4. Start with one prompt and max_pages set to 2. Run manually and inspect the resulting source pages and matching excerpts. If page text is missing, adjust content_selector or enable js_rendering for sites that need it. Run only one execution at a time.

## Requirements
- An n8n instance with the verified HasData community node installed.
A HasData account with credits for Google AI Mode and Web Scraping requests.
A Google account with read and write access to the selected spreadsheet.

## Customization
- Use commercial research questions for your own category, such as best web scraping APIs for small teams, and configure your brand and competitor names to match.
Adjust max_items and max_pages within the supported 1-10 ranges. The default is five prompts and up to five source-page reads per run. Optional location and country settings can narrow the search context.
Keep js_rendering disabled for readable HTML pages. Enable it only when needed; rendering can increase request costs. Export the results before refreshing if you need a historical archive.

## Additional info
Designed for SEO and PR research, not automatic outreach. A citation does not prove endorsement, publisher independence or a brand mention. No match in extracted text does not prove absence from the full page. Inspect ownership, topical fit and complete page coverage before contacting anyone. The workflow does not find contacts, draft pitches or send messages. Each execution uses paid HasData requests, with no automatic retries. Results retains the latest values for matching keys; rows from older input scopes are not automatically removed, so check checked_at when reviewing a run.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
