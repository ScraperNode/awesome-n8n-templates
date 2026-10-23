# 📊 Analyze skill gaps from LinkedIn jobs with BrowserAct, GPT-4o-mini and Gmail

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a student’s profile via an n8n form, scrapes relevant LinkedIn job postings with BrowserAct, uses OpenAI GPT-4o-mini to generate a skill gap report and 90-day learning plan, then saves the results to Google Sheets and emails the plan via Gmail.

## How it works
1. Receives a student submission from an n8n Form with name, email, target role, current skills, experience level, and preferred location.
2. Validates required fields and builds a LinkedIn Jobs search URL for the target role and location.
3. Uses BrowserAct to open the LinkedIn search in a stealth browser and extract job-posting text (including required skills) from top results.
4. Cleans and normalizes the scraped job text and combines it with the student’s profile data.
5. Sends the job-posting text and student skills to OpenAI (GPT-4o-mini) to generate market skills with frequencies, skills the student has, missing skills by priority, a gap score, course links, and a 3-month plan.
6. Parses the labeled sections from the AI output and then appends the full report to Google Sheets while sending a formatted HTML email to the student via Gmail.

## Setup
1. Install the BrowserAct community node (`n8n-nodes-browseract`), create a BrowserAct workflow that extracts skills from a LinkedIn Jobs URL, and add your BrowserAct API credentials and workflow ID.
2. Add your OpenAI API credentials for the GPT-4o-mini model.
3. Add your Google Sheets OAuth credentials, set the target spreadsheet ID, and ensure a sheet named “Skill Gap Reports” exists with matching columns for the appended fields.
4. Add your Gmail OAuth credentials and confirm the sender name and email content/subject meet your needs.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
