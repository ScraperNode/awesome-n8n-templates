# 👥 LinkedIn profile extract and build JSON resume with Bright Data & Google Gemini

> ⚡ **6,724 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who this is for?

The LinkedIn Profile Extract and JSON Resume Builder is a powerful workflow that scrapes professional profile data from LinkedIn using Bright Data's infrastructure, then transforms that data into a clean, structured JSON resume using Google Gemini. The workflow is ideal for automating resume parsing, candidate profiling, or integrating into recruiting platforms.

This workflow is tailored for:

- HR professionals & recruiters automating resume screening

- Talent acquisition platforms enriching candidate profiles

- Developers & AI builders creating resume-parsing AI pipelines

- Data scientists working on labor market analytics

- Growth hackers profiling prospects via public data

### What problem is this workflow solving?

Parsing resumes or LinkedIn profiles into machine-readable formats is often a manual, error-prone process. Most scraping tools either fail due to anti-bot protections or return unstructured HTML that's hard to work with.

This workflow solves that by:

- Using Bright Data's Web Unlocker for reliable, CAPTCHA-free LinkedIn scraping

- Extracting clean text and structured profile data via Google Gemini LLM

- Automatically generating a standards-compliant JSON Resume and Skills

- Sending the resume to webhooks or storing it for downstream usage

### What this workflow does

- Accepts LinkedIn Profile URL and required metadata (Bright Data zone, webhook)

- Scrapes LinkedIn profile using Bright Data Web Unlocker

- Extracts clean content and skills using Google Gemini LLM

- Builds a JSON-formatted resume following the JSON resume schema

- Sends the JSON resume via Webhook Notification

- Persists the output by saving the file to disk

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1438)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, configure the Google Gemini(PaLM) Api account with the Google Gemini API key (or access through Vertex AI or proxy).
- Update the **Set URL and Bright Data Zone** node with the LinkedIn profile, Bright Data Zone and the Webhook notification URL. For testing purposes, you can obtain a webhook url using https://webhook.site/

### How to customize this workflow to your needs

**Add Language Translation**

Insert a translation LLM node to support multilingual profiles.

**Generate PDF Resumes**

Convert JSON to formatted PDF resumes using an HTML-to-PDF module.

**Push to ATS or CRM**

Add integration nodes to pipe data into applicant tracking systems (ATS), CRMs, or databases.

**Use Alternative LLMs**

Swap Gemini with OpenAI or Anthropic Claude if preferred.

## 🔗 Nodes Used

Function, HTTP Request, Basic LLM Chain, Read/Write Files from Disk, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
