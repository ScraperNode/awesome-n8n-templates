# 🎣 Automated local business lead generation with Google Maps & GPT-4

> ⚡ **2,341 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI-Powered Local Lead Generation Workflow with n8n

This workflow solves one of the biggest pain points for **freelancers**, **agencies**, and **SaaS founders**—finding accurate local business leads at scale without manual copy-pasting or unreliable scraping tools.

Traditional lead generation is **time-consuming** and **prone to errors**.  
This template automates the entire process so you can **focus on outreach, not data gathering**.

---

## ✅ What the Workflow Does
- Accepts a **business type** (e.g., `plumbers`) and **city** (e.g., `Los Angeles`) as input
- Uses **AI to generate hyperlocal search terms** for full neighborhood coverage
- Scrapes **Google Maps results** to extract business details and websites
- Filters out **junk, Google-owned links, and duplicates**
- Scrapes **homepage HTML** for each business and extracts valid emails using **Regex**
- Outputs a **clean, deduplicated lead list** with business names, websites, and emails

---

## 🛠 Everything Runs Inside n8n With:
- **OpenAI** for AI-driven query generation
- **Zyte API** for reliable scraping
- **JavaScript functions** for email extraction
- **Built-in filtering and batching** for clean results

---

## 👥 Who is This For?
- **Marketing agencies** doing local outreach
- **Freelancers** offering SEO, design, or lead gen services
- **SaaS founders** targeting SMBs
- **Sales teams** scaling outbound campaigns

---

## ✅ Requirements
- **n8n account** (Cloud or self-hosted)
- **OpenAI API key** (stored in n8n credentials)
- **Zyte API key** (stored securely)
- Basic familiarity with **Google Sheets** if you want to export results

---

## ⚙️ How to Set Up
1. Import the **workflow JSON** into n8n
2. Go to **Credentials** in n8n and add **OpenAI** and **Zyte API keys**
3. Replace **placeholder credential references** in the HTTP Request nodes
4. Set your **search parameters** (business type and city) in the designated Set node
5. Test the workflow with a **single search** to confirm scraping and email extraction steps
6. Configure **batching** if you plan to scrape multiple neighborhoods
7. Add an **output step** (Google Sheets, Airtable, or CRM) to store your leads

---

## 🔧 How to Customize
- Update the **OpenAI prompt** for different search formats (e.g., `service + zip code`)
- Adjust the **Regex pattern** in the JavaScript node for additional email validation rules
- Add extra **filtering logic** for niche-specific keywords
- Integrate with **Instantly, HubSpot**, or any email-sending tool for full automation

## 🔗 Nodes Used

HTTP Request, Filter, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
