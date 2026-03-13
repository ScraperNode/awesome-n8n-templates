# 📊 Extract & summarize Bing Copilot search results with Gemini AI and Bright Data

> ⚡ **743 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who is this for?
This workflow automates the process of querying Bing's Copilot Search, extracting structured data from the results, summarizing the information, and sending a notification via webhook. It leverages the Microsoft Copilot to retrieve search results and integrates AI-powered tools for data extraction and summarization.

### What problem is this workflow solving?

1. **Data Analysts and Researchers**: Who need to gather and summarize information from Bing search results efficiently.​

2. **Developers and Engineers**: Looking to integrate Bing search data into applications or services.​

3. **Digital Marketers and SEO Specialists**: Interested in monitoring search engine results for specific keywords or topics.

### What this workflow does

Manually extracting and summarizing information from search engine results can be time-consuming and error-prone. This workflow automates the process by:​

1. Performing Bing searches using Bright Data's Bing Search API.​

2. Extracting structured data from the search results.​

3. Summarizing the extracted information using AI tools.​

4. Sending the summarized data to a specified endpoint via webhook.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1240)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Perform a Bing Copilot Request** node with the prompt you wish to perform the search.
- Update the **Structured Data Webhook Notifier** node with the Webhook endpoint of your choice.
- Update the **Summary Webhook Notifier** node with the Webhook endpoint of your choice.


### How to customize this workflow to your needs

1. **Modify Search Queries**: Adjust the search terms to target different topics or keywords.​

2. **Change Data Extraction Logic**: Customize the extraction process to capture specific data points from the search results.​

3. **Alter Summarization Techniques**: Integrate different AI models or adjust parameters to change how summaries are generated.​

4. **Update Webhook Endpoints**: Direct the summarized data to different endpoints as required.​

5. **Schedule Workflow Runs**: Set up automated triggers to run the workflow at desired intervals.

## 🔗 Nodes Used

HTTP Request, Summarization Chain, Basic LLM Chain, Structured Output Parser, Recursive Character Text Splitter, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
