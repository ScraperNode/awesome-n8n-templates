# 📱 Create reviewable LinkedIn posts from RSS with Notion, Slack, and AWS Bedrock

> ⚡ **4 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns RSS articles into LinkedIn-ready drafts using Firecrawl, AWS Bedrock (Claude and an image model), and Cloudinary, stores them in a Notion review queue, then publishes approved posts to LinkedIn on a daily schedule and sends Slack alerts on failures.

## How it works
1. Polls an RSS feed daily, limits the run to a set number of items, normalizes each article URL, and processes items in batches.
2. Checks Notion for an existing queue entry for each normalized URL, and for new items creates a Notion row marked Processing.
3. Scrapes the article with Firecrawl and stops processing if the returned markdown is below a minimum length.
4. Uses AWS Bedrock (Claude) to summarize the article, write LinkedIn copy with strict style rules, and run style and tone checks that can auto-fix or reject non-compliant output.
5. Chooses an image by validating the article’s OG image via an HTTP HEAD request, or generates an illustration with an AWS Bedrock image model and uploads it to Cloudinary, falling back to a default image if needed.
6. Updates the Notion row with the LinkedIn copy, image link, and author attribution, sets the status to Needs Approval, and sends a Slack message with a review link.
7. At 08:30, retrieves one Queued row from Notion, downloads the linked image, posts the text and image to LinkedIn, and marks the row as Published.
8. When publishing or content generation fails, sets the Notion status to Needs Edit when applicable and posts detailed failure alerts to Slack, including LinkedIn OAuth expiry hints and execution-level error notifications.

## Setup
1. Create a Notion database with properties for Title, Source URL (URL), Status (Processing/Needs Approval/Queued/Published/Needs Edit), LinkedIn Copy, Image Link (URL), and Author, then set the `CONTENT_QUEUE_DB_ID` workflow variable.
2. Add credentials for Notion, LinkedIn OAuth2 (and set `LINKEDIN_PERSON_URN`), Slack, an HTTP Bearer Auth credential for Firecrawl, and an AWS IAM credential with access to the specified Bedrock text and image models in your `AWS_REGION`.
3. Configure Cloudinary unsigned uploads by creating an upload preset and setting `CLOUDINARY_CLOUD_NAME` and `CLOUDINARY_UPLOAD_PRESET` variables.
4. Set workflow variables for `RSS_FEED_URL`, `ALERT_CHANNEL`, `FIRECRAWL_ENDPOINT`, `BEDROCK_IMAGE_MODEL_ID` (and any other optional limits like `RUN_ITEM_LIMIT`, `MIN_MARKDOWN_CHARS`, `IMAGE_MIN_BYTES`, `IMAGE_WIDTH`, `IMAGE_HEIGHT`), plus `FALLBACK_IMAGE_URL`.
5. In Notion, approve a draft by changing its Status to Queued so the scheduled publisher can post it on the next 08:30 run.

## 🔗 Nodes Used

HTTP Request, Slack, LinkedIn, Notion, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
