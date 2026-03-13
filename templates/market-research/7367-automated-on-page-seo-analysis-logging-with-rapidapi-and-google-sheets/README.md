# 📊 Automated on-page SEO analysis & logging with RapidAPI and Google Sheets

> ⚡ **735 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## [SEO On Page API](https://rapidapi.com/PrineshPatel/api/seo-on-page) – Complete Guide, Use Cases & Benefits

The [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) is a powerful tool for keyword research, competitor analysis, backlink insights, and overall SEO optimization.  
With multiple endpoints, you can instantly gather actionable SEO data without juggling multiple tools.  
You can explore and subscribe via [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page).

---

## 📌 Description
The **SEO On Page API** on [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) allows you to quickly analyze websites, keywords, backlinks, and competitors — all in one place.  
Ideal for SEO professionals, marketers, and developers who want fast, accurate, and easy-to-integrate data.

---


## Node-by-node Overview

1. **On form submission** — Shows a web form (field: `website`) and triggers the workflow on submit.  
2. **Global Storage** — Copies `website` (and optional `country`) into the execution JSON for reuse.  
3. **Website Traffic Cheker** — POSTs `website` to `webtraffic.php` (RapidAPI) to fetch traffic summary.  
4. **Re-Format** — Extracts `data.semrushAPI.trafficSummary[0]` from the traffic API response.  
5. **Website Traffic** — Appends traffic metrics (visits, users, bounce, etc.) to the **"WebSite Traffic"** sheet.  
6. **Website Metrics DA PA** — POSTs `website` to `dapa.php` (RapidAPI) to get DA, PA, spam score, DR, org traffic.  
7. **Re-Format 2** — Pulls the `data` object from the DA/PA API response for clean mapping.  
8. **DA PA** — Appends DA/PA and related fields into the **"DA PA"** sheet.  
9. **Top Baclinks** — POSTs `website` to `backlink.php` (RapidAPI) to retrieve backlink data.  
10. **Re-Format 3** — Extracts `data.semrushAPI.backlinksOverview` (aggregate backlink metrics).  
11. **Backlinks Overview** — Appends overview metrics into the **"Backlinks Overview"** sheet.  
12. **Re-Format 4** — Extracts detailed `data.semrushAPI.backlinks` (individual backlinks list).  
13. **Backlinks** — Appends each backlink row into the **"Backlinks"** sheet.  
14. **Competitors Analysis** — POSTs `website` to `competitor.php` (RapidAPI) to fetch competitors/data sets.  
15. **Re-Format 5** — Flattens all array datasets under `data.semrushAPI` into rows with a `dataset` label.  
16. **Competitor Analysis** — Appends the flattened competitor and keyword rows into the **"Competitor Analysis"** sheet.  
---

## 🚀 Use Cases
- **Keyword Research** – Find high-volume, low-competition keywords for content planning.  
- **Competitor Analysis** – Identify competitor strategies and ranking keywords.  
- **Backlink Insights** – Discover referring domains and link-building opportunities.  
- **Domain Authority Checks** – Evaluate site authority before guest posting or partnerships.  
- **Content Optimization** – Improve on-page SEO using actionable data.

---



## 💡 Benefits
- **One API, Multiple Insights** – No need for multiple SEO tools.  
- **Accurate Data** – Get trusted metrics for informed decision-making.  
- **Fast Integration** – Simple POST requests for quick setup.  
- **Time-Saving** – Automates complex SEO analysis in seconds.  
- **Affordable** – Access enterprise-grade SEO insights without breaking the bank.
---
📍 *Start using the [**SEO On Page API**](https://rapidapi.com/PrineshPatel/api/seo-on-page) today to supercharge your keyword research, backlink tracking, and competitor analysis.*

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
