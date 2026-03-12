# 📊 Automate SEO analysis for multiple domains with Ahrefs and Google Sheets

> ⚡ **1,261 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Fetch SEO and traffic information from ahref for a list of domains in a Google Sheet. This is great for marketing research and SEO workflow optimizations and saves tons of time.

## How it works
* We'll import domains from the Google sheet
* We use an SEO MCP server to fetch data from ahref free tooling
* The fetched data is stored in the Google sheet

## Set up steps
* Copy Google Sheet template and add it in all Google Sheet nodes
* Make sure that n8n has read & write permissions for your Google sheet.
* Add your list of domains in the first column in the Google sheet
* Add MCP credentials for [seo-mcp](https://github.com/cnych/seo-mcp)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
