# 📊 Community insights using Qdrant, Python and Information Extractor

> ⚡ **55,406 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Community Insights scenario where HN commments can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, Researchers or HN users can quickly breakdown community consensus on a particular topic and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vQXaQU9XxsxnUIIeqmmf1PuYRuYtwviVXTv6Mz9Vo6_a4ty-XaJHSeZsptjWXS3wGGDG8Z4u16rvE7l/pubhtml

### How it works
* HN comments are imported via the Hacknews API node.
* Comments are then inserted into a Qdrant collection carefully tagged with the Hackernews API metadata.
* Comments are then fetched and are put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the researcher or the HN user.

### Requirements
* Works best with lots of comments!
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data.
* Adjust sentimentality setting if comments are overwhelmingly negative at times.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Hacker News, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
