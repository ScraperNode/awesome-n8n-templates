# 🎣 Extract business leads from Reddit using GPT-4.1-mini analysis and Google Sheets

> ⚡ **2,827 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates lead generation by searching Reddit for relevant posts based on keywords, filtering them, using OpenRouter AI to analyze and summarize content, and logging the findings (link, summary, etc.) to Google Sheets.

Watch the full setup tutorial on how I setup this ETL pipeline using n8n: 
https://youtu.be/F3-fbU3UmYQ

Required Authentication:

To run this workflow, you need to set up credentials in n8n for:

1. Reddit: Uses OAuth 2.0. *Requires creating an app on Reddit* to get a Client ID & Secret. (YT Tutorial for Reddit App Creation: https://youtu.be/zlGXtW4LAK8) 
2. OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial : https://youtu.be/Cq5Y3zpEhlc)
3. Google Sheets: Uses OAuth 2.0. Requires setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.

Ensure these credentials are created and selected in the respective n8n nodes (Get Posts, OpenRouter Chat Model nodes, Output The Results).

## 🔗 Nodes Used

Google Sheets, Reddit, Summarization Chain, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
