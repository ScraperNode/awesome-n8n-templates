# 📊 Audit landing page conversion with OpenAI vision, Gmail, and Google Sheets

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a landing page URL via an n8n form, scrapes the page HTML and captures a screenshot, then uses OpenAI vision and an OpenAI agent to generate a scored CRO audit with recommendations, logs each audit to Google Sheets, and optionally emails the formatted report via Gmail.

## How it works
1. Receives a landing page URL (and optional recipient email) from an n8n Form trigger.
2. Fetches the landing page HTML and captures a live screenshot using the thum.io screenshot URL.
3. Uses OpenAI vision to describe conversion-relevant visual elements from the screenshot (hierarchy, CTA prominence, trust signals, clutter, and mobile cues).
4. Sends the truncated HTML plus the visual analysis to an OpenAI agent to produce a structured CRO audit with category scores, a Markdown “roast,” and a set number of specific recommendations.
5. Formats the audit into a Markdown report, converts it to HTML, and appends the key fields to a Google Sheets audit log.
6. If email sending is enabled and an email address was provided, sends the HTML report to the recipient via Gmail.

## Setup
1. Add an OpenAI API credential with access to a vision-capable model and select it for both the vision analysis and the agent’s chat model.
2. Connect Google Sheets OAuth credentials, then choose the target spreadsheet and sheet tab where audits are appended.
3. Connect Gmail OAuth2 credentials and confirm the workflow is allowed to send emails from your Gmail account.
4. In the configuration values, set the OpenAI model, screenshot width, number of recommendations, and whether email reporting is enabled.
5. Activate the workflow and share the form’s production URL so users can submit landing page audits.

## Additional info
# Audit landing pages for conversion issues with AI vision and email the CRO report
# 📥   [Open full documentation on Notion](https://automatisation.notion.site/Course-Audit-landing-pages-for-conversion-issues-with-AI-vision-and-email-the-CRO-report-3a43d6550fd98188b0adf3049ee1fd11)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Markdown, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
