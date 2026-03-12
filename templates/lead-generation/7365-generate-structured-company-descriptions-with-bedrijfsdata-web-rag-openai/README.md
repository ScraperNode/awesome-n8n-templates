# 🎣 Generate structured company descriptions with Bedrijfsdata Web RAG & OpenAI

> ⚡ **393 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This template generates structured synthetic company content using live web data from the Bedrijfsdata.nl API combined with an LLM. Provide a company domain (directly or via a Bedrijfsdata.nl ID) and the workflow retrieves relevant website and search engine content, then produces ready-to-use descriptions of the company, its offerings, and its target audience.

✨ **Features**

- Create high-quality Dutch-language company descriptions on demand
- Automatically pull live web content via Bedrijfsdata.nl RAG Domain & RAG Search
- Structured JSON output for consistent downstream use (e.g., CRM updates, lead qualification)
- Flexible trigger: run from ProspectPro ID, domain input, or another workflow
- Secure, modular, and extendable structure (error handling included)

🏢 **Example Output**
The workflow produces structured content fields you can directly use in your sales, marketing, or enrichment flows:

- **company_description** – 1-2 paragraph summary of the company
- **products_and_services** – detailed overview of offerings
- **target_audience** – specific characteristics of ideal customers (e.g., industry, location, company size, software usage)

**Example:**

```
{
  "company_description": "Bedrijfsdata.nl B.V. is een Nederlands bedrijf dat uitgebreide data levert over meer dan 3,7 miljoen bedrijven in Nederland...",
  "products_and_services": "Het bedrijf biedt API-toegang tot bedrijfsprofielen, sectoranalyses, en SEO-gegevens...",
  "target_audience": "Nederlandse MKB's die behoefte hebben aan actuele bedrijfsinformatie voor marketing- of salesdoeleinden..."
}
```

⚙ **Requirements**

- n8n instance or cloud workspace
- Install the Bedrijfsdata.nl n8n Verified Community Node
- OpenAI API credentials (tested with gpt-4.1-mini and gpt-3.5-turbo)
- Bedrijfsdata.nl developer account (14-day free trial, 500 credits)

🔧 **Setup Instructions**

**1. Trigger configuration**
- Use Bedrijfsdata.nl ID (default) or provide a domain directly
- Can be called from another workflow using “Execute Workflow”

**2. Configure API credentials**

- Bedrijfsdata.nl API key

- OpenAI API key

**3. Customize Output** (Optional)

- Adjust prompt in the LLM node to create other types of synthetic content
- Extend structured output schema for your use case

**4. Integrate with Your Stack**

- Example node included to update HubSpot descriptions
- Replace or extend to match your CRM, database, or messaging tools

🔐 **Security Notes**

- Input validation for required domain
- Dedicated error branches for invalid input, API errors, LLM errors, and downstream integration errors
- RAG content checks before running the LLM

🧪 **Testing**
- Run workflow with a Bedrijfsdata.nl ID linked to a company with a known website
- Review generated JSON output
- Verify content accuracy before production use

📌 **About Bedrijfsdata.nl**
Bedrijfsdata.nl operates the most comprehensive company database in the Netherlands. With real-time data on 3.7M+ businesses and AI-ready APIs, we help Dutch SMEs enrich their CRM, workflows, and marketing automation. Built on 25+ years of experience in data collection and enrichment, our technology brings corporate-grade data quality to every organisation.

**Website:** https://www.bedrijfsdata.nl
**Developers:** https://developers.bedrijfsdata.nl
**API docs:** https://docs.bedrijfsdata.nl

📞 **Support**
**Email:** klantenservice@bedrijfsdata.nl
**Phone:** +31 20 789 50 50
**Support hours:** Monday–Friday, 09:00–17:00 CET

## 🔗 Nodes Used

HubSpot, Execute Workflow Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
