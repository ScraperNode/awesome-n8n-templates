# 📱 Publish LinkedIn AI operations posts from RSS with OpenAI and Airtable

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Workflow runs at 08:00 (UK), AI stories from TechCrunch, The Verge, and the OpenAI Blog via RSS, AI to select and editorially shape one signal into a post and image prompt, generates and QA-checks a poster image, then publishes to a LinkedIn, logs results to Airtable and Gmail.

## How it works
1. Runs every day at 08:00 UK time. Reads the latest AI articles from TechCrunch, The Verge, and the OpenAI Blog RSS feeds and merges them into a single list.
2. Cleans, deduplicates, and balances the articles by source, then formats the top items into a consolidated text brief.
3. Uses OpenAI (GPT-5) to select the strongest operational AI signal and outputs a structured content pack including editorial card fields, or marks the run as “skip” if quality is below threshold. If the signal is publishable, uses OpenAI (GPT-5) to draft, refine, and QA the final LinkedIn post text and derives up to two hashtags.
4. Creates an Airtable audit record for the post content and generates an editorial poster image using either an external screenshot service or the OpenAI Images API, then QA-checks the image with OpenAI and retries on failure.
5. Uploads the approved image to LinkedIn, publishes the Company Page post, updates Airtable with the LinkedIn URN and URL, and emails a posting log via Gmail.

## Setup
1. Provide OpenAI credentials (OPENAI_API_KEY) and select them in the OpenAI text and image/QA HTTP request nodes.
2. Set Airtable access (AIRTABLE_API_TOKEN) and configure AIRTABLE_BASE_ID and AIRTABLE_TABLE_ID for where the audit records are stored.
3. Connect LinkedIn Community Management OAuth2 credentials and set LINKEDIN_ORGANIZATION_URN for the Company Page that publishes posts.
4. Connect Gmail OAuth2 credentials and set NOTIFICATION_EMAILS to receive the daily status email.

## Additional info
If you want HTML-to-PNG rendering, configure SCREENSHOT_SERVICE_URL (and optionally SCREENSHOT_SERVICE_TOKEN), otherwise rely on the OpenAI image-generation fallback.

## 🔗 Nodes Used

Airtable, HTTP Request, RSS Read, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
