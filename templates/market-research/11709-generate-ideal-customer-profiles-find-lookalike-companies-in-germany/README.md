# 📊 Generate ideal customer profiles & find lookalike companies in Germany

> ⚡ **259 views** · 📊 [Market Research & Insights](../)

## Description

This workflow generates a data driven  Ideal Customer Profile (ICP) and retrieves lookalike companies in Germany from the official data source (Handelsregister). It starts by ingesting a set of base company IDs, serializes them, and sends a recommendation request to the Implisense API to fetch similar companies. When explanation mode is enabled, the workflow extracts and processes term features to create a structured keyword digest and uses an LLM to generate an ICP narrative. The pipeline outputs both a clean list of lookalike companies, enriched with CRM-ready fields, and a detailed ICP report derived from Implisense feature statistics.

## How it works
**Input** → **Serialization** → **Lookalikes** → **Lists/Report**

## Setup steps

### 1. Data Source
☐ Replace "Mock ICP Companies" with matched companies from the Implisense database
☐ Ensure output has: id

### 2. **Configure Credentials**: Set up RapidAPI API credentials
   - Get your API key here: https://implisense.com/de/contact
   - Insert your API Token in get_lookalikes (Basic auth)

### 3. Configure ICP Filters
☐ Edit "Build Recommendation Request" node
☐ Set locationsFilter (e.g., de-be, de-by, de-nw)
☐ Set industriesFilter (NACE codes, e.g., J62 for IT)
☐ Set sizesFilter (MICRO, SMALL, MEDIUM, LARGE)

### 4. Tune Results
☐ Adjust THRESHOLD in "Filter & Normalize Results" (default: 0.5)
☐ Adjust MIN_BASE_COMPANIES in "Collect Base Companies" (default: 3)
☐ Adjust size parameter in "Configuration" URL (default: 100)

### 5. CRM Integration
☐ Map fields in "list_of_companies" to match your CRM schema
☐ Add CRM upsert node after "list_of_companies"
☐ Use implisense-ID or domain as unique identifier

## Additional advice

Strengthen Base Company Quality
Use only highly representative base companies located in Germany that strongly match the intended ICP segment. Templates with dozens of mixed or heterogeneous IDs dilute the statistical signal in the /recommend endpoint and reduce relevance.

Refine Filters Aggressively
Limit recommendations by state, region, NACE code, or size class. Implisense returns cleaner results when the recommendation space is constrained. Removing unnecessary geography broadens noise.

Increase the Size Parameter
Raise the size parameter when building the request to give the ranking model more candidates. This materially improves downstream sorting and selection.

## 🔗 Nodes Used

Function, HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
