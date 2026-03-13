# 📊 Comprehensive SEO keyword research & analysis with DataForSEO and Google Sheets

> ⚡ **1,024 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

Overview

This n8n workflow, named "Keyword Search for Blogs," automates the process of gathering and organizing keyword research data for SEO purposes. It integrates with Google Sheets and Google Drive to manage input and output data, and leverages the DataForSEO API to fetch comprehensive keyword-related information, including related keywords, keyword suggestions, keyword ideas, autocomplete suggestions, subtopics, and SERP (Search Engine Results Page) analysis. The workflow is designed to streamline SEO research by collecting, processing, and storing data in an organized manner for blog content creation.

Workflow Functionality

The workflow performs the following key functions:





Trigger: Initiated manually via the "When clicking ‘Test workflow’" node, allowing users to start the process on-demand.



Input Data Retrieval: Reads primary keywords, location, and language data from a specified Google Sheet ("SEO PRO").



Spreadsheet Creation: Creates a new Google Sheet with a dynamic title based on the current date (e.g., "YYYY-MM-DD-seo pro") and predefined sheet names for organizing different types of keyword data (e.g., keyword, SERP, Content, related keyword, keyword ideas, suggested keyword, subtopics, autocomplete).



Google Drive Integration: Moves the newly created spreadsheet to a designated folder ("seo pro") in Google Drive for organized storage.



API Data Collection:





Related Keywords: Fetches related keywords using the DataForSEO API (/v3/dataforseo_labs/google/related_keywords/live), including SERP information and keyword metrics like search volume, CPC, and competition.



Keyword Suggestions: Retrieves keyword suggestions via the DataForSEO API (/v3/dataforseo_labs/google/keyword_suggestions/live).



Keyword Ideas: Collects keyword ideas using the DataForSEO API (/v3/dataforseo_labs/google/keyword_ideas/live).



Autocomplete Suggestions: Gathers Google autocomplete suggestions through the DataForSEO API (/v3/serp/google/autocomplete/live/advanced).



Subtopics: Generates subtopics for the primary keyword using the DataForSEO API (/v3/content_generation/generate_sub_topics/live).



People Also Ask & Organic Results: Pulls "People Also Ask" questions and organic SERP results via the DataForSEO API (/v3/serp/google/organic/live/advanced).



Data Processing:





Uses Split Out nodes to break down API responses into individual items for processing.



Employs Edit Fields nodes to map and format data, extracting relevant fields like keyword, search intent, search volume, CPC, competition, keyword difficulty, and SERP item types.



Filters SERP results to separate "People Also Ask" and organic results for targeted processing.



Data Storage: Appends processed data to multiple sheets in the destination Google Sheet ("2025-06-08-seo pro") across different tabs:





Master Sheet: Stores comprehensive data including keywords, search intent, related keywords, SERP analysis, and more.



Related Keywords: Stores related keyword data with metrics.



Suggested Keywords: Stores suggested keyword data.



Keyword Ideas: Stores keyword ideas with relevant metrics.



Autocomplete: Stores autocomplete suggestions.



Subtopics: Stores generated subtopics.



Organic Results: Stores organic SERP data with details like domain, URL, title, and description.

Key Features





Automation: Eliminates manual keyword research by automating data collection and organization.



Scalability: Processes multiple keywords and their related data in a single workflow run, with a limit of 100 related items per API call.



Dynamic Organization: Creates and organizes data in a new Google Sheet with a timestamped title, ensuring easy tracking of research over time.



Comprehensive SEO Insights: Collects diverse SEO metrics (e.g., keyword difficulty, search intent, SERP item types) to inform content strategy.



Error Handling: Uses filters to ensure only relevant data (e.g., "people_also_ask" or "organic" results) is processed and stored.

Use Case

This workflow is ideal for SEO professionals, content creators, and digital marketers who need to perform in-depth keyword research for blog content. It provides a structured dataset that can be used to identify high-potential keywords, understand search intent, analyze SERP competition, and generate content ideas, all of which are critical for optimizing blog posts to rank higher on search engines.

Inputs





Google Sheet ("SEO PRO"): Contains primary keywords, location names, and language names.



Google Drive Folder: Destination folder ("seo pro") for storing the output spreadsheet.



DataForSEO API Credentials: Requires HTTP Basic Authentication credentials for accessing DataForSEO API endpoints.

Outputs





A new Google Sheet titled with the current date (e.g., "2025-06-08-seo pro") containing multiple tabs:





Master Sheet: Aggregated data for all keyword types.



Related Keywords: Detailed metrics for related keywords.



Suggested Keywords: Suggested keywords with metrics.



Keyword Ideas: Keyword ideas with metrics.



Autocomplete: Google autocomplete suggestions.



Subtopics: Generated subtopics for content planning.



Organic Results: Organic SERP data including domains, URLs, titles, and descriptions.

Benefits





Time-Saving: Automates repetitive tasks, reducing manual effort in keyword research.



Organized Data: Stores all data in a structured Google Sheet for easy access and analysis.



Actionable Insights: Provides detailed SEO metrics to guide content creation and optimization strategies.



Scalable and Reusable: Can be reused for different keywords by updating the input Google Sheet.

Technical Details





Nodes: Utilizes n8n nodes including manualTrigger, googleSheets, googleDrive, httpRequest, splitOut, set, and filter.



API Integration: Leverages DataForSEO API for real-time keyword and SERP data.



Credentials: Requires Google Sheets OAuth2 and Google Drive OAuth2 credentials, along with DataForSEO HTTP Basic Authentication.



Data Mapping: Uses set nodes to map API response fields to desired output formats, ensuring compatibility with Google Sheets.

Potential Enhancements





Add error handling for API failures or invalid inputs.



Include additional DataForSEO API endpoints for more granular data (e.g., competitor analysis).



Implement deduplication logic to avoid redundant keyword entries.



Add a scheduling node to run the workflow automatically at regular intervals.

This workflow is a powerful tool for SEO-driven content planning, providing a robust foundation for creating optimized blog content.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
