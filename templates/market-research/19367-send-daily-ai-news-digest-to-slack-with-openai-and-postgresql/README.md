# 📊 Send daily AI news digest to Slack with OpenAI and PostgreSQL

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch AI-related articles from NewsAPI, analyzes each one with OpenAI, stores unique insights in PostgreSQL, then generates an executive-style daily digest and posts it to a Slack channel.

## How it works
1. Runs every day at 08:00 using a schedule trigger.
2. Queries NewsAPI for the five most recent English articles matching the configured AI and tech-startup keywords.
3. Splits the API response into individual article items and keeps only articles whose description matches specified AI-related terms.
4. Sends each retained article to OpenAI (gpt-4o-mini) to produce a structured JSON analysis including summary, category, sentiment, importance score, trend keywords, and “why it matters.”
5. Combines the original article fields with the AI-generated insights, checks PostgreSQL to see if the article URL already exists, and inserts only new articles into the ai_news table.
6. Aggregates the stored items into a daily payload with top trend keywords and asks OpenAI to write an executive digest based strictly on that payload.
7. Posts the generated digest to Slack along with the number of processed articles and the top trends list.

## Setup
1. Provide a NewsAPI API key and set it in the HTTP request query parameter for apiKey.
2. Add an OpenAI credential for the two OpenAI steps and confirm the selected model (gpt-4o-mini) is available in your account.
3. Configure a PostgreSQL connection (for example Supabase Postgres) and ensure a public.ai_news table exists with columns used in the insert (article_url, headline, summary, category, importance_score, sentiment, trend_keywords, why_it_matters, source, image_url, published_at, content).
4. Add a Slack credential and select the destination channel where the daily digest should be posted.
5. Adjust the schedule time, NewsAPI query (q, language, pageSize), and any keyword filters to match your monitoring needs.

## Additional info
## Add-ons

The workflow can be extended further with:

- Email digest delivery
- Microsoft Teams notifications
- AI-powered sentiment dashboards
- Weekly or monthly digest generation
- Real-time breaking AI news alerts
- Web dashboard visualization
- Advanced trend scoring
- Multi-source RSS aggregation
- AI stock market tracking
- Topic-based digest segmentation


## Use Case Examples

### 1. Internal AI Monitoring

Companies can automatically track AI industry developments and share daily insights with teams via Slack.

### 2. Startup Research

Founders can monitor AI competitors, funding announcements, product launches, and industry movements.

### 3. AI Content Research

Marketing and content teams can use summarized AI news for newsletters, blogs, and social media planning.

### 4. Executive Reporting

Leadership teams can receive concise AI industry summaries without manually reviewing multiple news websites.

### 5. Technology Trend Analysis

Researchers and analysts can identify trending AI technologies, companies, and market shifts automatically.

Additional use cases can be implemented depending on business requirements and workflow customization.


## Troubleshooting Guide

| Issue                        | Possible Cause                     | Solution                          |
| ---------------------------- | ---------------------------------- | --------------------------------- |
| No articles fetched          | Invalid NewsAPI key                | Verify API credentials            |
| Empty AI analysis output     | OpenAI quota or prompt issue       | Check API usage and prompts       |
| Duplicate articles inserted  | Duplicate validation misconfigured | Verify IF node conditions         |
| Slack messages not delivered | Invalid Slack credentials          | Reconnect Slack integration       |
| PostgreSQL insert fails      | Table schema mismatch              | Verify database columns           |
| Trend analysis returns empty | Missing trend keywords             | Validate OpenAI response format   |
| JSON parse errors            | Invalid AI response formatting     | Enforce strict JSON prompt output |
| Workflow stops midway        | Node execution failure             | Review execution logs in n8n      |


## Need Help?

If you need assistance customizing or scaling this workflow, our expert n8n developers at WeblineIndia can help you with:

- n8n workflow customization
- AI automation development
- OpenAI integrations
- Supabase and PostgreSQL setup
- Slack and business integrations
- Enterprise workflow automation
- AI-powered reporting systems
- Production deployment support

Whether you need workflow enhancements, custom dashboards, advanced AI integrations or entirely new automation systems, WeblineIndia can help [build scalable automation solutions](https://www.weblineindia.com/process-automation-solutions.html) tailored to your business needs.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
