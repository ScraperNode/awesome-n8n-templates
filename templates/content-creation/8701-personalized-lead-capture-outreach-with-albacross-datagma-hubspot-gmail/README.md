# 🎬 Personalized lead capture & outreach with Albacross, Datagma, HubSpot & Gmail

> ⚡ **103 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## How it works

This workflow automatically captures website visitors using Albacross, enriches their data with Datagma, and syncs it into HubSpot. Once leads are created or updated, a personalized email is generated and sent through Gmail. All email activities are logged in HubSpot for proper sales tracking and follow-up.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Runs the workflow at set intervals (hourly, daily, or custom).  

**2. Capture website visitors**  
- **Albacross Website Visitor** – Pulls company and visitor details from website activity.  

**3. Enrich lead data**  
- **Enrich Lead Data** – Enhances visitor records with personal and professional details via Datagma.  

**4. Sync to CRM**  
- **Create/Update HubSpot Contact** – Creates or updates contact records in HubSpot with enriched lead data.  

**5. Generate personalized outreach**  
- **Generate Personalized Message** – Builds a tailored email including company, industry, and value propositions.  

**6. Send and track emails**  
- **Send Personalized Email** – Sends the outreach message through Gmail.  
- **Log Email Activity in HubSpot** – Tracks email engagement automatically in HubSpot.  

## Why use this?

- Capture and identify anonymous website visitors as potential leads.  
- Enrich contact details with accurate, professional information.  
- Keep HubSpot updated automatically without manual data entry.  
- Send highly personalized outreach emails tailored to each lead.  
- Log all communication for better pipeline visibility and sales follow-up.

## 🔗 Nodes Used

HTTP Request, HubSpot, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
