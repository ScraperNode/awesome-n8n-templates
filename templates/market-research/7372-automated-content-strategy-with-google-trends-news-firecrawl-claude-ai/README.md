# 📊 Automated content strategy with Google Trends, News, Firecrawl & Claude AI

> ⚡ **4,891 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated trend monitoring for content strategy

## Who's it for
Content creators, marketers, and social media managers who want to stay ahead of emerging trends and generate relevant content ideas based on data-driven insights.

## What it does
This workflow automatically identifies trending topics related to your industry, collects recent news articles about these trends, and generates content suggestions. It transforms raw trend data into actionable editorial opportunities by analyzing search volume growth and current news coverage.

## How it works
The workflow follows a three-step automation process:
Trend Analysis: Examines searches related to your topics and identifies those with the strongest recent growth
Article Collection: Searches Google News for current articles about emerging trends and scrapes their full content
Content Generation: Creates personalized content suggestions based on collected articles and trend data
The system automatically excludes geo-localized searches to provide a global perspective on trends, though this can be customized.

## Requirements
SerpAPI account (for trend and news data)
Firecrawl API key (for scraping article content from Google News results)
Google Sheets access
AI model API key (for content analysis and recommendations - you can use any LLM provider you prefer)

## How to set up

### Step 1: Prepare your tracking sheet
Duplicate this Google Sheets template 
Rename your copy and ensure it's accessible

### Step 2: Configure API credentials
Before running the workflow, set up the following credentials in n8n:
SerpAPI: For trend analysis and Google News search
Firecrawl API: For scraping article content
AI Model API: For content analysis and recommendations (Anthropic Claude, OpenAI GPT, or any other LLM provider)
Google Sheets OAuth2: For accessing and updating your tracking spreadsheet

### Step 3: Configure your monitoring topics
In your Google Sheet "Query" tab:

Query column: Enter the main topics/keywords you want to monitor for trending queries (e.g., "digital marketing", "artificial intelligence", "sustainable fashion")
Query to avoid column: Optionally add specific queries you want to exclude from trend analysis (e.g., brand names, irrelevant terms, or overly specific searches that don't match your content strategy)

This step is crucial as these queries will be the foundation for discovering related trending topics.

### Step 4: Configure the workflow
In the "Get Query" node, paste your duplicated Google Sheets URL in the "Document" field
Ensure your Google Sheet contains your monitoring topics in the Query column

### Step 5: Customize language and location settings

The workflow is currently configured for French content and France location. You can modify these settings in the SerpAPI nodes:
Language (hl): Change from "fr" to your preferred language code
Geographic location (geo/gl): Change from "FR" to your target country code
Date range: Currently set to "today 1-m" (last month) but can be adjusted

### Step 6: Adjust filtering (optional)
The "Sorting Queries" node excludes geo-localized queries by default. You can modify the AI agent's instructions to include location-specific queries or change filtering criteria based on your requirements. The system will also automatically exclude any queries you've listed in the "Query to avoid" column.

### Step 7: Configure scheduling (optional)
The workflow includes an automated scheduler that runs monthly (1st day of each month at 8 AM). You can modify the cron expression 0 8 1 * * in the Schedule Trigger node to change:
Frequency (daily, weekly, monthly)
Time of execution
Day of the month

## How to customize the workflow
Change trend count: The workflow processes up to 10 related queries per topic but filters them through AI to select the most relevant non-geolocalized ones
Adjust article collection: Currently collects exactly 3 news articles per query for analysis
Content style: Customize the AI prompts in content generation nodes to match your brand voice
Output format: Modify the Google Sheets structure to include additional data points
AI model: Replace the Anthropic model with your preferred LLM provider
Scraping options: Configure Firecrawl settings to extract specific content elements from articles

## Results interpretation
For each monitored topic, the workflow generates a separate sheet named by month and topic (e.g., "January Digital Marketing") containing:
Data structure (four columns):
Query: The trending search term ranked by growth
Évolution: Growth percentage over the last month
News: Links to 3 relevant news articles
Idée: AI-generated content suggestions based on comprehensive article analysis
The workflow provides monthly retrospective analysis, helping you identify emerging topics before competitors and optimize your content calendar with high-potential subjects.

## Workflow limitations
Processes up to 10 related queries per topic with AI filtering
Collects exactly 3 news articles per query
Results are automatically organized in monthly sheets
Requires stable internet connection for API calls

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
