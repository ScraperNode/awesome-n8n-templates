# 🎣 LinkedIn lead finder & Gemini-powered personalized outreach with Google Sheets

> ⚡ **1,249 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📄 What this workflow does
This workflow automates the process of finding LinkedIn leads and writing personalized outreach messages. It takes user input (keywords + purpose), generates a Boolean LinkedIn search query with Gemini, fetches up to 20 results via Google Custom Search API, logs them into Google Sheets, and then drafts custom outreach messages for each lead. Finally, the workflow updates the sheet and optionally sends you an email notification with the results.

## 👤 Who is this for
- Sales and business development teams who want to automate LinkedIn prospecting.
- Recruiters searching for candidates and generating outreach at scale.
- Marketers or founders looking for potential partners, clients, or collaborators.
- Anyone tired of manual LinkedIn searches and copy-pasting outreach messages.

## ✅ Requirements
- Google Sheets account (with a sheet for storing LinkedIn leads + messages).
- Google Custom Search Engine (CSE) enabled with "Search the entire web" and valid cx.
- Gemini API access (for Boolean query generation + outreach message drafting).
- SMTP credentials for optional email notifications.

## ⚙️ How to set up
- Connect your Google Sheets account and select the sheet to store results.
- Configure Gemini API credentials in n8n for both search query + outreach message generation.
- Create a Google Custom Search Engine and note down the key and cx.
- Update the HTTP Request node with your credentials (key, cx, hl, gl).
- Set up SMTP credentials if you want email notifications.
- Publish the Form trigger and test with sample keywords + purposes.

## 🔁 How it works
1. Form Submit → Collects user input: keywords + purpose of contact.
2. Gemini (Boolean Generator) → Creates a LinkedIn-specific search query (site:linkedin.com).
3. Google Custom Search API → Fetches up to 20 matching profiles or company pages.
4. Append to Google Sheets → Saves name, LinkedIn URL, description.
5. Split & Loop → Processes each LinkedIn entry one by one.
6. Gemini (Message Writer) → Generates personalized outreach messages using Purpose + company info.
7. Update Google Sheets → Adds outreach message to the matching LinkedIn row.
8. Optional Email Notification → Sends you a link to the updated sheet.

## 💡 About Margin AI

[Margin AI](https://marginai.co/) is an AI-services agency that acts as your AI Service Companion. We design intelligent, human-centric automation solutions—turning your team’s best practices into scalable, automated workflows and tools. Industries like marketing, sales, and operations benefit from our tailored AI consulting, automation tools, chatbot development, and more.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
