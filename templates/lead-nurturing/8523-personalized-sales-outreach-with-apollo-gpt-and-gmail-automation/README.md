# 💬 Personalized sales outreach with Apollo, GPT, and Gmail automation

> ⚡ **592 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template shows you how to turn outbound sales into a fully automated machine: scrape verified leads, research them with AI, and fire off personalized cold emails while you sleep.

Use cases are simple: scale B2B lead gen without hiring more SDRs, run targeted outreach campaigns that don’t feel generic, and give founders or agencies a repeatable system that books more calls with less effort.

**Good to know**
- At time of writing, each AI call may incur costs depending on your OpenAI plan.
- This workflow uses Apollo/Apify for lead scraping, which requires an active token.
- Telegram approval flow is optional but recommended for quality control.

**How it works**
- Define your ICP (role, location, industry) in the workflow.
- Generate Apollo search URLs and scrape verified contacts.
- AI enriches leads with personal + company research.
- Hormozi-style cold emails are generated and queued for approval.
- Approve drafts in Telegram, then Gmail automatically sends them out.

**How to use**
- Start with the included Schedule Trigger or replace with a Webhook/Form trigger.
- Adjust ICP settings in the Set node to fit your target audience.
- Test with a small batch of leads before scaling to larger runs.

**Requirements**
- Google Sheets, Docs, Drive, and Gmail connected to n8n
- Apollo/Apify account and token
- OpenAI API key
- Telegram bot for approvals

**Customising this workflow**
- Swap Apollo scraping with another data source if needed.
- Adapt the AI prompt for a different email tone (formal, friendly, etc.).
- Extend with a CRM integration to sync approved leads and outreach results.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
