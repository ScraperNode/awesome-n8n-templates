# 👥 Match LinkedIn jobs and generate cover letters with OpenAI, Apify and Sheets

> ⚡ **170 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automatically searches LinkedIn jobs using Apify, compares each job with your resume using AI, calculates a match score, generates a personalized cover letter, and stores everything inside Google Sheets.

High-scoring jobs are instantly sent to Telegram so you can apply faster to the most relevant opportunities.

---


# Workflow Structure

---

## Step 1 — Schedule Trigger

### Node: `Schedule Trigger`

This node automatically starts the workflow every day at a specific time.

### What it does

- Runs the workflow automatically
- Eliminates manual execution
- Creates a fully automated job-hunting system

### Current Configuration

- Runs daily at **5 PM**

---

## Step 2 — Download Resume PDF

### Node: `Download file`

This node downloads the resume PDF from Google Drive.

### What it does

- Connects to Google Drive
- Downloads the selected resume file
- Sends the file to the next processing step

### Why it matters

Your resume becomes dynamic input for the AI matching system.

---

## Step 3 — Extract Resume Text

### Node: `Extract from File`

This node extracts readable text from the PDF resume.

### What it does

- Reads the PDF file
- Extracts plain text content
- Makes the resume understandable for AI

### Output

- Resume text
- PDF metadata
- Structured readable content

---

## Step 4 — Read Job Search Filters

### Node: `Get row(s) in sheet`

This node reads job search preferences from Google Sheets.

### What it reads

- Job keyword
- Preferred location
- Easy Apply option

### Example

| Keyword | Location | Easy Apply |
|---|---|---|
| Software Developer | Bangalore | true |	

---

## Step 5 — LinkedIn Job Scraper

### Node: `Run an Actor and get dataset`

This node uses Apify to scrape LinkedIn job listings.

### What it does

- Searches LinkedIn jobs
- Uses keyword + location filters
- Fetches latest job postings
- Supports Easy Apply filtering

### Example Search

- Software Developer
- Bangalore
- Easy Apply enabled

### Output Includes

- Job title
- Company name
- Job description
- LinkedIn apply link
- Applicant count
- Workplace type

---

## Step 6 — Process Jobs One-by-One

### Node: `Loop Over Items`

This node processes each scraped job individually.

### What it does

- Loops through all job listings
- Processes one job at a time
- Prevents AI overload
- Maintains stable execution

---

## Step 7 — AI Resume Matcher

### Node: `Job Matcher`

This is the core AI engine of the workflow.

### AI Model Used

- GPT-4.1 Mini

### What it does

- Reads your resume
- Reads the job description
- Compares both intelligently
- Calculates a job match score
- Generates a personalized cover letter

### AI Output

```json
{
  "score": 80,
  "coverLetter": "Generated personalized cover letter"
}
```


## Step 8 — Parse AI Output

### Node: `Edit Fields`

This node formats the AI response into reusable structured data.

### What it does

- Converts raw AI response into JSON
- Cleans output formatting
- Makes fields reusable in later nodes

### Output Fields

- Match score
- Cover letter

---

## Step 9 — Save Results to Google Sheets

### Node: `Append or update row in sheet`

This node stores processed jobs inside Google Sheets.

### What gets saved

- Job title
- Company
- Location
- Job description
- Apply link
- Match score
- AI-generated cover letter

---

## Step 10 — High Match Score Filter

### Node: `Score Filter`

This node filters only high-quality job matches.

### Current Logic

Continue only if:

```text
Score ≥ 50
```

---

## Step 11 — Telegram Job Alerts

### Node: `Send a text message`

This node sends instant Telegram notifications for top job matches.

### What it sends

- Job title
- Company
- Location
- Match score
- Apply link

## 🔗 Nodes Used

Google Sheets, Telegram, Google Drive, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
