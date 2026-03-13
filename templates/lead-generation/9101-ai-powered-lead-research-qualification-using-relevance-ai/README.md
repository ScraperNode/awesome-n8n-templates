# 🎣 Ai-powered lead research & qualification using Relevance AI

> ⚡ **672 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Lead Qualification & Smart Outreach — Automated Scoring System

Automate your **lead intake, scoring, and outreach** pipeline.  
This workflow collects leads from forms, enriches and scores them using Relevance AI, routes them by quality, and triggers the right follow-up — all without manual busywork.

---

## 🚀 What it Does
- Collects leads from your forms in real-time.
- Enriches each lead (individual + company) for better context.
- Scores leads automatically using **Relevance AI** templates.
- Routes leads into **HOT / WARM / COLD** tiers for prioritization.
- Drafts or sends personalized outreach emails for each tier.
- Logs all leads and outcomes into your CRM or Google Sheets.
- Notifies your team (e.g., via Slack) when a hot lead arrives.

---

## 🧩 Why Use It
- **Save time:** stop manually sorting through raw leads.
- **Focus on the best opportunities:** route only top leads to your sales team.
- **Personalized outreach:** automated but tailored by lead quality.
- **Scalable & repeatable:** works for startups, agencies, or larger teams.
- **Adaptable:** swap CRMs, forms, or email providers easily.

---

## 🔧 Prerequisites & Setup
Before importing or running the workflow, set up these connections:

- **Relevance AI**  
  Clone the tools (Resources provided in the workflow) for *lead scoring* and *company scoring*, and copy your API key into the HTTP Request nodes.

- **Form Intake**  
  Use n8n’s built-in form trigger or connect **Typeform, Tally, HubSpot Forms**, or any webhook-based intake.

- **CRM or Database**  
  Start with **Google Sheets** (included in the sample workflow) or connect **HubSpot, Salesforce, Pipedrive, Zoho, Airtable, Notion**, or any SQL/NoSQL DB.

- **Email Provider**  
  Use **Gmail** (included), or swap in **Outlook, HubSpot Email, SendGrid, Mailgun**, etc.

- **Team Notifications (Optional)**  
  Configure **Slack** (or other tools) for instant alerts on hot leads.
---

## ⚙️ How It Works (Simplified Flow)
1. **Lead Intake:** Collects leads from your form or CRM.
2. **Lead Enrichment:** Uses Relevance AI to score:
   - **Individual Fit:** role, expertise, influence.
   - **Company Fit:** size, industry, market relevance.
3. **Scoring & Insights:** Combines both into a final lead score with labels and notes.
4. **Routing:** Splits leads into **HOT / WARM / COLD** tiers.
5. **Outreach:**  
   - HOT → drafts a review-ready email for your team.  
   - WARM / COLD → auto-sends appropriate follow-up emails.
6. **Logging & Alerts:** Saves structured data to your CRM or sheet and notifies your team of hot leads.

---

## 🙋‍♂️ Who is This For
- **Startups & SaaS teams** that need to prioritize a flood of inbound leads.
- **Agencies & consultancies** qualifying prospects from ads or webinars.
- **Small sales teams** that want to spend time only on the best leads.
- **Freelancers or solopreneurs** who want a lightweight but effective qualification process.
- **Automation newbies** who want a production-ready system to **sell for 1k-3k**

---

## 💡 Why It Stands Out
- **Real intelligence:** uses data-driven Relevance AI scoring rather than static rules.
- **Action-oriented:** routes and triggers the right next step immediately.
- **Personalized yet scalable:** adapts outreach to each lead tier.
- **Flexible integrations:** works with most popular CRMs, forms, and email tools.

---

## 🔥 Best Practices & Tips
- Adjust the **weighting** of individual vs. company scores in your Relevance AI template (default: 40% vs 60%).
- Tune **Router thresholds** (e.g., HOT ≥ 80, WARM 60-79, COLD &lt; 60) to match your sales goals.
- Add a **human approval step** for high-value deals.
- Expand with enrichment APIs (e.g., Clearbit, Apollo) for richer lead data.
- Keep all **API keys private** and out of screenshots or repos.

---

🎉 With this workflow, 
**Sales teams can focus on building relationships — while the system qualifies and organizes leads automatically** 
OR 
**You can sell to sales teams for ~3k**

---

## Note:
Demo data is pinned in some nodes to help you understand what the data looks like.
Make sure to unpin those nodes when using for production.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
