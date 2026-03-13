# 📊 Track website traffic with Semrush API and log results to Google Sheets

> ⚡ **640 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Automated Seo Website Traffic Checker with Google Sheets Logging (Seo)**

## Description:
This workflow uses the [**Website Traffic Checker Semrush**](https://rapidapi.com/skdeveloper/api/website-traffic-checker-semrush) API to analyze website traffic and performance. It collects data through a user-submitted website URL and stores the results in Google Sheets for easy access and reporting. Ideal for SEO analysis and data tracking.

---

## Node-by-Node Explanation:

### 1. **On form submission**
Captures the website URL submitted by the user through a form.  
Triggers the workflow when a website URL is submitted via the form interface.

### 2. **Check webTraffic**
Sends a request to the [**Website Traffic Checker Semrush**](https://rapidapi.com/skdeveloper/api/website-traffic-checker-semrush) API to gather traffic data for the submitted website.  
Uses the provided URL to fetch real-time traffic statistics using the **Semrush API**.

### 3. **Re format output**
Extracts and reformats the raw traffic data from the API response.  
Cleans and structures the traffic data for easy readability and reporting.

### 4. **Google Sheets**
Appends the formatted traffic data into a Google Sheet for storage and further analysis.  
Stores the data in a Google Sheets document for long-term tracking and analysis.

---

## Benefits of This Flow:

- **Real-Time Data Collection:**  
  Collects real-time website traffic data directly from the [**Website Traffic Checker Semrush**](https://rapidapi.com/skdeveloper/api/website-traffic-checker-semrush) API, ensuring up-to-date information is always available.

- **Automation:**  
  Automatically processes and formats the website traffic data into an easily accessible Google Sheet, saving time and effort.

- **Customizable:**  
  The workflow can be customized to track multiple websites, and the data can be filtered and expanded as per user needs.

- **SEO Insights:**  
  Get in-depth insights like bounce rate, pages per visit, and visits per user, essential for SEO optimization.

---

## Use Case:

- **SEO Monitoring:**  
  Track and analyze the traffic of competitor websites or your own website for SEO improvements. This is ideal for digital marketers, SEO professionals, and website owners.

- **Automated Reporting:**  
  Automatically generate traffic reports for various websites and save them in a Google Sheet for easy reference. No need to manually update data or perform complex calculations.

- **Data-Driven Decisions:**  
  By utilizing data from the [**Website Traffic Checker Semrush**](https://rapidapi.com/skdeveloper/api/website-traffic-checker-semrush)  API, users can make informed decisions to improve website performance and user experience.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
