# 👥 Automate CV screening and applicant scoring from Gmail to Airtable with AI

> ⚡ **824 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow automatically processes job applications received via Gmail. It extracts the job code from the email subject and parses the attached CV using Gemini AI to retrieve applicant details.Each applicant is then scored against job requirements fetched from Airtable, with results and AI notes logged automatically to Applications table.

## How it works
1. The workflow watches for new emails with attachments arriving under a specified Gmail label and triggers automatically on each new match.
2. The job code is extracted from the email subject line (e.g., FN-001) and raw text is extracted from the attached CV PDF file.
3. Gemini AI parses the extracted CV text and returns structured applicant data including name, email, years of experience, and skills.
4. The extracted job code is used to retrieve the matching job post details and requirements from your Airtable Job Posts table.
5. Gemini compares the applicant's profile against the job requirements, assigns a score from 1–100, and generates a brief reasoning summary in Bahasa Indonesia.
6. The applicant's data, score, and AI-generated notes are saved as a new record in the Airtable Applications table.

## Setup
1. Prepare your Airtable base with two tables: Job Posts (Job Code, Job Title, Required Skills, Minimum Experience, Job Description) and Applications (Applicant Name, Email, Score, Notes) with a linked field pointing to Job Posts.
2. Add your Gmail, Google AI (Gemini), and Airtable credentials in the n8n Credential Manager before configuring any nodes.
3. Open the Gmail Trigger node and set your label filter (e.g., label:job-applications). In the Extract Job Code node, verify the regex matches your format — default is ([A-Z]{2}-\d{3}).
4. Open both the Find Job Post and Save Applicant Airtable nodes and select your correct base and table in each.
5. Save and activate the workflow — new CV submissions will now be processed, scored, and logged to Airtable automatically.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: [withmiautomation.com](withmiautomation.com)
→ Learn to build it yourself: [academy.withmiautomation.com](academy.withmiautomation.com)
→ Bring Fahmi to your team (training, workshop, talkshow): [fahmiiireza.com](fahmiiireza.com)

## 🔗 Nodes Used

Airtable, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
