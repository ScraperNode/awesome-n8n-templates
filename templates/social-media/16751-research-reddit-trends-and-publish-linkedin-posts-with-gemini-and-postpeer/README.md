# 📱 Research Reddit trends and publish LinkedIn posts with Gemini and PostPeer

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, scrapes a selected subreddit with Apify, researches sources via Brave Search and Jina Reader, and uses Eden AI (DeepSeek) plus Google Gemini to draft a LinkedIn post with an image. It logs state in Google Sheets/Drive, sends approval emails, and publishes via PostPeer.

## How it works
1. Runs daily on a schedule, loads Global Constants, and picks an ACTIVE subreddit row from Google Sheets using a random ID.
2. Scrapes recent posts from that subreddit using an Apify Reddit scraper, then normalizes, scores, and deduplicates candidates.
3. Uses an Eden AI (DeepSeek) agent to vet the candidates and either selects one post idea or stops and records a NO_VIABLE_IDEA entry in Google Sheets and emails the rationale.
4. For a selected idea, a second Eden AI (DeepSeek) agent generates a research brief and up to five Brave Search queries, then Brave Search and Jina Reader collect and extract a small set of non-social sources.
5. A third Eden AI (DeepSeek) agent writes the LinkedIn draft and an accompanying image prompt, then Google Gemini generates the image.
6. Uploads the image to Google Drive, writes the draft and metadata to a Google Sheets post log, and emails a two-step approval link.
7. When the reviewer confirms approval or rejection via the webhook page, the workflow updates Google Sheets and either publishes the text+image to LinkedIn through PostPeer (and emails the result) or marks the draft as rejected.

## Setup
1. Create and select one Global Constants credential (n8n-nodes-globals) that includes your Google Sheet ID/tab names, webhook base URL/path, and PostPeer/Brave/Jina/Gemini settings.
2. Set up Google Sheets OAuth credentials and create the required spreadsheet tabs/headers for the subreddit config and post log used for state and approval tokens.
3. Add credentials for Apify, Eden AI, Google Gemini, Google Drive, and your SMTP/Email Send account, and set the recipient/sender emails in Global Constants.
4. Create HTTP header-auth credentials for Brave Search and PostPeer API calls, and set your PostPeer LinkedIn account ID and API endpoints in Global Constants.
5. Publish the workflow and use the production webhook URL (path matches linkedin-post-approval) so approval links in emails resolve externally, then test with a non-production LinkedIn account before enabling the daily schedule.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
