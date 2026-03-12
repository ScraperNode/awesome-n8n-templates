# 📊 Track daily Product Hunt launches with website verification in Google Sheets

> ⚡ **992 views** · 📊 [Market Research & Insights](../)

## Description

This workflow helps you stay updated with daily launches on Product Hunt. It automatically fetches product details (name, tagline, description, and website), checks if the website redirects to another URL, and logs the final information into a Google Sheet.  

Perfect for indie hackers, product managers, content curators, and anyone tracking daily launches.

### How It Works  

1. **Schedule Trigger** – Runs the workflow daily.
2. **Set Date** – Captures today’s date in ISO format for filtering Product Hunt posts.
3. **HTTP Request (Product Hunt API)** – Retrieves Product Hunt posts for the day using GraphQL.
4. **Extract Product Info (Code Node)** – Parses the response to pull key details:  
   - Name  
   - Tagline  
   - Description  
   - Website URL  
5. **HTTP Request (URL Check)** – Follows each website URL to detect if it redirects.
6. **Merge Data** – Combines product info with the final destination URL.
7. **Google Sheets Node** – Appends all processed product info to your sheet.


### Pre-conditions  

- A valid [Product Hunt API token](https://api.producthunt.com/v2/docs)
- A Google account with access to Google Sheets
- A Google Sheet already created with the correct columns (see below)
- Connected Google Sheets and HTTP credentials in n8n

### Google Sheets Setup  

Your spreadsheet should include the following columns (in order):  
- Name  
- Tagline  
- Description  
- Original URL  
- Final URL (after redirect)  

Ensure your Google Sheets node uses the correct **Spreadsheet ID** and **Sheet Name**.

### Setup Instructions  

1. **Product Hunt API Auth**:  
   Replace `{{YOUR_PRODUCT_HUNT_API_KEY}}` in the HTTP Request headers:
   ```json
   {
     "Authorization": "Bearer {{YOUR_PRODUCT_HUNT_API_KEY}}"
   }
   ```

2. **Google Sheets Node**:  
   - Connect your Google account.  
   - Insert your Spreadsheet ID in the settings.  
   - Specify the sheet name (e.g., `Daily Launches`).  
   - Use the “Append” operation and map the 5 data fields accordingly.

### Notes  

- Only fetches the first 10 posts for the day (can be extended).
- Consider adding Slack, Discord, or Email nodes to notify you of new entries.
- Useful for building launch databases, research, or content inspiration.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
