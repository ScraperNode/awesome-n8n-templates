# 🎣 Enrich and classify company leads in Google Sheets with Crawl4AI and Gemini

> ⚡ **111 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow reads **unenriched leads** from Google Sheets, derives each company website from the email domain, crawls the homepage via Crawl4ai, and uses Google Gemini to extract company details and generate an Italian category and description before writing the enriched data back to the sheet.

## How it works
1. Starts when you manually execute the workflow in n8n.
2. Reads rows from Google Sheets where the Enrichment field is empty, limits processing to 10 items, and iterates through the leads in batches.
3. Builds a company website URL from each lead’s email domain and sends it to a Crawl4ai HTTP endpoint to crawl the homepage and return HTML and markdown.
4. Uses Google Gemini (via the Information Extractor) to extract structured company fields such as company name, VAT number, address, city, state, phone, and social links from the crawled page content.
5. Uses Google Gemini to classify the company into a predefined category list and generate a short Italian description based on the homepage markdown and HTML, and parses the response into structured JSON.
6. Merges the extracted company details with the classification output and updates the corresponding row in Google Sheets with the enriched fields, then waits 60 seconds before continuing to the next batch.

## Setup
1. Connect your Google Sheets OAuth credentials and select the target spreadsheet and sheet for both reading leads and updating rows.
2. Add Google Gemini (PaLM) API credentials for the Gemini chat model nodes used for extraction and classification.
3. Ensure your Google Sheet includes the expected columns (including Email and Enrichment, plus Company, VAT Number, Address, City, State, Phone, Linkedin, Facebook, Instagram, Youtube, Sector, and Description) and keeps the row_number field available for updates.
4. Update the Crawl4ai HTTP endpoint URL (currently set to an internal IP) so it points to your reachable Crawl4ai service.

## Additional info
### MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### Need help customizing?
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
