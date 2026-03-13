# 📊 Google trend data extract & summarization with Bright Data & Google Gemini

> ⚡ **3,489 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for
The Google Trend Data Extract & Summarization workflow is ideal for trend researchers, digital marketers, content strategists, and AI developers who want to automate the extraction, summarization, and distribution of Google Trends data. This end-to-end solution helps transform trend signals into human-readable insights and delivers them across multiple channels.

It is built for:

- **Market Researchers** - Tracking trends by topic or region

- **Content Strategists** - Identifying content opportunities from trending data

- **SEO Analysts** - Monitoring search volume and shifts in keyword popularity

- **Growth Hackers** - Reacting quickly to real-time search behavior

- **AI & Automation Engineers** - Creating automated trend monitoring systems

### What problem is this workflow solving?
Google Trends data can provide rich insights into user interests, but the raw data is not always structured or easily interpretable at scale. Manually extracting, cleaning, and summarizing trends from multiple regions or categories is time-consuming.

This workflow solves the following problems:

- Automates the conversion of markdown or scraped HTML into clean textual input

- Transforms unstructured data into structured format ready for processing

- Uses AI summarization to generate easy-to-read insights from Google Trends

- Distributes summaries via email and webhook notifications

- Persists responses to disk for archiving, auditing, or future analytics

### What this workflow does

1. Receives input: Sets an URL for the data extraction and analysis.

2. Uses Bright Data’s Web Unlocker to extract content from relevant site.

3. Markdown to Textual Data Extractor: Converts markdown content into plaintext using n8n’s Function or Markdown nodes

4. Structured Data Extract: Parses the plaintext into structured JSON suitable for AI processing

5. Summarize Google Trends: Sends structured data to Google Gemini with a summarization prompt to extract key takeaways

6. Send Summary via Gmail: Composes an email with the AI-generated summary and sends it to a designated recipient

7. Persist to Disk: Writes the AI structured data to disk

8. Webhook Notification: Sends the summarized response to an external system (e.g., Slack, Notion, Zapier) using a webhook

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1253)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set URL and Bright Data Zone** for setting the brand content URL and the Bright Data Zone name.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

1. **Update Source** : Update the workflow input to read from Google Sheet or Airbase etc.
2. **Gemini Prompt Tuning** : 
- Customize prompts to extract summaries like:
	- Summarize the most significant trend shifts
	- Generate content ideas from the trending search topics
3. **Email Personalization** : Configure Gmail node to:
 - Use dynamic subject lines like: Weekly Google Trends Summary – {{date}}
- Send to multiple stakeholders or mailing lists

4. **File Storage Customization** : 
- Save with timestamps, e.g., trends_summary_2025-04-29.json
-  Extend to S3 or cloud drive integrations
5. **Webhook Use Cases** : 
- Send summary to:
	- Internal dashboards
	- Slack channels
	- Automation tools like Make, Zapier etc.

## 🔗 Nodes Used

Function, HTTP Request, Gmail, Summarization Chain, Basic LLM Chain, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
