# 🎣 AI-powered cold call machine with LinkedIn, OpenAI & Sales Navigator

> ⚡ **5,304 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🔧 AI-Powered Cold Call Machine

## 🎯 Purpose
The **AI-Powered Cold Call Machine** is a fully automated workflow designed to generate **qualified leads from LinkedIn**, evaluate them using **AI-based scoring**, identify key decision-makers, and generate **personalized cold call scripts**. All results are saved to a Google Sheet-based CRM.

---

## ⚙️ How It Works

### 1. **Initialization**
- Triggered either **manually** or via **schedule**.
- Pulls configuration from a Google Sheet’s **Settings** tab (e.g., target product, keywords, company size, API key).

### 2. **Company Search on LinkedIn**
- Uses the **Ghost Genius API** to search for companies based on cleaned, relevant keywords extracted by **OpenAI**.
- Handles pagination, up to **1000 companies per batch**.

### 3. **Company Filtering**
Each company goes through:
- Data enrichment via Ghost Genius (website, size, followers, etc.).
- Filtering:
  - Must have a **LinkedIn page with a website**.
  - Must have **200+ followers**.
- Deduplication: checks if the company already exists in the CRM.

### 4. **AI-Based Company Scoring**
- A specialized **AI model scores each company** from 0 to 10 based on:
  - Industry fit.
  - Size/location alignment.
  - Potential pain points that match your offering.
- If the company is **new and relevant (score ≥ 7)**, it is saved in the **Companies** sheet.

### 5. **Decision Maker Identification**
- Uses **Sales Navigator API** (via Ghost Genius) to find employees with targeted job titles.
- For each matching profile:
  - Enriches contact data (title, bio, etc.).
  - Retrieves phone number (if available).
  - Generates a **20-second personalized cold call script** using OpenAI, based on company and profile data.
  - Saves all information in the **Leads** tab of the CRM.

- If no decision maker is found, the company status is marked accordingly.

---

## 📈 Outcome
- A fully enriched, **qualified lead database**.
- **Custom cold call scripts** ready to be used by SDRs or founders.
- Zero manual work – from search to lead generation, everything is **automated**.

---

## 💡 Use Case
Perfect for SDRs, founders, or growth marketers looking to **scale cold outreach** without sacrificing personalization or running into LinkedIn scraping limits.

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
