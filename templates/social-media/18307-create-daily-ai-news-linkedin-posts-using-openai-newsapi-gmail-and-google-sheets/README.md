# 📱 Create daily AI news LinkedIn posts using OpenAI, NewsAPI, Gmail and Google Sheets

> ⚡ **52 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs nightly, pulls AI news from NewsAPI, uses OpenAI to summarize and select a top story, generates a LinkedIn post and image, and emails you for approval before publishing to LinkedIn and logging the result to Google Sheets.

## How it works
1. Runs every night at 8 PM using a schedule trigger.
2. Fetches the last day’s AI-related articles from NewsAPI, splits them into items, and keeps the top five most recent.
3. Uses OpenAI (gpt-4o-mini) to generate a strict two-sentence summary for each article and compiles a digest of the summarized articles.
4. Uses OpenAI (gpt-4o-mini) to choose the single best article for LinkedIn engagement from the digest and produce a post draft based on the selected story.
5. Uses OpenAI image generation (gpt-image-1-mini) to create a news-style square image to accompany the post, then emails a preview and sends an approval email that waits for your Approve/Reject response in Gmail.
6. If approved, publishes the post to LinkedIn, appends the approved content to a Google Sheets tab, and emails a success notification.
7. If rejected, appends the rejected content to a separate Google Sheets tab and emails a rejection notification.

## Setup
1. Add a NewsAPI.org API key as an HTTP Query Auth credential and ensure it’s used by the NewsAPI request.
2. Add an OpenAI API credential with access to gpt-4o-mini (text) and gpt-image-1-mini (image).
3. Connect Gmail via OAuth2 and replace the recipient email address in the Gmail nodes with your own.
4. Connect LinkedIn via OAuth2 and set the correct LinkedIn person identifier for posting.
5. Connect Google Sheets, set the target spreadsheet and ensure it contains `Approved` and `Rejected` tabs with the columns Date, Title, Summary, LinkedIn Post, and Status.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, LinkedIn, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
