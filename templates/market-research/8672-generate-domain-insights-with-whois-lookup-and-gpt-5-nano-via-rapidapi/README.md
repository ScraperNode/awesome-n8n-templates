# 📊 Generate domain insights with WHOIS lookup and GPT-5-Nano via RapidAPI

> ⚡ **566 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template allows you to automatically fetch WHOIS data for any domain and display it in a clean, modern HTML card. It doesn’t just stop at showing raw registry data — it also uses a lightweight AI model to generate a short analysis or conclusion about the domain.

It’s designed for **SEO specialists, web developers, sysadmins, digital marketers, and cybersecurity enthusiasts** who want quick and structured access to domain ownership and status details without wasting time on manual searches.

#### What it does:

* Receives a domain name via webhook.
* Queries the WHOIS API through RapidAPI.
* Extracts and formats key details (registrar, creation date, expiry date, DNS, domain status, etc.).
* Uses AI (GPT-5-Nano) to generate a short descriptive insight about the domain.
* Returns everything in a **responsive, styled HTML card** (light + dark mode included).

#### Requirements:

* A free account on [RapidAPI.com](https://rapidapi.com).
* Use of the **Bulk WHOIS API** (includes up to 1,000 requests per month free, no credit card required).

#### Who is it for?

* **SEO professionals** who need to quickly check domain lifespans, expirations, and registrar info.
* **Web developers** who want to integrate WHOIS checks into dashboards, apps, or chatbots.
* **IT admins & security teams** who monitor domains for fraud, abuse, or expiry.
* **Entrepreneurs & marketers** researching competitors’ domains.

This template saves time, improves workflows, and makes WHOIS data both **actionable** and **user-friendly**.

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
