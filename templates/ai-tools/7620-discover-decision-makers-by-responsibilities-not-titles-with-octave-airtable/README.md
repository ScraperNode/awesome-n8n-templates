# 🎯 Discover decision makers by responsibilities (not titles) with Octave & Airtable

> ⚡ **31 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Discover relevant contacts from target accounts using Octave intelligent prospecting

## Who is this for?
Sales development teams, account-based marketing professionals, and RevOps teams who are tired of generic job title filtering that misses the real decision makers. Built for teams that need to find the right people based on actual responsibilities and business context, not just titles on LinkedIn.

## What problem does this solve?
Most prospecting tools are flying blind when it comes to finding the right contacts. You search for "VP of Engineering" but miss the "Head of Platform" who actually owns your use case. You filter by "Marketing Director" but the "Growth Lead" is the real buyer. Traditional prospecting relies on job title matching, but titles vary wildly across companies. This workflow uses Octave's context engine to find contacts based on who actually does the work your solution impacts, regardless of their specific job title.

## What this workflow does

**Target Account Processing:**
- Reads target account lists from Airtable (or other data sources)
- Processes company domains for intelligent contact discovery
- Handles batch processing for multiple target accounts

**Context-Aware Contact Discovery:**
- Uses Octave's prospector agent to find relevant stakeholders within target organizations
- Leverages your defined personas to identify the right people based on responsibilities, not just titles
- Analyzes organizational structure, role responsibilities, and KPIs to match contacts to your solution
- Discovers decision makers and influencers who might be missed by traditional job title searches

**Structured Contact Output:**
- Returns discovered contacts with complete profile information
- Includes LinkedIn profiles, contact details, and role context
- Organizes contacts by relevance and decision-making authority
- Exports contact lists back to Airtable for sales team action

## Setup

**Required Credentials:**
- Octave API key and workspace access
- Airtable API credentials (or your preferred contact management platform)
- Access to your target account list

**Step-by-Step Configuration:**

1. **Set up Target Account Source:**
   - Add your Airtable credentials to n8n
   - Replace `your-airtable-base-id` and `your-accounts-table-id` with your actual account list
   - Ensure your account list includes company domains for prospecting
   - Configure trigger method (manual, scheduled, or webhook-based)

2. **Configure Octave Prospector Agent:**
   - Add your Octave API credentials in n8n
   - Replace `your-octave-prospector-agent-id` with your actual prospector agent ID
   - Configure your prospector with relevant personas and role definitions
   - Test prospecting with sample companies to verify contact quality

3. **Set up Contact Output Destination:**
   - Replace `your-contacts-table-id` with your target contact list table
   - Configure field mapping between Octave output and your contact database
   - Set up data validation and deduplication rules
   - Test contact creation and data formatting

4. **Customize Contact Selection:**
   - Configure which personas to prioritize in your prospector agent
   - Set relevance thresholds for contact discovery
   - Define organizational levels to target (individual contributors vs. management)
   - Adjust contact volume per account based on your outreach capacity

**Required Account List Format:**
Your Airtable (or data source) should include:
- Company Name
- Company Domain (required for prospecting)
- Account status/priority (optional)
- Target personas (optional)

## How to customize

**Prospector Configuration:** Customize contact discovery in your Octave prospector agent:
- **Persona Targeting:** Define which of your Library personas to prioritize when prospecting
- **Role Responsibilities:** Configure the specific responsibilities and KPIs that indicate a good fit
- **Organizational Level:** Target specific levels (IC, manager, director, VP, C-level) based on your solution
- **Company Size Adaptation:** Adjust prospecting approach based on organization size and structure

**Contact Selection Criteria:** Refine who gets discovered:
- **Decision-Making Authority:** Prioritize contacts with budget authority or implementation influence
- **Problem Ownership:** Focus on roles that directly experience the pain points your solution solves
- **Technical Influence:** Target contacts who influence technical decisions if relevant to your offering
- **Process Ownership:** Identify people who own the processes your solution improves

**Data Integration:** Adapt for different contact management systems:
- Replace Airtable with your CRM, database, or spreadsheet system
- Modify field mapping to match your contact database schema
- Add data enrichment steps for additional contact information
- Integrate with email platforms for immediate outreach

**Batch Processing:** Configure for scale:
- Adjust processing volume based on API limits and prospecting quotas
- Add scheduling for regular account list updates
- Implement error handling for accounts that can't be prospected
- Set up monitoring for prospecting success rates

## Use Cases
- Account-based marketing contact list generation
- Sales territory planning and contact mapping
- Competitive displacement campaign targeting
- Product expansion within existing customer accounts
- Event-based prospecting for specific personas
- Market research and competitive intelligence gathering

## 🔗 Nodes Used

Airtable

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
