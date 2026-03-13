# 📊 Monitor brand mentions with OpenAI across Twitter/X, Reddit, News, Airtable and Slack

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Monitors brand mentions across Twitter/X, Reddit, and News APIs in real-time (or scheduled), fetches mentions in parallel, normalizes data, uses AI to analyze sentiment/urgency/topics, detects duplicates, filters critical mentions, logs everything to Airtable, posts alerts to Slack, and emails daily HTML digest reports to the marketing team.

## Good to Know
- Runs **every hour** (configurable) to provide near-real-time brand monitoring
- Pulls mentions from **multiple platforms** in parallel: Twitter/X, Reddit, News sources
- Uses **AI** (OpenAI/Grok/etc.) for advanced sentiment classification, urgency detection, topic extraction, and duplicate deduplication
- Focuses on **actionable insights**: flags negative/urgent mentions for immediate response
- Generates **beautiful HTML daily digest** with summarized mentions, sentiment trends, and key highlights
- Stores historical data in **Airtable** for tracking, analytics, and long-term reporting
- Sends **real-time Slack alerts** for high-priority/negative mentions
- Reduces manual social monitoring time dramatically and helps catch reputation issues early

## How It Works

### 1. Trigger & configure
- **Schedule Trigger** — Runs every hour (or custom interval) to check for new brand mentions
- **Set brand monitoring config** — Defines brand name, keywords, excluded terms, monitoring parameters (via Set node or variables)

### 2. Fetch & collect mentions
- **Fetch Twitter/X mentions** — Uses Twitter/X node or HTTP Request to search recent tweets (mentions, keywords)
- **Fetch Reddit mentions** — Searches relevant subreddits or Reddit-wide for brand keywords/posts
- **Fetch news article mentions** — Queries news APIs (e.g. NewsAPI, Google News via RSS/HTTP) for brand coverage
- **Merge platform mentions** — Combines results from all sources into a unified stream
- **Normalize mentions into unified schema** — Standardizes fields (text, author, platform, timestamp, URL, etc.) for consistent processing

### 3. AI analyze & deduplicate
- **AI sentiment and urgency analysis** — Sends mentions to AI model (OpenAI node) with prompt to classify:
  - Sentiment: positive / neutral / negative
  - Urgency/severity: low / medium / high / critical
  - Topics/themes
  - Key excerpts
- **Wait For Result** — Ensures AI responses are complete
- **Process analysis results** — Parses structured JSON output from AI
- **Filter mentions requiring alerts** — Routes based on sentiment/urgency thresholds
- **Deduplicate** — Removes near-duplicate mentions (e.g. same content reposted)

### 4. Store, alert & report
- **Log mention to Airtable** — Appends/updates records with full details, sentiment, AI analysis, timestamp
- **Route by sentiment and urgency** — Critical/negative → immediate action path
- **Send mention alert** — Posts formatted message to **Slack** (or Discord/Teams) with link, text snippet, sentiment badge
- **Generate HTML daily digest report** — Compiles summary: total mentions, sentiment breakdown, top issues, trends
- **Email HTML digest** — Sends polished report to marketing team via **Email** node (SMTP/Gmail)
- **Log success and update listings** — Records workflow completion, stats for monitoring

## Data Sources
- **Twitter/X** — Recent search for mentions/keywords (via Twitter node or HTTP Request with API)
- **Reddit** — Subreddit or site-wide search for brand mentions
- **News APIs** — NewsAPI.org, Google News RSS, or similar for article mentions
- **AI Model** — OpenAI (GPT-4o / GPT series), Grok, or other LLM for sentiment/urgency analysis
- **Storage** — Airtable base (tables for mentions, daily summaries)
- **Notifications** — Slack (webhook or app), Email (SMTP)

## How to Use
1. **Import** the workflow JSON into your n8n instance
2. **Configure credentials**:
   - Twitter/X API (OAuth or Bearer token for search)
   - Reddit API (if using official; or RSS/HTTP for subreddits)
   - News API key (e.g. NewsAPI.org)
   - OpenAI API key (or Grok/other LLM)
   - Airtable API key + base/table
   - Slack webhook or app token
   - Email SMTP credentials
3. **Set monitoring parameters** — Edit brand name, keywords, exclude lists in **Set monitoring config** node
4. **Customize AI prompt** — In the **AI sentiment** node, tweak for brand-specific tone, industry terms, urgency criteria
5. **Adjust schedule** — Change interval in **Monitor mentions every hour** trigger
6. **Tune filters** — Set thresholds for alerts (e.g. only negative + high urgency)
7. **Test manually** — Use Execute Workflow to simulate with known mentions
8. **Activate** — Turn on and watch Executions + Airtable/Slack for results

## Requirements
- n8n instance (self-hosted or cloud)
- API access/keys for Twitter/X, Reddit (optional), News source
- OpenAI (or compatible LLM) API key with good token limit
- Airtable workspace/base for logging
- Slack workspace for alerts
- Email account for daily digests

## Customizing This Workflow
- **Add more platforms** — Include Facebook/Instagram (via Meta API), LinkedIn, Discord mentions
- **Enhance AI analysis** — Add topic clustering, competitor comparison, virality scoring
- **Improve deduplication** — Use fuzzy matching or embeddings for better duplicate detection
- **Visual dashboard** — Export Airtable data to Google Looker Studio / Grafana for sentiment trends
- **Auto-response** — For low-risk positive mentions, generate draft replies
- **Language support** — Add multilingual sentiment detection
- **Hourly vs. real-time** — Switch to webhook triggers if platforms support (e.g. Twitter webhooks if available)
- **Daily/weekly reports** — Aggregate more stats, charts in HTML email

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
