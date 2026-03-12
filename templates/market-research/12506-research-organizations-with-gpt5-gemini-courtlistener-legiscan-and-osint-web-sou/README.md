# 📊 Research organizations with GPT‑5, Gemini, CourtListener, LegiScan and OSINT web sources

> ⚡ **98 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

This workflow is designed for researchers, investigators, and analysts who need to:
- Build comprehensive profiles of organizations from public sources
- Research court cases, legislation, and government documents related to companies
- Verify company information across multiple authoritative databases
- Conduct due diligence or competitive intelligence research

It's ideal for animal advocacy organizations researching factory farms and slaughterhouses, investigative journalists exposing animal cruelty, legal teams building cases against animal agriculture companies, and activists conducting corporate campaigns.

## What it does

This multi-phase OSINT agent systematically researches organizations:
1. **Discovery phase**: Searches multiple databases to find all relevant records
   - CourtListener for federal and state court cases
   - LegiScan for related legislation across all states
   - DocumentCloud for government documents and reports
   - Serper for web articles, news, and academic papers
2. **Verification phase**: Confirms discovered records actually relate to the target company (not similar names)
3. **Prioritization phase**: Scores and selects the most relevant items for deep analysis
4. **Retrieval phase**: Fetches full text of selected court opinions, bills, and documents
5. **Analysis phase**: Synthesizes findings into strategic insights
6. **Verification phase**: Checks the final report against sources for accuracy

The workflow prevents false positives by verifying company name matches, domain connections, and jurisdiction consistency.

## How to set up

1. Import the workflow into your n8n instance
2. Configure the required API credentials:
   - **CourtListener API** for court case searches
   - **LegiScan API** for legislation searches
   - **Serper API** for web searches
   - **Jina AI API** for article content extraction
   - **OpenRouter API** for AI analysis
3. Test with a well-known company to verify API connections
4. Activate the workflow

### Example usage

```json
{
  "companyName": "Tyson Foods",
  "companyDomain": "tysonfoods.com",
  "reportGoal": "Identify environmental violations, labor disputes, and regulatory actions in the past 5 years"
}
```

## Requirements

- CourtListener API key (free tier available)
- LegiScan API key
- Serper API key
- Jina AI API key
- OpenRouter API key

## How to customize

- **Add data sources**: Integrate SEC filings, USDA inspection reports, EPA violations databases, or OSHA records
- **Adjust verification criteria**: Modify the company matching logic for subsidiaries or DBAs (useful for tracking complex corporate structures in animal agriculture)
- **Focus research scope**: Limit searches to specific jurisdictions or time periods relevant to your campaign
- **Change output format**: Customize the final report structure for campaign briefings or legal filings
- **Add export options**: Connect to document generation tools for formatted reports to share with coalition partners

## 🔗 Nodes Used

Webhook, Execute Workflow Trigger, AI Agent, Basic LLM Chain, Embeddings OpenAI, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
