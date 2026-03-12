# 📊 Survey insights with Qdrant, Python and Information Extractor

> ⚡ **3,657 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Survey Insights scenario where survey participant responses can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, researchers can save days and even weeks of work breaking down cohorts of participants and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vT6m8XH8JWJTUAfwojc68NAUGC7q0lO7iV738J7aO5fuVjiVzdTRRPkMmT1C4N8TwejaiT0XrmF1Q48/pubhtml#

### How it works
* All survey questions and responses are imported from a Google Sheet.
* Responses are then inserted into a Qdrant collection carefully tagged with the question and survey metadata.
* For each question, all relevant response are put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the researcher.

### Requirements
* Survey data and format as shown in the attached google sheet.
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data. Add more clusters for open-ended questions and less clusters when responses are multiple choice.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
