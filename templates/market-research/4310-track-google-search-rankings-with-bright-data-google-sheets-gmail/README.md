# 📊 Track Google search rankings with Bright Data, Google Sheets & Gmail

> ⚡ **687 views** · 📊 [Market Research & Insights](../)

## Description

![Auto rank tracker workflow.PNG](fileId:1381)
This workflow automates daily or manual keyword rank tracking on Google Search for your target domain. Results are logged in Google Sheets and sent via email using [Bright Data's SERP API](https://brightdata.com/products/serp-api).

**Requirements:**  
- n8n (local or cloud) with Google Sheets and Gmail nodes enabled  
- Bright Data API credentials  

---

## Main Use Cases

- Track Google search rankings for multiple keywords and domains automatically
- Maintain historical rank logs in Google Sheets for SEO analysis
- Receive scheduled or on-demand HTML email reports with ranking summaries
- Customize or extend for advanced SEO monitoring and reporting

---

## How it works

The workflow is divided into several logical steps:

### 1. Workflow Triggers
- **Manual:** Start by clicking 'Test workflow' in n8n.
- **Scheduled:** Automatically triggers every 24 hours via Schedule Trigger.

### 2. Read Keywords and Target Domains
- Fetches keywords and domains from a specified Google Sheets document.
- The sheet must have columns: `Keyword` and `Domain`.

### 3. Transform Keywords
- Formats each keyword for URL querying (spaces become `+`, e.g., `seo expert` → `seo+expert`).

### 4. Batch Processing
- Processes keywords in batches so each is checked individually.

### 5. Get Google Search Results via Bright Data
- Sends a request to Bright Data's SERP API for each keyword with location (default: US).
- Receives the raw HTML of the search results.

### 6. Parse and Find Ranking
- Extracts all non-Google links from HTML.
- Searches for the target domain among the results.
- Captures the rank (position), URL, and total number of results checked. Saves timestamp.

### 7. Save Results to Google Sheets
- Appends the findings (keyword, domain, rank, found URL, check time) to a “Results” sheet for history.

### 8. Generate HTML Report and Send Email
- Builds an HTML table with current rankings.
- Emails the formatted table to the specified recipient(s) with Gmail.

---

## Setup Steps

1. **Google Sheets:**
   - Create a sheet named “Results”, and another with `Keyword` and `Domain` columns.
   - Update document ID and sheet names in the workflow’s config.

2. **Bright Data API:**
   - Acquire your Bright Data API token.
   - Enter it in the Authorization header of the 'Getting Ranks' HTTP Request node.

3. **Gmail:**
   - Connect your Gmail account via OAuth2 in n8n.
   - Set your destination email in the 'Sending Email Message' node.

4. **Location Customization:**
   - Modify the `gl=` parameter in the SERP API URL to change country/location (e.g., `gl=GB` for the UK).

---

## Notes

- This workflow is designed for n8n local or cloud environments with suitable connector credentials.
- Customize batch size, recipient list, or ranking extraction logic per your needs.
- Use sticky notes in n8n for further setup guidance and workflow tips.

---

With this workflow, you have an automated, repeatable process to monitor, log, and report Google search rankings for your domains—ideal for SEO, digital marketing, and reporting to clients or stakeholders.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
