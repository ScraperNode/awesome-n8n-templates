# 📱 Repurpose LinkedIn posts into X tweets with Apify, Claude AI and Airtable

> ⚡ **23 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Automatically scrape LinkedIn posts with Apify, transform them into optimized tweets and threads using Claude AI, store them in Airtable for approval, and publish to X on a daily schedule.

## Who is this for

This workflow is designed for content creators, social media managers, and personal brand builders who want to maximize their content reach by repurposing LinkedIn posts for X (Twitter) without manual rewriting.

## What it does

This workflow automates the entire LinkedIn-to-X content repurposing pipeline:

1.  **Weekly scraping**: Uses Apify to scrape your recent LinkedIn posts based on configurable parameters stored in Airtable
2.  **Carousel extraction**: If a post contains a carousel/PDF, OpenAI extracts the slide content via OCR
3.  **AI transformation**: Claude (via OpenRouter) converts each LinkedIn post into two X-optimized variations: a standalone tweet and a thread (3-7 tweets)
4.  **Content storage**: Saves both the original posts and generated tweets to Airtable with a "Pending" status for review
5.  **Scheduled publishing**: Daily at 12:30, searches for ‘Approved’ tweets whose publication date has passed and posts them to X
6.  **Thread handling**: Properly chains thread tweets as replies to maintain the conversation structure

## Requirements

-   Apify account (LinkedIn Profile Posts Scraper actor)
-   Airtable account with configured base
-   OpenAI API access (for carousel OCR)
-   OpenRouter API access (for Claude)
-   X/Twitter API access

## How to set up

1.  Create an Airtable base with three tables: `Config`, `LK Posts`, and `X Tweets` (see table configurations below)
2.  Configure the `Config` table with your LinkedIn profile URL, scraping limits, and tweet scheduling delay
3. Configure the ‘TWEET NOW’ button in Airtable with the following URL formula: ```"https://your-n8-server-url/webhook/post-tweet?id="&RECORD_ID()```
4.  Connect your credentials: Apify, Airtable, OpenAI, OpenRouter, and X/Twitter
5.  Set the weekly and daily schedule triggers according to your timezone
6.  Activate the workflow

### Config Table

| Field Name | Type | Description |
|------------|------|-------------|
| Name | String | Configuration parameter name |
| Type | Single Select | Data type indicator: `String`, `Integer` |
| String Value | String | Value when Type is "String" |
| Integer Value | Number | Value when Type is "Integer" |


**Configuration parameters to create:**
- `profile_url` — LinkedIn profile URL to scrape
- `posted_limit` — Time range for scraping (possible values: "any", "1h", "24h", "week", "3months", "6months", "year")
- `max_posts` — Maximum number of posts to scrape
- `schedule_tweets_days_after_lk` — Number of days after LinkedIn post date to schedule the tweet



### LK Posts Table

| Field Name | Type | Description |
|------------|------|-------------|
| LK Post ID | String | LinkedIn post unique identifier |
| Status | Single Select | Post processing status: `Scrapped`, `Converted`, `Tweeted` |
| Date | DateTime | Original LinkedIn post publication date |
| Content | Long Text | LinkedIn post text content |
| Post URL | URL | Link to the original LinkedIn post |
| Post Img URL | URL | URL of post image (if any) |
| Post Doc URL | URL | URL of carousel/PDF document (if any) |
| Carousel Content | Long Text | Extracted text content from carousel slides |



### X Tweets Table

| Field Name | Type | Description |
|------------|------|-------------|
| Unique ID | Formula | Auto-generated unique identifier |
| LK Post ID | String | Reference to the source LinkedIn post |
| Status | Single Select | Tweet status: `Pending`, `Approved`, `Rejected`, `Tweeted` |
| Variation | Single Select | Tweet format: `Standalone`, `Thread` |
| Tweet Nb | Number | Tweet position in thread (0 for standalone, 1-7 for thread tweets) |
| Content | Long Text | The tweet text content |
| Publication Date | DateTime | Scheduled date/time to publish the tweet |
| Post Now | Button | Triggers webhook to post immediately |


## How to customize

- AI prompt: Edit the "ConvertPostIntoTweets" node to adjust tone and style
- LLM model: Replace the OpenRouter node with OpenAI or any other LLM node in "ConvertPostIntoTweets" if you prefer a different model
- Posting delay: Change schedule_tweets_days_after_lk in the Config table
- Schedule: Modify "Weekly_OnSunday" and "Daily_AtNoon" triggers
- Scraping: Adjust max_posts and posted_limit in Config table

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, X (Formerly Twitter), Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
