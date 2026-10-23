# 📊 Generate structured research reports with OpenAI, Wikipedia, Google Sheets, and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow receives a research topic via webhook, uses OpenAI to generate Wikipedia search queries, pulls and cleans matching Wikipedia extracts, then synthesizes a structured report with OpenAI, stores the results in Google Sheets, notifies a Slack channel, and returns the report in the webhook response.

## How it works
1. Receives a POST webhook request containing a `topic` value.
2. Validates that the topic is present and uses OpenAI to generate five focused Wikipedia search queries.
3. Searches Wikipedia for each query, iterates through the top results, and fetches the plaintext extracts for each matching page.
4. Cleans and normalizes the extracted Wikipedia content, then merges it into a single research context.
5. Sends the merged content to OpenAI to generate a multi-section research report (summary, findings, facts, benefits, challenges, trends, outlook, and references).
6. Parses the generated report into structured JSON fields, appends or updates a row in Google Sheets, posts a completion message to Slack, and returns the structured report to the webhook caller.

## Setup
1. Add an OpenAI API credential and confirm the selected model (gpt-4o-mini) is available in your OpenAI account.
2. Configure the Webhook path (`/research-assistant`) in the calling app and send a JSON body with a `topic` field.
3. Add a Google Sheets credential, then update the target spreadsheet, sheet tab, and ensure columns exist for Topic, Date, Summary, and Result.
4. Add a Slack credential and set the target channel for the completion notification.

## Additional info
## Customization Options

- **Alternative Search Engine Integration**: Swap out the default API/Wikipedia HTTP node with Google Custom Search API, Bing Search API, or Tavily Search API for deeper web coverage.
- **Upgraded LLM Models**: Switch the AI model from `gpt-4o-mini` to `gpt-4o` or Claude 3.5 Sonnet for deeper reasoning on dense technical topics.
- **Custom Report Output Formats**: Modify the `Research Report Formatter` node or append a PDF conversion step to generate formatted PDF research briefs automatically.
- **Notion / Confluence Integration**: Replace or expand the Google Sheets node with Notion API or Confluence API nodes to publish reports directly into company knowledge bases.


## Use Case Examples

- **Automated Market Research**: Input a target startup name or industry vertical to get an immediate teardown of trends, advantages, and market challenges.
- **Academic & Technical Summarization**: Research complex technological terms (e.g., "16KB Page Size Alignment in Android 15") and instantly receive structured facts and outlooks.
- **Automated Newsletter & Briefing Generation**: Feed daily research topics into the webhook to automatically draft curated news summaries and Slack updates for internal teams.


## Troubleshooting Guide

- **Empty AI Report Error**: If `Research Report Formatter` throws an `'AI research report is empty'` error, verify that the OpenAI credentials are valid and that quota limits have not been reached.
- **Search API Returned 0 Results**: Ensure that the search query generator (`z`) produces clean search strings and that the search endpoint is reachable without IP restrictions.
- **Google Sheets Field Mapping Error**: Ensure column names in your target sheet match the keys (`Topic`, `Date`, `Summary`, `Result`) specified in the `Update row in sheet` node.
- **Webhook Timeout**: Large research tasks with multiple articles may take over 30 seconds. Adjust your n8n execution timeout settings or configure asynchronous processing if needed.


## Need Assistance?

WeblineIndia can help you with:

* n8n workflow customization
* [AI automation development](https://www.weblineindia.com/process-automation-solutions.html)
* Slack and business integrations
* Google Sheets integration
* Enterprise workflow automation
* AI-powered reporting systems
* Production deployment support

Whether you need workflow enhancements, custom dashboards, advanced AI integrations or entirely new automation systems, WeblineIndia can help build scalable solutions tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
