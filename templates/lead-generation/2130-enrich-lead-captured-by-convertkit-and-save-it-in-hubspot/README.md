# 🎣 Enrich lead captured by ConvertKit and save it in Hubspot

> ⚡ **1,291 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Use Case
Whenever someone shows interest in your offerings by subscribing to a list in ConvertKit it could be a potential new customer. Typically you need to gather more detailed information about them (data enrichment) and finally update their profile in your CRM system to better manage and nurture your relationship with them. This workflow does this all for you!

## What this workflow does
The workflow runs every time a user is subscribed to a ConvertKit list. It then filters out personal emails, before enriching the email. If the email is attached to a company it enriches the company and upserts it in your Hubspot CRM.

## Setup
1. Add `Clearbit`, `Hubspot`, and `ConvertKit` credentials.
2. Click on `Test workflow`.
3. Subscribe to a list on `ConvertKit` to trigger the workflow.

Be aware that you can adapt this workflow to work with your enrichment tool, CRM, and email automation tool of choice.

## 🔗 Nodes Used

HubSpot, Clearbit, ConvertKit Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
