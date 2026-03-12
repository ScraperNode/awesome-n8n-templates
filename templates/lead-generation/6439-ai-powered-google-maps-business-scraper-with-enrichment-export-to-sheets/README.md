# 🎣 AI-powered Google Maps business scraper with enrichment & export to sheets

> ⚡ **3,332 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Overview

This workflow automates the discovery, extraction, enrichment, and storage of business information from **Google Maps** search queries using AI tools, scrapers, and Google Sheets.

It is ideal for:

* Lead generation agencies
* Local business researchers
* Digital marketing firms
* Automation & outreach specialists

---

### 🔧 Tools & APIs Used

* **Google Maps Search (via HTTP)**
* **Custom JavaScript Parsing**
* **URL Filtering & De-duplication**
* **Google Sheets (Read/Write)**
* **APIFY Actor** for business scraping
* **LangChain AI Agent** (OpenRouter - Gemini 2.5)
* **n8n Built-in Logic** (Loops, Conditions, Aggregators)

---

### 🧠 Workflow Summary

1. **Trigger**
   The automation starts via schedule (every hour).

2. **Read Queries from Google Sheet**
   Loads unprocessed keywords from a Google Sheet tab named `keywords`.

3. **Loop Through Keywords**
   Each keyword is used to search Google Maps for relevant businesses.

4. **Extract URLs**
   JavaScript parses HTML to find all external website URLs from the search results.

5. **Clean URLs**
   Filters out irrelevant domains (e.g., Google-owned, example.com, etc.), and removes duplicates.

6. **Loop Through URLs**
   For each URL:

   * Checks if it already exists in the Google Sheet (to prevent duplication).
   * Calls the **APIFY Actor** to extract full business data.
   * Optionally uses **AI Agent (Gemini)** to provide detailed insight on the business, including:

     * Services, About, Market Position, Weaknesses, AI suggestions, etc.
   * Converts the AI result (text) to a structured JSON object.

7. **Save to Google Sheet**
   Adds all extracted and AI-enriched business information to a separate tab (`Sheet1`).

8. **Mark Queries as Processed**
   Updates the original row in `keywords` to avoid reprocessing.

---

### 🗃️ Output Fields Saved

The following information is saved per business:

* Business Name, Website, Email, Phone
* Address, City, Postal Code, Country, Coordinates
* Category, Subcategory, Services
* About Us, Opening Hours, Social Media Links
* Legal Links (Privacy, Terms)
* Logo, Languages, Keywords
* **AI-Generated Description**
* Google Maps URL

---

### 📈 Use Cases

* Build a **prospect database** for B2B cold outreach.
* Extract **local SEO insights** per business.
* Feed CRMs or analytics systems with **enriched business profiles**.
* Automate market research for **regional opportunity detection**.

---

### 📩 Want a Similar Workflow?

If you’d like a custom AI-powered automation like this for your business or agency, feel free to contact me:

**📧 [msaidwolfltd@gmail.com](mailto:msaidwolfltd@gmail.com)**

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
