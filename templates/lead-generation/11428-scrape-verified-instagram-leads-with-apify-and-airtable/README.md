# 🎣 Scrape verified Instagram leads with Apify and Airtable

> ⚡ **127 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

🚀 Instagram Leads Scraper (Perfect for Cold Outreach)

This workflow automates Instagram lead generation by scraping targeted Instagram profiles based on a niche + location query (example: “dentist in New York”). It uses Apify’s Scraper to find relevant Instagram pages, extracts public emails from the results, validates emails using an Email Verification API, and stores only verified leads into Airtable.

The final output is a clean lead sheet you can instantly use for cold outreach, CRM imports, or agency prospecting.

✅ **How it works**

- You click Execute Workflow and enter a niche + location query (example: dentist in New York).
- The workflow triggers Apify Google Search Scraper to search for Instagram profiles matching your query.
- Results are processed and split into individual lead items.
- Emails are extracted and filtered (Gmail).
- Each email is checked using an Email Verification API to confirm email is valid or not.
- Only valid emails are saved into Airtable via an upsert, so duplicates are avoided.

🎯 **Use cases**

- 📣 Agencies targeting local businesses (dentists, gyms, salons, cafes, realtors, etc.)
- 🧑‍💻 Freelancers offering web development, SEO, ads, branding
- 🏢 B2B service providers building niche prospect lists
- 🚀 Startups validating markets quickly
- 📩 Anyone doing cold outreach and needing verified emails

🌟 **Why this workflow is valuable**

This workflow replaces hours of manual searching and copy-pasting with a fully automated lead pipeline. Instead of collecting random leads, you can generate highly targeted lists based on niche + city — with email verification included to improve deliverability and response rates.

🛠 **Setup instructions**

1. Import the workflow JSON into your n8n instance.
2. Create an Apify account and open Google Search Scraper actor.
3. Copy the API endpoint Run actor synchronously and get dataset items.
4. Paste the endpoint into the Scraping Data node and add your Apify token.

5. Create an Airtable base/table with these fields:  
-  Username, Contact Details, URL, Followers, Email Verifier 
6. You can also clone Airtable Sheet here: [Sheet Link](https://airtable.com/appOfLatszE9cHYw3/shrbctCMIY7tOdv15)
7. Connect your Airtable credentials in the Airtable DB node.
8. Execute the workflow, enter your query, and leads will appear in Airtable ✅

⚡ **Notes**

- This workflow is designed for speed + accuracy (email verification prevents junk leads).
- Airtable storage uses upsert, so running it multiple times won’t spam duplicates.
- You can change the query structure inside the Apify node to target different platforms or keywords.

Thanks for using this Workflow!
MSiddhant

## 🔗 Nodes Used

Airtable, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
