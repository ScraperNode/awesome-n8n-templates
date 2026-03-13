# 🎣 Enrich company data from Google Sheet with OpenAI Agent and ScrapingBee

> ⚡ **9,554 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow demonstrates how to enrich data from a list of companies in a spreadsheet. While this workflow is production-ready if all steps are followed, adding error handling would enhance its robustness.

## Important notes

- **Check legal regulations**: This workflow involves scraping, so make sure to check the legal regulations around scraping in your country before getting started. Better safe than sorry!
- **Mind those tokens**: OpenAI tokens can add up fast, so keep an eye on usage unless you want a surprising bill that could knock your socks off! 💸

## Main Workflow

### Node 1 - `Webhook`
This node triggers the workflow via a webhook call. You can replace it with any other trigger of your choice, such as form submission, a new row added in Google Sheets, or a manual trigger.

### Node 2 - `Get Rows from Google Sheet`
This node retrieves the list of companies from your spreadsheet. 
here is the **[Google Sheet Template you can use](https://docs.google.com/spreadsheets/d/1AIzJGxdMmwMDuHyRqGyX-E0QYbyxWKlSMn-awlHH19s/)**.
The columns in this Google Sheet are:

- **Company**: The name of the company
- **Website**: The website URL of the company  
  *These two fields are required at this step.*

- **Business Area**: The business area deduced by OpenAI from the scraped data
- **Offer**: The offer deduced by OpenAI from the scraped data
- **Value Proposition**: The value proposition deduced by OpenAI from the scraped data
- **Business Model**: The business model deduced by OpenAI from the scraped data
- **ICP**: The Ideal Customer Profile deduced by OpenAI from the scraped data
- **Additional Information**: Information related to the scraped data, including:
  - **Information Sufficiency**:
    - *Description*: Indicates if the information was sufficient to provide a full analysis.
    - *Options*: "Sufficient" or "Insufficient"
  - **Insufficient Details**:
    - *Description*: If labeled "Insufficient," specifies what information was missing or needed to complete the analysis.
  - **Mismatched Content**:
    - *Description*: Indicates whether the page content aligns with that of a typical company page.
  - **Suggested Actions**:
    - *Description*: Provides recommendations if the page content is insufficient or mismatched, such as verifying the URL or searching for alternative sources.

### Node 3 - `Loop Over Items`
This node ensures that, in subsequent steps, the website in "extra workflow input" corresponds to the row being processed. You can delete this node, but you'll need to ensure that the "query" sent to the scraping workflow corresponds to the website of the specific company being scraped (rather than just the first row).

### Node 4 - `AI Agent`
This AI agent is configured with a prompt to extract data from the content it receives. The node has three sub-nodes:
  
  - **OpenAI Chat Model**: The model used is currently `gpt4-o-mini`.
  - **Call n8n Workflow**: This sub-node calls the workflow to use ScrapingBee and retrieves the scraped data.
  - **Structured Output Parser**: This parser structures the output for clarity and ease of use, and then adds rows to the Google Sheet.

### Node 5 - `Update Company Row in Google Sheet`
This node updates the specific company's row in Google Sheets with the enriched data.

## Scraper Agent Workflow

### Node 1 - `Tool Called from Agent`
This is the trigger for when the AI Agent calls the Scraper. A query is sent with:
- Company name
- Website (the URL of the website)

### Node 2 - `Set Company URL`
This node renames a field, which may seem trivial but is useful for performing transformations on data received from the AI Agent.

### Node 3 - `ScrapingBee: Scrape Company's Website`
This node scrapes data from the URL provided using ScrapingBee. You can use any scraper of your choice, but ScrapingBee is recommended, as it allows you to configure scraper behavior directly. Once configured, copy the provided "curl" command and import it into n8n.

### Node 4 - `HTML to Markdown`
This node converts the scraped HTML data to Markdown, which is then sent to OpenAI. The Markdown format generally uses fewer tokens than HTML.

## Improving the Workflow
It's always a pleasure to share workflows, but creators sometimes want to keep some magic to themselves ✨. Here are some ways you can enhance this workflow:

- Handle potential errors
- Configure the scraper tool to scrape other pages on the website. Although this will cost more tokens, it can be useful (e.g., scraping "Pricing" or "About Us" pages in addition to the homepage).
- Instead of Google Sheets, connect directly to your CRM to enrich company data.
- Trigger the workflow from form submissions on your website and send the scraped data about the lead to a Slack or Teams channel.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Markdown, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
