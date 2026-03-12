# 📊 Sitemap.xml metadata export to Google Sheets (Title, Meta Description, and URLs)

> ⚡ **276 views** · 📊 [Market Research & Insights](../)

## Description

This workflow automates the extraction of SEO metadata (URL, page title, and meta description) from every page listed in your website's sitemap and exports it to Google Sheets. Ideal for SEO audits, content inventories, and tracking on-page elements.

## Prerequisites

Before using this workflow:
- A publicly accessible `sitemap.xml` URL
- Google Sheets spreadsheet with columns: **URL**, **Title**, and **meta description**
- Google Sheets API access via OAuth2

## Setup Instructions

### 1. Configure Sitemap Source
- In the **"Get Sitemap XML"** node, replace the default URL with your actual sitemap URL

### 2. Connect Google Sheets
- Open the **"Append or update row in sheet"** node
- Configure Google Sheets credentials
- Set Document ID and Sheet Name
- Verify column mappings match your spreadsheet

### 3. Adjust Rate Limiting (Optional)
- Modify Wait nodes if encountering 429 errors
- Increase delay between requests if needed

## How It Works

1. **Trigger**: Manual workflow execution
2. **Sitemap Fetch**: Retrieve sitemap.xml file
3. **URL Parsing**: Extract all URLs from sitemap
4. **Batch Processing**: Process URLs in manageable batches
5. **Data Extraction**: Scrape title and meta description from each page
6. **Data Merge**: Combine URL with extracted metadata
7. **Sheet Update**: Append or update rows in Google Sheets using URL as a unique key

## Features

- **Duplicate Prevention**: Uses `appendOrUpdate` with URL matching
- **Rate Limiting**: Built-in delays between requests
- **Flexible Processing**: Handles sitemaps of various sizes
- **Easy Customization**: Modify code nodes for additional data extraction

## Use Cases

- SEO audits of title and description tags
- Content migration planning
- Website content inventory management
- Ongoing SEO monitoring and reporting

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
