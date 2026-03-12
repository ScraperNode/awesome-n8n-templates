# 🎣 Lead generation automate on LinkedIn - personalisation, enrichment

> ⚡ **16,969 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# **🔧 Workflow Summary**

This system automates LinkedIn lead generation and enrichment in six clear stages:

**1. Lead Collection (via Apollo.io)**
- Automatically pulls leads based on keywords, roles, or industries using Apollo’s API.
- Captures name, job title, company, and LinkedIn profile URL.
- You can kick off the workflow via form, webhook, WhatsApp, Telegram, or any other custom trigger that passes search parameters.

**2. LinkedIn Username Extraction**
- Extracts usernames from LinkedIn profile URLs using a script step.
- These usernames are required for further enrichment using [RapidAPI](RapidAPI).

**3. Email Retrieval (via Apollo.io User ID)**
- Fetches verified work email using the Apollo User ID.
- Email validity is double-checked using [www.mails.so](www) filtering out undeliverable or inactive emails by checking MX records and deliverability.

**4. Profile Summary (via LinkedIn API on RapidAPI)**
- Enriches lead data by pulling bio/summary details to understand their background and expertise.

**5. Activity Insights (Posts & Reposts)**
- Collects recent posts or reposts to help craft personalised messages based on what they’re currently engaging with.

**6. Leads Sheet Update**
- All data is written into a Google Sheet.
- New columns are populated dynamically without erasing existing data.

⸻

## ✅ Smart Retry Logic

Each workflow is equipped with a fail-safe system:
- Tracks status per row: ✅ done, ❌ failed, ⏳ pending
- Failed rows are automatically retried after a custom delay (e.g., 2 weeks).
- Ensures minimal drop-offs and complete data coverage.



## 📊 Google Sheets Setup

Make a copy of the following:
- Template 1: [Apollo Leads Scraper & Enrichment](sd)
- Template 2: [Final Enriched Leads](link) 

The system appends data (like emails, bios, activity) step by step.




## 🔐 API Credentials Needed

**1. Apollo API**
- Sign up and generate API key at [Apollo Developer Portal](Apollo Developer Portal)
- Be sure to enable the “Master API Key” toggle so the same key works for all endpoints.

**2. LinkedIn Data API (via RapidAPI)**
- Subscribe at [RapidAPI - LinkedIn Data](link)
- Use your key in the `x-rapidapi-key`
 header.

**3. Mails.so API**
- Get [your API Key](link) from mails.so dashboard

## 🛠️ Troubleshooting – LinkedIn Lead Machine

**✅ Common Mistakes & Fixes**

**1. API Keys Not Working**
- Make sure API keys for Apollo, RapidAPI, and mails.so are correct.
- Apollo “Master API Key” must be enabled.
- Keys should be saved as Generic Credentials in n8n.

**2. Leads Not Found**
- Check if the search query (keyword/job title) is too narrow.
- Apollo might return empty results if the filters are incorrect.

**3. LinkedIn URLs Missing or Invalid**
- Ensure Apollo is returning valid LinkedIn URLs.
- Improper URLs will cause username extraction and enrichment steps to fail.

**4. Emails Not Coming Through**
- Apollo may not have verified emails for all leads.
- mails.so might reject invalid or expired email addresses.

**5. Google Sheet Not Updating**
- Make sure the Google Sheet is shared with the right Google account (linked to n8n).
- Check if the column names match and data isn’t blocked due to formatting.

**6. Status Columns Not Changing**
- Each row must have done, failed, or pending in the status column.
- If the status doesn’t update, the retry logic won’t trigger.

**7. RapidAPI Not Returning Data**
- Double-check if username is present and valid.
- Make sure the RapidAPI plan is active and within limits.

**8. Workflow Not Running**
- Check if the trigger node (form, webhook, etc.) is connected and active.
- Make sure you’re passing the required inputs (keyword, role, etc.).

------------

Need Help? Contact [www.KrupalPatel.com](KrupalPatel.com) for support and custom workflow development

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Google Sheets Trigger, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
