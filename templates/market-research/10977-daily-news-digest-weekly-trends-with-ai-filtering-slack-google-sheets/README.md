# 📊 Daily news digest & weekly trends with AI filtering, Slack & Google Sheets

> ⚡ **503 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Who is this for
This template is perfect for:
- **Market Researchers** tracking industry trends.
- **Tech Teams** wanting to stay updated on specific technologies (e.g., "AI", "Cybersecurity").
- **Content Creators** looking for curated news topics.
- **Busy Professionals** who need a high-signal, low-noise news digest.

## What it does
1. **Fetches News:** Pulls daily articles via NewsAPI based on your chosen keyword (default: "technology").
2. **AI Filtering:** Uses an AI Agent (via OpenRouter) to filter out low-quality or irrelevant clickbait.
3. **Daily Digest (Slack):**
   - Summarizes the top 3 articles in English.
   - Translates the summaries to Japanese using DeepL (optional).
   - Posts both versions to a Slack channel.
4. **Data Archiving (Sheets):** Extracts structured data (Title, Author, Summary, URL) and saves it to Google Sheets.
5. **Weekly Trend Report:** Every Monday, it reads the past week's data from Google Sheets and uses AI to generate a high-level trend report and strategic insights.

## How to set up
1. **Configure Credentials:** You will need API keys/auth for NewsAPI, OpenRouter (or OpenAI), DeepL, Google Sheets, and Slack.
2. **Setup Google Sheet:** Create a sheet with the following headers in the first row: `title`, `author`, `summary`, `url`.
3. **Map the Sheet:** In the "Append row in sheet" and "Read sheet (weekly)" nodes, select your file and map the columns.
4. **Define Keyword:** Open the "Set Keyword" node and change `chatInput` to the topic you want to track (e.g., "Crypto", "SaaS", "Climate Change").
5. **Slack Setup:** Select your desired channel in the Slack nodes.

## Requirements
- **n8n** (Self-hosted or Cloud)
- **NewsAPI** Key (Free tier available)
- **OpenRouter** (or any LangChain compatible Chat Model like OpenAI)
- **DeepL** API Key (for translation)
- **Google Sheets** account
- **Slack** Workspace

## How to customize
- **Change the Language:** Remove the DeepL node if you only want English, or change the target language code.
- **Adjust the Prompt:** Modify the "AI Agent (Filter)" system message to change how strict the news filtering is.
- **Change Schedule:** Adjust the Cron nodes to run at your preferred time (currently set to Daily 8 AM and Weekly Monday 9 AM).

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Slack, Webhook, DeepL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
