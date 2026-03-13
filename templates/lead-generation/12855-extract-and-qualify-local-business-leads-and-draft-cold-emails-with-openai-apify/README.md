# 🎣 Extract and qualify local business leads and draft cold emails with OpenAI, Apify and Hunter

> ⚡ **96 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI-Powered Business Lead Scraping, Qualification & Outreach System

## Description
**Search → Scrape → Qualify → CRM → Email Draft Automation**

**Categories:** Lead Generation, Sales Automation, AI Enrichment, Revenue Ops

---

This workflow automatically finds local businesses, extracts real contact details from their websites, qualifies them, and writes everything into a CRM — with personalized cold email drafts ready to send.

It’s designed to remove the manual grind from lead sourcing and first-touch outreach.

**Search → leads → context → drafts → done.**

---

## What This Workflow Does

This automation takes raw local business results and turns them into usable, qualified leads:

- Pulls local business websites from a search dataset  
- Scrapes each site for real contact information  
- Normalizes emails, phones, names, and addresses  
- Qualifies leads based on reachability and ops signals  
- Writes clean, deduplicated records into a CRM  
- Generates human-sounding cold email drafts  

No copying websites. No guessing emails. No messy spreadsheets.

---

## Why This Exists

Most lead gen systems fail before outreach even starts.

They rely on:
- Shallow scraped data  
- Guessy enrichment  
- Low-quality lists  
- Manual cleanup  

This system fixes that by grounding everything in what actually exists on the business website, then using AI only where it makes sense.

**Human judgment at the edges. Automation in the middle.**

---

## How It Works (High Level)

### 1. Lead Source Ingestion (Apify Dataset)

The workflow starts with a dataset of local business search results.

This can be:
- Google search results  
- Industry-specific directories  
- Any Apify-powered source that includes URLs  

Batch size is intentionally limited for safety.

---

### 2. Website Scraping

Each business website is fetched and stripped down to raw text.

Failures are allowed — broken sites simply don’t qualify later.

The raw content becomes the single source of truth.

---

### 3. AI Contact Extraction & Normalization

AI parses the site content to extract:
- Emails and phones  
- Company name and address  
- Contact people and titles  
- Social links and contact pages  
- Context snippets for traceability  

Everything is normalized and returned as strict JSON.  
If something isn’t clearly present, it stays empty.

---

### 4. Lead Qualification

Leads are scored based on:
- Reachability (email + website)  
- Basic operational signals  
- Optional social presence  

Low-quality or unreachable leads are filtered out automatically.

---

### 5. CRM Write (Google Sheets)

Qualified leads are written into a lightweight CRM:

- Append-or-update by email  
- Safe to re-run  
- Easy to inspect and debug  

This sheet becomes the system of record.

---

### 6. Cold Email Draft Generation

For each qualified lead, AI generates a personalized cold email draft:

- Casual, human tone  
- Uses real site context  
- Stored as drafts only  
- Never auto-sent  

Perfect for review, sequencing, or export into an outreach tool.

---

## Tools Used

- **n8n** — workflow orchestration  
- **Apify** — lead sourcing  
- **OpenAI** — extraction, qualification, email drafting  
- **Google Sheets** — lightweight CRM  
- **Hunter** — email verification  
- **Tavily** — optional enrichment & validation  

---

## Who This Is For

- Automation and AI agencies  
- Consultants doing outbound  
- Freelancers selling repeatable services  
- Local-service lead gen operators  
- Anyone tired of low-quality scraped lists  

---

## Customization Notes

- Swap Google Sheets for Airtable, HubSpot, or Notion  
- Adjust qualification thresholds to control lead volume  
- Replace Apify source with any directory or search dataset  
- Plug drafts into any outbound sequencing tool  
- Extend metadata for analytics or CRM sync  

---

## Difficulty & Cost

**Difficulty:** Intermediate  
(Simple concept, careful execution)

**Estimated setup time:** 30–45 minutes  

**Ongoing cost:**  
OpenAI + Apify + verification APIs only

---

## Summary

This is not just a scraper.

It’s a **lead intelligence pipeline** that turns raw search results into real, usable outbound opportunities.

**Search → scrape → qualify → CRM → drafts**  
No guessing. No junk leads. No manual cleanup.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Hunter, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
