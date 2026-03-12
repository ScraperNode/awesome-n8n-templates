# 💬 Generate job application icebreakers with GPT-4 and Indeed data from Google Sheets

> ⚡ **775 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Part two of the Indeed Job Scraper, Filter, and Enrichment workflow, this workflow takes information about the scraped and filtered job listings on Indeed via Apify, which is stored in Google Sheets to generate a customized, five-line email icebreaker that implies the rest of the icebreaker is personalized. Personalized IJSFE (Indeed Job Scraper For Enrichment). ++ I am an engineering student, so I love my acronyms.

### Benefits

Instant Icebreaker Generation - Convert hours of research, copywriting and personalization into seconds automatically
Live Integration - Generate and send personalized icebreakers whenever, wherever 
Virtually Complete Automation - From research into company and job description to personalized response with the AI solution, this workflow does it in a click.
Professional Presentation - Because the chatbot has context about the company and the job listing, it generates an icebreaker that makes the reader think that there was some research done


#### How It Works

1. Google Sheets Search:

- Google sheets node fetches all rows where the icebreaker column is empty
- Each row is an item returned that contains information about the company and the job listing

2. AI Personalization:

- Uses sophisticated GPT-4 prompting
- Converts a bunch of information about a job posting and company into a customized, five-line personalized email icebreaker 
- Applies a consistent and casual tone automatically to seem more human-written

3. Database Update:

- Updates all rows fetched in the search and updates only the icebreaker column with the new personalized icebreaker
- Each item is returned as a row that contains information about the company, the job listing and the icebreaker

### Required Template Setup

Google Sheets Template: Create a Google Sheet with these variables:

jobUrl - Unique identifier for job listings
title - Position Title
descriptionText - Description of job listing
hiringDemand/isHighVolumeHiring - Are they hiring at high volume?
hiringDemand/isUrgentHire - Are they hiring at high urgency?
isRemote - Is this job remote?
jobType/0 - Job type: In person, Remote, Part-time, etc.
companyCeo/name - CEO name collected from Tavily’s search
icebreaker - AI-generated icebreakers for each job listing
scrapedCeo - CEO name collected from Apify Scraper
email - Email listed on for job listing
companyName - Name of the company that posted the job
companyDescription - Description of the company that posted the job
companyLinks/corporateWebsite - Website of the company that posted the job
companyNumEmployees - Number of employees the company listed that they have
location/country - Location of where job is to take place
salary/salaryText - Salary on job listing

Setup Instructions:

Google Sheets Search & Update Setup:

Create a new Google Sheet with these column headers in the first row
Name the sheet whatever you please
Connect your Google Sheets OAuth credentials in n8n
Update the document ID in the workflow nodes

The search logic in the first Google Sheets node relies on the ID column for icebreaker generation, so this structure is essential for the workflow to function correctly.
Feel free to reach out for additional help or clarification at my Gmail: terflix45@gmail.com, and I'll get back to you as soon as I can.


AI Icebreaker Generation Setup:

Configure OpenAI API for sophisticated proposal writing
Implement example-based training with input/output for more specific output
Set up JSON formatting for structure (Personally, I think JSON is easier to handle as an output)


### Setup Steps:

1. Search & Fetch Rows Setup

- Create a Google Sheets database with the provided column structure
- Connect Google Sheets OAuth credentials
- Configure the filer on the get rows node to only include empty icebreaker columns

2. Set up AI Personalization

- Add OpenAI API credentials for personalized icebreaker generation
- Customize the AI prompts for your specific niche, requirements or interest

3. Update Google Sheets Setup

- Remember to map all items to their respective columns based on the row number
- All fields in the update sheets node should have the same value as the first sheets node, and the icebreaker field is to take the ChatGPT output as its value

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
