# 👥 Create tailored resumes from job postings with OpenRouter, Notion, and Google Drive

> ⚡ **69 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a job-posting URL or pasted job description, validates it with an OpenRouter model, generates an evidence-based tailored resume using Notion data, and saves the result as a Google Doc and matching PDF in Google Drive before confirming completion back in the n8n form.

## How it works
1. Receives a submission from an n8n Form that includes a job-posting URL and/or pasted job-posting text.
2. If only a URL is provided, scrapes the job listing with Firecrawl, then normalizes and cleans the content into a single job description payload.
3. Uses an OpenRouter chat model to validate that the content is a complete, genuine job posting and returns a clear form error message if validation fails or content is missing.
4. When validation succeeds, uses OpenRouter plus Notion databases (experience, skills, credentials, and optionally projects) to generate an ATS-friendly tailored resume in Markdown.
5. Creates a company-named folder in Google Drive, uploads the resume as an editable Google Doc, and applies Google Docs margin settings via the Google Docs API.
6. Exports the Google Doc to PDF, uploads the PDF to the same Google Drive folder, and returns a success message in the form.

## Setup
1. Add an OpenRouter API credential and select the model you want to use for both job-post validation and resume generation.
2. Add a Notion API credential, grant it access to your Notion data sources, and fill in the four Notion database data source IDs in the “EDIT ME - Template Setup” node.
3. Add a Firecrawl API credential as an HTTP Header Auth credential and connect it to the job-scraping request.
4. Add a Google Drive OAuth2 credential with permission to create files and folders, and set the target Google Drive parent folder ID (or keep `root`) in “EDIT ME - Template Setup.”
5. Update the contact details in “EDIT ME - Candidate Profile” so the resume header uses your real name and links.

## Requirements
- Notion Database Pages
- Notion API Key
- Firecrawl API Key
- Openrouter API Key
- Google Drive OAuth2 Credentials

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Basic LLM Chain, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
