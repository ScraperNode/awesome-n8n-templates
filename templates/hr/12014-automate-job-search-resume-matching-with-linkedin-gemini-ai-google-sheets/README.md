# 👥 Automate job search & resume matching with LinkedIn, Gemini AI & Google Sheets

> ⚡ **2,461 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

## Description

This workflow helps you find and evaluate job opportunities automatically, without spending hours searching and comparing roles. It uses your resume to look for relevant jobs on LinkedIn, checks how well each role matches your profile, and organises everything neatly in Google Sheets so you can focus on applying to the best opportunities.

## How it works

On a schedule, the workflow downloads your resume from Google Drive and analyses it to understand your skills and experience. Based on this, it creates LinkedIn job searches and pulls in recent job listings. Each job is then reviewed using AI to compare the job description with your resume, produce a match score, suggest resume improvements, and generate a tailored cover letter. All results are saved to Google Sheets, and you’re notified by email when the run finishes.

## How to use

1. Make a copy of the Google Sheets template and keep it for your own job tracking.  
2. Upload your resume (PDF) to Google Drive.  
3. Connect your Google Drive, Google Sheets, Gmail, and AI credentials in n8n.  
4. Update the **Config** node with your preferences (remote work, Easy Apply, job limit).  
5. Paste your copied Google Sheet IDs into the workflow.  
6. Turn on the Schedule Trigger and activate the workflow.

## Requirements

- Google Drive account for storing your resume  
- Google Sheets account for tracking results  
- Gmail account for notifications  
- AI model access (Google Gemini or similar)  
- n8n (cloud or self-hosted)

## Customising this workflow

You can easily adapt this workflow to suit your goals. Change the job limits, locations, or remote preferences in the **Config** node. Update the AI prompts to target different roles or industries, or extend the workflow to send results to tools like Notion, a CRM, or your own application tracker.

## Good to know

This workflow is designed to help you screen and prepare for jobs, not to apply automatically. Match scores are a guide, not a guarantee, so it’s always worth reviewing roles manually. Also, since LinkedIn pages can change over time, you may occasionally need to update HTML selectors to keep things running smoothly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
