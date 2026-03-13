# 📊 Generate AI market research reports from NewsAPI and competitor sites to Notion, Sheets and Slack

> ⚡ **94 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Generate market research reports from news and competitor sites to Notion and Slack

This workflow automates market research and competitive intelligence by collecting industry news and competitor website updates, analyzing them with AI, and publishing structured insights to Notion and Slack.
It replaces manual monitoring and summarization with a repeatable, scalable workflow suitable for daily or weekly use.

---

## Who’s it for

* **Marketing teams** who want to track industry trends and competitor messaging in one place
* **Product managers** looking for early signals to inform roadmap and prioritization decisions
* **Founders and analysts** who need automated market briefings without manual research

---

## How it works

1. A scheduled trigger starts the workflow (daily by default).
2. Industry news is fetched via NewsAPI while competitor websites are scraped in parallel.
3. All collected content is consolidated and sent to OpenAI (GPT-4o) for analysis.
4. The AI generates a structured report including trends, SWOT insights, and recommended actions.
5. The full Markdown report is saved to a Notion database, and an executive summary is posted to Slack.
6. If any API call or scraping step fails, an error notification is sent to Slack.

---

## How to set up

1. Add API credentials for OpenAI, NewsAPI, Notion, and Slack.
2. Configure keywords and competitor URLs in the **Research Configuration** node.
3. Select your Notion database and Slack channels in the relevant nodes.

---

## Requirements

* OpenAI API key (GPT-4o access)
* NewsAPI account
* Notion and Slack accounts

---

## How to customize the workflow

* Change the trigger to run weekly or on demand
* Modify the AI prompt to focus on pricing, features, or specific competitors
* Add additional sources such as RSS feeds or more competitor sites

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
