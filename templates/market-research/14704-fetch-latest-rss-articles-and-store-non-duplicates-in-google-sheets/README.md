# 📊 Fetch latest RSS articles and store non-duplicates in Google Sheets

> ⚡ **83 views** · 📊 [Market Research & Insights](../)

## Description

# RSS Feed Latest Article Fetcher Workflow

This n8n workflow fetches URLs from an RSS feed, checks which URLs have a valid RSS feed and if true, fetches the latest articles from those URLs. It then stores the article details, including the article link, in Google Sheets.

### Quick Implementation Steps

1. Import this JSON workflow into n8n.
2. Connect your application or RSS feed URLs to be checked.
3. Add Google Sheets API credentials to store the fetched articles.
4. Enable the workflow — done!


## What It Does

1. **Fetches RSS Feed URLs**
   - Retrieves a list of URLs from an RSS feed source.

2. **Checks Each URL for RSS Feed**
   - Verifies which URLs contain a valid RSS feed.

3. **Fetches Latest Articles**
   - For URLs with valid RSS feeds, it fetches the latest articles from those feeds.

4. **Stores Articles in Google Sheets**
   - Adds the article data, including article links, to a Google Sheet for record-keeping.


## Who’s It For

This workflow is ideal for:

- Content aggregators looking to fetch articles from multiple RSS feeds.
- Teams needing to automate article collection and storage for easy reference.
- Organizations aiming to centralize their content curation process in Google Sheets.


## Requirements

- n8n (Self-Hosted or Cloud)
- Google Sheets API credentials with permissions to append data
- A list of RSS feed URLs to check


## How It Works

1. **Trigger**: Workflow is triggered by clicking "Execute Workflow".
2. **Fetch RSS URLs**: Retrieves a list of URLs to check for RSS feeds.
3. **Check for RSS Feed**: Validates whether the URLs have a valid RSS feed.
4. **Fetch Latest Articles**: For valid RSS feeds, the workflow fetches the latest articles.
5. **Store in Sheets**: The fetched articles, along with their links, are added to a Google Sheet.
6. **Stop if No Articles Found**: If no valid articles are found, the workflow automatically stops.


## Setup Instructions

1. **Import Workflow**: _Workflows → Import from File_ in n8n.
2. **RSS Feed URL Setup**: Input the URLs you want to check for RSS feeds.
3. **Google Sheets Setup**: Connect your Google Sheets account and configure the spreadsheet where articles will be stored.
4. **Run the Workflow**: Trigger the workflow manually by clicking "Execute Workflow" and monitor the results in your Google Sheet.


## Logic Overview

| Step                                   | Node Description                                                                 |
|----------------------------------------|----------------------------------------------------------------------------------|
| **1. Trigger**                         | **Execute Workflow**: Initiates the workflow process when triggered. The workflow begins when you manually execute it. |
| **2. Fetch RSS URLs**                  | **RSS Feed**: Retrieves a list of RSS URLs from Google Sheets.                   |
| **3. Check for RSS Feed**              | **Check RSS URLs**: Verifies whether each URL has a valid RSS feed using an HTTP Request node. |
| **4. Fetch Latest Articles**           | **Fetch Each URL**: Fetches the latest articles from valid RSS feeds using the RSS Feed Read node. |
| **5. Fetch Existing Titles**           | **Fetch Existing Title**: Retrieves stored titles from Google Sheets for comparison. |
| **6. Check for Duplicates**            | **Check if Title Exists**: Compares new titles with existing ones. Duplicates are skipped; new ones proceed. |
| **7. Store Only Non-Duplicate Titles** | **Append Row in Sheets**: Stores new (non-duplicate) articles in Google Sheets. |
| **8. Optional Message Node**           | **Message**: Logs duplicate events (e.g., "Data already exists").                |
| **9. Stop if No Articles Found**       | **Stop**: Halts workflow if no new articles are found or added.                 |


## Customization Options

- **RSS URL List**: Adjust the list of URLs to fetch articles from.
- **Google Sheets**: Modify the Google Sheets integration to store additional data (e.g., article content, author).
- **Error Handling**: Add custom error messages if no RSS feed is found or no articles are fetched.


## Troubleshooting

- **No Articles Fetched**: Ensure the RSS feed URLs are correctly formatted and active.
- **Google Sheets Issues**: Verify that the Google Sheets API credentials are correctly configured and the sheet is accessible.
- **Workflow Not Triggering**: Check the execution trigger settings to ensure the workflow is activated manually.


## Use Case Examples

1. **Blog Aggregator**: Automatically fetch and store the latest blog articles from multiple RSS feeds into a central Google Sheet for analysis.
2. **Content Curation**: Gather the latest articles from industry-related RSS feeds and share them with your team.


## Need Help?

If you need help setting up, customizing or extending this workflow, WeblineIndia can assist with full [n8n development](https://www.weblineindia.com/n8n-automation/), workflow automation, content fetching systems and custom integrations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
