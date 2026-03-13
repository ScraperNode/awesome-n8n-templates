# 🎣 Indeed job scraper with AI filtering & company research using Apify and Tavily

> ⚡ **2,819 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow **scrapes job listings** on indeed via Apify, **automatically gets that dataset**, extracts information about the listing **filters jobs off relevance**, finds a decision maker at the company and updates a database (google sheets) with that info for outreach. **All you need to do is run Apify actor** then the database will update with the processed data.

#### Benefits:

Complete Job search Automation - A webhook monitors the Apify actor which sends a integration and starts the process
AI-Powered Filter - Uses ChatGPT to analyze content/context, identify company goals, and filters based on job description
Smart Duplicate Prevention - Automatically tracks processed job listings in a database to avoid redundancy
Multi-Platform Intelligence - Combines Indeed scraping, web research via Tavily, and enriches each listing
Niche Focus - Process content from multiple niches 6 currently (hardcoded) but can be changed to fit other niches (just prompt the "job filter" node)

#### How It Works:

1. Indeed Job Discovery:

- Search and apply filter for relevant job listings, copy and use URL in Apify
- Uses Apify's Indeed job scraper to scrape job listings from the URL of interest
- Automatically scrapes the information, stores it in a dataset and initiates a integration

2. Oncoming Data Processing:

- Loops over 500 items (can be changed) with a batch size of 55 items (can be changed) to avoid running into API timeouts.
- Multiple filters to ensure all fields are scrapped with our required metrics (website must exist and number of employees &lt; 250)
- Duplicate job listings are removed from oncoming batch to be processed


3. Job Analysis & Filter:

- An additional filter to remove any job listing from the oncoming batch if it already exists in the google sheets database
- Then all new job listings gets pasted to chatGPT which uses information about the job post/description to determine if it is relevant to us
- All relevant jobs get a new field "verdict" which is either true or false and we keep the ones where verdict is true


4. Enrich & Update Database:

- Uses Tavily to search for a decision maker (doesn't always finds one) and populate a row in google sheet with information about the job listing, the company and a decision maker at that company.
- Waits for 1 minute and 30 seconds to avoid google sheets and chatGPT API timeouts then loops back to the next batch to start filtering again until all job listings are processed

### Required Google Sheets Database Setup:

Before running this workflow, create a Google Sheets database with these exact column headers:
Essential Columns:

jobUrl - Unique identifier for job listings
title - Position Title
descriptionText - Description of job listing
hiringDemand/isHighVolumeHiring - Are they hiring at high volume?
hiringDemand/isUrgentHire - Are they hiring at high urgency?
isRemote - Is this job remote?
jobType/0 - Job type: In person, Remote, Part-time, etc.
companyCeo/name - CEO name collected from Tavily's search
icebreaker - Column for holding custom icebreakers for each job listing (Not completed in the workflow. I will upload another that does this called "Personalized IJSFE")
scrapedCeo - CEO name collected from Apify Scraper
email - Email listed on for job listing
companyName - Name of company that posted the job	
companyDescription - Description of the company that posted the job
companyLinks/corporateWebsite - Website of the company that posted the job
companyNumEmployees - Number of employees the company listed that they have
location/country - Location of where the job is to take place
salary/salaryText - Salary on job listing

Setup Instructions:

Create a new Google Sheet with these column headers in the first row
Name the sheet whatever you please
Connect your Google Sheets OAuth credentials in n8n
Update the document ID in the workflow nodes

The merge logic relies on the id column to prevent duplicate processing, so this structure is essential for the workflow to function correctly.
Feel free to reach out for additional help or clarification at my gmail: terflix45@gmail.com and I'll get back to you as soon as I can.


### Set Up Steps:

1. Configure Apify Integration:

- Sign up for an Apify account and obtain API key
- Get indeed job scraper actor and use Apify's integration to send a HTTP request to your n8n webhook (if test URL doesn't work use production URL)
- Use Apify node with Resource: Dataset, Operation: Get items and use your Api key as your credentials

2. Set Up AI Services:

- Add OpenAI API credentials for job filtering
- Add Tavily API credentials for company research 
- Set up appropriate rate limiting for cost control

3. Database Configuration:

- Create Google Sheets database with provided column structure
- Connect Google Sheets OAuth credentials
- Configure the merge logic for duplicate detection

4. Content Filtering Setup:

- Customize the AI prompts for your specific niche, requirements or interest
- Adjust the filtering criteria to fit your needs

## 🔗 Nodes Used

Google Sheets, Webhook, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
