# 📊 Extract & analyze brand content with Bright Data and Google Gemini

> ⚡ **639 views** · 📊 [Market Research & Insights](../)

## Description

### Who this is for?

The Brand Content Extract, Summarization & Sentiment Analysis workflow is designed for professionals and teams who need to monitor, understand, and act on public brand perception at scale. 

It is ideal for:

1. **Brand Managers** - Looking to track how their brand is portrayed online.

2. **Marketing Analysts** - Seeking insights from competitor and industry content.

3. **PR & Communications Teams** - Evaluating media tone and potential reputation risks.

4. **Data Scientists & AI Developers** - Automating content intelligence pipelines.

5. **Growth Hackers** - Performing large-scale web listening for campaign optimization.

### What problem is this workflow solving?

Manually tracking and interpreting how your brand is mentioned across blogs, news sites, or product reviews is labor-intensive and unscalable. Traditional scraping tools return raw data but lack insights like summarization, sentiment analysis etc.

This workflow addresses:

- Scalable extraction of brand-related content using Bright Data's infrastructure.

- Textual data extract for easy decision-making or alerting.

- Automated summarization of verbose or multi-paragraph articles using Gemini.

- Sentiment analysis of how a brand is being portrayed.

### What this workflow does

- Receives input: A brand URL for the data extraction and analysis.

- Uses Bright Data's Web Unlocker to extract content from relevant sites.

- Cleans and preprocesses the scraped content for readability.

- Sends the content to Google Gemini for:

	- Enriched results including:

		- Cleaned content

		- Summary

		- Sentiment Analysis

		- Sends the response to a target system via Webhook notification
		- Perists the response to disk

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1229)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- A Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set URL and Bright Data Zone** for setting the brand content URL and the Bright Data Zone name.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

- **Update Source** : Update the workflow input to read from Google Sheet or Airbase for dynamically tracking multiple brands or topics.
- **AI Prompt Customization** : Tailor Gemini prompts for: 
	- Summary length (brief vs. detailed)

	- Detailed Sentiment with the custom structured data format.

	- Brand-specific tone detection (e.g., trust, excitement, dissatisfaction)

- **Output Destinations**: Configure the output node to send the responses to various platforms, such as Slack, CRM systems, or databases.

## 🔗 Nodes Used

Function, HTTP Request, Summarization Chain, Basic LLM Chain, Read/Write Files from Disk, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
