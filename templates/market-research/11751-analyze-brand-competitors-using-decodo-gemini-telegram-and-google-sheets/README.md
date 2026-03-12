# 📊 Analyze brand competitors using Decodo, Gemini, Telegram and Google Sheets

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

## Description

## Analyze brand competitors using Decodo, Gemini, Telegram, and Google Sheets

[Sign up for Decodo — get better pricing here](https://visit.decodo.com/MA90zY)

## Who’s it for
This workflow is built for content researchers, SEO teams, marketers, educators, and analysts who want to discover and analyze Brand competitor content at scale.

It’s especially useful if you need structured insights from pages based on a search query, without manually opening or reviewing each result.


## How it works / What it does
This workflow turns a simple keyword into structured, actionable insights.

It starts when a user submits a query through a form. Decodo is used as the core technology to perform a Google search and return relevant organic results.

Decodo retrieves the page content, which is cleaned and converted into plain text. An AI agent powered by Gemini analyzes the content to generate clear key points and key takeaways.

The extracted insights, along with the source title and link, are saved to Google Sheets for easy review and analysis. A short summary is also sent to Telegram, making it easy to monitor results in real time.

## How to set up
1. Add your Decodo API credentials.
2. Connect your Google Gemini API credentials.
3. Connect Google Sheets OAuth.
4. Update the target Google Sheet and worksheet.
5. Submit a keyword to start the analysis.

## Requirements
- Decodo API account  
- Google Gemini API credentials  
- Google Sheets OAuth credentials  
- n8n self-hosted instance

&gt; This workflow uses Decodo community nodes and is intended for self-hosted n8n environments.

## How to customize the workflow
- Change the Decodo search query to target different topics or niches.
- Limit or batch results by adjusting the split and loop logic.
- Modify the AI prompt to extract different insights.
- Replace Google Sheets with another database or workspace tool.
- Add filters, alerts, or scoring logic for advanced analysis.

## 🔗 Nodes Used

Google Sheets, Telegram, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
