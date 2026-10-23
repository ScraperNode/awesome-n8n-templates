# 📊 Audit landing page CRO and log results with OpenAI and Data Tables

> ⚡ **73 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a landing page URL, scrapes its HTML, and uses OpenAI to generate a structured conversion-rate-optimization (CRO) audit with scores and prioritized tips, then renders a styled report in the browser and logs each audit to an n8n Data Table.

## How it works
1. Presents an n8n Form where the user submits a landing page URL.
2. Fetches the landing page HTML via an HTTP request with retries, and routes to an error page if the URL can’t be retrieved.
3. Sends the scraped HTML and URL to OpenAI to produce a CRO audit including an overall score, category scores, a written roast, and a ranked list of optimization tips.
4. Uses a structured output parser with an OpenAI “fixer” model to validate and auto-correct the AI response into the required JSON schema.
5. Builds a styled HTML report from the structured audit results.
6. Logs the audit metadata (URL, score, verdict, summary, language, timestamp) to an n8n Data Table and displays the report back in the user’s browser.

## Setup
1. Add an OpenAI API credential and select it for both the main OpenAI model and the output-fixer model.
2. Create or select an n8n Data Table (for example, “CRO Audit Log”) and map the columns used for url, cro_score, verdict, summary, language, and analyzed_at.
3. Update the default settings in the Configuration step as needed (model names, number of tips, and output language) before activating the workflow.

## Additional info
# Analyze landing page with OpenAI and get optimization tips to convert

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Analyze-landing-page-with-OpenAI-and-get-optimization-tips-to-convert-39a3d6550fd98176a28fc776afad7fae)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
