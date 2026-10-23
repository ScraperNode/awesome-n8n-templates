# 📊 Turn YouTube comments into audience insights with YouTube API and Google Gemini

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste a public YouTube video URL and use Gemini to mine real viewer comments for recurring questions, problems, objections, tutorial requests, content opportunities, and product or service ideas.

## How it works
1. Enter a public YouTube video URL, choose how many comments to analyze, and select relevance or time-based ordering.
2. The workflow uses the YouTube Data API v3 to retrieve the video's title, channel, views, likes, comment count, and public comment threads.
3. Comments and available replies are cleaned, low-value or spam-like comments are filtered, duplicate text is removed, and each useful comment receives a stable evidence ID such as C001.
4. Gemini analyzes only the collected comments to identify recurring questions, problems, complaints, feature requests, objections, tutorial requests, purchase intent, and other audience signals.
5. The workflow converts the strongest signals into actionable content ideas, hooks, and potential product or service opportunities while keeping one-off observations separate from repeated patterns.
6. A complete report is rendered directly in the n8n form, including an executive summary, audience signals, engagement context, content opportunities, product or service opportunities, caveats, and clickable links back to the original YouTube comments.

## Setup
1. Create a Google Cloud project and enable the YouTube Data API v3 in Google Cloud Console.
2. Create an API key under APIs & Services → Credentials, then add it to an n8n HTTP Query Auth credential using:
3. Name: key
4. Value: your YouTube Data API key
5. Attach that credential to both Get Video Details and Get YouTube Comments.
6. Connect a Google Gemini Chat Model credential to the AI Agent. You can use a Gemini model available through its free tier, or swap the chat model for another compatible provider or model available to you.

## Requirements
- An n8n instance with access to the Form, HTTP Request, Code, AI Agent, and Google Gemini Chat Model nodes.
- A Google Cloud project with the YouTube Data API v3 enabled and a YouTube API key.

## Customization
- Change the comment limit, relevance/time ordering, minimum comment length, junk-comment filters, evidence ranking logic, AI prompt, and report sections to fit your research use case.
- Replace the Google Gemini Chat Model with another compatible n8n chat model or provider when needed. You can also extend the workflow with additional outputs such as Google Sheets, email, Slack, or a database.

## Additional info
No paid scraper is required. The workflow reads public YouTube data directly through the official YouTube Data API and analyzes the cleaned evidence with the connected AI model.

The workflow is designed to be evidence-first: AI-generated signals and opportunities are tied back to actual comment evidence IDs, helping users distinguish repeated audience demand from isolated comments.

## 🔗 Nodes Used

HTTP Request, AI Agent, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
