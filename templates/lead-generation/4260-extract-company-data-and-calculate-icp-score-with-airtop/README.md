# 🎣 Extract company data and calculate ICP score with Airtop

> ⚡ **430 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Automating Company Data Enrichment and ICP Calculation

## Use Case

This automation identifies a company's LinkedIn profile, extracts key business data, and calculates an ICP (Ideal Customer Profile) score to qualify and enrich company records. It is perfect for sales teams, data enrichment pipelines, and CRM integrations.

## What This Automation Does

### Input Parameters

- **Company domain**: The company's website domain (e.g., `example.com`).
- **Airtop Profile (connected to LinkedIn)**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated for LinkedIn.
- **Company LinkedIn** *(optional)*: If already known, skips search.

### Output Includes

- Verified LinkedIn company URL (if not provided)
- Company profile (name, tagline, website, location, about)
- Scale metrics (employee count and bracket)
- Classification (automation agency status, AI focus, technical level)
- ICP score with justifications
- Structured JSON object with all values merged

## How It Works

1. **LinkedIn Detection**: If not provided, attempts to locate the LinkedIn URL using website scraping or search.
2. **Data Extraction**: Uses Airtop to gather structured data from the company’s LinkedIn profile.
3. **ICP Scoring**: Applies a scoring rubric based on AI/tech orientation, scale, agency status, and geography.
4. **Merge Results**: All data components are merged into a unified output.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) with LinkedIn authentication

## Next Steps

- **Combine with Person Enrichment**: Pair with workflows that enrich individuals tied to the company.
- **Sync to CRM**: Connect the output to your CRM for record enrichment or scoring fields.
- **Adjust ICP Scoring Logic**: Modify the rubric for your organization's ICP model.

Read more about [company data enrichment and ICP scoring](https://www.airtop.ai/automations/extract-person-data-and-calculate-icp-n8n)

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
