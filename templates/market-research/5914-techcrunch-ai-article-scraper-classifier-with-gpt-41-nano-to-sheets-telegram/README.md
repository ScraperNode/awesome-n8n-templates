# 📊 TechCrunch AI article scraper & classifier with GPT-4.1-nano to sheets & Telegram

> ⚡ **1,475 views** · 📊 [Market Research & Insights](../)

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
