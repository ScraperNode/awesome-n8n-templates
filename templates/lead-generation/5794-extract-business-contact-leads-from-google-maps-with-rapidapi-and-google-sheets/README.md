# 🎣 Extract business contact leads from Google Maps with RapidAPI and Google Sheets

> ⚡ **3,690 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

[**Follow me on LinkedIn for more!**](https://www.linkedin.com/in/javier-hitavb/)

**Category:** Lead Generation, Data Collection, Business Intelligence

**Tags:** lead-generation, google-maps, rapidapi, business-data, contact-extraction, google-sheets, duplicate-prevention, automation

**Difficulty Level:** Intermediate

**Estimated Setup Time:** 15-20 minutes

## Template Description

### Overview

This powerful n8n workflow automates the extraction of comprehensive business information from Google Maps using keyword-based searches via RapidAPI's Local Business Data service. Perfect for **lead generation**, **market research**, and **competitive analysis**, this template intelligently gathers business data including contact details, social media profiles, and location information while preventing duplicates and optimizing API usage.

### Key Features

- **🔍 Keyword-Based Google Maps Scraping**: Search for any business type in any location using natural language queries
- **📧 Contact Information Extraction**: Automatically extracts emails, phone numbers, and social media profiles (LinkedIn, Instagram, Facebook, etc.)
- **🚫 Smart Duplicate Prevention**: Two-level duplicate detection saves 50-80% on API costs by skipping processed searches and preventing duplicate business entries
- **📊 Google Sheets Integration**: Seamless data storage with automatic organization and structure
- **🌍 Multi-Location Support**: Process multiple cities, regions, or countries in a single workflow execution
- **⚡ Rate Limiting & Error Handling**: Built-in delays and error handling ensure reliable, uninterrupted execution
- **💰 Cost Optimization**: Intelligent batching and duplicate prevention minimize API usage and costs
- **📱 Comprehensive Data Collection**: Gather business names, addresses, ratings, reviews, websites, verification status, and more

### Prerequisites

#### Required Services & Accounts
1. **RapidAPI Account** with subscription to ["Local Business Data" API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/local-business-data)
2. **Google Account** for Google Sheets integration
3. **n8n Instance** (cloud or self-hosted)

#### Required Credentials
- **RapidAPI HTTP Header Authentication** for Local Business Data API
- **Google Sheets OAuth2** for data storage and retrieval

### Setup Instructions

#### Step 1: RapidAPI Configuration

1. **Create RapidAPI Account**
   - Sign up at [RapidAPI.com](https://rapidapi.com)
   - Navigate to "Local Business Data" API
   - Subscribe to a plan (Basic plan supports 1000 requests/month)

2. **Get API Credentials**
   - Copy your `X-RapidAPI-Key` from the API dashboard
   - Note the host: `local-business-data.p.rapidapi.com`

3. **Configure n8n Credential**
   - In n8n: Settings → Credentials → Create New
   - Type: HTTP Header Auth
   - Name: `RapidAPI Local Business Data`
   - Add headers:
     - `X-RapidAPI-Key`: `YOUR_API_KEY`
     - `X-RapidAPI-Host`: `local-business-data.p.rapidapi.com`

#### Step 2: Google Sheets Setup

1. **Enable Google Sheets API**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Enable Google Sheets API for your project
   - Create OAuth2 credentials

2. **Configure n8n Credential**
   - In n8n: Settings → Credentials → Create New
   - Type: Google Sheets OAuth2 API
   - Follow OAuth2 setup process

3. **Create Google Sheet Structure**

Create a new Google Sheet with these tabs:

**keyword_searches** sheet:
```
| select | query | lat | lon | country_iso_code |
|--------|-------|-----|-----|------------------|
| X | Restaurants Madrid | 40.4168 | -3.7038 | ES |
| X | Hair Salons Brooklyn | 40.6782 | -73.9442 | US |
| X | Coffee Shops Paris | 48.8566 | 2.3522 | FR |
```

**stores_data** sheet:
```
The workflow will automatically create columns for business data including:
business_id, name, phone_number, email, website, full_address, rating, 
review_count, linkedin, instagram, query, lat, lon, and 25+ more fields
```

#### Step 3: Workflow Configuration

1. **Import the Workflow**
   - Copy the provided JSON
   - In n8n: Import from JSON

2. **Update Placeholder Values**
   - Replace `YOUR_GOOGLE_SHEET_ID` with your actual Google Sheet ID
   - Update credential references to match your setup

3. **Configure Search Parameters** (Optional)
   - Adjust `limit`: 1-100 results per query (default: 100)
   - Modify `zoom`: 10-18 search radius (default: 13)
   - Change `language`: EN, ES, FR, etc. (default: EN)

### How It Works

#### Workflow Process

1. **Load Search Criteria**: Reads queries marked with "X" from `keyword_searches` sheet
2. **Load Existing Data**: Retrieves previously processed data for duplicate detection
3. **Filter New Searches**: Smart merge identifies only new query+location combinations
4. **Process Each Location**: Sequential processing prevents API overload
5. **Configure Parameters**: Prepares search parameters from sheet data
6. **API Request**: Calls RapidAPI to extract business information
7. **Parse Data**: Structures and cleans all business information
8. **Save Results**: Stores new leads in `stores_data` sheet
9. **Rate Limiting**: 10-second delay between requests
10. **Loop**: Continues until all new searches are processed

#### Duplicate Prevention Logic

**Search Level**: Compares new queries against existing data using query+latitude combination, skipping already processed searches.

**Business Level**: Each business receives a unique `business_id` to prevent duplicate entries even across different searches.

### Data Extracted

#### Business Information
- Business name, full address, phone number
- Website URL, Google My Business rating and review count
- Business type, price level, verification status
- Geographic coordinates (latitude/longitude)
- Detailed location breakdown (street, city, state, country, zip)

#### Contact Details
- Email addresses (when publicly available)
- Social media profiles: LinkedIn, Instagram, Facebook, Twitter, YouTube, TikTok, Pinterest
- Additional phone numbers
- Direct Google Maps and reviews links

#### Search Metadata
- Original search query and parameters
- Extraction timestamp and geographic data
- API response details for tracking

### Use Cases

#### **Lead Generation**
- Generate targeted prospect lists for B2B sales
- Build location-specific customer databases
- Create industry-specific contact lists
- Develop territory-based sales strategies

#### **Market Research**
- Analyze competitor density in target markets
- Study business distribution

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
