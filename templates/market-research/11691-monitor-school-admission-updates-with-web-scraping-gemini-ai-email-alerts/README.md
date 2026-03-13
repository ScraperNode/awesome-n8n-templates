# 📊 Monitor school admission updates with web scraping, Gemini AI & email alerts

> ⚡ **123 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This N8N template helps keep track of multiple school websites for admission updates and sends an email notification.

## Good To Know
This template uses all free tier tools like Gemini for LLM, Email alerting, 

## How it works
- For each School Website provided:
	- Get & clean the content through HTTP Request Node
	- Gemini model takes the HTML content and defined prompt that instructs on how to identify if Pre-nursery Admissions for year 2026-207 have announced yet.
	- If LLM response confirms the announcement, trigger an email to the configured address.

## Features
- Scheduled daily checks
- HTTP scraping
- Google Gemini text extraction for admission for Pre-nursery
- Email alerts

## How to use
1. Import workflow. 
2. Provide already created or new Gemini API key within "Are admissions open" node.
2. Setup SMTP account credentials within "Send Email" node, along with From-Email and To-Email.
3. Finally update your list of School and their Admission URLs within "Shortlisted Schools" node.

## Customizing the workflow
1. It can be used for tracking school admissions for any class including Pre-Nursery/ Bal-vatika/ 1st etc. via modifying the prompt.
2. It can be used for tracking any school that has details uploaded on their websites and can be extracted via HTTP request node.

## 🔗 Nodes Used

Cron, Send Email, HTTP Request, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
