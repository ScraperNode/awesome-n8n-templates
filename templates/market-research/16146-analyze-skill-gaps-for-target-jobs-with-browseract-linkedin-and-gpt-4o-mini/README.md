# 📊 Analyze skill gaps for target jobs with BrowserAct, LinkedIn and GPT-4o-mini

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a student’s skills and target role via an n8n Form, scrapes top LinkedIn job postings with BrowserAct, and uses OpenAI GPT-4o-mini to generate a skill gap report with courses and a 90-day plan, saving results to Google Sheets and emailing them via Gmail.

## How it works
1. Receives a student submission from an n8n Form with name, email, target role, current skills, experience level, location, and weekly learning hours.
2. Validates the inputs, converts the skills list into an array, and builds a LinkedIn job search URL for the chosen role and location.
3. Uses BrowserAct to open the LinkedIn job search in a real browser and extract text from up to 20 job postings.
4. Cleans and normalizes the scraped job text and combines it with the student profile data.
5. Sends the student profile and job-posting text to OpenAI GPT-4o-mini to extract in-demand skills, identify missing skills with priority, recommend three free courses, and generate a 13-week learning plan.
6. Parses the model output into labeled sections, calculates matched and missing skill counts, and appends the full report as a new row in Google Sheets.
7. Sends a formatted HTML email via Gmail to the student with the gap score, skills analysis, course links, market insight, and the 90-day plan.

## Setup
1. Install the BrowserAct community node (`n8n-nodes-browseract`) and create/connect a BrowserAct API credential.
2. Create a BrowserAct workflow that visits the provided LinkedIn job search URL, scrolls listings, and extracts skills from up to 20 postings, then paste its workflow ID into the BrowserAct node.
3. Add an OpenAI credential and ensure the OpenAI Chat Model node is set to `gpt-4o-mini`.
4. Connect Google Sheets OAuth2, set the target spreadsheet ID, and ensure a sheet/tab named `Reports` exists with matching columns for the appended report fields.
5. Connect Gmail OAuth2 and confirm the sender name and email settings used to deliver the HTML report to the submitted student email address.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
