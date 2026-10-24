# 📊 Audit websites from Telegram with GPT-4o-mini and log results to Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a Telegram bot into a website audit assistant: it extracts a URL from incoming Telegram messages, scrapes the page, uses OpenAI (gpt-4o-mini) to generate a structured audit, logs the results to Google Sheets, and replies back in Telegram.

## How it works
1. Triggers when a new message is sent to your Telegram bot.
2. Extracts the first URL from the message text and, if none is found, sends a help reply back to the same Telegram chat.
3. Fetches the submitted website’s HTML content over HTTP and converts it into cleaned, readable text for analysis.
4. Sends the cleaned page content to OpenAI (gpt-4o-mini) to generate a structured audit (business type, score, issues, quick wins, recommendation, opportunity, and talking points).
5. Formats the audit into a plain-text Telegram message and appends the audit details as a new row in a Google Sheets tab.
6. Replies to the original Telegram chat with the completed audit.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram API credential in n8n, then connect it to the Telegram trigger and both Telegram send-message steps.
2. Add an OpenAI API credential and connect it to the OpenAI chat model used for the audit.
3. Add a Google Sheets OAuth2 credential and connect it to the Google Sheets append step.
4. Create a Google Sheets document with a tab named “Website Audits” and the required headers, then update the Sheet ID (and your name) in the workflow’s configuration step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
