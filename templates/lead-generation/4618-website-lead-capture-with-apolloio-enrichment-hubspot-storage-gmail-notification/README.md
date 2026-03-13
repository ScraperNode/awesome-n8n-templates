# 🎣 Website lead capture with Apollo.io enrichment, HubSpot storage & Gmail notifications

> ⚡ **1,897 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What problem does this workflow solve?
Capture leads from your website, enrich them via Apollo, store them in HubSpot, send a personalized thank-you email, and notify your team—all automatically.

## What does this workflow do?
1. Capture leads from website forms automatically.
2. Send a personalized thank-you email to each new lead.
3. Enrich lead data using Apollo for deeper insights.
4. Create or update a contact/lead in HubSpot CRM.
5. Notify the internal team via email about the new lead.

## Setup

### Gmail Setup
Create Gmail Credentials by creating a project in Google Cloud Console.

### Hubspot Setup
Create Hubspot Credentials with App Token.

## How it Works:
This workflow automates your lead capture, enrichment, and follow-up process to ensure no opportunity is missed. Here's how it works:

### 1. Website Form Submission
A visitor submits a lead form on your website. Lead details like name, email, company, and message are captured instantly.

### 2. Personalized Thank-You Email
A customized thank-you email is automatically sent to the lead, building trust and confirming receipt of their inquiry.

### 3. Apollo Lead Enrichment
The captured data is enriched using Apollo to fetch additional information like job title, LinkedIn profile, and other details. This helps you better understand and qualify your leads.

### 4. Create Lead in HubSpot
The enriched lead information is pushed into HubSpot as a new contact or lead. Duplicate checks ensure that there are no repeat entries.

### 5. Internal Notification
An email notification with enriched lead details is sent to your team. Your team can follow up immediately with a complete profile.

## Who can use it?
This workflow can be used by any website owner with a "Get In Touch" or "Contact Us" button.

## 🔗 Nodes Used

HTTP Request, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
