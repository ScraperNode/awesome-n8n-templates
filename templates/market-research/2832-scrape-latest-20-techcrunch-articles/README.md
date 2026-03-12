# 📊 Scrape latest 20 TechCrunch articles

> ⚡ **6,766 views** · 📊 [Market Research & Insights](../)

## Description

# Retrieve 20 Latest TechCrunch Articles

## Who is this for?
This workflow is designed for developers, content creators, and data analysts who need to scrape recent articles from TechCrunch. It’s perfect for anyone looking to aggregate news articles or create custom feeds for analysis, reporting, or integration into other systems.

## What problem is this workflow solving?
This workflow automates the process of scraping recent articles from TechCrunch. Manually collecting article data can be time-consuming and inefficient, but with this workflow, you can quickly gather up-to-date news articles with relevant metadata, saving time and effort.

## What this workflow does
This workflow retrieves the latest 20 news articles from TechCrunch’s “Recent” page. It extracts the article URLs, metadata (such as titles and publication dates), and main content for each article, allowing you to access the information you need without any manual effort.

## Setup
1. Clone or download the workflow template.
2. Ensure you have a working n8n environment.
3. Configure the HTTP Request nodes with your desired parameters to connect to the TechCrunch API.
4. (Optional) Customize the workflow to target specific sections or topics of interest.
5. Run the workflow to retrieve the latest 20 articles.

## How to customize this workflow to your needs
- Modify the HTTP request to pull articles from different pages or sections of TechCrunch.
- Adjust the number of articles to retrieve by changing the selection criteria.
- Add additional processing steps to further filter or analyze the article data.

## Workflow Steps
1. **Send an HTTP request** to the TechCrunch "Recent" page.
2. **Parse a posts box** that holds the list of articles.
3. **Parse all posts** to extract all articles.
4. **spilt out posts** for each article.
5. **Extract the URL and metadata** from each article.
6. **Send an HTTP request** for each article using its URL.
7. **Locate and parse** the main content of each article.

---

**Note:** Be sure to update the HTTP Request nodes with any necessary headers or authentication to work with TechCrunch’s website.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
