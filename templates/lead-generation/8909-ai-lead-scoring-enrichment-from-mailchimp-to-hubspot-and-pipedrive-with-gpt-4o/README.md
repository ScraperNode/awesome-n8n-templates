# 🎣 Ai lead scoring & enrichment from Mailchimp to HubSpot and Pipedrive with GPT-4o

> ⚡ **337 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## How it works

This workflow captures new subscribers from a Mailchimp list and extracts their key details.  
It then enriches the subscriber data using AI, predicting professional attributes and assigning a lead score.  
Based on the score, high-value leads are identified, and all leads are synced into HubSpot and Pipedrive.  
For top-priority leads, the workflow automatically creates new deals in Pipedrive for sales follow-up.  

## Step-by-step

## Step-by-step

**1. Capture subscriber data**  
- **Mailchimp Subscriber Trigger** – Detects new signups in a Mailchimp list.  
- **Extract Subscriber Data** – Normalizes payload into clean fields like name, email, and timestamp.  

**2. Enrich with AI**  
- **Lead Enrichment AI** – Uses AI to infer company, role, industry, intent, LinkedIn, and lead score.  
- **Parse & Merge Enrichment** – Merges AI output with subscriber info and sets defaults if parsing fails.  

**3. Qualify leads**  
- **High-Value Lead Check** – Filters leads with a score ≥70 to flag them as priority.  
- **Create High-Value Deal** – Opens a new deal in Pipedrive for high-value leads.  

**4. Sync to CRMs**  
- **HubSpot Contact Sync** – Updates enriched lead data in HubSpot CRM.  
- **Pipedrive Person Create** – Adds lead as a person in Pipedrive.  


## Why use this?

- Automatically enrich raw Mailchimp subscribers with valuable professional insights.  
- Score and qualify leads instantly for prioritization.  
- Keep HubSpot and Pipedrive updated with enriched lead records.  
- Automate deal creation for high-value opportunities, saving sales team effort.  
- Build a seamless pipeline from marketing signups to CRM-ready opportunities.

## 🔗 Nodes Used

Pipedrive, HubSpot, Mailchimp Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
