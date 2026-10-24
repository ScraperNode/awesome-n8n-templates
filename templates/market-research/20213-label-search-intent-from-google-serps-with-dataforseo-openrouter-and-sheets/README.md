# 📊 Label search intent from Google SERPs with DataForSEO, OpenRouter and Sheets

> ⚡ **79 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Reads pending keywords from Google Sheets, pulls Google's top 10 with DataForSEO (optionally page content, search volume and traffic per URL), groups the results into search intents with an OpenRouter model, and writes the summary, intents and per-result data back to the sheet.

## How it works
1. Runs manually and loads settings from Config: sheet URL, model, prompt and the optional data switches.
2. Reads the Keywords tab and keeps rows with an empty status, up to max_keywords.
3. For each keyword, the verified DataForSEO node fetches the live Google top 10, plus People Also Ask, related searches and the AI Overview when present.
4. If enabled, DataForSEO reads every ranking page as markdown; a Code node measures words and counts tables, lists, images and videos, and builds a short digest.
5. If enabled, DataForSEO Labs adds search volume with monthly history (seasonality is computed from it) and estimated traffic per URL.
6. The Labeler (Basic LLM Chain with the OpenRouter Chat Model) groups the results into search intents. It sees titles, snippets and digests only - no numbers.
7. Code nodes count coverage, share and traffic share per intent, the dominant intent, the reference length and warnings, then append rows to Summary, Intents and Results and mark the keyword as done or error.

## Setup
1. Copy the template sheet (link in the Setup sticky) and paste your copy's URL into Config -> spreadsheet_url.
2. Install the verified DataForSEO node once, then add a DataForSEO API credential with your API login and API password (DataForSEO dashboard -> API access).
3. Add an OpenRouter credential on the OpenRouter Chat Model node. Change the model in Config if you do not want openai/gpt-6-luna.
4. Add a Google Sheets OAuth2 credential to the five Google Sheets nodes.
5. In the Keywords tab add keyword, country_code (2840 US, 2826 UK, 2616 PL, 2276 DE, 2250 FR, 2380 IT) and language_code (en, pl, de...). Leave status empty, then run the workflow.

## Requirements
- DataForSEO account with API access
- OpenRouter API key
- Google account for Google Sheets
- The verified DataForSEO node (n8n-nodes-dataforseo)

## Customization
- Switch read_pages, search_volume or traffic off in Config to pay less (SERP and model only: about $0.003 per keyword).
- Pick any OpenRouter model in Config; low-cost models without heavy reasoning are enough for grouping ten results.
- Edit the prompt in Config -> system_prompt, for example to answer in another language.
- Raise or lower max_keywords to control how many keywords one run processes.

## Additional info
A full run costs about $0.03 per keyword in API fees, mostly DataForSEO Labs. The model only groups results; every number is computed in Code nodes, so each figure in the sheet can be recomputed by hand. The Basic LLM Chain does not report the model cost (about $0.001 per keyword with openai/gpt-6-luna); check it in your OpenRouter activity. The same method as an open-source Python library and a browser playground: https://romek-rozen.github.io/intent-labeler/

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
