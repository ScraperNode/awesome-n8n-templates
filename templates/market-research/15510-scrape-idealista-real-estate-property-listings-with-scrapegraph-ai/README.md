# 📊 Scrape Idealista 🏠 Real Estate Property Listings with ScrapeGraph AI 🕷️

> ⚡ **206 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of **scraping real estate listings** from **Idealista* (or similar property portals), extracting structured property data using AI, and storing the results directly into Google Sheets. 

It is designed to handle paginated listing pages, collect individual property URLs, extract detailed listing information, and continuously build a structured real estate database with minimal manual effort. 

---

### Key Advantages

#### **1. ✅ Fully Automated Real Estate Data Collection**
  Automatically navigates through multiple listing pages, extracts property URLs, and retrieves detailed property information without manual browsing.

#### **2. ✅AI-Powered Data Extraction**
  Uses ScrapeGraphAI to intelligently extract structured information such as:

  * Property title
  * Description
  * Price
  * Area (sqm)
  * Bedrooms & bathrooms
  * Floor and room count
  * Balcony, terrace, cellar
  * Heating and air conditioning
  * Property image URLs

#### **3. ✅Scalable Pagination Handling**
  Dynamically generates paginated URLs, allowing the workflow to scrape hundreds or thousands of listings efficiently.

#### **4. ✅Google Sheets Integration**
  Automatically writes and updates extracted property data into Google Sheets, creating a centralized and continuously updated real estate database.

#### **5. ✅Duplicate Prevention**
  Uses the property URL as a unique identifier to append or update listings without creating duplicates.

#### **6. ✅Highly Customizable**
  The workflow can be adapted to:

  * Different cities or search filters
  * Other real estate websites
  * Different extraction schemas
  * Alternative storage systems (CRM, database, Airtable, etc.)

#### **7. ✅Structured JSON Schema Extraction**
  Ensures consistent and reliable data formatting, making the output ready for:

  * Market analysis
  * Lead generation
  * CRM enrichment
  * Investment scouting
  * Real estate dashboards

#### **8. ✅Low-Code & Modular Architecture**
  Built entirely inside n8n with reusable modules, making maintenance and future upgrades simple.

#### Ideal Use Cases

* Real estate lead generation
* Property market monitoring
* Investment opportunity analysis
* Building property databases
* Real estate CRM automation
* Competitor and pricing analysis
* Automated property aggregation platforms

---

### How it works

This workflow automates the extraction of real estate listings from Idealista by performing two main phases: **listing URL discovery** and **detailed data extraction**.

1.  **Trigger and Pagination Setup**  
    A **Manual Trigger** starts the workflow. A **Set** node defines the base search URL and the maximum number of pages to scrape. A **Code** node then generates the paginated URLs (e.g., `.../lista-1.htm`, `.../lista-2.htm`).

2.  **Extract Listing URLs from Search Pages**  
    The generated URLs are split into batches using a **Split In Batches** node. For each search page, a **ScrapegraphAI** node extracts all individual property URLs that match the pattern `https://www.idealista.it/immobile/xxxx`. The results are then aggregated and unified using an **Aggregate** and a **Code** node to remove duplicates and flatten the list.

3.  **Process Each Property URL**  
    The unified list of property URLs is split again into batches. For each property URL, a second **ScrapegraphAI** node extracts detailed information following a strict JSON schema (including title, description, price, area, bedrooms, bathrooms, floor, rooms, balcony, terrace, cellar, heating, air conditioning, and image URLs).

4.  **Store Data in Google Sheets**  
    The extracted data is finally written to a **Google Sheet** using the **Google Sheets** node configured with `appendOrUpdate` mode, which avoids duplicates by matching the `URL` column.

---

### Set up steps

1.  **Import and Configure Credentials**  
    Import the workflow into n8n. Add the following credentials:
    - **ScrapegraphAI API** (used by both ScrapegraphAI nodes).
    - **Google Sheets OAuth2** (used for writing data).

2.  **Prepare the Google Sheet**  
    Clone [this template sheet](https://docs.google.com/spreadsheets/d/1jtMyMglBbekD9Z407q8-0vn-cDDXhM81Uj1oAZIJGX8/edit?usp=sharing) or create your own. Update the **Google Sheets** node with your `Document ID` and `Sheet Name`.

3.  **Configure the Search Parameters**  
    In the **Set params** node, modify the `url` variable to target your desired search (location, filters, etc.) and set `max_pages` to control how many search result pages to scrape.

4.  **Adjust Extraction Logic (if needed)**  
    - Verify that the **Scrape listings** node’s prompt correctly matches the listing URL structure of your target site.
    - Update the **Extract data** node’s `outputSchema` (JSON schema) to match the fields you want to extract.

5.  **Enable and Execute**  
    Activate the workflow. Click the **Execute Workflow** button to start scraping. The results will automatically populate the configured Google Sheet, appending new listing data without creating duplicates.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
