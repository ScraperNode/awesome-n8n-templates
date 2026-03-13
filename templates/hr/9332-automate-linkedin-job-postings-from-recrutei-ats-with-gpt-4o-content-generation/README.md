# 👥 Automate LinkedIn job postings from Recrutei ATS with GPT-4o content generation

> ⚡ **698 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Overview: Automated LinkedIn Job Posting with AI

This workflow automates the publication of new job vacancies on LinkedIn immediately after they are created in the Recrutei ATS (Applicant Tracking System). It leverages a Code node to pre-process the job data and a powerful AI model (GPT-4o-mini, configured via the OpenAI node) to generate compelling, marketing-ready content.

This template is designed for Recruitment and Marketing teams aiming to ensure consistent, timely, and high-quality job postings while saving significant operational time.

## Workflow Logic & Steps

1.  **Recrutei Webhook Trigger:** The workflow is instantly triggered when a new job vacancy is published in the Recrutei ATS, sending all relevant job data via a webhook.
2.  **Data Cleaning (Code Node 1):** The first Code node standardizes boolean fields (like `remote`, `fixed_remuneration`) from `0`/`1` to descriptive text (`'yes'`/`'no'`).
3.  **Prompt Transformation (Code Node 2):** The second, crucial Code node receives the clean job data and:
    * Maps the original data keys (e.g., `title`, `description`) to user-friendly labels (e.g., `Job Title`, `Detailed Description`).
    * Cleans and sanitizes the HTML description into readable Markdown format.
    * Generates a single, highly structured prompt containing all job details, ready for the AI model.
4.  **AI Content Generation (OpenAI):** The AI Model receives the structured prompt and acts as a **'Marketing Copywriter'** to create a compelling, engaging post specifically optimized for the LinkedIn platform.
5.  **LinkedIn Post:** The generated text is automatically posted to the configured LinkedIn profile or Company Page.
6.  **Internal Logging (Google Sheets):** The workflow concludes by logging the event (Job Title, Confirmation Status) into a Google Sheet for internal tracking and auditing.

## Setup Instructions

To implement this workflow successfully, you must configure the following:

1.  **Credentials:**
    * Configure **OpenAI** (for the Content Generator).
    * Configure **LinkedIn** (for the Post action).
    * Configure **Google Sheets** (for the logging).
2.  **Node Configuration:**
    * Set up the Webhook URL in your Recrutei ATS settings.
    * Replace `YOUR_SHEET_ID_HERE` in the **Google Sheets Logging** node with your sheet's ID.
    * Select the correct LinkedIn profile/company page in the **Create a post** node.

## 🔗 Nodes Used

Google Sheets, Webhook, LinkedIn, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
