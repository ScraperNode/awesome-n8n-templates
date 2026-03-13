# 📊 Automate Etsy data mining with Bright Data Scrape & Google Gemini

> ⚡ **6,175 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who this is for?
The Automate Etsy Data Mining with Bright Data Scrape & Google Gemini workflow is designed for eCommerce analysts, product researchers, and AI developers seeking to extract actionable insights from Etsy listings at scale. 

It is ideal for:

- **eCommerce Entrepreneurs** - Researching product demand and competition.

- **Market Analysts** - Tracking pricing, reviews, and trends across Etsy categories.

- **Product Managers** - Identifying niche opportunities and design inspirations.

- **Data Scientists & AI Engineers** - Automating product intelligence pipelines.

- **Growth Hackers** - Leveraging Etsy insights to refine product-market fit.

### What problem is this workflow solving?
Manually browsing Etsy to analyze product listings, pricing, reviews, and seller activity is slow, inconsistent, and unscalable. Scraping Etsy requires unlocking JavaScript-heavy content and structuring noisy data for analysis.

This workflow solves:

- Automated and scalable scraping of Etsy product listings using Bright Data’s infrastructure.

- A fully paginated data structured Estry production data extraction via the Google Gemini LLM.

- Enables faster decision-making for product research and competitive analysis via the fully automated paginated data extraction.

### What this workflow does

- Receives input: Sets the Esty URL for the data extraction and analysis.

- Uses Bright Data's Web Unlocker to extract content from relevant sites.

- Cleans and preprocesses the scraped content for readability.

- Sends the content to Google Gemini for:

	- Enriched results including:

		- Data persistence over the disk.

		- Sends the response to a target system via Webhook notification.

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1241)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set Esty Search Query** for setting the brand content URL and the Bright Data Zone name.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

- **Input Sources** : Replace the static URL with dynamic input from Google Sheets, Webhook, or Airtable to research multiple niches.

- **Prompt Customization** : Adjust Gemini prompts to extract specific insights for example:

	- List key features of the product

	- Summarization of the review themes
- **Data Output Options** : Update the Webhook notification to save data to:

	- Google Sheets
	- Notion or Airtable
	- SQL/NoSQL
	- Slack/Email

## 🔗 Nodes Used

Function, HTTP Request, OpenAI Chat Model, Read/Write Files from Disk, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
