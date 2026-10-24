# 📊 Send daily India eProcure tender alerts with OpenAI, Google Sheets, Telegram, Slack and Gmail

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 9 AM to scrape active tenders from India’s eProcure portal, deduplicate them against a Google Sheets log, and use OpenAI to summarize the most urgent opportunities before sending alerts via Telegram, Slack, and Gmail.

## How it works
1. Runs every day at 9 AM on a schedule trigger.
2. Fetches the eProcure portal HTML, extracts the active tenders table, and normalizes the results into structured tender records.
3. Filters out tenders already logged in Google Sheets and removes duplicates within the current run.
4. Sorts the remaining tenders by closing date and keeps the top five soonest-closing opportunities.
5. Uses OpenAI (gpt-4o-mini) to summarize each tender, flag urgency, and generate a single plain-text alert message for the batch.
6. Appends the generated alert content to a Google Sheets log and sends the same alert to Telegram, Slack, and a formatted Gmail digest email.

## Setup
1. Add OpenAI API credentials for the gpt-4o-mini model used to generate summaries and the combined alert message.
2. Connect Google Sheets OAuth credentials, create a tender log sheet, and replace YOUR_GOOGLE_SHEET_ID and the target sheet/tab selection in the append step.
3. Connect Telegram Bot credentials and set YOUR_TELEGRAM_CHAT_ID to the chat where daily alerts should be sent.
4. Connect Slack OAuth2 credentials and set the target channel ID for the Slack alert.
5. Connect Gmail OAuth2 credentials and replace procurement@yourcompany.com with the recipient address for the daily digest email.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
