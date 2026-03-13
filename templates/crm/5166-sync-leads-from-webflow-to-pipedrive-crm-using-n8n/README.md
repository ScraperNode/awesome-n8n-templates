# 🤝 Sync leads from Webflow to Pipedrive CRM using n8n

> ⚡ **940 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template automates the process of capturing leads from Webflow form submissions and syncing them with your Pipedrive CRM. It ensures that each submission is accurately associated with the correct organization and contact in Pipedrive, streamlining lead management and minimizing duplicates.

## Use cases include:
Sales teams that want to automate CRM data entry, marketing teams capturing qualified leads from landing pages, or any business looking to improve their Webflow-to-CRM integration workflow.

## Good to know
- The workflow assumes that Webflow form submissions include the lead’s email address.

- The domain is extracted from the email to match or create the organization in Pipedrive.

- This template does not handle lead scoring or enrichment, but can be extended for such use-cases.

## How it works

1. Extract website from email
The email is split to extract the domain (e.g., jane@company.com → company.com), which is used to search for existing organizations.

2. Check if the organization exists
The Pipedrive API is queried using the domain. If the organization exists, we proceed. If not, a new organization is created.

3. Check if the person exists
-- If the person already exists in Pipedrive, a note is added to their activities to log the form submission.
-- If the person does not exist, a new person is created, a note is added to the person, and a new lead is created.

4. (Optional) Add your own actions
You can extend this workflow to trigger Slack notifications, email follow-ups, or internal dashboards.

## How to use
Start with the manual trigger node, or replace it with a webhook to connect directly to Webflow form submissions in real-time.

## Requirements
- Webflow form integration (via webhook or other method)
- Pipedrive account and API key

## Customising this workflow
You can add enrichment services to auto-fill job titles or LinkedIn profiles. Perfect for growing sales pipelines without manual CRM input.

## 🔗 Nodes Used

Pipedrive, Webflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
