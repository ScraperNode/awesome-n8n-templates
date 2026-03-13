# 🎣 Automated real estate property lead scoring with BatchData

> ⚡ **2,661 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

How It Works
-
This workflow automates the real estate lead qualification process by leveraging property data from BatchData. The automation follows these steps:

1. When a new lead is received through your CRM webhook, the workflow captures their address information
2. It then makes an API call to BatchData to retrieve comprehensive property details
3. A sophisticated scoring algorithm evaluates the lead based on property characteristics like:

- Property value (higher values earn more points)
- Square footage (larger properties score higher)
- Property age (newer constructions score higher)
- Investment status (non-owner occupied properties earn bonus points)
- Lot size (larger lots receive additional score)

4. Leads are automatically classified into categories (high-value, qualified, potential, or unqualified)
5. The workflow updates your CRM with enriched property data and qualification scores
6. High-value leads trigger immediate follow-up tasks for your team
7. Notifications are sent to your preferred channel (Slack in this example)

The entire process happens within seconds of receiving a new lead, ensuring your sales team can prioritize the most valuable opportunities immediately..

Who It's For
-
This workflow is perfect for:

- Real estate agents and brokers looking to prioritize high-value property leads
- Mortgage lenders who need to qualify borrowers based on property assets
- Home service providers (renovators, contractors, solar installers) targeting specific property types
- Property investors seeking specific investment opportunities
- Real estate marketers who want to segment audiences by property value
- Home insurance agents qualifying leads based on property characteristics

Any business that bases lead qualification on property details will benefit from this automated qualification system.

About BatchData
-
BatchData is a comprehensive property data provider that offers detailed information about residential and commercial properties across the United States. Their API provides:

- Property valuation and estimates
- Ownership information
- Property characteristics (size, age, bedrooms, bathrooms)
- Tax assessment data
- Transaction history
- Occupancy status (owner-occupied vs. investment)
- Lot details and dimensions

By integrating BatchData with your lead management process, you can automatically verify and enrich leads with accurate property information, enabling more intelligent lead scoring and routing based on actual property characteristics rather than just contact information.

This workflow demonstrates how to leverage BatchData's property API to transform your lead qualification process from manual research into an automated, data-driven system that ensures high-value leads receive immediate attention.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
