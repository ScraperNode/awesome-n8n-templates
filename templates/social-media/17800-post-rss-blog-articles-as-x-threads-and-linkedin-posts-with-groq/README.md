# 📱 Post RSS blog articles as X threads and LinkedIn posts with Groq

> ⚡ **25 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly to pull new items from an RSS feed, fetches and extracts full article text, uses Groq (via LangChain) to generate a Twitter/X thread and a LinkedIn post, then posts valid threads to X and publishes the LinkedIn update while logging results in Google Sheets.

## How it works
1. Runs every hour on a scheduled trigger and loads configuration values like the RSS feed URL, Google Sheet ID, and hashtag settings.
2. Reads the RSS feed and compares each item’s link against a Google Sheets log to keep only articles that have not been processed yet.
3. Fetches each new article’s full webpage and extracts the main article text using an HTML CSS selector.
4. Sends the extracted text to Groq to generate a structured output containing an X (Twitter) thread (multiple tweets) and a separate LinkedIn post.
5. Validates that every generated tweet is within X’s 280-character limit and records the article as processed in Google Sheets.
6. If any tweet is too long, logs the full tweet list to a “NeedsReview” Google Sheet for manual fixing instead of posting.
7. If all tweets are valid, posts the thread to X one tweet at a time as replies to form a thread, then publishes the LinkedIn post.

## Setup
1. Add credentials for Google Sheets, X (Twitter), LinkedIn, and Groq (Chat Model) used by the LangChain chain.
2. Create a Google Sheets document with two tabs matching the configured names (default: “Processed” and “NeedsReview”) and include columns for article_link, article_title, and validity/review fields.
3. In the configuration values, set your RSS feed URL, Google Sheet document ID, max tweets per thread, and brand hashtags.
4. Update the HTML extraction CSS selector to match your blog’s article container if the default selector does not capture the full content.
5. Set the schedule interval to your preferred frequency and verify the X reply-to field works with your installed n8n Twitter node version.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
