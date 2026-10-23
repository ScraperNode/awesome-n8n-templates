# 🎣 Generate and enrich Google Maps B2B leads with SDR-ready data in Google Sheets

> ⚡ **370 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🚀 Overview
This workflow is a powerful **B2B Lead Generation engine** designed specifically for **SDRs (Sales Development Representatives)**. It automates the entire process of finding, enriching, and qualifying prospects directly from **Google Maps** based on any industry and location.

Instead of manual searching, this pipeline uses a "Search & Enrich" strategy to extract high-value data that isn't available in standard search results, such as direct phone numbers and websites.

---

## ✨ Key Features
* **User-Friendly Input**: Triggered via an **n8n Form**, making it easy for non-technical team members to start a search.
* **Deep Enrichment**: Uses the **Google Places API (Text Search & Details)** to get granular information.
* **Smart Pagination**: Built-in logic to handle `next_page_token`, ensuring you fetch all available leads (e.g., up to 60+ per run).
* **Data Intelligence**: A custom **JavaScript** node normalizes data, removes special characters, and handles duplicates using a composite key (Name + Address).
* **Quality Gate**: Includes a validation step to ensure only leads with a **valid phone number** reach your database.

---

## 🛠️ How it Works
1.  **Form Trigger**: Enter the "Business Type" and "City".
2.  **API Discovery**: The workflow queries Google Maps and handles pagination automatically.
3.  **Item Splitting**: Each result is isolated to fetch specific **Place Details**.
4.  **Merge & Clean**: Data from both API calls are merged and sanitized via code.
5.  **Validation**: The workflow filters out incomplete leads.
6.  **Sheet Logging**: Validated leads are appended to a **Google Sheets** spreadsheet in real-time.

---

## 📋 Requirements
* **Google Maps API Key** (with Places API enabled).
* **Google Sheets** credentials.
* An active **n8n** instance.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
