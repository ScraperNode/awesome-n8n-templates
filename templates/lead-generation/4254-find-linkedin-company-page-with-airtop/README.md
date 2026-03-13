# 🎣 Find Linkedin company page with Airtop

> ⚡ **521 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automating LinkedIn Company Page Discovery

## Use Case

Finding the official LinkedIn page of a company is crucial for tasks like outreach, research, or enrichment. This automation streamlines the process by intelligently searching the company’s website and LinkedIn to locate the correct profile.

## What This Automation Does

This automation identifies a company's LinkedIn page using the following input parameters:

- **Company domain**: The official website domain of the company (e.g., `company.com`).
- **Airtop Profile (connected to LinkedIn)**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## How It Works

1. Launches an Airtop session using the provided authenticated profile.
2. Attempts to extract a LinkedIn link directly from the company's website.
3. If not found, performs a LinkedIn search for the company.
4. If still unsuccessful, falls back to a Google search.
5. Validates the most likely result to confirm it’s a LinkedIn company page.
6. Outputs the verified LinkedIn URL.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged in to LinkedIn (requires one-time login).

## Next Steps

- **Combine with People Enrichment**: Use this with LinkedIn profile discovery for full contact + company data workflows.
- **CRM Integration**: Automatically enrich company records with LinkedIn links.
- **Build Custom Outreach Workflows**: Connect company pages to SDR tooling for deeper research and engagement.

Read more about how to [find Linkedin Company page](https://www.airtop.ai/automations/find-linkedin-company-page-n8n)

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Filter, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
