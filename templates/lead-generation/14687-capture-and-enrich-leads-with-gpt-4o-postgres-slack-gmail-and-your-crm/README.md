# 🎣 Capture and enrich leads with GPT-4o, Postgres, Slack, Gmail and your CRM

> ⚡ **132 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview
This workflow captures incoming leads from a webhook, enriches them using AI, and automates the entire sales pipeline. It validates data, scores leads as hot, warm, or cold, assigns them to sales reps, syncs with CRM systems, and triggers notifications and follow-ups.

It helps teams respond faster, prioritize high-value leads, and streamline sales operations with minimal manual effort.

---

## How It Works

1. **Webhook Trigger**
   - Captures lead data from forms or landing pages.

2. **Workflow Configuration**
   - Defines:
     - CRM API endpoint
     - Slack notification channel
     - Sales reps list for assignment

3. **Validation**
   - Ensures required fields (name and email) are present.
   - Routes invalid submissions to error handling.

4. **Data Normalization**
   - Structures lead data (name, email, phone, company, message).

5. **AI Lead Enrichment**
   - Classifies lead as:
     - Hot
     - Warm
     - Cold
   - Generates:
     - Score reasoning
     - Estimated deal value
     - Company insights
     - Recommended next actions

6. **Database Storage**
   - Stores enriched lead data in Postgres.

7. **Sales Assignment**
   - Assigns leads using round-robin distribution logic.

8. **CRM Integration**
   - Sends lead data to CRM (e.g., HubSpot, GoHighLevel)
   - Optionally creates Salesforce leads

9. **Automated Communication**
   - Sends welcome email to the lead
   - Notifies sales team via Slack

10. **Activity Logging**
   - Logs all actions for tracking and analytics

---

## Setup Instructions

1. **Webhook Setup**
   - Configure endpoint (`lead-capture`)
   - Connect your form or frontend

2. **OpenAI Credentials**
   - Add API key for lead scoring and enrichment

3. **Database Setup**
   - Configure Postgres credentials
   - Create tables:
     - `leads`
     - `activity_log`

4. **CRM Integration**
   - Add API credentials for your CRM
   - Set endpoint URL

5. **Salesforce (Optional)**
   - Configure Salesforce credentials if used

6. **Slack Integration**
   - Add Slack credentials
   - Set channel ID for notifications

7. **Email Setup**
   - Connect Gmail account for sending emails

8. **Configure Sales Reps**
   - Add email list in configuration node

---

## Use Cases

- Automated lead qualification for marketing teams  
- SaaS lead management pipelines  
- Agency client acquisition workflows  
- CRM automation with AI enrichment  
- Sales team lead distribution systems  

---

## Requirements

- OpenAI API key  
- Postgres database  
- CRM system (HubSpot, GoHighLevel, or similar)  
- Gmail account  
- Slack workspace  
- Salesforce account (optional)  
- n8n instance  

---

## Key Features

- AI-powered lead scoring and enrichment  
- Automated validation and error handling  
- Round-robin sales assignment  
- Multi-CRM integration support  
- Real-time Slack notifications  
- Automated email follow-ups  
- Full activity tracking and logging  

---

## Summary

A complete AI-driven lead management system that captures, enriches, scores, and routes leads automatically. It enables faster response times, better lead prioritization, and scalable sales automation for modern teams.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Salesforce, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
