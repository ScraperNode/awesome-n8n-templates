# 📊 Build an SEO knowledge graph digital twin with Claude, Postgres, and Slack

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow crawls a website from its sitemap, extracts on-page content and links, uses Anthropic Claude to identify keywords and entities, stores everything as an SEO knowledge graph in Postgres, then posts crawl health stats to a Slack channel.

## How it works
1. Triggers manually or on a weekly schedule to start a crawl using the configured seed URL, sitemap URL, page limit, and Slack channel.
2. Fetches sitemap.xml, parses and deduplicates page URLs (optionally same-domain only), and batches them for processing up to the max page count.
3. For each page URL, downloads the HTML and extracts the title, meta description, H1s, body text, and outbound links.
4. Sends the page content to Anthropic Claude to return structured JSON for primary/secondary keywords, named entities, and topic categories.
5. Writes the page node plus keyword, entity, and link relationships into Postgres tables (seo_pages, seo_keywords, seo_entities, seo_page_keywords, seo_page_entities, seo_page_links).
6. After all pages are processed, queries Postgres for digital-twin stats (pages, unique keywords, entities, internal links, orphan pages) and posts the summary to Slack.

## Setup
1. Create a Postgres database and add an n8n Postgres credential, then create the required tables and constraints used by the queries (seo_pages, seo_keywords, seo_entities, seo_page_keywords, seo_page_entities, seo_page_links, including the ON CONFLICT keys).
2. Add an HTTP Header Auth credential for the Anthropic API (x-api-key) and ensure the selected model name in the config matches your Anthropic access.
3. Add a Slack credential, set or create the target channel, and update seedUrl, sitemapUrl, maxPages, sameDomainOnly, anthropicModel, and slackChannel in the crawl configuration.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
