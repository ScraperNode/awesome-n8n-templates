# 🎣 Automate lead enrichment with web scraping, GPT-4o, Airtable and Slack notifications

> ⚡ **413 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI Lead Enrichment & Notification System

### This n8n template automates the lead enrichment process for your business. Once a lead fills out a form, the workflow scrapes their website, provides a summary of their business, and logs everything into a CRM before notifying your team on Slack.

**Some use cases:** "Speed-to-Lead" optimization, lead enrichment, automated prospect research.

### How it works
1. **Ingestion:** A lead submits their details (Name, Email, Website) via a form.
2. **Intelligent scraping:** The workflow scrapes the provided URL.
3. **AI Analysis:** OpenAI's model (GPT-4o) analyzes the extracted data and determines whether there is enough info or if the workflow needs to scrape the "About Us" page.
4. **CRM Sync:** The CRM (Airtable) is updated with the enriched data.
5. **Notification:** An instant Slack notification is sent to the team channel.

### How to use the workflow
1. **Configure the form:** Open the trigger form and input the required fields.
2. **Setup OpenAI:** Ensure that your credentials are connected.
3. **Database mapping:** Ensure your Airtable base has the following columns: *Name*, *Website*, *AI Insight*, *Email*, and *Date*.
4. **Slack setup:** Specify the desired Slack channel for notifications.
5. **Test it out!** Open the form, enter sample data (with a real website), and watch the system enrich the lead for you.

### Requirements
* **OpenAI API Key** (For analyzing website content and generating summaries)
* **Airtable** (For CRM and logging)
* **Slack** (For team notifications)

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
