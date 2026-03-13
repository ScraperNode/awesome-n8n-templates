# 📊 Analyze website backlinks with Top Backlink Checker API and Google Sheets logging

> ⚡ **747 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Backlink Checker with Google Sheets Logging (Seo)**

## Description:
This workflow helps you analyze top backlinks using [**Semrush API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) and logs the results directly into **Google Sheets** for easy SEO tracking and reporting. It integrates the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) from RapidAPI, providing in-depth backlink analysis, and combines that with Google Sheets for efficient data storage and tracking.

## Node-by-Node Explanation:

### 1. **On form submission**  
Captures the website URL submitted by the user through a form. This node triggers the workflow when the form is filled with a website URL. The [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) (via RapidAPI) is used to check backlinks after this step.

### 2. **Check webTraffic**  
Sends a request to the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) to gather traffic data for the submitted website. This includes important metrics like visits, bounce rate, and more, which will later be stored in Google Sheets for analysis.

### 3. **Reformat output**  
Extracts and re-formats the traffic data received from the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker). This node cleans and structures the raw data for easier processing, ensuring it is usable for later stages in the workflow.

### 4. **Reformat**  
Processes the backlink data received from the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) (RapidAPI). The data is reformatted and structured to be added to Google Sheets for storage, making it easier to analyze.

### 5. **Backlink overview**  
Appends the re-formatted backlink overview data into a **Google Sheets** document. This stores important backlink information like source URLs, anchor texts, and more, making it available for later analysis and reporting.

### 6. **Backlinks**  
Appends detailed backlink data, including target URLs, anchors, and internal/external links, into **Google Sheets**. This helps track individual backlinks, their attributes, and page scores, allowing for deeper SEO analysis and reporting.

## Benefits and Use Cases:

### Benefits:
- **Backlink Tracking**: The integration of the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) helps you track all the backlinks associated with a website. You can get insights on the source URL, anchor text, first and last seen, and more.
  
- **Traffic Insights**: By integrating [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker), this workflow allows you to monitor important website traffic data such as visits, bounce rates, and organic reach, helping with SEO strategies.

- **Automated Google Sheets Logging**: All traffic and backlink data is logged automatically into Google Sheets for easy access and future analysis. This avoids manual data entry and ensures consistency.

- **Efficient Workflow**: The automation provided by **n8n** streamlines your SEO analysis workflow, ensuring that data is formatted, structured, and updated without any manual intervention.

### Use Cases:
- **SEO Reports**: Generate regular SEO reports by tracking backlinks and traffic data automatically from Semrush and Top Backlink Checker, saving time and ensuring accurate reporting.
  
- **Competitor Analysis**: Analyze your competitors’ backlinks and traffic to stay ahead in SEO rankings by leveraging data from the [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker).

- **Backlink Management**: Use the data from [**Top Backlink Checker API**](https://rapidapi.com/skdeveloper/api/top-backlink-checker) to assess the health of backlinks, ensuring that high-value backlinks are tracked, and toxic backlinks are identified for removal or disavow.

- **SEO Campaign Tracking**: Monitor how backlinks and website traffic evolve over time to evaluate the effectiveness of your SEO campaigns, keeping all your data in Google Sheets for easy tracking.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
