# 📱 Post trending Reddit discussions to LinkedIn, Facebook and Bluesky with OpenAI

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to find a highly discussed rising thread from a chosen subreddit, uses OpenAI to generate original posts for LinkedIn, Facebook, and Bluesky, publishes them via PostWire, and logs results to Google Sheets with Gmail alerts when any network fails.

## How it works
1. Runs every day at 8:00 to load feed settings and fetch up to 25 rising posts from a specified subreddit using Reddit.
2. Filters for real discussions by requiring minimum upvotes and comments while excluding stickied and NSFW threads, and skips threads already processed in previous runs.
3. Sorts the remaining posts by comment count and selects the single most discussed thread.
4. Sends the thread details to OpenAI to generate an original angle plus platform-specific copy for LinkedIn, Facebook, and Bluesky.
5. Publishes the three posts through PostWire, appending a source link back to the Reddit thread.
6. Aggregates publishing results and appends a “posted” row to Google Sheets when all networks succeed.
7. When any network fails, appends a “needs fix/partly posted” row to Google Sheets and emails the failure details and any successful post links via Gmail.

## Setup
1. Create a PostWire account, connect your LinkedIn, Facebook, and Bluesky profiles, install the PostWire node in n8n, and add a PostWire API credential.
2. Add Reddit OAuth2 credentials and an OpenAI API key credential.
3. Create a Google Sheets spreadsheet with columns date, subreddit, thread, reddit_link, upvotes, comments, status, links, and note, then select the document and sheet in both Google Sheets nodes.
4. Add a Gmail credential and update the feed settings values (subreddit, min upvotes/comments thresholds, writing voice, and notification email address).

## 🔗 Nodes Used

Google Sheets, Gmail, Reddit, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
