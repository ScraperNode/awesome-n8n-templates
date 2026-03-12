# 🎣 Automated B2B prospecting with RapidAPI, Hunter.io, GPT & Gmail

> ⚡ **1,339 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Automate your B2B prospecting by finding local businesses and sending AI-personalized outreach emails to qualified contacts.

What This Workflow Does
This workflow acts as a powerful AI Sales Assistant, automating your entire B2B lead generation process for local businesses. It saves you countless hours of manual research and outreach by intelligently finding prospects, enriching their data, and drafting personalized emails tailored to their specific business. Stop prospecting manually and start scaling your outreach efforts effectively.

How It Works
The process is designed to be both smart and efficient:

Find Businesses: It starts by searching for local businesses based on your criteria (e.g., "engineering in London").

Qualify & Enrich: It filters out businesses without a website. For the valid ones, it scrapes the website's title and description to understand what they do.

Identify Contacts: Using Hunter.io, it finds professional email contacts associated with the company and verifies their validity to ensure high-quality leads.

Generate AI-Personalized Emails: For each valid contact, it uses OpenAI to write a unique, short, and professional outreach email. The AI uses the scraped website information to create a personalized hook, showing you've done your research.

Send & Organize: The final email is sent automatically via your Gmail account. If a business has no website, a follow-up task is created in your Google Tasks for manual review.

Key Benefits
Save Time: Automate a time-consuming prospecting process from start to finish.

Increase Reply Rates: Engage prospects with personalized emails, not generic templates.

Scale Your Outreach: Generate and contact dozens of qualified leads effortlessly.

Stay Organized: Never lose a lead, thanks to the integrated task management for manual follow-ups.

## 🔗 Nodes Used

HTTP Request, Hunter, Google Tasks, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
