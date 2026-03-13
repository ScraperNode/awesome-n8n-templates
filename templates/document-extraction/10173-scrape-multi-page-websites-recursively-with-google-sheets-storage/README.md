# 🔬 Scrape multi-page websites recursively with Google Sheets storage

> ⚡ **2,847 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Configurable Multi-Page Web Scraper

### Introduction

This n8n workflow provides a robust and highly reusable solution for scraping data from paginated websites. Instead of building a complex series of nodes for every new site, you only need to update a simple JSON configuration in the initial Input Node, making your scraping tasks faster and more standardized.

### Purpose

The core purpose of this template is to automate the extraction of structured data (e.g., product details, quotes, articles) from websites with multiple pages. It is designed to be fully recursive: it follows the "next page" link until no link is found, aggregates the results from all pages, and cleanly structures the final output into a single list of items.

### Setup and Configuration

1. **Locate the Input Node:** The entire configuration for the scraper is held within the first node of the workflow.
2. **Update the JSON:** Replace the existing JSON content with your target website's details:
   * `startUrl`: The URL of the first page to begin scraping.
   * `nextPageSelector`: The CSS selector for the "Next" or "Continue" link element that leads to the next page. This is crucial for the pagination loop.
   * `fields`: An array of objects defining the data to extract on each page. For each field, specify the `name` (the output key), the `selector` (the CSS selector pointing to the data), and the `value` (the HTML attribute to pull, usually `text` or `href`).
3. **Run the Workflow:** After updating the configuration, execute the workflow. It will automatically loop through all pages and deliver a final, structured list of the scraped data.

For a detailed breakdown of the internal logic, including how the loop is constructed using the Set, If, and HTTP Request nodes, please refer to the original blog post: [Flexible Web Scraping with n8n: A Configurable, Multi-Page Template](https://n8nplaybook.com/post/2025/10/flexible-n8n-scraper-template/)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
