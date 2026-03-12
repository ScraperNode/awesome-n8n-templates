# 🎣 Scrape LinkedIn B2B leads with Apify and GPT-4 and approve emails in Sheets

> ⚡ **150 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## What this workflow does

Fully production-ready B2B lead outreach pipeline that:

1. Takes industry keywords from a form trigger (or you can manually add rows to Google Sheets)
2. Scrapes targeted LinkedIn leads using Apify (peakydev~leads-scraper-ppe actor)
3. Filters for valid emails
4. Automatically creates company + contact records in **HubSpot CRM**
5. Generates highly personalized, non-salesy cold emails using GPT (tailored to the company’s industry)
6. Logs every lead to Google Sheets with "Pending" status
7. Waits for **human approval or rejection** — triggered **directly from Google Sheets** via two webhooks:
   - **Approve** (via button/script in sheet) → sends the email via Gmail
   - **Reject** (via button/script in sheet) → automatically rewrites a softer, more value-focused version with a different angle → updates the same row in the sheet

## Why this is useful

Most outreach automations send emails blindly.  
This one gives you **full control with a human-in-the-loop layer inside Google Sheets** + **automatic intelligent rewrite on rejection** — which greatly improves reply rates, reduces spam complaints, and protects your sender reputation.

Ideal if you:
- Run outbound campaigns at reasonable scale
- Already live in Google Sheets for lead review
- Want clean HubSpot CRM records before sending anything
- Need traceable approval (who approved what, when)
- Often hear “too salesy” and want the AI to adapt automatically

## How to use

1. Import the workflow into n8n
2. Connect the required credentials:
   - Apify API token
   - HubSpot App Token (Private App)
   - Gmail OAuth2
   - Google Sheets OAuth2
   - OpenAI API key
3. Replace placeholders:
   - Your Google Sheet ID in the “Leads Log” node
   - Your name & signature in the AI prompts
   - Any test email addresses if needed
4. Activate the main **Form Trigger** (`Lead Campaign Setup`) to start campaigns
5. **Review & act from Google Sheets**:
   - Leads appear in your sheet with "Pending" status
   - Use simple buttons or a dropdown + Apps Script (code examples provided in workflow sticky notes) to trigger:
     - Approve → POST to `/webhook/approved`
     - Reject → POST to `/webhook/rejected`
## Required credentials

- Apify
- HubSpot (App Token)
- Gmail OAuth2
- Google Sheets OAuth2
- OpenAI

Once set up, you get a beautiful hybrid system: generate leads automatically → review & decide in familiar Google Sheets → one-click action → n8n handles sending or smart rewriting.

Enjoy — and feel free to share your reply rates or any tweaks you make after running a few campaigns! 🪄

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, HubSpot, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
