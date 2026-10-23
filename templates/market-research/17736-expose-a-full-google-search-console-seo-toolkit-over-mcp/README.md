# 📊 Expose a full Google Search Console SEO toolkit over MCP

> ⚡ **228 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Turn n8n into a Google Search Console MCP server. This workflow exposes 18 tools any MCP client (Claude, Cursor, etc.) can call — search analytics, URL inspection, sitemaps, the Indexing API, site verification, ownership management, and PageSpeed / Core Web Vitals — all through one Google credential.

## How it works
1. An MCP client connects to the MCP Server Trigger endpoint and auto-discovers all attached tools.
2. Every tool is a single HTTP Request Tool calling a Google API through one shared Google credential — no Code nodes, no sub-workflows.
3.  Site management: list, get, add, or delete Search Console properties.
4. Verification & ownership: generate FILE/META/DNS verification tokens, verify ownership, and list or update verified owners (Site Verification API).
5.  Sitemaps: list a property's sitemaps (index + child), fetch one sitemap's status, submit, or delete.
6.  Search analytics: query clicks, impressions, CTR, and position by query, page, country, device, or date — with optional server-side dimension filters and pagination.
7. URL inspection: check a URL's index status, coverage, canonical, mobile usability, and rich results.
8. Indexing API: send single or bulk (up to 100) URL update/delete notifications and read notification metadata.
9. PageSpeed Insights: return real-user Core Web Vitals (LCP, INP, CLS) plus a performance score for any page.

## Setup
1. In Google Cloud, enable four APIs: Google Search Console API, Web Search Indexing API, Site Verification API, and PageSpeed Insights API.
2. Create a Google OAuth2 credential in n8n (or use a Service Account) and request these scopes: https://www.googleapis.com/auth/webmasters, https://www.googleapis.com/auth/indexing, https://www.googleapis.com/auth/siteverification, and openid (openid is required for PageSpeed). Publish the OAuth consent screen so tokens don't expire.
3. Select that one credential on every tool node in the workflow.
4. Make sure the authenticated Google account is a verified Owner of each target property — required for the Indexing API and ownership-management tools.
5. Activate the workflow, open the MCP Server Trigger, copy the MCP endpoint URL, and register it in your MCP client. All 18 tools become available immediately.

## Requirements
- An n8n instance (self-hosted or Cloud) with the LangChain / MCP nodes available.
- A Google account (or Service Account) with access to your Search Console properties — verified Owner if you'll use the Indexing API or ownership tools.
- A Google Cloud project with the four APIs enabled and an OAuth2 client (or Service Account key).
- An MCP client (Claude, Cursor, etc.) to connect to the endpoint.

## Customization
- Swap the OAuth2 credential for a Service Account for fully headless automation.
- Add Bearer or Header auth on the MCP Server Trigger to lock the endpoint down (or keep it open behind a private URL).
- Make it read-only by removing the write tools (add/delete site, submit/delete sitemap, set_owners, indexing publish).
- une the analytics tool defaults (rowLimit, date range) to your needs.
- Extend it with adjacent tools (GA4, Bing Webmaster) by duplicating the HTTP Request Tool pattern.

## Additional info
18 tools, grouped:
• Site management (6): list_sites, get_site, add_site, delete_site, get_verification_token, verify_site
• Ownership & access (2): list_owners, set_owners
• Sitemaps (4): list_sitemaps, get_sitemap, submit_sitemap, delete_sitemap
• Indexing API (3): indexing_publish, indexing_batch_publish, indexing_get_metadata
• Inspection & Analytics (3): inspect_url, query_search_analytics, pagespeed_analyze

Good to know:
- Google can't filter analytics by metrics (position, CTR, impressions) — request rows and filter those in your analysis (e.g. "position 10–20").
- The Indexing API is officially intended for JobPosting/BroadcastEvent pages; for other URLs it acts as a recrawl nudge.
- Search Console "Full / Restricted USERS" have no API — only site OWNERS are API-manageable. Adding an owner grants real dashboard access once they open their own Search Console → Add property (it auto-verifies them as Owner).

Contact:
salmanmehboob1947@gmail.com
https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
