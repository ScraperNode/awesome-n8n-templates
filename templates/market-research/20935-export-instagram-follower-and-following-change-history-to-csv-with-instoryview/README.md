# 📊 Export Instagram follower and following change history to CSV with Instoryview

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Export stored follower or following change history for a tracked Instagram account with [Instoryview](https://instoryview.com). This manual workflow generates a CSV, including a header-only file for empty results, and a JSON summary with data coverage and warnings.

## How it works
1. Starts when you manually execute the workflow.
2. Sets the tracked Instagram username, whether to export followers or following changes, and an inclusive date range with timezone.
3. Validates the settings and builds the Instoryview changes API request URL.
4. Calls the Instoryview Open API to fetch all change-history pages using cursor pagination (up to 100 pages with a 1.5-second interval).
5. Checks page completeness and account and date-range consistency, then prepares normalized event rows and a JSON summary. Duplicate events, changing summaries, or incomplete pagination stop the export.
6. Creates a CSV file from the change rows, or generates an empty CSV containing only headers when no changes are returned.

## Setup
1. Track the target Instagram account in Instoryview and wait for tracking history to accumulate.
2. Create an API key with the data:read scope in [Instoryview Developer settings](https://instoryview.com/settings/developers). In Read all change pages, create or select an n8n Header Auth credential: header name Authorization, header value Bearer YOUR_API_KEY.
3. Update the Export settings values (username, followers/following, from/to dates, and timezone) to match what you want to export.

## Requirements
- An Instoryview account with access to the selected tracked account and its retained change history, a data:read API key, and n8n with the built-in HTTP Request, Code, and Convert to File nodes.

## Customization
- Choose followers or following, an inclusive date range of up to 366 days, and an IANA timezone. Import CSV ID columns as Text to preserve long Instagram IDs.

## Additional info
These API reads use zero new collection credits and never initiate a paid lookup or create tracking. Detected timestamps record when Instoryview observed a change, not the exact Instagram action time. Fetching all pages does not make partial or unknown tracking history complete. The workflow stops on HTTP errors or unfinished pagination at its 100-page ceiling; reduce the date range and rerun. Changes cursors expire after 15 minutes. See the [changes API guide](https://instoryview.com/docs/changes) for coverage and error details.

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
