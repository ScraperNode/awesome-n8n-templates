# 📊 TrustPilot SaaS product review tracker with Bright Data & OpenAI

> ⚡ **1,165 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for
The TrustPilot SaaS Product Review Tracker is designed for product managers, SaaS growth teams, customer experience analysts, and marketing teams who need to extract, summarize, and analyze customer feedback at scale from TrustPilot.

This workflow is tailored for:

- **Product Managers** - Monitoring feedback to drive feature improvements

- **Customer Support & CX Teams** - Identifying sentiment trends or recurring issues

- **Marketing & Growth Teams** - Leveraging testimonials and market perception

- **Data Analysts** - Tracking competitor reviews and benchmarking

- **Founders & Executives** - Wanting aggregated insights into customer satisfaction

### What problem is this workflow solving?
Manually monitoring, extracting, and summarizing TrustPilot reviews is time-consuming, fragmented, and hard to scale across multiple SaaS products. 

This workflow automates that process from unlocking the data behind anti-bot layers to summarizing and storing customer insights enabling teams to respond faster, spot trends, and make data-backed product decisions.

This workflow solves:

- The challenge of scraping protected review data (using Bright Data Web Unlocker)

- The need for structured insights from unstructured review content

- The lack of automated delivery to storage and alerting systems like Google Sheets or webhooks

### What this workflow does
**Extract TrustPilot Reviews**: Uses Bright Data Web Unlocker to bypass anti-bot protections and pull markdown-based content from product review pages

**Convert Markdown to Text**: Leverages a basic LLM chain to clean and convert scraped markdown into plain text

**Structured Information Extraction**: Uses OpenAI GPT-4o via the Information Extractor node to extract fields like product name, review date, rating, and reviewer sentiment

**Summarization Chain**: Generates concise summaries of overall review sentiment and themes using OpenAI

**Merge & Aggregate Output**: Consolidates individual extracted records into a structured batch output

**Outbound Data Delivery**:

- Google Sheets – Appends summary and structured review data

- Write to Disk – Persists raw and processed content locally

- Webhook Notification – Sends a real-time alert with summarized insights

### Pre-conditions

1. You need to have a [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the "Setup" section below.
2. You need to have an OpenAI Account.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1353)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, Configure the Google Sheet Credentials with your own account. Follow this documentation - [Set Google Sheet Credential](https://docs.n8n.io/integrations/builtin/credentials/google/)
- In n8n, configure the OpenAi account credentials.
- Ensure the URL and Bright Data zone name are correctly set in the **Set URL, Filename and Bright Data Zone** node.
- Set the desired local path in the **Write a file** to disk node to save the responses.

### How to customize this workflow to your needs

**Target Multiple Products** : 

- Configure the Bright Data input URL dynamically for different SaaS product TrustPilot URLs

- Loop through a product list and run parallel jobs for each

**Customize Extraction Fields** : 

Update the prompt in the Information Extractor to include:

- Review title
- Response from company
- Specific feature mentions
- Competitor references

**Tune Summarization Style**

- **Change tone**: executive summary, customer pain-point focus, or marketing quote extract

- **Enable sentiment aggregation** (e.g., 30% negative, 50% neutral, 20% positive)

**Expand Output Destinations**

- Push to Notion, Airtable, or CRM tools using additional webhook nodes

- Generate and send PDF reports (via PDFKit or HTML-to-PDF nodes)

- Schedule summary digests via Gmail or Slack

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Summarization Chain, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
