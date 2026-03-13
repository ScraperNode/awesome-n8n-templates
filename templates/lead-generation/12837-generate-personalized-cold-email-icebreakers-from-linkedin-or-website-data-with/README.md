# 🎣 Generate personalized cold email icebreakers from LinkedIn or website data with GPT-4

> ⚡ **70 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Multi-Channel Cold Email Generator (LinkedIn + Website Fallback)

## Description
This workflow automates the generation of hyper-personalized cold emails. It intelligently switches between two data sources: **LinkedIn Activity** and **Company Website**.

If the lead has recent LinkedIn posts, the AI generates an icebreaker referencing their specific thoughts or news. If no posts are found, the workflow falls back to scraping their company website and generating an angle based on their business proposition.

## How it Works
1. **Fetch Data:** Pulls a list of leads from a Google Sheet.
2. **Scrape LinkedIn:** Uses Apify to attempt to scrape recent posts for the lead.
3. **Conditional Logic:**
   - **Path A (Posts Found):** Aggregates the posts, analyzes the context using GPT-4, and writes an email referencing the content.
   - **Path B (No Posts):** Scrapes the URL provided in `companyWebsite`, converts the HTML to Markdown, analyzes the company value prop, and writes an email based on that.
4. **Save Results:** Writes the generated `Icebreaker`, `Intro`, and `CompanyType` back to the original Google Sheet.

## Requirements
- **n8n:** Self-hosted or Cloud.
- **Google Sheets Account:** A sheet containing columns for `email_final`, `linkedin_url`, and `companyWebsite`.
- **Apify Account:** You must have the LinkedIn Scraper actor (ID: `A3cAPGpwBEG8RJwse` or similar) configured and an API Token.
- **OpenAI API Key:** Access to GPT-4 model is recommended for best quality.

## Setup Instructions
1. **Import the JSON:** Copy the provided JSON template and paste it into your n8n canvas.
2. **Configure Credentials:**
   - Set up your **Google Sheets** and **OpenAI** credentials in n8n.
3. **Apify Token:**
   - Locate the **Apify LinkedIn Scraper** node (HTTP Request).
   - In `Header Parameters` &gt; `Authorization`, replace `YOUR_APIFY_API_TOKEN` with your actual Apify Bearer token.
4. **Google Sheet Configuration:**
   - Open the **Fetch Leads** node. Select your generic Sheet and specific Workbook.
   - Open both **Update Row** nodes (there are two: one for the Website branch, one for the LinkedIn branch) and ensure they point to the same Sheet/Workbook.
5. **Customize AI Prompts:**
   - Open the two **Write Email Copy** nodes.
   - In the system prompt, look for `[YOUR_BUSINESS_TYPE]` and `[YOUR_COMPANY_NAME]`. Replace these with your actual business details to ensure the AI generates relevant outreach.

## Customization
- **Model Selection:** You can switch the OpenAI model to `gpt-3.5-turbo` to save costs, though the quality of the "Icebreakers" may decrease.
- **Output Columns:** The workflow currently outputs `Icebreaker`, `intro`, and `companyType`. You can modify the **Update Row** nodes to map these to different column headers in your sheet if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
