# 📊 Collect reviews, analyze sentiment, and generate reports with Decodo and Google Gemini

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates review collection, analysis, and reporting by scraping review links from Airtable, extracting structured review data, storing it in Google Sheets, and generating AI-powered sentiment insights using Google Gemini.

**Use Cases**
Automated Review Tracking: Continuously fetch and process customer reviews without manual effort.
Sentiment Analysis & Insights: Identify overall sentiment, common praise, complaints, and improvement areas using AI.
Centralized Review Storage: Store all extracted reviews (date, text, rating) in Google Sheets for easy access and reporting.
Scheduled Reporting: Receive summarized review insights via email on a defined schedule.

**Good to Know**
The workflow runs on a daily schedule to process new review links stored in Airtable.
Reviews are processed in batches to avoid rate limits and improve stability.
Google Gemini is used for intelligent review extraction and sentiment analysis, which may incur API costs.
Gemini models can be geo-restricted; a “model not found” error may indicate regional unavailability.

**How it Works**

**Review Collection & Storage**
- Airtable Search: The workflow starts by searching Airtable for records that contain review links.
- Decodo Scraper: Review links are processed to extract raw review content from external sources.
- Loop Over Items: Reviews are handled in controlled batches for reliable processing.
- AI Review Analyzer: Google Gemini extracts structured data such as review date, text, and rating.
- Google Sheets Append: Each extracted review is saved as a new row in Google Sheets.

**AI Review Analysis & Reporting**

- Scheduled Trigger: On a defined interval, the workflow fetches all stored reviews from Google Sheets.
- Data Structuring Code: Reviews are transformed into a clean, structured JSON format for analysis.
- AI Agent (Google Gemini): The AI analyzes all reviews to determine sentiment, key positives, common complaints, and improvement suggestions.
- Email Notification: A summarized review analysis is sent via Gmail.

**How to Use**
1. Airtable Credentials: Connect your Airtable account and ensure review links are stored in the specified table.
2. Google Sheets Credentials: Set up Google Sheets OAuth2 to store and retrieve review data.
3. Google Gemini Credentials: Configure your Google Gemini API key for AI-powered extraction and analysis.
4. Gmail Credentials: Connect a Gmail account to receive automated review summaries.
5. Activate Workflow: Enable the workflow to start automated review monitoring and reporting.

**Requirements**
- n8n instance (self-hosted or cloud)
- Airtable base containing review links
- Google Sheets document for storing reviews
- Google Gemini API key
- Gmail account for sending reports

## 🔗 Nodes Used

Airtable, Google Sheets, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
