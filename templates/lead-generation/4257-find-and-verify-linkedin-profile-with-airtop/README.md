# 🎣 Find and verify Linkedin profile with Airtop

> ⚡ **714 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automating LinkedIn Profile Discovery with Verification

## Use Case

Accurately identifying and verifying a person’s LinkedIn profile is essential for prospecting, recruiting, or contact enrichment. This automation ensures high accuracy by combining search logic with optional profile validation.

## What This Automation Does

This automation locates and verifies a LinkedIn profile using the following inputs:

- **Person_info**: Any identifying information about the person (e.g., name, company, email).
- **Airtop_profile**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn, used for verifying the profile.

## How It Works

1. Extracts a likely LinkedIn URL by performing a Google search using the provided person info.
2. Validates the result (if Airtop Profile is provided):
   - Visits the LinkedIn profile.
   - Verifies match by checking the content (e.g., experience, role) against the person info.
3. Returns a verified LinkedIn profile URL or "NA" if not found or not valid.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. Optional but recommended: an [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## Next Steps

- **Combine with Email Lookup**: Use email-to-profile tools upstream to gather inputs.
- **CRM Integration**: Automatically append LinkedIn profiles to contact records.
- **Automate Outreach**: Use the verified URLs for personalized LinkedIn engagement workflows.

Read more about how [find and verify Linkedin profiles](https://www.airtop.ai/automations/discover-and-verify-linkedin-profile-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, Filter, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
