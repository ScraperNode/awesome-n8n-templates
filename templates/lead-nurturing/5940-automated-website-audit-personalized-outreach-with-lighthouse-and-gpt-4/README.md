# 💬 Automated website audit & personalized outreach with Lighthouse and GPT-4

> ⚡ **1,684 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Create AI-Driven Website Audits & Personalized Outreach with Lighthouse and GPT-4

## Who is this for?
This workflow is perfect for **marketing agencies**, **SEO consultants**, and **growth specialists** who need to scale personalized outreach without spending hours on manual research.

---

## What problem does it solve?
Traditional cold outreach feels **generic** and gets ignored.  
This template automates website audits and personalized email creation, making your outreach look **deeply researched and relevant—at scale**.

---

## What this workflow does
- Pulls business details from a **Google Sheet** (which you can fill via tools like Google Maps scrapers)
- Finds company emails using an **AI-powered scraper**
- Captures a **screenshot** of the business homepage
- Runs a **Lighthouse audit** (Performance, SEO, Accessibility, Best Practices)
- Performs **UI analysis** to spot design gaps using GPT-4
- Generates a **personalized outreach email** that references real site data, tone, and scores

**Result:**  
You end up with dozens of qualified leads, each with a **full audit report** and a **ready-to-send outreach email**.

---

## Requirements
- **n8n account** (self-hosted or cloud)
- **Google Sheets credentials** (use n8n’s built-in credential manager)
- **OpenAI API key** (stored securely in n8n credentials)
- **Lighthouse node installed**

---

## How to Set Up
1. **Connect Google Sheets** → Use it as your lead source
2. Add your **OpenAI** and **Google credentials** via n8n credential manager
3. Replace **placeholder variables** in the “Set” nodes for your campaign
4. Enable the **Lighthouse node** for audits
5. Run the workflow **manually** or **schedule it**

---

## How to Customize
- Change the **email prompt** in the OpenAI node to match your tone
- Modify the **Google Sheet structure** for different niches
- Add extra steps (e.g., push to a **CRM** or email sender like **Instantly**)


*Feel Free to drop me an email if you need help with building a custom automation for your business at : shahrukh@marketingbyprof.com*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
