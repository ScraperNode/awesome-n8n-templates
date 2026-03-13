# 📊 Automate Glassdoor job search with Bright Data scraping & Google Sheets storage

> ⚡ **4,375 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🔍 Glassdoor Job Finder: Bright Data Scraping + Keyword-Based Automation

A comprehensive n8n automation that scrapes Glassdoor job listings using Bright Data's web scraping service based on user-defined keywords, location, and country parameters, then automatically stores the results in Google Sheets.

## 📋 Overview

This workflow provides an automated job search solution that extracts job listings from Glassdoor using form-based inputs and stores organized results in Google Sheets. Perfect for recruiters, job seekers, market research, and competitive analysis.

**Workflow Description:** Automates Glassdoor job searches using Bright Data's web scraping capabilities. Users submit keywords, location, and country via form trigger. The workflow scrapes job listings, extracts company details, ratings, and locations, then automatically stores organized results in Google Sheets for easy analysis and tracking.

## ✨ Key Features

- 🎯 **Form-Based Input:** Simple web form for job type, location, and country
- 🔍 **Glassdoor Integration:** Uses Bright Data's Glassdoor dataset for accurate job data
- 📊 **Smart Data Processing:** Automatically extracts key job information
- 📈 **Google Sheets Storage:** Organized data storage with automatic updates
- 🔄 **Status Monitoring:** Built-in progress tracking and retry logic
- ⚡ **Fast & Reliable:** Professional scraping with error handling
- 🎯 **Keyword Flexibility:** Search any job type with location filters
- 📝 **Structured Output:** Clean, organized job listing data

## 🎯 What This Workflow Does

### Input
- **Job Keywords:** Job title or role (e.g., "Software Engineer", "Marketing Manager")
- **Location:** City or region for job search
- **Country:** Target country for job listings

### Processing
1. Form Submission
2. Data Scraping via Bright Data
3. Status Monitoring
4. Data Extraction
5. Data Processing
6. Sheet Update

### Output Data Points

| Field | Description | Example |
|-------|-------------|---------|
| Job Title | Position title from listing | Senior Software Engineer |
| Company Name | Employer name | Google Inc. |
| Location | Job location | San Francisco, CA |
| Rating | Company rating score | 4.5 |
| Job Link | Direct URL to listing | https://glassdoor.com/job/... |

## 🚀 Setup Instructions

### Prerequisites
- n8n instance (self-hosted or cloud)
- Google account with Sheets access
- Bright Data account with Glassdoor scraping dataset access
- 5–10 minutes for setup

### Step 1: Import the Workflow
1. Copy the JSON workflow code from the provided file
2. In n8n: Workflows → + Add workflow → Import from JSON
3. Paste JSON and click Import

### Step 2: Configure Bright Data
1. Set up Bright Data credentials in n8n
2. Ensure access to dataset: `gd_lpfbbndm1xnopbrcr0`
3. Update API tokens in:
   - "Scrape Job Data" node
   - "Check Delivery Status of Snap ID" node
   - "Getting Job Lists" node

### Step 3: Configure Google Sheets Integration
1. Create a new Google Sheet (e.g., "Glassdoor Job Tracker")
2. Set up Google Sheets OAuth2 credentials in n8n
3. Prepare columns:
   - Column A: Job Title
   - Column B: Company Name
   - Column C: Location
   - Column D: Rating
   - Column E: Job Link

### Step 4: Update Workflow Settings
1. Update "Update Job List" node with your Sheet ID and credentials
2. Test the form trigger and webhook URL

### Step 5: Test & Activate
1. Submit test data (e.g., "Software Engineer" in "New York")
2. Activate the workflow
3. Verify Google Sheet updates and field extraction

## 📖 Usage Guide

### Submitting Job Searches
1. Navigate to your workflow's webhook URL
2. Fill in:
   - **Search Job Type**
   - **Location**
   - **Country**
3. Submit the form

### Reading the Results
- Real-time job listing data
- Company ratings and reviews
- Direct job posting links
- Location-specific results
- Processing timestamps

## 🔧 Customization Options
- **More Data Points:** Add job descriptions, salary, company size, etc.
- **Search Parameters:** Add filters for salary, experience, remote work
- **Data Processing:** Add validation, deduplication, formatting

## 🚨 Troubleshooting
- **Bright Data connection failed:** Check API credentials and dataset access
- **No job data extracted:** Validate search terms and location format
- **Google Sheets permission denied:** Re-authenticate and check sharing
- **Form submission failed:** Check webhook URL and form config
- **Workflow execution failed:** Check logs, add retry logic

### Advanced Troubleshooting
- Check execution logs in n8n
- Test individual nodes
- Verify data formats
- Monitor rate limits
- Add error handling

## 📊 Use Cases & Examples
- **Recruitment Pipeline:** Track job postings, build talent database
- **Market Research:** Analyze job trends, hiring patterns
- **Career Development:** Monitor opportunities, salary trends
- **Competitive Intelligence:** Track competitor hiring activity

## ⚙️ Advanced Configuration
- **Batch Processing:** Accept multiple keywords, loop logic, delays
- **Search History:** Track trends, compare results over time
- **External Tools:** Integrate with CRM, Slack, databases, BI tools

## 📈 Performance & Limits
- **Single search:** 2–5 minutes
- **Data accuracy:** 95%+
- **Success rate:** 90%+
- **Concurrent searches:** 1–3 (depends on plan)
- **Daily capacity:** 50–200 searches
- **Memory:** ~50MB per execution
- **API calls:** 3 Bright Data + 1 Google Sheets per search

## 🤝 Support & Community
- **n8n Community Forum:** [community.n8n.io](https://community.n8n.io)
- **Documentation:** [docs.n8n.io](https://docs.n8n.io)
- **Bright Data Support:** Via your dashboard
- **GitHub Issues:** Report bugs and features

**Contributing:** Share improvements, report issues, create variations, document best practices.

**Need Help?** Check the full documentation or visit the n8n Community for support and workflow examples.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
