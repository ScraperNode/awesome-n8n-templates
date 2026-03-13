# ⚡ Automated LinkedIn job hunter: get your best daily job matches by email

> ⚡ **2,396 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Overview

This n8n template automates the tedious process of searching for jobs on LinkedIn. By integrating with tools for web scraping and leveraging AI (Google Gemini) for intelligent matching, this workflow delivers a curated list of the top 5 most relevant job opportunities published within past 24h directly to your inbox daily, based on your unique resume and preferences.The cost is only 0.1 USD per day and there is no subscription needed.

## Who is this for?

This template is ideal for:

- Active job seekers wanting to save time and effort.
- Professionals looking to discreetly monitor relevant new opportunities.
- Individuals seeking a highly personalized job feed tailored to their resume and preferences.
- Anyone overwhelmed by manual job searching on LinkedIn.

## What is Included:

- **n8n Workflow Template:** The complete workflow file (`.json`) ready to import into your n8n instance.
- **Video Guidance:** A step-by-step video walkthrough showing you exactly how to set up and configure the workflow.

## What problem is this workflow solving?

Finding the right job on LinkedIn can be overwhelming and time-consuming. Sifting through hundreds of listings, tailoring searches, and checking daily takes significant effort. This workflow solves the problem of manual, repetitive job searching by automating the discovery and filtering process, ensuring you see the most relevant opportunities without the daily grind and reducing the risk of missing out on your ideal role.

## What this workflow does:

This workflow automates the following steps:

1. **Scheduled Job Fetching:** Runs automatically (default: daily at 8 AM) to find the latest jobs.
2. **Resume Processing:** Downloads your resume (PDF) from Google Drive and extracts the text content.
3. **Targeted LinkedIn Scraping:** Uses Apify to scrape recent job listings from LinkedIn based on your custom search URL.
4. **AI-Powered Matching:** Employs an AI agent (Google Gemini) to analyze scraped jobs against your resume text and specified preferences.
5. **Top 5 Ranking & Selection:** Identifies and ranks the opportunities, selecting the 5 best matches for you.
6. **Personalized Email Reporting:** Generates and sends a detailed HTML email containing the top 5 jobs, including company name, job title, industry, a personalized reason for the match, and a direct application link.

## Setup:

Follow these steps to configure the workflow:

1. **Core Connections:**
    - Connect your Google Drive and Gmail accounts to n8n via the Credentials section.
    - Ensure your n8n environment has access/credentials configured for the AI model used by the AI Agent node (e.g., Google Gemini).
2. **Apify Integration:**
    - Sign up for an Apify account ([apify.com](https://apify.com/)) and obtain your API key.
    - **Action:** In the `Input` node, paste your Apify API Key into the `Value` field for the `ApifyAPIKey` assignment.
3. **Resume Setup:**
    - Upload your current resume in PDF format to your Google Drive.
    - **Action:** Find the File ID of the uploaded resume in Google Drive (part of the shareable link). Paste this File ID into the `File ID` parameter within the `DownloadResume` (Google Drive) node.
4. **LinkedIn Search Definition:**
    - Go to LinkedIn Jobs ([www.linkedin.com/jobs/search/](https://www.linkedin.com/jobs/search/)) using an *incognito/private* browser window to ensure you get a public URL.
    - Apply all your desired filters (keywords, location, date posted, job type, industry, etc.).
    - Copy the *complete URL* from your browser's address bar.
    - **Action:** In the `ScrapeLinkedin` (HTTP Request) node, navigate to the `Body` &gt; `JSON` parameter. Replace the example URL within the `urls` array `[ "YOUR_LINKEDIN_SEARCH_URL_HERE" ]` with the URL you just copied. *Make sure the URL is enclosed in double quotes.*
5. **Personalization Inputs:**
    - **Action:** Go to the `Input` node:
        - In the `Preference` assignment, replace the example text in the `Value` field with your detailed job preferences (e.g., "Seeking remote Data Scientist roles in SaaS companies with less than 1000 employees, strong preference for Python/ML focus").
        - In the `EmailAddressToReceiveJobRecommendations` assignment, enter the email address where you want to receive the daily job list in the `Value` field.
6. **Email Sender Configuration:**
    - **Action:** In the `Email the top job recommendations` (Gmail) node, ensure the correct Gmail credential (the account you want to send emails *from*) is selected.

## How to customize this workflow:

- **Run Schedule:** Modify the settings in the `Schedule Trigger` node to change the time or frequency (e.g., twice daily, weekly).
- **Job Search Criteria:** Update the LinkedIn search URL in the `ScrapeLinkedin` node whenever you want to target different roles, industries, or locations.
- **Matching Preferences:** Refine the text in the `Preference` field within the `Input` node to guide the AI's matching process more accurately.
- **AI Behavior:** Advanced users can adjust the system prompt within the `AI Agent: Find Best-matched jobs` node to change how the AI analyzes or presents information (ensure the output structure still matches the `Structured Output Parser` and email node expectations).
- **Number of Jobs Scraped:** Change the `count` value (e.g., from 100) in the `JSON Body` of the `ScrapeLinkedin` node. Note that higher numbers may increase Apify costs/usage.
- **Number of Jobs Emailed:** To change the number of recommendations (e.g., top 3 or top 10), you'll need to:
    - Modify the AI prompt in the `AI Agent: Find Best-matched jobs` node to request the desired number.
    - Adjust the `Structured Output Parser` node's example/schema if needed.
    - Update the HTML code in the `Email the top job recommendations` node to correctly loop through and display the new number of jobs.
- **Email Appearance:** Edit the HTML within the `Message` field of the `Email the top job recommendations` node to customize the email's style, colours, or layout.

## Category:

Job Search, Automation, AI, Productivity, Career Management

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Schedule Trigger, AI Agent, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
