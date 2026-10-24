# 📊 Map which AI search topics each domain owns with SE Ranking and GPT

> ⚡ **114 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Find which AI search topics each domain owns with SE Ranking and GPT

![Screenshot 20260326 at 19.32.29.png](fileId:5264)


## Who is this for
- SEO teams wanting to understand topic-level AI search dominance across competitors
- Content strategists building editorial plans around AI visibility gaps
- Marketing managers benchmarking brand presence across AI search topics

## What this workflow does
Pulls AI search prompts for your domain and up to 2 competitors, then uses GPT to cluster them into topics and reason about which domain owns each one — turning a flat list of prompts into a strategic competitive topic map.

## What you'll get
- AI search leaderboard with share of voice across ChatGPT, Perplexity, Gemini, AI Overviews, and AI Mode
- A topic-level competitive map showing which domain wins each topic area
- Prompt counts per domain per topic so you can see exactly where you're ahead or behind
- A one-line actionable insight per topic to guide your content strategy
- An overall winner and competitive summary saved to Google Sheets

## How it works
1. Add your domain and 2 competitors in the form — pulls the AI search leaderboard across all 5 LLM engines

![Screenshot 20260326 at 19.33.09.png](fileId:5263)

2. Fetches up to 10 prompts per domain (both brand and target) for you and each competitor
3. Filters competitor prompts to keep only SEO-relevant topics — removes noise like gaming or sports
4. Sends all prompts to GPT with instructions to cluster them into topics and identify which domain appears most per topic
5. GPT reasons about dominance per cluster and returns a structured competitive topic map
6. Saves the leaderboard and topic map to separate tabs in Google Sheets

## Requirements
- SE Ranking community node installed
- SE Ranking API token ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- OpenAI API key
- Google Sheets account (optional)

## Setup
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Add your OpenAI API credentials
4. Connect your Google Sheets account and set a spreadsheet URL in each export node
5. Activate the workflow — n8n generates a unique form URL you can share or embed
6. Open the form, fill in your domain and competitors, and the workflow runs automatically

## Customization
- Change `prompts_limit` in the Configuration node to fetch more or fewer prompts per domain
- Change `source` in the Configuration node for a different regional database (us, uk, de, fr, es, etc.)
- Edit the system prompt in the GPT node to adjust how topics are clustered or how insights are written

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
