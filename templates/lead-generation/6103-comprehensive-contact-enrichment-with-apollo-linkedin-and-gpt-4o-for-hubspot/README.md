# 🎣 Comprehensive contact enrichment with Apollo, LinkedIn, and GPT-4o for HubSpot

> ⚡ **959 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### Summary
Turns a plain name + email into a fully-enriched HubSpot contact by matching the person in Apollo, pulling their latest LinkedIn activity, summarising the findings with GPT-4o, and upserting the clean data into HubSpot

### Key use-cases
SDRs enriching inbound demo requests before routing

RevOps teams keeping executive records fresh

Marketers building highly-segmented email audiences

### Inputs
|Field	|Type|	Example|
|-|-|-|
name	|string|	“Jane Doe”
email|	string	|“jane@acme.com”

### Required credentials
|Service	|Node	|Notes|
|-|-|-|
Apollo.io API key |	HTTP Request – “Enrich with Apollo”	|Set in header x-api-key
RapidAPI key| (Fresh-LinkedIn-Profile-Data)	“Get recent posts”|	Header x-rapidapi-key
OpenAI	3 LangChain nodes|	Supply an API key| default model gpt-4o-mini
HubSpot OAuth2|	“Enrich in HubSpot”|	Add/create any custom contact properties referenced

High-level flow
Trigger – Runs when another workflow passes name & email.

Clean – JS Code node normalises & deduplicates emails.

Apollo match – Queries /people/match; skips if no person.

LinkedIn fetch – Grabs up to 3 original posts from last 30 days.

AI summary chain

OpenAI → Structured/Auto-fixing parsers

Produces a strict JSON block with job title, location, summaries, etc.

HubSpot upsert – Maps every key (plus five custom properties) into the contact record.

Sticky-notes annotate the canvas; error-prone bits have retry logic.

## 🔗 Nodes Used

HTTP Request, HubSpot, Execute Workflow Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
