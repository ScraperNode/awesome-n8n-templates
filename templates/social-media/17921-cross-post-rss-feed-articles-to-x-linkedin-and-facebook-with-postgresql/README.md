# 📱 Cross-post RSS feed articles to X, LinkedIn and Facebook with PostgreSQL

> ⚡ **12 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads new RSS articles on a configurable schedule and turns them into ready-to-publish posts for X, LinkedIn, and Facebook. Each publication is recorded in PostgreSQL to prevent duplicates.

## How it works
1. Runs on a 15-minute schedule to start an RSS cross-posting cycle.
2. Builds and validates the RSS and destination configuration, and stops with an error summary if required values are missing or invalid.
3. Ensures a PostgreSQL ledger table exists to store publication results and prevent duplicate posting.
4. Reads items from each enabled RSS feed and normalizes article fields (title, excerpt, URL, publish date), optionally appending UTM parameters to links.
5. Creates one publication candidate per enabled channel, generates a SHA-256 content hash, and routes each candidate to X, LinkedIn, or Facebook.
6. Posts the rendered message to X, creates a LinkedIn organization post, and publishes to a Facebook Page (or skips API calls in dry-run mode) and then upserts a per-channel result record into PostgreSQL.
7. Produces a run summary with counts and warnings across all attempted publications.

## Setup
1. Add credentials for X (Twitter OAuth2), LinkedIn OAuth2, Facebook Graph API, and a PostgreSQL database.
2. Update the RSS feed URL list and message templates in the configuration step, and choose which channels to enable.
3. Set your LinkedIn organization ID and Facebook Page ID in the configuration when those channels are enabled.
4. Confirm the PostgreSQL schema/database allows creating and writing to the `workflow_factory.rss_cross_post_ledger` table.
5. Keep `dry_run` enabled until the posts and destinations look correct, then disable it to publish live.

## Requirements
- RSS feed URLs.
- X, LinkedIn, and Facebook credentials with publishing permissions.
- LinkedIn organization and Facebook Page identifiers.
- PostgreSQL access for the publication ledger.

## Customization
- Add or remove RSS feed URLs in the configuration node.
- Enable only the social channels you want to use.
- Customize each channel’s post template.
- Configure the LinkedIn organization and Facebook Page identifiers.
- Adjust filtering, lookback, and dry-run settings.

## Additional info
The workflow publishes each article independently per channel, so a failure on one platform does not prevent the others from being processed. Dry-run mode allows you to verify formatting and deduplication before enabling live publishing.

## 🔗 Nodes Used

Postgres, RSS Read, Facebook Graph API, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
