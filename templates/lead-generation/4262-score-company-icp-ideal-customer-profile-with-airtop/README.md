# 🎣 Score company ICP (Ideal Customer Profile) with Airtop

> ⚡ **416 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automating Company ICP Scoring via LinkedIn

## Use Case

This automation scores companies based on their LinkedIn profile using custom Ideal Customer Profile (ICP) criteria. It’s ideal for qualifying B2B leads and prioritizing outreach based on fit.

## What This Automation Does

Inputs required:

- **Company LinkedIn URL**: Public LinkedIn profile of the company.
- **Airtop Profile (connected to LinkedIn)**: [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated to access and extract profile data.

The automation analyzes the LinkedIn page and calculates a score based on:

### Scoring Criteria

| **Category**       | **Classification**        | **Points** |
|--------------------|---------------------------|------------|
| **AI Focus**        | Low                       | 5          |
|                    | Medium                    | 10         |
|                    | High                      | 25         |
| **Technical Level** | Basic                     | 5          |
|                    | Intermediate              | 15         |
|                    | Advanced                  | 25         |
|                    | Expert                    | 35         |
| **Employee Count**  | 0–9                       | 5          |
|                    | 10–150                    | 25         |
|                    | 150+                      | 30         |
| **Agency Status**   | Not Automation Agency     | 0          |
|                    | Automation Agency         | 20         |
| **Geography**       | Outside US/Europe         | 0          |
|                    | US/Europe Based           | 10         |

The result includes:
- Total ICP score
- Detailed justifications for each score component

## How It Works

1. Opens the company’s LinkedIn page using Airtop.
2. Analyzes metadata including employee count, headquarters, services, and keywords.
3. Applies the scoring rubric and returns structured JSON with scores and reasons.
4. Optionally flattens the result for storage or CRM integration.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. LinkedIn-authenticated [Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Combine with Lead Lists**: Score companies from outreach lists.
- **Push to CRM**: Add scores to HubSpot or Salesforce records.
- **Adjust Scoring Weights**: Modify rubric to reflect your ICP strategy.

Read more about [company ICP scoring automation with Airtop and n8n](https://www.airtop.ai/automations/score-company-icp-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
