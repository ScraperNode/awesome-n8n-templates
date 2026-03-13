# 📊 Extract & summarize Wikipedia data with Bright Data and Gemini AI

> ⚡ **583 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for?
This workflow automates the process of Wikipedia data extraction using the Bright Data Web Unlocker, parsing and cleaning the data, and then sending the results to a specified webhook URL for downstream processing, reporting, or integration.

### What problem is this workflow solving?

- Researchers who need structured information from Wikipedia pages regularly.

- Data Engineers building knowledge bases or enriching datasets with factual data.

- Digital Marketers or Content Writers automating fact-checking or content sourcing.

- Automation Enthusiasts who want to trigger external systems with rich context from Wikipedia.

### What this workflow does

This workflow addresses the challenges of manually retrieving, structuring, and using data from Wikipedia at scale.

#### Workflow Breakdown

**Trigger**
- Type: Scheduled or Manual
- Purpose: Starts the workflow either on a fixed schedule (e.g., daily) or on-demand via a manual trigger or incoming webhook.

**Bright Data Wikipedia Scraping**
- Tool Used: Bright Data Web Unlocker
- Action: Scrape the HTML content of one or multiple Wikipedia article URLs.

**Parse & Extract Structured Data**
- The Basic LLM Chain node is responsible for producing a human readable content.

**Summarization**
- Summarize the Wikipedia content by utilizing the Summarization Chain node.

**Send to Webhook**
- Initiates a Webhook notification to the specified URL as part of the "**Summary Webhook Notifier**" node.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1239)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set Wikipedia URL with Bright Data Zone** node with the Wikipedia URL and Bright Data Zone.
- Update the **Summary Webhook Notifier** node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

1. **Update Wikipedia URL**
- Replace with your own Wikipedia URL of your interest.
- Make sure to set the Wikipedia URL as part of the "**Set Wikipedia URL with Bright Data Zone**" node.
2. **Modify Data Extraction Logic**
- Extract entire article content or just specific sections by extending the "**LLM Data Extractor**" node prompt.
3. **Extend AI Summarization**
- Extract key bullet points or entities.
- Create short-form summaries by extending the "**Concise Summary Generator**" node.
4. **Extend Summary Webhook Notifier**
- Send to Slack, Discord, Telegram, MS Teams via the Webhook notification mechanism.
- Connect to your internal database/API via the Webhook notification mechanism.

## 🔗 Nodes Used

HTTP Request, Summarization Chain, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
