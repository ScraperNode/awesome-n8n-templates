# 🎣 Automate real estate lead matching with Jotform, & Gemini AI to Zoho CRM

> ⚡ **960 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧩 What Problem Does It Solve?
In real estate, inquiries come from many sources and often require immediate, personalized attention. Brokers waste significant time manually:

* **Qualifying leads:** Determining if a prospect's budget, neighborhood, and needs match available inventory.

* **Searching listings:** Cross-referencing customer criteria against a large, static database.

* **Data entry:** Moving contact details and search summaries into a CRM like Zoho.

* **Initial follow-up:** Sending an email to confirm the submission and schedule the next step.
## 🛠️ How to Configure It
### Jotform & CRM Setup
* **Jotform Trigger:** Replace the placeholder with your specific Jotform ID.
* **Zoho CRM:** Replace the placeholder TEMPLATED_COMPANY_NAME with your actual company name.

* **Gmail:** Replace the placeholder Calendly link YOUR_CALENDLY_LINK in the Send a message node with your real estate consultant's booking link.
### Database & AI Setup
* **Google Sheets:** Replace YOUR_GOOGLE_SHEET_DOCUMENT_ID and YOUR_SHEET_GID_OR_NAME in both Google Sheets nodes. Your listings must be structured with columns matching the AI prompt (e.g., bedrooms, rent, neighborhoods).

* **AI Models:** Ensure your Google Gemini API key is linked to the Google Gemini Chat Model node.

* **AI Agent Prompt:** The included prompt contains the exact matching and scoring rules for the AI. You can edit this prompt to refine how the AI prioritizes factors like supplier_rating or neighborhood proximity.
## 🧠 Use Case Examples
* **Small Startups:** Collect High-Quality Leads: New inquiries must be quickly logged for sales follow-up, but manual entry is slow.
* **B2B Sales:** High-Value Lead Enrichment: Need to prioritize leads that match specific product requirements and budget tiers.
* **Travel/Hospitality:** Personalized Itinerary Matching: Quickly match customer preferences (e.g., dates, group size, activity level) to available packages.
* **E-commerce:** Manual Product Recommendation: Sales teams manually recommend expensive, configurable items (e.g., furniture, specialized equipment).

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

## 🔗 Nodes Used

Jotform Trigger, Zoho CRM, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
