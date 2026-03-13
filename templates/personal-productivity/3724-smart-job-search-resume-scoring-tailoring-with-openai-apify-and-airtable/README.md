# ⚡ Smart job search: resume scoring & tailoring with OpenAI, Apify, and Airtable

> ⚡ **1,818 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

![image.png](fileId:1304)

 ### Who is this for?

This workflow is designed for job seekers who want to automate their job application research and resume optimization. It's ideal for professionals who want to match their CVs to new job postings daily, improving the chance of landing interviews without manual work.

###  Use case

- **Problem**: Manually searching for jobs, matching resumes, and updating application records is time-consuming and inefficient.

- **Use Case**: Automatically fetches new job listings based on user preferences, scores them against the user's existing CV, generates a revamped CV tailored for each job, and stores everything neatly into an Airtable database for easy tracking.

###  What this workflow does? 

1. **Fetches user job preferences** from Google Sheets daily.
1. **Searches for jobs** matching those preferences using Apify’s scraping.
1. **Filters** job posts that are fresh (posted within 24-48 hours).
1. **Scores** each job against the user’s current CV using an OpenAI agent.
1. **Generates** a revamped CV tailored to each job.
1. **Stores** the job listing, compatibility score, match reason, and revamped CV into Airtable for future use.



### API Credentials Required


- Google Sheets API Credentials — for reading user-defined job preferences.
- Apify API Key — to scrape job postings (e.g., Indeed Scraper Actor).
- OpenAI API Key — for AI scoring and CV enhancement.
- Airtable API Key — for job listing and tracking.


### Setup 

- **Google Sheets**: Store your job preferences (like titles, locations, etc.).

![image.png](fileId:1302)

- **Apify API**: Set up a scraper for LinkedIn, Indeed, or other job boards.
- **OpenAI API**: Provide access to a GPT model (ideally GPT-4 Turbo) to handle CV scoring and revamping.
- **Airtable**: Create two tables:

	- One for **archived jobs** (old jobs &gt;48 hours).

	- One for **current processed jobs** with AI scores and revamped CVs.
		- Columns for Airtable: 
		 `job_title`,`company`,`location`,`date_posted`,`job_type`,`description`,`link`,`compatibilityScore`,`matcReason`,`revampedCV`,`newCompatibilityScore`,`newMatchReason`. 

![image.png](fileId:1303)

- **n8n**: Deploy the full workflow with nodes for triggers, loops, API calls, parsing, and storage.

### How to customize it for your needs

- **Edit Job Preferences**: Add or update the fields in Google Sheets (Columns: `job_title`, `job_location`) to search.

- **Fine-tune AI Prompts**: Adjust the scoring criteria (e.g., favor remote roles, leadership experience, certifications).

- **Customize CV Style**: Configure the AI to generate shorter, more detailed, or industry-specific resumes.


- **Change Storage Destination**: Replace Airtable with Notion, Google Sheets, a CRM system, or even send yourself Slack updates.

- **Expand Job Sources**: Easily swap the job scraper to pull listings from your favorite niche job boards.


### Why Use This Template?

1. Saves 10+ hours/week on manual job search.
2. Instantly tailor CVs to each application.
3. Centralizes all data across Google Sheets and Airtable.
4. Flexible — customize AI prompts, scoring logic, or expand to multiple users!

### Need Assistance?

For setup guidance, customization, or business inquiries,
Email: phoenixaiagentsolutions@gmail.com

## 🔗 Nodes Used

Airtable, Cron, Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
