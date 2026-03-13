# 🎣 Generate personalized cold email icebreakers with GPT-4 from Google Sheets to instantly

> ⚡ **180 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Overview:
This workflow automates the full pipeline of preparing scraped leads and loading them into an Instantly campaign for cold outreach.It begins by pulling rows from a Google Sheet that contains lead data sourced from your scraper or enrichment tools. Each row is checked for required fields first name, last name, summary, and email.

 The workflow also validates the email format to ensure only usable contacts continue through the system.

For every lead that passes the filter, the workflow uses OpenAI to clean and standardize the contact’s name and then generates a personalized icebreaker. 

Use Cases:
If your running an instantly campaign for cold email outreach this tool can gernerate personaizled ice breakers 
Prerequiste:To have instantly campaign along with instantly API
google sheet API
Also a Telegram api (optional)

Extra Info:
The icebreaker is crafted using the lead’s summary, company information, job history, achievements, or any contextual details your sheet provides. This personalization step is heavily dependent on the quality and freshness of your scraped data.

The workflow appends the lead into a selected Instantly campaign, storing the icebreaker as a custom variable so it can be inserted directly into your outreach sequence. After all leads have been processed and uploaded, the workflow sends a Telegram notification confirming completion. This gives you fast visibility and ensures you always know when a new batch has successfully synced into Instantly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
