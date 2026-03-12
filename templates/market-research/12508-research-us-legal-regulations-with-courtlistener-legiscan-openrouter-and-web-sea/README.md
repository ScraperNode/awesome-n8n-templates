# 📊 Research US legal regulations with CourtListener, LegiScan, OpenRouter and web search

> ⚡ **82 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

This workflow is designed for legal professionals, policy analysts, and compliance teams who need to:
- Research case law, legislation, and regulatory developments on specific topics
- Build comprehensive legal intelligence reports from authoritative sources
- Track enforcement trends and regulatory patterns
- Support litigation strategy with thorough background research

It's ideal for animal law attorneys, advocacy organizations tracking animal welfare legislation, policy teams monitoring ag-gag laws and farm animal protection bills, and researchers building legal cases against animal cruelty.

## What it does

This specialized legal research agent conducts comprehensive US legal and regulatory research:
1. **Discovery phase**: Casts a wide net across legal databases
   - CourtListener for federal and state court opinions and dockets
   - LegiScan for legislation across all 50 states
   - DocumentCloud for government enforcement documents
   - Serper for legal analysis, news, and academic papers
2. **Prioritization phase**: AI evaluates all discovered items and selects the most relevant (3-10 items) with scoring rationale
3. **Retrieval phase**: Fetches complete text of prioritized court opinions, bill text, and documents
4. **Analysis phase**: Synthesizes patterns, contradictions, and strategic insights
5. **Verification phase**: Validates factual claims against source documents with hallucination detection

The verification phase uses a specialized legal-focused prompt that distinguishes between legitimate legal strategy (which should never be flagged) and actual factual errors like wrong case citations or non-existent statutes.

## How to set up

1. Import the workflow into your n8n instance
2. Configure the required API credentials:
   - **CourtListener API** for case law searches
   - **LegiScan API** for legislation searches
   - **Serper API** for web searches
   - **Jina AI API** for article extraction
   - **OpenRouter API** for AI analysis
3. Test with a well-documented legal topic to verify integrations
4. Activate the workflow

### Example usage

```json
{
  "prompt": "Research the current legal challenges to California Proposition 12 (farm animal confinement standards), including constitutional commerce clause arguments and enforcement status"
}
```

## Requirements

- CourtListener API key (free tier available)
- LegiScan API key
- Serper API key
- Jina AI API key
- OpenRouter API key

## How to customize

- **Add jurisdiction filters**: Limit searches to specific federal circuits or states with active animal welfare legislation
- **Adjust time ranges**: Focus on recent developments or historical case law in animal protection
- **Extend source types**: Add USDA enforcement records, state animal cruelty databases, or international animal law sources
- **Modify verification strictness**: Adjust the hallucination detection threshold for legal accuracy
- **Create specialized variants**: Fork for specific areas (ag-gag laws, farmed animal welfare, animal testing regulations, wildlife protection)
- **Add citation formatting**: Post-process reports to use proper legal citation formats (Bluebook, etc.)
- **Integrate with legal tools**: Connect to Clio, case management systems, or your organization's legal database

## 🔗 Nodes Used

Webhook, AI Agent, Basic LLM Chain, Structured Output Parser, HTTP Request Tool, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
