# 🎬 Generate LinkedIn carousel content from Reddit with Claude and Airtable

> ⚡ **124 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it's for

This workflow is for digital marketers, content creators, and social media managers who want to turn trending Reddit discussions into ready-to-publish LinkedIn carousel content — without manual research or copywriting.

## How it works

1. A schedule trigger fires every Monday at 10am and a Set node defines the target subreddits (e.g. r/automation, r/ArtificialIntelligence).
2. The Apify Reddit scraper fetches the top 20 hot posts from each subreddit over the past week.
3. A code node extracts the highest-scoring post per subreddit, then two parallel filter nodes route posts by subreddit topic.
4. Apify is called again to fetch up to 10 comments for each selected post, providing rich context.
5. A Claude Sonnet AI agent reads the post body and comments, then generates a structured LinkedIn post and a Claude Design carousel prompt using a structured output parser.
6. The result (LinkedIn post text + carousel design prompt) is saved as a new record in an Airtable base.

## How to set up

- [ ] Add your **Apify API key** to both HTTP Request nodes (`Fetch Reddit Posts via Apify` and `Fetch AI Comments via Apify`)
- [ ] Connect your **Anthropic credentials** to the Claude Sonnet Model sub-node
- [ ] Connect your **Airtable credentials** to the `Save Carousel to Airtable` node and set the correct base and table
- [ ] Edit the `Set Target Subreddits` node to define your desired subreddit URLs
- [ ] Adjust the two **Filter** nodes to match your subreddit names
- [ ] Configure the **Schedule Trigger** interval to match your posting cadence

## Requirements

- Apify account with access to the Reddit scraper actor
- Anthropic API key (Claude Sonnet)
- Airtable account with a configured base

## How to customize

- Swap Claude Sonnet for another LLM by replacing the language model sub-node inside the AI agent.
- Add more subreddits by extending the space-separated URL list in `Set Target Subreddits` and adding corresponding filter branches.
- Modify the AI agent's system prompt to target a different content format (e.g. Twitter threads, blog outlines) instead of LinkedIn carousels.

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
