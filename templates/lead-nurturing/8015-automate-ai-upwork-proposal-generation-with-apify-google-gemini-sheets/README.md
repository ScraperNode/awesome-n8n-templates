# 💬 Automate AI Upwork proposal generation with Apify, Google Gemini & sheets

> ⚡ **144 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Disclaimer
Community nodes are used, and template can only be used on self-hosted n8n instances.

![Upwork workflow.PNG](fileId:2281)

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for finding relevant Upwork jobs and generating highly-personalized, knowledge-base-driven proposals using AI. 

This workflow acts as an autonomous agent, handling everything from job discovery to drafting the final proposal text, ready for you to review and submit.

## Who's this workflow for?
- Freelancers & Consultants
- Digital Agencies
- Business Development Teams
- Sales Professionals

## How it works
**1. Scrape Upwork for New Jobs**: The workflow starts by running an Apify actor to scrape Upwork based on your defined criteria (keywords, categories, payment verification, etc.).

**2. Log Jobs to Google Sheets:** The newly found job opportunities are automatically saved as new rows in a Google Sheet, creating a central dashboard for tracking. A notification is sent confirming the new jobs found.

**3. Trigger AI Proposal Generation:** The workflow then reads the new jobs from the sheet and, for each one that hasn't been applied for, triggers the AI.

**4. Craft a Knowledge-Based Proposal:** It sends the job details to a Google Gemini AI model. The AI uses a detailed, built-in "Company Knowledge Base" (which you can customize) to write a comprehensive and relevant proposal. It addresses client questions, highlights relevant experience, and suggests a timeline.

**5. Save the Proposal Draft:** The AI-generated proposal is saved back into the Google Sheet in the corresponding job row.

**6. Final Notification:** A final email is sent to notify you that the proposals are ready, including a link to the sheet for final review and submission on Upwork.

## Setup Instructions
**1. Apify Configuration:**
- In the Run Upwork Actor... node, connect your Apify account.
- We have used this apify scrapper- [Upwork Extractor](https://apify.com/jupri/upwork)
- In the Custom Body field, customize the search parameters (like category, search.any keywords) to match the jobs you are looking for.

**2. Google Gemini AI Configuration:**
- In the Google Gemini Chat Model node, connect your Google Gemini (PaLM) API account.
- Crucially: In the Proposal Crafting node, edit the prompt to replace the "Company Knowledge Base" with your own company's details, services, and project examples. This is essential for personalizing the proposals.

**3. Google Sheets Setup:**
- Connect your Google Sheets account.
- In all three Google Sheets nodes, select your credentials and update the Document ID and Sheet Name to point to your Upwork tracking sheet.

**4. Gmail Configuration:**
- In both Gmail nodes, connect your account and update the sendTo email address to your own.

**5. Execute the Workflow:**
- Click "Execute workflow" to run the entire job scraping and proposal generation process.

## Key Requirements to Use This Template
- n8n Instance: An active n8n account (Cloud or self-hosted).
- Apify Account: An active Apify account with an API key and sufficient credits/subscription to run the "Upwork Extractor" actor.
- Google Account & Sheet: A pre-made Google Sheet with columns for Title, URL, Description, Skills, Questions, Applied, and Proposal Template.
- Google Gemini AI Account: A Google Cloud account with the Vertex AI API (for Gemini models) enabled and an associated API Key.
- Gmail Account: A Gmail account to send and receive notifications about the workflow's progress.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, Summarize, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
