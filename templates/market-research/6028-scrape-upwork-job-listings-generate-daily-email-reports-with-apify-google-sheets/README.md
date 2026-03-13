# 📊 Scrape Upwork job listings & generate daily email reports with Apify & Google Sheets

> ⚡ **845 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

This automated n8n workflow scrapes job listings from Upwork using Apify, processes and cleans the data, and generates daily email reports with job summaries. The system uses Google Sheets for data storage and keyword management, providing a comprehensive solution for tracking relevant job opportunities and market trends.

## **What is Apify?**
Apify is a web scraping and automation platform that provides reliable APIs for extracting data from websites like Upwork. It handles the complexities of web scraping including rate limiting, proxy management, and data extraction while maintaining compliance with website terms of service.

## **Good to Know**
* Apify API calls may incur costs based on usage; check Apify pricing for details
* Google Sheets access must be properly authorized to avoid data sync issues
* The workflow includes data cleaning and deduplication to ensure high-quality results
* Email reports provide structured summaries for easy review and decision-making
* Keyword management through Google Sheets allows for flexible job targeting

## **How It Works**

The workflow is organized into three main phases:

**Phase 1: Job Scraping & Initial Processing**
This phase handles the core data collection and initial storage:
1. **Trigger Manual Run** - Manually starts the workflow for on-demand job scraping
2. **Fetch Keywords from Google Sheet** - Reads the list of job-related keywords from the All Keywords sheet
3. **Loop Through Keywords** - Iterates over each keyword to trigger Apify scraping
4. **Trigger Apify Scraper** - Sends HTTP request to start Apify actor for job scraping
5. **Wait for Apify Completion** - Waits for the Apify actor to finish execution
6. **Delay Before Dataset Read** - Waits a few seconds to ensure dataset is ready for processing
7. **Fetch Scraped Job Dataset** - Fetches the latest dataset from Apify
8. **Process Raw Job Data** - Filters jobs posted in the last 24 hours and formats the data
9. **Save Jobs to Daily Sheet** - Appends new job data to the daily Google Sheet
10. **Update Keyword Job Count** - Updates job count in the All Keywords summary sheet

**Phase 2: Data Cleaning & Deduplication**
This phase ensures data quality and removes duplicates:
1. **Load Today's Daily Jobs** - Loads all jobs added in today's sheet for processing
2. **Remove Duplicates by Title/Desc** - Removes duplicates based on title and description matching
3. **Save Clean Job Data** - Saves the cleaned, unique entries back to the sheet
4. **Clear Old Daily Sheet Data** - Deletes old or duplicate entries from the sheet
5. **Reload Clean Job Data** - Loads clean data again after deletion for final processing

**Phase 3: Daily Summary & Email Report**
This phase generates summaries and delivers the final report:
1. **Generate Keyword Summary Stats** - Counts job totals per keyword for analysis
2. **Update Summary Sheet** - Updates the summary sheet with keyword statistics
3. **Fetch Final Summary Data** - Reads the summary sheet for reporting purposes
4. **Build Email Body** - Formats email with statistics and sheet link
5. **Send Daily Report Email** - Sends the structured daily summary email to recipients

## **Data Sources**
The workflow utilizes Google Sheets for data management:

1. **AI Keywords Sheet** - Contains keyword management data with columns:
   - Keyword (text) - Job search terms
   - Job Count (number) - Number of jobs found for each keyword
   - Status (text) - Active/Inactive status
   - Last Updated (timestamp) - When keyword was last processed

2. **Daily Jobs Sheet** - Contains scraped job data with columns:
   - Job Title (text) - Title of the job posting
   - Description (text) - Job description content
   - Budget (text) - Job budget or hourly rate
   - Client Rating (number) - Client's rating on Upwork
   - Posted Date (timestamp) - When job was posted
   - Job URL (text) - Direct link to the job posting
   - Keyword (text) - Which keyword found this job
   - Scraped At (timestamp) - When data was collected

3. **Summary Sheet** - Contains daily statistics with columns:
   - Date (date) - Report date
   - Total Jobs (number) - Total jobs found
   - Keywords Processed (number) - Number of keywords searched
   - Top Keyword (text) - Most productive keyword
   - Average Budget (currency) - Average job budget
   - Report Generated (timestamp) - When summary was created

## **How to Use**
* Import the workflow into n8n
* Configure Apify API credentials and Google Sheets API access
* Set up email credentials for daily report delivery
* Create three Google Sheets with the specified column structures
* Add relevant job keywords to the AI Keywords sheet
* Test with sample keywords and adjust as needed

## **Requirements**
1. Apify API credentials and actor access
2. Google Sheets API access
3. Email service credentials (Gmail, SMTP, etc.)
4. Upwork job search keywords for targeting

## **Customizing This Workflow**
Modify the Process Raw Job Data node to filter jobs by additional criteria like budget range, client rating, or job type. Adjust the email report format to include more detailed statistics or add visual aids, such as charts. Customize the data cleaning logic to better handle duplicate detection based on your specific requirements, or add additional data sources beyond Upwork for comprehensive job market analysis.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
