# 📊 Search & summarize web data with Perplexity, Gemini AI & Bright Data to webhooks

> ⚡ **2,179 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for?
This workflow is designed for professionals and teams who need real-time, structured insights from Perplexity Search results without manual effort.

### What problem is this workflow solving? 
This n8n workflow solves the problem of automating Perplexity Search result extraction, cleanup, summarization, and AI-enhanced formatting for downstream use like sending the results to a webhook or another system. 

### What this workflow does

1. Automates Perplexity Search via Bright Data
- Uses Bright Data’s proxy-based SERP API to run a Google Search query programmatically. 
- Makes the process repeatable and scriptable with different search terms and regions/zones.

2. Cleans and Extracts Useful Content
- The **Readable Data Extractor** uses LLM-based cleaning to remove HTML/CSS/JS from the response and extract pure text data. 
- Converts messy, unstructured web content into structured, machine-readable format.

3. Summarizes Search Results
Through the Gemini Flash + Summarization Chain, it generates a concise summary of the search results. Ideal for users who don’t have time to read full pages of search results.

4. Formats Data Using AI Agent
The AI Agent acts like a virtual assistant that: - Understands search results
- Formats them in a readable, JSON-compatible form
- Prepares them for webhook delivery

5. Delivers Results to Webhook
Sends the final summary + structured search result to a webhook (could be your app, a Slack bot, Google Sheets, or CRM).

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1232)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Perplexity Search Request** node with the prompt you wish to perform the search.
- Update the **Webhook HTTP Request** node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

**1. Change the Perplexity Search Input**

Default: It searches a fixed query or dataset.

Customize:
- Accept input from a Google Sheet, Airtable, or a form.
 - Auto-trigger searches based on keywords or schedules.

**2. Customize Summarization Style (LLM Output)**

Default: General summary using Google Gemini or OpenAI.

Customize:

- Add tone: formal, casual, technical, executive-summary, etc.

- Focus on specific sections: pricing, competitors, FAQs, etc.

- Translate the summaries into multiple languages.

- Add bullet points, pros/cons, or insight tags.

**3.Choose Where the Results Go**

Options:

- Email, Slack, Notion, Airtable, Google Docs, or a dashboard.

- Auto-create content drafts for WordPress or newsletters.

- Feed into CRM notes or attach to Salesforce leads.

## 🔗 Nodes Used

HTTP Request, Summarization Chain, Recursive Character Text Splitter, Default Data Loader, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
