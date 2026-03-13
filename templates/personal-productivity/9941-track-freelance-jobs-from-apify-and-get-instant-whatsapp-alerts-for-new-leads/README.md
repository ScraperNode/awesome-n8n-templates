# ⚡ Track freelance jobs from Apify and get instant WhatsApp alerts for new leads

> ⚡ **177 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

![Screenshot 20251024 210656.png](fileId:3107)

Automatically track new freelance job postings from any platform using **Apify Actors**, process the results, and get **real-time WhatsApp alerts** for new opportunities.  
This workflow saves jobs to Google Sheets for record-keeping and sends instant notifications so you never miss a client lead.

---

## Who’s it for
Freelancers, agencies, and business developers who want to monitor platforms like **Upwork, Fiverr, or Freelancer** for new jobs — without checking manually.

---

## How it works
1. The workflow starts when a **chat message** or trigger event is received.  
2. It runs an **Apify Actor** to scrape job listings from your target platform.  
3. The **dataset results** are fetched via Apify’s API.  
4. A **JavaScript Code node** processes and filters the results for relevant jobs.  
5. The data is saved to **Google Sheets** for tracking and reporting.  
6. A formatted job summary is created and sent as a **WhatsApp message** directly to your phone.

---

## How to set up
1. Create or use an **Apify Actor** for scraping job listings from your chosen site.  
2. Connect your **Apify API token** in n8n under credentials.  
3. Link your **Google Sheets** account and specify the sheet for storing job data.  
4. Add your **WhatsApp Cloud API** or **Twilio WhatsApp** credentials.  
5. Test the workflow by sending a trigger message — new jobs will be fetched, stored, and sent to WhatsApp.

---

## Requirements
- Apify account with API access  
- Google Sheets integration  
- WhatsApp Cloud API or Twilio account  
- n8n Cloud or self-hosted instance  

---

## How to customize
- 🧩 **Add filters:** Include keyword or budget filters in the JavaScript node.  
- 🔄 **Schedule runs:** Replace the chat trigger with a **Cron node** for hourly or daily tracking.  
- 📊 **Change destination:** Save results to Notion, Airtable, or Slack instead of Google Sheets.  
- 🗣️ **Multi-channel alerts:** Send updates to Discord, Telegram, or Email as well.

---

**Stay ahead of freelance opportunities — this n8n workflow finds jobs, logs them, and alerts you instantly via WhatsApp.**

## 🔗 Nodes Used

Google Sheets, WhatsApp Business Cloud, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
