# ⚡ Generate tailored resumes, cover letters & interview prep from LinkedIn jobs with AI

> ⚡ **4,096 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🔧 How It Works
**This n8n workflow leverages an agentic AI solution, where multiple AI agents collaborate to process and generate tailored job application assets.

## ✅ Features
Agent-based AI Coordination: Utilizes multiple AI agents working in sequence to analyze the job description and generate results.

### Outputs:

A customized cover letter

An optimized resume (CV)

A list of interview preparation questions

Automated Delivery: The final outputs are created as Google Docs and stored in your connected Google Drive folder.

## 🧾 Input Requirement
Simply provide a LinkedIn job URL as the input.
Example: https://www.linkedin.com/jobs/view/4184156975

# ⚙️ Setup Instructions
To deploy and run this workflow, you'll need to configure the following credentials:

Google Cloud Platform (GCP)

Enable the Google Drive API

Set up OAuth credentials for n8n integration

OpenAI API Key

Needed for generating the content (cover letter, CV, and questions)

BrightData (formerly Luminati)

Used to scrape and extract job details from the LinkedIn job link

⚠️ Setup requires moderate technical familiarity with APIs and OAuth. A step-by-step configuration guide is recommended for beginners.

## 🔗 Nodes Used

Google Sheets, Execute Sub-workflow, Google Docs, AI Agent, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
