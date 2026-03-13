# 🎣 Classify & enrich contacts with GPT-4o-mini for Google Sheets, Airtable, and HubSpot

> ⚡ **497 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

### How it works
This workflow enhances contact intelligence by retrieving new or updated contact data, enriching it using AI and external APIs, and then updating your CRM or contact management system with intelligent insights. It automates the process of gathering, enriching, and organizing contact information to improve targeting, personalization, and engagement.

### Step-by-step
**1. Trigger & Input**
- The workflow is triggered by a scheduler or webhook event.

- It reads a new contact entry (or an updated one) from your source, such as a spreadsheet or form.
- Basic fields like name, email, and company are used as the starting point for enrichment.

**2. Contact Lookup & Parsing**
- The contact's domain or company is extracted and used to perform a lookup via an external data source.

- Data such as company details, job title, or LinkedIn profile is retrieved.

- Parsed and cleaned to remove duplicates, missing values, or invalid results.

**3. AI Enrichment**
- The enriched contact is passed through an AI model (such as GPT or another NLP service).

- The model analyzes job role, seniority, and inferred interests based on available data.

- Insights like intent, persona category, or engagement score are generated.

**4. Validation & Tagging**
- The AI-enriched data is validated to ensure consistency and accuracy.

- Tags and segments (e.g., "Decision Maker", "Technical Buyer", etc.) are assigned based on rules or AI inference.

- This enables smart filtering, targeting, and routing later in your CRM or campaigns.

**5. Output & Integration**
- The final enriched and validated contact is written back to your CRM, sheet, or marketing platform.

**The system also:**

- Sends a Slack/Email alert with a summary.

- Updates the original contact entry with a "Processed" or "Enriched" status.

- Triggers next steps, such as personalized outreach or nurture sequences.

### Benefits
- Enhances Contact Profiles with AI-generated insights and third-party data.

- Improves Segmentation & Targeting through smart tags and persona classification.

- Automates Manual Research, saving time and improving accuracy.

- Easily Extendable by adding more AI models, data sources, or CRM integrations.

## 🔗 Nodes Used

Airtable, Google Sheets, HubSpot, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
