# 🎣 Verify Linkedin company page by domain with Airtop

> ⚡ **390 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Automating LinkedIn Company URL Verification

## Use Case

This automation verifies that a given LinkedIn URL actually belongs to a company by comparing the website listed on their LinkedIn page against the expected company domain. It is essential for ensuring data accuracy in lead qualification, enrichment, and CRM updates.

## What This Automation Does

### Input Parameters

- **Company LinkedIn**: The LinkedIn URL to be verified.
- **Company Domain**: The expected domain (e.g., `example.com`) for validation.
- **Airtop Profile (connected to LinkedIn)**: [Airtop Profile](https://portal.airtop.ai/browser-profiles) with LinkedIn authentication.

### Output

- Confirmation whether the LinkedIn page corresponds to the provided domain.
- Returns the verified LinkedIn URL if the match is confirmed.

## How It Works

1. Extracts the website URL from the specified LinkedIn company profile.
2. Compares the extracted URL with the provided company domain.
3. If the domain is contained in the extracted website, the LinkedIn profile is confirmed as valid.
4. Returns the original LinkedIn URL if the match is successful.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Use for LinkedIn Discovery Validation**: Ensure correctness after automated LinkedIn page discovery.
- **Combine with CRM Updates**: Prevent incorrect LinkedIn links from being stored in CRM.
- **Automate in Data Pipelines**: Use this as a validation gate before enrichment or scoring steps.

## 🔗 Nodes Used

Execute Workflow Trigger, Filter, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
