# 📊 Startup funding research automation with Claude, Perplexity AI, and Airtable

> ⚡ **7,096 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Startup Funding Research Automation with Claude, Perplexity AI, and Airtable

## How it works
This intelligent workflow automatically discovers and analyzes recently funded startups by:
1. Monitoring multiple news sources (TechCrunch and VentureBeat) for funding announcements
2. Using AI to extract key funding details (company name, amount raised, investors)
3. Conducting automated deep research on each company through perplexity deep research or jina deep search.
4. Organizing all findings into a structured Airtable database for easy access and analysis

## Set up steps (10-15 minutes)
1. Connect your news feed sources (TechCrunch and VentureBeat). Could be extended. These were easy to scrape and this data can be expensive.
2. Set up your AI service credentials (Claude and Perplexity or jina which has generous free tier)
3. Connect your Airtable account and create a base with appropriate fields (can be imported from my base) or see structure below.
[Airtable Base](https://airtable.com/appYwSYZShjr8TN5r/shryOEdmJmZE5ROce)

### Structure Funding Round Base

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| website_url | String | URL of the company website |
| company_name | String | Name of the company |
| funding_round | String | The funding stage or round (e.g., Series A, Seed, etc.) |
| funding_amount | Number | The amount of funding received |
| lead_investor | String | The primary investor leading the funding round |
| market | String | The market or industry sector the company operates in |
| participating_investors | String | List of other investors participating in the funding round |
| press_release_url | String | URL to the press release about the funding |
| evaluation | Number | The company's valuation |

### Structure Company Deep Research Base

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| website_url | String | URL of the company website |
| company_name | String | Name of the company |
| funding_round | String | The funding stage or round (e.g., Series A, Seed, etc.) |
| funding_amount | Number | The amount of funding received |
| currency | String | Currency of the funding amount |
| announcement_date | String | Date when the funding was announced |
| lead_investor | String | The primary investor leading the funding round |
| participating_investors | String | List of other investors participating in the funding round |
| industry | String | The industry sectors the company operates in |
| company_description | String | Description of the company's business |
| hq_location | String | Company headquarters location |
| founding_year | Number | Year the company was founded |
| founder_names | String | Names of the company founders |
| ceo_name | String | Name of the company CEO |
| employee_count | Number | Number of employees at the company |
| total_funding | Number | Total funding amount received to date |
| total_funding_currency | String | Currency of total funding |
| funding_purpose | String | Purpose or use of the funding |
| business_model | String | Company's business model |
| valuation | Object | Company valuation information |
| previous_rounds | Object | Information about previous funding rounds |
| source_urls | String | Source URLs for the funding information |
| original_report | String | Original report text about the funding |
| market | String | The market the company operates in |
| press_release_url | String | URL to the press release about the funding |
| evaluation | Number | The company's valuation |



## Notes
I found that by using perplexity via open router, we lose access to the sources, as they are not stored in the same location as the report itself so I opted to use perplexity API via HTTP node.

For using perplexity and or jina you have to configure header auth as described in [Header Auth - n8n Docs](https://docs.n8n.io/integrations/builtin/credentials/httprequest/#using-header-auth)

## What you can learn
- How to scrape data using sitemaps
- How to extract strucutred data from unstructured text
- How to execute parts of the workflow as subworkflow
- How to use deep research in a practical scenario
- How to define more complex JSON schemas

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
