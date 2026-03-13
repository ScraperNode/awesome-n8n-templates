# 🎣 Smart Lead Qualification & Routing from Typeform to HubSpot with Data Enrichment

> ⚡ **206 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### ✔ Short Description
Automate your lead qualification pipeline — capture Typeform Webhook leads, enrich with APIs, score intelligently, and route to HubSpot, Slack, and Sheets in real-time.

---

### 🧩 Description

Automate your lead management pipeline from form submission to CRM enrichment and routing.  
This workflow intelligently processes Typeform Webhook submissions, enriches leads using Hunter.io and Abstract API, scores them with dynamic logic, and routes them into HubSpot while keeping your sales team and tracking sheets up to date.

It’s a full-stack automation designed to turn raw form submissions into prioritized, qualified CRM-ready leads — without manual intervention.

---

### 💡 Who’s it for

- Marketing teams managing inbound leads from web forms  
- Sales operations teams that qualify and route leads  
- CRM administrators automating lead data entry and scoring  
- Automation professionals building data enrichment systems  

---

### ⚙️ How it works / What it does

1. **Trigger:** Receives new Typeform Webhook submissions via Webhook.  
2. **Data Extraction:** Parses name, email, and company info.  
3. **Email Verification:** Validates email deliverability with Hunter.io.  
4. **Company Enrichment:** Fetches company data (industry, size, country) using Abstract API.  
5. **Lead Scoring Logic:** Calculates a lead score and assigns a *tier* (Hot / Warm / Cold).  
6. **Conditional Routing:**  
   - **Hot Leads (≥70)** → Sent to HubSpot as *Qualified*.  
   - **Warm/Cold Leads (&lt;70)** → Sent to HubSpot as *Nurture* stage.  
7. **Revalidation Loop:**  
   - Waits (e.g., 3 days) → Rechecks Nurture leads in HubSpot.  
   - Logs them to Google Sheets and alerts your Slack channel.  

---
![⚙️ How it works _ What it does  visual selection.png](fileId:3128)
---

### 🧰 How to set up

1. **Connect accounts:**  
   - Typeform Webhook (for inbound lead capture)  
   - Hunter.io (API key for email verification)  
   - Abstract API (for company enrichment)  
   - HubSpot (via OAuth2 credentials)  
   - Slack (for notifications)  
   - Google Sheets (for logging)

2. **Customize the Webhook URL** inside your Typeform Webhook integration.  
3. **Replace API keys** with your own (Hunter.io, Abstract).  
4. **Adjust scoring logic** inside the `Lead Scoring & Routing Logic` node to fit your business.  
5. **Set Wait duration** (default: 10 seconds for testing → change to 3 days for production).  
6. **Activate the workflow** and test it with a sample form submission.

---

### 🔧 Requirements

- Typeform account with webhook capability  
- Hunter.io account + API key  
- Abstract API account + API key  
- HubSpot account with OAuth2 credentials  
- Slack workspace & channel  
- Google Sheets integration  

---

### 🎨 How to customize the workflow

- **Scoring rules:** Modify the “Lead Scoring & Routing Logic” node to adjust how points are calculated (e.g., country, industry, employee size).  
- **CRM target:** Replace HubSpot nodes with another CRM (e.g., Pipedrive, Salesforce).  
- **Notification channel:** Swap Slack for Email, Discord, or MS Teams.  
- **Data source:** Replace Typeform Webhook with another trigger like Webflow Forms, Airtable, or custom API input.  
- **Tracking:** Add Google Analytics or Notion API for additional reporting.

---

### 🧭 Summary

End-to-end lead automation workflow that combines **form data, enrichment APIs, CRM updates, and Slack alerts** into one intelligent system.  
Ideal for any team looking to centralize and qualify leads automatically — from submission to sales.


# 🧑‍💻 Creator Information

Developed by: Adem Tasin

🌐 Website: [ademtasin](https://www.ademtasin.com/)

💼 LinkedIn: [Adem Tasin](https://www.linkedin.com/in/adem-tasin/)

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
