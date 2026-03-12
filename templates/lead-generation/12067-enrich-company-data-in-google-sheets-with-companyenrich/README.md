# 🎣 Enrich company data in Google Sheets with CompanyEnrich

> ⚡ **108 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automates enriching company profiles by taking a domain name from a Google Sheet, fetching firmographic data via the CompanyEnrich API, and updating the sheet with the results.

## Who is this for?
* **Sales Teams:** To enrich lead lists with better data
* **Marketing Professionals:** To segment potential accounts based on industry or location
* **Recruiters:** To gather background information on target companies
* **Data Analysts:** To rapidly clean and populate missing firmographic datasets

## What it does
1. The workflow pulls rows from a specified Google Sheet
2. It checks a "Status" column to ensure it only processes rows that haven't been completed yet (skips rows marked "Done").
3. Using the company `Domain` column, it queries the CompanyEnrich API
4. A custom code node flattens the JSON response and automatically matches the API data to the columns currently existing in your Google Sheet
5. It writes the enriched data back to the row and marks the status as "Done"

## Requirements
* A Google account with access to Sheets.
* You will need an API key from [CompanyEnrich](https://companyenrich.com/).

## How to set up
1.  **Prepare your Google Sheet:** Create a sheet with the following mandatory headers: `Domain`, `Status`, and `Last Updated`.
2.  **Add Data Columns:** Add headers for the data you want to fetch (e.g., `revenue`, `employees`, `location_city_name`, `socials_linkedin_url`).
3.  **Configure Credentials:** Connect your Google Sheets account in the "Get row(s)" and "Update row" nodes.
4.  **Select the Sheet:** Update the `Document` and `Sheet Name` in both Google Sheets nodes to point to your specific file.
5.  **Add API Key:** Open the "Fetch Company Data" node and replace the placeholder in the `Authorization` header with your actual API Key (format: `Bearer YOUR_API_KEY`).

## How to customize
* **Fetch Specific Data:** Because of the dynamic Javascript logic, you do not need to edit the workflow to get different data. Simply add a new column header to your Google Sheet that matches the API field name (e.g., adding a column named `industries` will automatically fetch and fill that data).
* **Adjust Throttling:** If you have a large dataset, you may need to adjust the "SplitInBatches" node to process fewer items at once to avoid API rate limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
