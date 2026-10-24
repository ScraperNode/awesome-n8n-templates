# 📊 Create AI research briefs and LinkedIn/newsletter drafts with Gemini and RSS

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually collects recent RSS/Atom stories from TechCrunch and The Verge, ranks them by keyword relevance, and optionally uses Google Gemini to generate a research briefing plus LinkedIn and newsletter drafts with source-ID citations, exporting a review bundle as JSON/Markdown/CSV.

## How it works
1. Starts when you run the workflow manually and loads your topic, audience, RSS/Atom feeds, keyword list, and lookback limits.
2. Fetches each feed over HTTPS (or uses built-in demo XML), validates and parses the XML, and extracts article titles, excerpts, dates, and canonical URLs.
3. Deduplicates and filters stories by recency and keyword matches, then ranks and selects the top sources and produces a source register.
4. If AI is enabled, sends the selected source excerpts to Google Gemini to generate a JSON research briefing that cites only the provided source IDs.
5. Validates the briefing structure and citations, then uses Google Gemini to draft LinkedIn and newsletter copy and validates that drafts cite valid source IDs and contain no URLs.
6. Renders a human-review bundle (status plus review issues, briefing, drafts, source list, and feed failures) and exports it as a downloadable JSON file that includes Markdown and a sources CSV.

## Setup
1. Add Google Gemini credentials for the two Gemini steps if you plan to set enableAI to true.
2. Update the Settings values (topic, audience, keywords, lookbackHours, maxStories, and feed URLs/allowedFeedHosts) to match your monitoring needs.
3. If running in live mode, ensure the configured feed hosts are reachable from your n8n instance and keep the allowlist aligned with your feed URLs.
4. To avoid reprocessing the same links, paste the workflow’s seenUrls output back into knownUrls before the next run.
5. After running, download and review the generated bundle before publishing anything, since the workflow only uses feed titles/excerpts and flags content for human review.

## 🔗 Nodes Used

HTTP Request, Convert to File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
