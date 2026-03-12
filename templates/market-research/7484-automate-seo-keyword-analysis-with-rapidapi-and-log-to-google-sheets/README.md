# 📊 Automate SEO keyword analysis with RapidAPI and log to Google Sheets

> ⚡ **617 views** · 📊 [Market Research & Insights](../)

## Description

## **Automated Keyword Analysis and Google Sheets Logging**  

Automate keyword research with n8n and log essential SEO data like search volume, trends, competition, and keyword difficulty directly into Google Sheets. Simplify your SEO efforts with real-time insights.

## Node-by-Node Explanation

### 1. **On form submission (Trigger)**
- **Purpose:** Triggers the workflow when a user submits the form with "country" and "keyword" as inputs.
- **Explanation:** This node initiates the process by accepting user input from the form and passing it to the next node for analysis.

### 2. **Keyword Analysis (HTTP Request)**
- **Purpose:** Sends a request to an external SEO API to analyze the provided keyword, fetching data like search volume, trends, and competition.
- **Explanation:** This node calls the [**Keyword Research Tool API**](https://rapidapi.com/skdeveloper/api/keyword-research-tool3) with the country and keyword inputs from the form, retrieving essential keyword data for further processing.

### 3. **Re-format output (Code)**
- **Purpose:** Processes and reformats the API response into a structured format suitable for logging into Google Sheets.
- **Explanation:** Extracts and organizes the keyword data (e.g., competition, CPC, search volume) into a format that can be easily mapped to Google Sheets columns.

### 4. **Google Sheets (Append)**
- **Purpose:** Appends the reformatted keyword data into the specified Google Sheets document.
- **Explanation:** Logs the fetched keyword insights into a Google Sheets document, allowing for continuous tracking and analysis.

---

## **Benefits of This Workflow**

- **Automated Keyword Research:** Eliminates manual keyword research by automating the entire process using the [**Keyword Research Tool API**](https://rapidapi.com/skdeveloper/api/keyword-research-tool3).
- **Real-time Data Tracking:** Fetches up-to-date SEO metrics from the [**Keyword Research Tool API**](https://rapidapi.com/skdeveloper/api/keyword-research-tool3) and logs them directly into Google Sheets for easy access and analysis.
- **Efficient Workflow:** Saves time by integrating multiple tools (form, SEO API, Google Sheets) into one seamless process.
- **SEO Insights:** Provides detailed insights like search volume, trends, competition, and keyword difficulty, aiding in strategic decision-making with the help of the [**Keyword Research Tool API**](https://rapidapi.com/skdeveloper/api/keyword-research-tool3).

---

## **Use Case**

This workflow is ideal for digital marketers, SEO professionals, and content creators who need to analyze keyword performance and track essential SEO metrics efficiently. It automates the process of keyword research by calling the [**Keyword Research Tool API**](https://rapidapi.com/skdeveloper/api/keyword-research-tool3), fetching relevant data, and logging it into Google Sheets. This makes it easier to monitor and optimize SEO strategies in real-time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
