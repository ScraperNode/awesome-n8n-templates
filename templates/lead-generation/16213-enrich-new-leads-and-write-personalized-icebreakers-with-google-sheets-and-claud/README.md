# 🎣 Enrich new leads and write personalized icebreakers with Google Sheets and Claude

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Sheets lead list, fetches each new lead’s website, extracts page text, and uses Anthropic Claude to generate a personalized cold-email icebreaker plus an ICP fit score and reasoning, then writes the results back to the same sheet.

## How it works
1. Triggers when a new row is added to the specified Google Sheets “Leads” worksheet.
2. Loads your ICP definition from a configuration step and reads the new row’s company and website fields.
3. Fetches the prospect’s website homepage via HTTP and extracts the visible text from the page body.
4. Sends the ICP definition, company details, and truncated website text to Anthropic Claude to generate a one-line icebreaker, a 0–100 fit score, and a short justification as structured JSON.
5. Updates the originating Google Sheets row (matched by row_number) with the icebreaker, icp_fit_score, and reasoning values.

## Setup
1. Add Google Sheets OAuth credentials and set the Google Sheet document ID and worksheet name used by the trigger and the update step.
2. Ensure your sheet includes columns named company, website, row_number, icebreaker, icp_fit_score, and reasoning.
3. Add an Anthropic API credential and select the Claude model you want to use.
4. Edit the ICP definition text in the configuration step to match your target customer profile.

## Additional info
Step-by-step guides:
- Google (Sheets) for n8n → https://winflowai.com/blog/get-google-api-key-n8n/
- Anthropic (Claude) API key → https://winflowai.com/blog/get-claude-api-key/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
