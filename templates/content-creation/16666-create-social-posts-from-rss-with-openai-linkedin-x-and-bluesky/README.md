# 🎬 Create social posts from RSS with OpenAI, LinkedIn, X, and Bluesky

> ⚡ **67 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, reads the Hacker News frontpage RSS feed, uses OpenAI to extract key insights and ghostwrite social posts, then publishes the generated content to LinkedIn, X, and Bluesky.

## How it works
1. Runs every day at 08:00 using a schedule trigger.
2. Fetches the latest items from the Hacker News frontpage RSS feed and keeps only the first three articles.
3. Prepares a clean title, content snippet, and link for each article.
4. Sends each article to OpenAI Chat Completions (gpt-4o-mini) to extract three non-obvious insights.
5. Sends the insights to OpenAI Chat Completions again to generate platform-specific posts (LinkedIn, X, and Bluesky) in a defined voice and JSON format.
6. Parses and clamps the generated text to length limits and then posts to LinkedIn and X while also authenticating to Bluesky and creating a Bluesky post.

## Setup
1. Add an OpenAI API credential for the two OpenAI Chat Completions HTTP requests.
2. Add LinkedIn and X (Twitter) credentials and confirm the target posting identity/settings for each platform.
3. Replace the Bluesky handle and app password in the Bluesky login request and ensure Bluesky app passwords are enabled for the account.
4. (Optional) Update the RSS feed URL and the daily trigger time if you want a different source or posting schedule.

## 🔗 Nodes Used

HTTP Request, RSS Read, X (Formerly Twitter), LinkedIn, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
