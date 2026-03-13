# 🎣 Qualify & verify leads with Google Gemini and sync to HubSpot from Jotform

> ⚡ **194 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI-Enhanced Lead Qualification & HubSpot Synchronization (Jotform to HubSpot) 🧠✨

Stop wasting time on bad leads and manual research. This advanced **n8n workflow** automates your entire lead qualification and CRM entry process for HubSpot, ensuring you only sync **high-quality, pre-researched contacts**.

When a prospect submits your form, this automation immediately:

1.  **Verifies the lead's email** using Verifalia to ensure deliverability.
2.  **Performs an AI-powered website crawl** to extract and structure key competitive information like the prospect's **Company Name**, **Industry**, **Country**, and a **Website Summary**.
3.  **Uses Google Gemini to create an instant, personalized summary** of the lead's potential, acting as your *virtual sales assistant*.
4.  Finally, it creates or updates the comprehensive, enhanced contact record in **HubSpot CRM** and sends a smart **Gmail notification** to your sales team with the AI summary for immediate, informed follow-up.

***

## How it Works

This automation turns raw form submissions into fully enriched, sales-ready contacts in HubSpot:

1.  **Lead Capture (Jotform):** A prospect fills out your Jotform with their details, triggering the workflow instantly.
2.  **Email Verification (Verifalia):** The email address is sent to the Verifalia API. **Only verified, deliverable emails are allowed to proceed**, eliminating bad data from your HubSpot portal.
3.  **Website Crawl & Data Extraction (HTTP Request & AI):** The workflow accesses the prospect's website and uses an **Information Extractor** (powered by an underlying Language Model like Google Gemini or similar AI) to automatically pull essential business data like **Industry** and **Company Name**.
4.  **AI Lead Scoring & Summarization (Google Gemini):** All captured and enriched data is fed to the Google Gemini model. The AI acts as a smart assistant, analyzing the lead's profile to generate a **short, prospective summary** for your sales team.
5.  **HubSpot Synchronization:** The final, enriched contact data (including all AI-extracted fields) is used to either **create a new contact** or **update an existing one** in your **HubSpot CRM**.
6.  **Intelligent Internal Notification (Gmail):** Your sales team receives an immediate internal email. This alert contains the raw lead data **plus the critical AI-generated summary**, allowing them to prioritize and personalize their follow-up immediately.

***

## Requirements

To set up this intelligent lead funnel, you'll need the following accounts and credentials configured in your n8n instance:

* **Jotform Credentials:** An **API Key** for the **JotForm Trigger**. 
**Sign up for Jotform here:** [https://www.jotform.com/?partner=zainurrehman](https://www.jotform.com/?partner=zainurrehman)
* **Verifalia Credentials:** An **API Key** for the **Lead Verification** node.
* **AI/Language Model Credentials:** Credentials for the **Information Extractor** and **Message a model** (e.g., Google Gemini/PaLM API Key) to perform website research and summarization.
* **HubSpot Credentials:** An **OAuth2** or **API Key** credential for the **HubSpot** node to manage contacts.
* **Gmail Credentials:** An **OAuth2** credential for the **Gmail** node to send internal notifications.
* **Jotform:** An active form containing the necessary fields: **First Name**, **Last Name**, **Email**, **Phone**, **Website**, and **Note**.

## 🔗 Nodes Used

HTTP Request, HubSpot, Jotform Trigger, Gmail, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
