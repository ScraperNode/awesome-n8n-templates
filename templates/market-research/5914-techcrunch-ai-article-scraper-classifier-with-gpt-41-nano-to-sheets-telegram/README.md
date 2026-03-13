# 📊 TechCrunch AI article scraper & classifier with GPT-4.1-nano to sheets & Telegram

> ⚡ **1,475 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow scrapes the latest Artificial Intelligence articles from TechCrunch, then processes and classifies the content using OpenAI and LangChain nodes. The final result is saved to Google Sheets and sent as a summary to a Telegram group.

Workflow Logic:
Trigger: Schedules daily at 6AM Bangkok time.

Scraper: Extracts URLs and publish dates from TechCrunch's AI category.

Filter: Only continues if the article is from yesterday (to avoid duplication).

Content Fetch: Downloads and extracts article body text.

AI Agent:

Summarizes the article in Thai.

Scores it using strict journalism criteria (max 100).

Categorizes the news into one of 9 predefined categories.

Output:

Saves all structured data to Google Sheets.

Sends a summary to a Telegram group.

## Set up steps
🕒 Estimated setup time: 10–15 minutes

Connect your credentials:

Google Sheets (OAuth2)

Telegram

OpenAI account (via LangChain model)

Update the Telegram chatId and Google Sheets documentId/sheetName values.

Deploy and activate the workflow. It runs daily without manual intervention.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
