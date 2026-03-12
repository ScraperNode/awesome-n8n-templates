# 🎣 Automate personalized cold emails with Apollo lead scraping and GPT-4.1

> ⚡ **1,766 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How This Works
-
This automation automatically scrapes leads from Apollo using the Apify scraper, filters out those who do not have an Email or URL included, scrapes the leads' website content and writes personalised Icebreakers and subject lines based on the website's content.

Set Up (Step-by-Step)
-
- Connect the API keys from the Apify scraper mentioned in the workflow sticky note.
- Insert Apollo URL and the amount of leads you want to scrape.
- Connect your Slack account (if needed)

Reach Out To Me
-
Send me an Email if you need further assistance: richard@advetica-systems.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
