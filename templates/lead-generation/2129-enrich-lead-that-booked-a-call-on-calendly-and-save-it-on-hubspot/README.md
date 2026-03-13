# 🎣 Enrich lead that booked a call on Calendly and save it on Hubspot

> ⚡ **2,496 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Use Case
When having a call with a new potential customer, one of the keys to getting the most out of the call is to find out as much information as you can about them before the call. Normally this involves a lot of manual research before every call. This workflow automates this tedious work for you.
## What this workflow does
The workflow runs every time a new call is booked via your Calendly. It then filters out personal emails, before enriching the email. If the email is attached to a company it enriches the company and upserts it in your Hubspot CRM.
## Setup
1. Add `Clearbit`, `Hubspot`, and `Calendly` credentials.
2. Click on `Test workflow`.
3. Book a meeting on Calendly so the event starts the workflow.
Be aware that you can adapt this workflow to work with your enrichment tool, CRM, and booking tool of choice.

## 🔗 Nodes Used

HubSpot, Clearbit, Calendly Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
