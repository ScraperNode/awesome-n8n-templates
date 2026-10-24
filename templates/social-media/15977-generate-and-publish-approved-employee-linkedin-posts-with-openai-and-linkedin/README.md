# 📱 Generate and publish approved employee LinkedIn posts with OpenAI and LinkedIn

> ⚡ **38 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow scans an RSS blog feed on a schedule, logs newly found posts to Google Sheets, uses OpenAI to generate role-based LinkedIn drafts, and emails approval links via Gmail; approved drafts are then published to LinkedIn and tracked in Google Sheets, with Slack alerts on failures.

## How it works
1. Runs on a schedule and reads the latest item from your blog’s RSS feed.
2. Checks Google Sheets to see if the blog URL has already been processed and continues only for new posts.
3. Formats the blog details, saves the blog as processed in Google Sheets, and passes the content into a linked “AI Content Personalization Engine” workflow.
4. Receives the blog content from the sub-workflow, defines employee personas (CEO, HR, Developer, Marketing), and uses OpenAI to generate a LinkedIn draft per role.
5. Stores each generated draft in a Google Sheets “generated_posts” tab with a Pending status and emails approval/rejection links via Gmail.
6. Receives an approve/reject webhook click, updates the post’s status in Google Sheets, and returns a confirmation response to the browser.
7. Fetches approved posts from Google Sheets, posts unpublished items to LinkedIn via the LinkedIn API, marks them as published in Google Sheets when creation succeeds, and sends a Slack alert if the LinkedIn API response is not successful.

## Setup
1. Add credentials for Google Sheets, OpenAI, Gmail, LinkedIn, and Slack.
2. Set your RSS feed URL in the RSS reader and configure the schedule interval for how often you want to scan for new posts.
3. Create a Google Sheets spreadsheet with two tabs matching the workflow: “processed_blogs” (url, title, processed_at) and “generated_posts” (role, tone, postId, status, blog_title, created_at, generated_post, published).
4. Replace YOUR_N8N_URL_HERE in the approval link templates and configure the webhook path (approve-post) to be reachable from your email recipients.
5. Update the Gmail recipient address used for approvals and ensure your LinkedIn app/connection has permission to create posts via the LinkedIn REST API.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
