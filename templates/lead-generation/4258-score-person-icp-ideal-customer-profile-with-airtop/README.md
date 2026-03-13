# 🎣 Score person ICP (Ideal Customer Profile) with Airtop

> ⚡ **378 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Scoring LinkedIn Profiles Against Your ICP
## Use Case
This automation scores individual LinkedIn profiles against your Ideal Customer Profile (ICP) based on interest in AI, technical depth, and seniority level. It's ideal for prioritizing leads and understanding how well a person fits your ICP criteria.

## What This Automation Does
Given a LinkedIn profile and an Airtop profile, it:
- Extracts relevant data from the person's profile
- Determines levels of AI interest, seniority, and technical depth
- Calculates an ICP score based on weighted criteria
- Returns the full enriched profile with the score

## Input parameters:
- **LinkedIn Profile URL** (e.g., `https://linkedin.com/in/janedoe`)
- **Airtop Profile** connected to LinkedIn
- **ICP scoring method** in the Airtop node prompt

## Output fields in JSON format:
- Full name, job title, employer, company LinkedIn URL, location, number of connections and followers, about section content and more
- Calculated ICP Score (out of 95)

## How It Works
1. **Form Trigger or Workflow Trigger**: Accepts input from either a form or another workflow.
2. **Parameter Assignment**: Ensures proper variable names for downstream nodes.
3. **Airtop Enrichment Tool**: Extracts and scores the person based on a detailed prompt.
4. **Scoring**: Uses this point system:
   - AI Interest: beginner (5), intermediate (10), advanced (25), expert (35)
   - Technical Depth: basic (5), intermediate (15), advanced (25), expert (35)
   - Seniority Level: junior (5), mid-level (15), senior (25), executive (30)
5. **Output Formatting**: Cleans and returns the result as JSON.

## Setup Requirements
1. IMPORTANT: Enter your ICP scoring method in the prompt field of the Airtop node 
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn.
3. Airtop API credentials configured in n8n.
4. Optional: a front-end form to collect profile URLs and trigger the automation.

## Next Steps
- **Embed in CRM**: Trigger this automation on new leads to auto-score them.
- **Batch Process Leads**: Run it over a list of profile URLs for segmentation.
- **Customize Scoring**: Adjust point weights based on your sales priorities.

Read more about [ICP Scoring with Airtop and n8n](https://www.airtop.ai/automations/score-person-icp-n8n)

## 🔗 Nodes Used

Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
