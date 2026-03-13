# 📊 Monitor news sentiment trends with GPT-4o-mini, MrScraper, Slack and Notion

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Description

This n8n template automatically monitors news sources daily, analyzes article sentiment using AI, and delivers structured intelligence reports to your team — all without any manual reading. It uses MrScraper to discover and extract articles, GPT-4o-mini to score sentiment and flag urgent issues, and delivers results to both Notion (for archiving) and Slack (for real-time alerts and daily digests).

Whether you're tracking brand reputation, monitoring a competitor, or staying on top of industry trends, this workflow turns the open web into a fully automated radar system that runs every morning before your team starts their day.

---

## How It Works

* **Phase 1 – Trigger & Config:** A Schedule Trigger fires daily at 8AM. The workflow reads your list of target news source URLs from a Google Sheet, then loops through each source one by one.
* **Phase 2 – URL Discovery:** For each news source, the Map Agent crawls the page and extracts individual article URLs. URLs are filtered using include patterns to keep only actual article links, deduplicated, and capped at your configured `maxArticles` limit.
* **Phase 3 – Article Extraction:** Each article URL is processed by the General Agent, which extracts the full content including title, body text, author, and publication date. Articles with fewer than 50 words or that don't mention your defined brand/topic keywords are automatically filtered out and skipped.
* **Phase 4 – AI Sentiment Analysis:** Each relevant article is sent to GPT-4o-mini with a structured prompt. The model returns a complete JSON analysis including sentiment label (positive/neutral/negative), a sentiment score from -1 to 1, a 2–3 sentence summary, key topics, tone classification, the most impactful quote, and whether the article requires an urgent response.
* **Phase 5 – Storage & Reporting:** Every analyzed article is saved as a page in your Notion database with full metadata. If an article is flagged as action-required, an immediate Slack alert is fired. At the end of each run, a Daily Digest is compiled with sentiment breakdowns, average scores, flagged items, and top article summaries — then posted to your Slack channel.

---

## How to Set Up

1. **Create 2 scrapers in your MrScraper account:**
   * Map Agent Scraper (for discovering article URLs from news pages)
   * General Agent Scraper (for extracting full article content: title, body, date, author)
   * Copy the `scraperId` for each.

2. **Enable AI Scraper API access** in your MrScraper account settings.

3. **Prepare your Google Sheet:**
   * Create a sheet with a `Domain` column listing the news source URLs you want to monitor
   * Add as many sources as needed — each will be looped through on every run

4. **Add your credentials in n8n:**
   * MrScraper API token
   * OpenAI API key
   * Slack OAuth
   * Notion OAuth

5. **Configure your Notion database** with these properties:
   * Title, Source URL, Sentiment (select), Sentiment Score (number), Tone (select), Key Topics (text), Summary (text), Action Required (checkbox), Action Reason (text), Published At (text), Scraped At (text)

6. **Update the workflow settings:**
   * Set your `brandName` and `brandKeywords` (comma-separated keywords to filter relevant articles)
   * Set your `mapScraperId` and `generalScraperId`
   * Set your `slackChannel` name (e.g. `#brand-monitoring`)
   * Set your `notionDatabaseId` (from your Notion database URL)
   * Set `maxArticles` to control how many articles are processed per source per run

7. **Adjust the Schedule Trigger** to your preferred run time (default: every 24 hours)

8. **Customize the topic/brand keywords** inside the `Pick Best Content + Filter Irrelevant` code node to match your monitoring targets

---

## Requirements

* **MrScraper** account with API access enabled
* **OpenAI** account (GPT-4o-mini used by default)
* **Slack** workspace with OAuth connected
* **Notion** workspace with a database set up and OAuth connected
* **Google Sheets** (OAuth2 connected) for storing your list of news sources

---

## Good to Know

* GPT-4o-mini is used by default to keep costs low — processing costs approximately $0.0001 per article. Switch to GPT-4o only if you need higher analysis quality.
* The workflow has two distinct Slack outputs: an immediate urgent alert fires the moment a high-priority article is detected, while the Daily Digest summarizes the entire run at the end.
* Articles that are too short (under 50 words) or don't match your defined keywords are silently skipped — the workflow never breaks even if a source returns no usable content.
* Sentiment scores range from -1.0 (strongly negative) to 1.0 (strongly positive), making it easy to track trends over time in Notion or a connected dashboard.

---

## Customising This Workflow

* **Track multiple brands or topics:** Duplicate the keyword filter and AI prompt steps to run parallel analysis pipelines for different subjects in a single workflow.
* **Add email reporting:** Insert a Gmail node after the Slack Daily Digest step to also send the daily summary as a formatted email report.
* **Connect to a dashboard:** Pipe the Notion database into a tool like Google Looker Studio or Retool to visualize sentiment trends over time with charts and filters.
* **Adjust scrape frequency:** Change the Schedule Trigger from daily to hourly for breaking news monitoring, or weekly for slower trend tracking.
* **Expand news sources:** Add Google News search URLs (e.g. `https://news.google.com/search?q=YOUR_BRAND`) to your input sheet for broader coverage beyond specific news sites.

## 🔗 Nodes Used

Google Sheets, Slack, Notion, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
