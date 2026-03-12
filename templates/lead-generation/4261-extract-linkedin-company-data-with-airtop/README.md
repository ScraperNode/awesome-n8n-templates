# 🎣 Extract Linkedin company data with Airtop

> ⚡ **533 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Automating LinkedIn Company Data Extraction

## Use Case

This automation extracts detailed company insights from a LinkedIn company page, including identity, scale, classification, and funding data. Ideal for investors, sales teams, and market researchers.

## What This Automation Does

This automation accepts the following inputs:

- **Company's LinkedIn URL**: The public LinkedIn page URL of the company.
- **Airtop Profile (connected to LinkedIn)**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

It then extracts and returns structured data with:

### 1. Company Identity
- Full name
- Tagline
- Headquarters location (city, state, country)
- About section
- Website

### 2. Company Scale
- Current employee count
- Employee size bracket: [0-9], [10-150], [150+]

### 3. Business Classification
- Is the company an automation agency? (true/false)
- AI implementation level: Low / Medium / High
- Technical sophistication: Basic / Intermediate / Advanced / Expert

### 4. Funding Profile
- Most recent funding round
- Total amount raised
- Key investors
- Last funding update date

## How It Works

1. Creates an Airtop session using the provided profile.
2. Navigates to the company LinkedIn page.
3. Executes an Airtop query to extract data.
4. Outputs the result in a standardized JSON schema.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. A [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Feed into CRM**: Enrich your accounts with detailed LinkedIn data.
- **Prioritize Leads**: Use classification and funding data to prioritize outreach.
- **Combine with People Data**: Integrate with individual-level enrichment for full context.

Read more about how to [extract company data from Linkedin with Airtop and n8n](https://www.airtop.ai/automations/extract-linkedin-company-information-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
