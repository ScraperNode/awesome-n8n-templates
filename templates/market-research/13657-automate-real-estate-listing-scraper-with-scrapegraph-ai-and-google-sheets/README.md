# 📊 Automate Real Estate Listing Scraper 🏠🤖 with ScrapeGraph AI and Google Sheets

> ⚡ **135 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of **scraping real estate property listings** from websites using **ScrapeGraph AI**, extracting structured data, and saving it to a **Google Sheet**. It is designed to handle paginated listing pages and can be adapted to any real estate site that uses URL parameters for pagination.

NOTE:
This workflow has been tested with Immobiliare.it, the #1 real estate website in Italy. However, it is designed to be adaptable by modifying the pagination parameter and the listing URL pattern, you can use it with **any real estate website** that structures its listings with URL-based pagination.

Business Use Cases:

* Real estate market intelligence
* Lead generation for agencies
* Price trend analysis
* Property comparison dashboards
* CRM enrichment
* Competitor monitoring

---

### Key Advantages

#### 1. ✅ Fully Automated Lead Collection

Automatically collects real estate listings without manual browsing.

#### 2. ✅ AI-Powered Extraction

Uses AI instead of rigid selectors:

* More resilient to website layout changes
* Handles dynamic content better
* Reduces maintenance effort


#### 3. ✅ Structured Data Output

The defined JSON schema ensures:

* Clean database-ready data
* Standardized fields
* Easy integration with CRM or analytics tools


#### 4. ✅ Pagination Scalability

Can easily scale:

* Increase number of pages
* Change city
* Adapt to different portals


#### 5. ✅ Duplicate Prevention

Google Sheets uses URL matching to:

* Avoid duplicates
* Update existing records


#### 6. ✅ Modular Architecture

The workflow is modular and reusable:

* URL generation logic is independent
* Extraction schema is customizable
* Storage layer can be replaced (CRM, database, Airtable, etc.)


#### 7. ✅ Cost & Time Efficiency

* Eliminates manual data entry
* Saves research time
* Enables automated market monitoring

---


### **How it works**

The workflow is structured in two main phases:

1. **Listing URL Discovery**  
   - The user provides a base URL, the maximum number of pages to scrape, and the pagination parameter name (e.g., `pag` for Immobiliare.it).  
   - A Code node generates a list of page URLs by appending the pagination parameter.  
   - Each page URL is processed through the **ScrapegraphAI** node, which extracts all individual listing URLs.  
   - An **Information Extractor** node (powered by Google Gemini) filters and validates the extracted URLs based on a defined structure.  
   - A **Wait** node introduces a delay between requests to avoid rate limiting.  
   - A **Loop Over Items** node ensures all generated page URLs are processed.

2. **Data Extraction & Storage**  
   - All collected listing URLs are aggregated and split into individual items.  
   - A second loop processes each listing URL through another **ScrapegraphAI** node, which extracts detailed property data (title, description, price, area, bedrooms, bathrooms, floor, rooms, balcony, terrace, cellar, heating, air conditioning, image URLs) based on a JSON schema.  
   - The extracted data is then written to a Google Sheet using the **Google Sheets** node, with each listing stored in a new row and deduplicated based on the listing URL.

The workflow is fully automated and can scale to handle multiple listing pages and hundreds of individual property URLs.

---

### **Set up steps**

To use this workflow, follow these steps:

1. **Import the workflow** into your n8n instance.

2. **Configure credentials**:
   - **ScrapegraphAI**: Add your [API key for ScrapegraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia).
   - **Google Gemini (PaLM)**: Add your Google Gemini API credentials.
   - **Google Sheets OAuth2**: Authenticate with the Google account where you want to store the data.

3. **Prepare your target Google Sheet**:
   - Create a new Google Sheet (or clone [this template](https://docs.google.com/spreadsheets/d/1jtMyMglBbekD9Z407q8-0vn-cDDXhM81Uj1oAZIJGX8/edit?usp=sharing)).
   - Note the **Sheet ID** (from the URL) and the **sheet name** (tab name) where data should be written.

4. **Customize the input parameters**:
   - In the **Set params** node, define:
     - `url`: The base URL of the listing page (without pagination parameters).
     - `max_pages`: The number of pages to scrape.
     - `page_format_value`: The query parameter used for pagination (e.g., `pag` for Immobiliare.it).

5. **Adjust the listing URL structure** (if needed):
   - In the **Extract individual URL** node, update the system prompt to match the URL pattern of the target website (e.g., `https://www.xxx.it/xxx/xxxx`).

6. **Review the output schema**:
   - In the **Extract data** node, you can modify the JSON schema to match the fields you want to extract from each listing.

7. **Update the Google Sheet node**:
   - Set the correct **Document ID** and **Sheet Name** in the **Update real estate listings** node.
   - Ensure the column mapping matches your sheet structure.

8. **Activate the workflow** and click **Execute Workflow** to start scraping.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
