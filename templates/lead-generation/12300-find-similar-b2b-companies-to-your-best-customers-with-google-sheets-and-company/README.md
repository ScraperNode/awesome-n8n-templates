# 🎣 Find similar B2B companies to your best customers with Google Sheets and CompanyEnrich

> ⚡ **195 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

This workflow allows you to automatically expand your B2B target lists by discovering companies similar to your existing leads. 

Instead of manually searching for competitors or lookalikes, you can input a list of domains into Google Sheets and let the CompanyEnrich API generate high-quality lookalike suggestions along with similarity scores.

## Who is this for?
This template is ideal for **GTM Engineers**, **Sales Teams**, and **Growth Hackers** who want to enrich their lead databases and find new prospecting opportunities based on their current ideal customer profile (ICP).

## What it does
1. **Reads Source:** It pulls a list of company domains from a specified Google Sheet.
2. **Enriches:** It sends each domain to the CompanyEnrich API to find similar companies (competitors/lookalikes).
3. **Processes:** It merges the new data with your original list and formats the JSON response.
4. **Saves:** It appends the results (Similar Company Name, Domain, and Similarity Score) back into a new tab in your Google Sheet.

## Requirements
* **Google Sheets:** A spreadsheet with a column named `Domain` containing the websites you want to analyze.
* **CompanyEnrich API Key:** You need an API key from [CompanyEnrich](https://companyenrich.com).
* **n8n Credentials:** Connected Google Sheets account.

## How to set up
1. **Prepare Sheet:** Create a Google Sheet with two tabs. In the first tab, create a column header named `Domain` and add your target websites. Leave the second tab empty for results.
2. **Configure Nodes:** Open the "Read Source List" and "Write Results" nodes to select your spreadsheet file and the respective tabs.
3. **Add API Key:** Open the "Fetch Similar Companies" node. In the **Header Parameters** section, replace `YOUR_API_TOKEN` with your actual API key (keep the `Bearer ` prefix).

## How to customize
* **Filter by Score:** You can add an "If" node after the API call to filter out results with a low similarity score.
* **Change Destination:** Instead of Google Sheets, you can easily swap the final node to write results to Airtable, Notion, or your CRM (HubSpot/Pipedrive).

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
