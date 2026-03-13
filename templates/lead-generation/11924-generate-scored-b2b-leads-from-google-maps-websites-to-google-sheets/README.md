# 🎣 Generate scored B2B leads from Google Maps websites to Google Sheets

> ⚡ **118 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This n8n workflow is a sophisticated B2B Lead Generation Scraper. It automates the entire journey from discovering businesses on Google Maps to extracting, scoring, and saving high-quality contact emails.

Here is a breakdown of the workflow stages:

Stage 1: Google Maps Search & Pagination
The workflow starts with a list of search queries (e.g., "Dentist New York").

Looping: It processes each query one by one.

Smart Pagination: Google Maps usually limits results per page. This workflow detects the nextPageToken and automatically re-calls the API until all available businesses for that query are collected.

Filtering: It immediately filters out closed businesses, keeping only those marked as "OPERATIONAL".

Stage 2: Deep Web Scraping
For every business found with a website, the workflow performs a two-step crawl:

Homepage Fetch: It visits the main URL to find immediate contact info.

Contact Page Discovery: A code node scans the homepage for links containing keywords like "Contact", "About", "Team", or "Impressum". It then visits these specific sub-pages to find hidden emails.

Stage 3: Email Quality Control & Scoring
This is the most advanced part of the logic. Instead of just grabbing any email, it uses a Scoring System to rank them:

The Filter: It removes technical or junk emails (e.g., sentry@, noreply@, or image files disguised as emails).

The Scorecard:

+30 Points: Domain match (e.g., info@company.com matches www.company.com).

+20 Points: Personal touch (detects dots or names like john.doe@).

-40 Points: Generic prefixes (penalizes info@, admin@, sales@).

-25 Points: Free providers (penalizes @gmail.com, @yahoo.com).

Selection: It sorts all found emails by score and keeps only the top-ranked email for each business.

Stage 4: Final Output
Deduplication: It ensures no duplicate businesses are added to your list, even if they appeared in multiple search queries.

Data Storage: The final, cleaned data—including Business Name, Address, Phone, Website, and the Best Email—is appended to a Google Sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
