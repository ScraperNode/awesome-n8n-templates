# 🎯 AI-powered lead enrichment from Typeform & Calendly to HubSpot CRM

> ⚡ **487 views** · 🎯 [AI Summarization & Classification](../)

## Description

### How it works
This workflow starts whenever a new lead comes in through Typeform (form submission) or Calendly (meeting booking). It captures the lead’s information, standardizes it into a clean format, and checks the email domain. If it’s a business domain, the workflow uses AI to enrich the lead with company details such as industry, headquarters, size, and website. Finally, it merges all the data and automatically saves the enriched contact in HubSpot CRM.

### Step-by-step

**Capture Leads**

- The workflow listens for new form responses in Typeform or new invitees in Calendly.

- Both sources are merged into a single stream of leads.

**Standardize Data**

-  All incoming data is cleaned and formatted into a consistent structure: Name, Email, Phone, Message, and Domain.

**Filter Domains**

- Checks the email domain.

- If it’s a free/public domain (like Gmail or Yahoo), the lead is ignored.

- If it’s a business domain, the workflow continues.

**AI Company Enrichment**

- Sends the domain to an AI Agent (OpenAI GPT-4o-mini).

- AI returns structured company details:

	- 	Company Name

	- 	Industry

	- 	Headquarters (city & country)

	- 	Employee Count

	- 	Website

	- 	LinkedIn Profile

	- 	Short Company Description

**Merge Lead & AI Data**

- Combines the original lead details with the AI-enriched company information.

- Adds metadata like timestamp and workflow ID.

**Save to HubSpot CRM**

- Creates or updates a contact record in HubSpot.

- Maps enriched fields like company name, LinkedIn, website, and description.

### Why use this?

- Automatically enriches every qualified lead with valuable company intelligence.

- Filters out unqualified leads with personal email addresses.

- Keeps your CRM updated without manual research.

- Saves time by centralizing lead capture, enrichment, and CRM sync in one flow.

- Helps sales teams focus on warm, high-value prospects instead of raw, unverified leads.

## 🔗 Nodes Used

Typeform Trigger, HubSpot, Calendly Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
