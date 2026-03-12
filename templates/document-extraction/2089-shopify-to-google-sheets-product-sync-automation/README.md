# 🔬 Shopify to Google Sheets Product Sync Automation

> ⚡ **2,827 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Workflow Description:**

This workflow automates the synchronization of product data from a Shopify store to a Google Sheets document, ensuring seamless management and tracking. It retrieves product details such as title, tags, description, and price from Shopify via GraphQL queries. The outcome is a comprehensive list of products neatly organized in Google Sheets for easy access and analysis.

**Key Features:**

- Automated: Runs on a schedule you define (e.g., daily, hourly) to keep your product data fresh.
- Complete Product Details: Retrieves titles, descriptions, variants, images, inventory, and more.
- Cursor-Based Pagination: Efficiently handles large product sets by navigating pages without starting from scratch.
- Google Sheets Integration: Writes product data directly to your designated sheets.

Set up Instructions:

1. Set up GraphQL node with Header Authentication for Shopify: 
2. Create Google Sheet Credentials: Follow this guide to set up your Google Sheet credentials for n8n: [https://docs.n8n.io/integrations/builtin/credentials/google/](https://docs.n8n.io/integrations/builtin/credentials/google/)
3. Choose your Google Sheet: Select the sheet where you want product information written. For the setup, we need a document with two sheets: 1. for storing Shopify data 2. for storing cursor details.
Google sheet template :
 [https://docs.google.com/spreadsheets/d/1I6JnP8ugqmMD5ktJlNB84J1MlSkoCHhAEuCofSa3OSM](https://docs.google.com/spreadsheets/d/1I6JnP8ugqmMD5ktJlNB84J1MlSkoCHhAEuCofSa3OSM)

4. Schedule and run: Decide how often you want the data refreshed (daily, hourly, etc.) and let n8n do its magic!

## 🔗 Nodes Used

Google Sheets, GraphQL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
