# ⚡ Automate job search & applications with 5 job boards & AI resume generator

> ⚡ **716 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

**Automate Your Job Search: Find Job Listings on LinkedIn, Indeed, Glassdoor, Upwork & Adzuna!**

Stop wasting time manually searching for jobs! This powerful job search automation workflow for n8n is your secret weapon to finding and preparing for your next career move, effortlessly.

Tired of visiting multiple job boards every day, running the same searches, and drowning in a sea of irrelevant listings? 

Our Job Search Automation workflow streamlines the entire process for you. It automatically scours top job boards, filters and deduplicates the results, and even helps you craft a tailored resume and cover letter.

**This workflow will automatically pull job listings from:**

LinkedIn: The world's largest professional network.

Indeed: One of the most popular job search engines.

Glassdoor: A leading platform for company reviews and job listings.

Upwork: The go-to marketplace for freelance opportunities.

Adzuna: A comprehensive job search engine with a massive database of listings.

**Key Features:**

Multi-Board Job Sourcing: Never miss an opportunity! This workflow simultaneously searches LinkedIn, Indeed, Glassdoor, Upwork, and Adzuna for your desired job title.

**Intelligent Filtering & Deduplication:** Say goodbye to repetitive listings. The workflow cleans up the results, so you only see unique, relevant job postings.

**AI-Powered Resume & Cover Letter Generation:** Once a promising job is found, the workflow uses AI to analyze the job description, score your resume's match, and then rewrites your resume and generates a tailored cover letter to highlight the right skills and experience.

**Automated Email Delivery:** Receive the tailored resume and cover letter directly in your inbox, ready for you to review and send.

**Google Sheets Integration:** Keep track of every job you're considering. The workflow automatically logs the job details, your tailored documents, and the application status in a Google Sheet.

**Fully Customizable:** Easily adapt the workflow to your specific needs. Change the job titles, locations, and even add or remove job boards.

**Why You Need This Workflow:**

**Save Dozens of Hours:** Automate the most time-consuming parts of your job search.

**Discover More Opportunities:** Cast a wider net by searching multiple platforms at once.

**Apply Faster:** Get a head start with AI-generated, tailored application materials.

**Stay Organized:** Effortlessly track your applications in a centralized location.

Take control of your job search and land your dream job faster. Get the Job Search Automation workflow today!

**============**

**How to configure your new n8n workflow.**

Prerequisites:

An active n8n instance.

Accounts for the services you want to use (Apify, Google, etc.).

Configuration Steps:

Apify Account & Scrapers:
This workflow uses Apify to scrape job listings from Indeed, LinkedIn, Upwork, and Glassdoor.

Create an Apify Account: If you don't have one, sign up at https://apify.com. A free plan is available.

Get Your Apify API Key: In your Apify account, go to Settings &gt; Integrations to find your API token.

Add Apify Credentials to n8n:

In your n8n workflow, navigate to the Apify: Run Indeed Scraper node.

In the "Credentials" section, click to add new credentials.

Give your credentials a name (e.g., "My Apify Account") and paste your API token.

Apply Credentials to All Apify Nodes: You will need to select your newly created Apify credentials for the following nodes:

Apify: Run Indeed Scraper

Apify: Get Indeed Results

Apify: Run LinkedIn Scraper

Apify: Get LinkedIn Results

Apify: Run Upwork Scraper

Apify: Get Upwork Results

Apify: Run Glassdoor Scraper

Apify: Get Glassdoor Results

Adzuna API (Optional but Recommended):

The workflow uses Adzuna for an additional source of job listings. You will need to sign up for a free developer account to get an App ID and App Key.

Sign Up: Go to https://developer.adzuna.com/ and register.

**Get Your Credentials:** Once registered, you will find your app_id and app_key in your dashboard.

Update the "Get Jobs from Adzuna" Node:

Click on this node to open its parameters.

In the URL field, place app_id and your app_key.

OpenRouter for AI Models:

This workflow uses OpenRouter to access various AI models for tasks like resume scoring and writing.

Create an OpenRouter Account: Sign up at https://openrouter.ai/.

Get Your API Key: Find your key in your account settings.

Add OpenRouter Credentials to n8n:

Go to the OpenRouter Chat Model node.

Add your OpenRouter API key as new credentials.

Google Sheets and Gmail Integration:

Create a Google Sheet: Create a new Google Sheet to track your job applications. The workflow is pre-configured with the following columns, but you can customize them: job_title, job_description, job_url, company, email, status, tailored_resume, cover_letter.

Add Google Credentials to n8n: You will need to authenticate your Google account in n8n to allow access to Sheets and Gmail.

In the Upate sheets node, go to the "Credentials" section and follow the prompts to connect your Google account using OAuth2.

Do the same for the 📧Gmail node. It's recommended to use the same credentials for both.

Configure the "Upate sheets" Node:

Select your Google Sheets credentials.

In the "Document ID" field, enter the ID of the Google Sheet you created. You can find this in the URL of your sheet (it's the long string of characters between /d/ and /edit).

In the "Sheet Name" field, select the correct sheet from the dropdown list.

Setting up the Initial Request (Webhook):
This workflow is triggered by a webhook. This means you can start it by sending a POST request from another application or using a tool like Postman.

Find the Webhook URL: In the Webhook node, you will see a "Test URL" and a "Production URL". Use the production URL for live use.

Required Data: The webhook expects a JSON body with the following fields:

jobSearchKeyword: The job title you want to search for (e.g., "Software Engineer").

email: Your email address where the results will be sent.

You will also need to upload your resume as a file in the request.

Running the Workflow:

Upload Your Resume: The workflow is designed to be initiated with your resume. When you trigger the webhook, you need to include the resume file.

Activate the Workflow: Once all credentials are in place, save and activate your workflow.

Trigger the Workflow: Send a POST request to the production webhook URL with the required JSON data and your resume file. **You can use Postman to do this or replace the webhook with a form.**

You are now all set! The workflow will begin searching for jobs and preparing your application materials.

**Need Help?**

Reach me: https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/

Work with me: https://dominixai.com/

My website: https://jobmonkey.dev

My email: denorgerald@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
