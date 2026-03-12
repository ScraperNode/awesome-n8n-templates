# 👥 Smart LinkedIn job filtering with Google Gemini, CV matching, and Google Maps

> ⚡ **2,767 views** · 👥 [HR & Recruitment](../)

## Description

## What it does

The job search process is filled with manual, frustrating tasks—reading endless job descriptions only to find the seniority is wrong, the role requires a language you don't speak, or a "hybrid" job has an impossible commute.

This workflow acts as a personal AI assistant that automates the entire top of your job search funnel. It doesn't just find jobs; it reads the full description, checks the commute time from your home, filters by your specific criteria, and even compares the job requirements against your CV to calculate a match score. It's a personalized, decision-making engine that only alerts you to the opportunities that are a perfect fit.

## How it works

The workflow is designed to be fully customized from a single `Config` node and runs in a multi-layered sequence to find and qualify job opportunities.

1.  **Scrape Jobs:** The workflow triggers and uses **Apify** to find new job postings on LinkedIn based on a list of keywords you define (e.g., "AI Workflow Engineer," "Automation Specialist").
2.  **AI Triage & Smart Filtering:** For each job found, a **Google Gemini** AI performs an initial triage, extracting key data like the job's language, work model (Remote, Hybrid, On-site), and seniority level. The workflow then applies a series of smart filters based on your personal preferences:
    * **Language & Seniority:** It discards any jobs that don't match your target language and experience level.
    * **Commute Check:** For hybrid or on-site roles, it uses the **Google Maps API** to calculate the commute time from your home address and filters out any that exceed your maximum desired travel time.
3.  **AI Deep Analysis vs. CV:** For the handful of jobs that pass the initial filters, a second, more advanced **Google Gemini** agent performs a deep analysis. It compares the job description against your personal CV (which you paste into the config) to generate a summary, a list of key required skills, and a final **match score** (e.g., 8/10).
4.  **Log & Alert:** The final step is action. The full analysis of every qualified job is logged in a **Supabase** database for your records. However, only jobs with a match score above your set threshold will trigger an immediate, detailed alert in **Telegram**, ensuring you only focus on the best opportunities.

## Setup Instructions

This workflow is designed for easy setup, with most personal preferences controlled from a single node.

### Required Credentials

1.  **Apify:** You will need an Apify API Token.
2.  **Google Cloud:** You will need credentials for a Google Cloud project with the Google AI (Gemini) and Google Maps APIs enabled.
3.  **Supabase:** You will need your Supabase Project URL and Service Role Key.
4.  **Telegram:** You will need a Telegram Bot Token and the Chat ID for the channel where you want to receive alerts.

### Step-by-Step Configuration

Almost all customization is done in the **`Config` node**. Open it and set the following parameters to match your personal job search criteria:

* `MyCV`: Paste the full text of your CV/resume here. This is used by the AI to compare your skills against the job requirements.

* `JobKeywords`: Search keywords for jobs (e.g., "engineer", "product manager").

* `JobsToScrape`: The maximum number of relevant job postings to scrape in each run.

* `HomeLocation`: Your home city and country (e.g., "Breda, Netherlands"). This is used as the starting point for calculating commute times for hybrid or onsite jobs.

* `MaxCommuteMinutes`: Your personal maximum one-way commute time in minutes. The workflow will filter out any jobs that require a longer travel time.

* `TargetLanguage`: Your preferred language for job postings. The workflow will filter out any jobs not written in this language. You can list multiple languages, separated by a comma.

* `ExperienceLevel`: The seniority level you are looking for. The AI will validate this against the job description.
The value can be:    
```
"" → (Any)
"internship" → (Internship)
"entry" → (Entry Level)
"associate" → (Associate)
"mid_senior" → (Mid-Senior Level)
"director" → (Director)
"executive" → (Executive)
```

* `Under10Applicants`: Set to `true` if you only want to see jobs with fewer than 10 applicants. Set to `false` to see all jobs.

After setting up the `Config` node, configure the **Supabase** and **Telegram** nodes with your specific credentials and table/chat details.

## How to Adapt the Template

This workflow is a powerful framework for any search and qualification process.

* **Change Job Source:** Swap the **Apify** node to scrape different job boards, or use an `RSS Feed Reader` node to get jobs from sites that provide feeds.
* **Refine AI Logic:** The prompts in the two **Google Gemini** nodes are the core of the engine. You can edit them to extract different data points, change the scoring criteria, or even ask the AI to evaluate a company's culture based on the tone of the job description.
* **Change the Database:** Replace the **Supabase** node with **Airtable**, **Google Sheets**, or a traditional database node like **Postgres** to log your results.
* **Modify Alerts:** Change the **Telegram** node to send alerts via **Slack**, **Discord**, or **Email**. You could also add a step to automatically create a draft application or add the job to a personal CRM.

## 🔗 Nodes Used

HTTP Request, Telegram, Supabase, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
