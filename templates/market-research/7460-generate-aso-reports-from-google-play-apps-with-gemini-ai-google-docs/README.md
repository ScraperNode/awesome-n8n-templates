# 📊 Generate ASO reports from Google Play Apps with Gemini AI & Google Docs

> ⚡ **448 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated App Analysis & ASO Report Generator

This workflow automates the process of analyzing a mobile app from the Google Play Store and generating a professional **ASO (App Store Optimization) Report**.  
Simply submit a Play Store URL, and the workflow will fetch app intelligence data, parse it, run an AI-based analysis, and deliver a formatted report in Google Docs. A Telegram notification with the document link ensures you never miss a new report.


## ✨ Key Features
- **Form Input Trigger** – Start the workflow by submitting a Play Store URL.  
- **Automated Data Retrieval** – Uses HTTP request to fetch app intelligence (via SensorTower or similar APIs).  
- **Smart Data Parsing** – Extracts essential app details, competitor insights, reviews, downloads, and revenue data.  
- **AI-Powered ASO Report** – Generates a professional analysis using LLM (Gemini via OpenRouter) with structured sections:  
  - 📱 App Overview  
  - ⭐ User Ratings & Reviews  
  - 📊 Competitor Analysis  
  - 📈 Market Insights  
  - 💡 Actionable Recommendations  
- **Google Docs Integration** – Creates and updates a Google Doc with the generated report.  
- **Instant Notification** – Sends a Telegram message with the app report link for quick access.  

---

## 🔐 Required Credentials
To run this workflow, you’ll need:
- **SensorTower API (or alternative App Intelligence API)** – for app details, reviews, competitors, and market data.  
- **OpenRouter API** – to access LLM model.  
- **Google Docs OAuth2** – to create and update the ASO report in Google Docs.  
- **Telegram API** – for instant notifications with the report link.  

---

## 🎁 Benefits
- **Save Time** – Automates the manual process of app research and reporting.  
- **Consistent Reporting** – Ensures every report follows a professional structure with clear sections.  
- **Actionable Insights** – Get AI-generated recommendations to improve app performance and competitiveness.  
- **Collaboration-Ready** – Reports are stored in Google Docs for easy sharing and editing.  
- **Real-Time Alerts** – Stay updated via Telegram whenever a new report is generated.  

---

## 🔗 Nodes Used

HTTP Request, Telegram, Google Docs, Basic LLM Chain, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
