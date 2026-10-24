# 🎣 Scrape B2B leads from Apollo, generate Groq AI emails, and send via Gmail

> ⚡ **649 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n workflow automates your entire B2B outreach pipeline from lead discovery to personalized cold email delivery. Submit a form, let Apollo find and enrich your leads, review AI-generated emails in your sheet and send them all with one click.

## How it works

- **Form Trigger** accepts Job Title, Location and Number of Leads to kick off the workflow
- **Apollo** searches for matching people and enriches each lead with email, phone, LinkedIn URL and company data
- **Duplicate check** runs automatically to skip any leads already in your sheet
- **Leads are saved** to Google Sheet with outreach status set to Pending
- **Manual Trigger** runs the email generation section using Groq LLM to write a personalized cold email per lead
- **Generated emails** are saved to the sheet for review before sending
- **Gmail** sends each email and updates the outreach status to Mail Sent

## How to use

- Run **Trigger 1 — Form** to scrape and enrich leads from Apollo
- Review leads in your **Google Sheet**
- Run **Trigger 2 — Manual** to generate and send cold emails
- Update the **AI Cold Email Writer** node with your company details before running

## Requirements

- **Apollo** account with API Key
- **Google Sheets** account
- **Groq** account with API Key
- **Gmail** account

## Customising this workflow

- Replace **Groq** with OpenAI or any other LLM for email generation
- Extend with a **follow-up sequence** to re-engage leads who did not reply

![Screenshot 20260318 at 4.12.45 PM.png](fileId:4943)

![Screenshot 20260318 at 4.14.38 PM.png](fileId:4946)

![Screenshot 20260318 at 4.15.14 PM.png](fileId:4947)

![Screenshot 20260318 at 4.13.39 PM.png](fileId:4944)

![Screenshot 20260318 at 4.14.06 PM.png](fileId:4945)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
