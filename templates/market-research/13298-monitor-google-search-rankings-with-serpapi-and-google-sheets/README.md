# 📊 Monitor Google Search rankings with SerpApi and Google Sheets

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

## Description

## Google Keyword SEO Monitoring

### What this is about

This workflow enables SEO monitoring by checking Google rank positions for a list of keywords and domains. It uses SerpApi's Google Search API, but can be customized to use any of SerpApi's APIs.

### How it works

The workflow accepts Google Sheet with a list of keywords and domains to identify their rank in Google search results.

The results are synced to two sheets in a Google Sheet. The first is a log of all past runs. The second is an overview list showing the results from the latest run.

The workflow includes a Wait node that delays between each keyword to avoid Google Sheets API rate limiting. Adjust this if you have a custom rate limit.

### Setup

1. Create a free SerpApi account here: https://serpapi.com/
1. Add SerpApi credentials to n8n. Your SerpApi API key is here: https://serpapi.com/manage-api-key
1. Connect your Google Sheets accounts to n8n. Help available here: https://n8n.io/integrations/google-sheets/
1. Copy this Google Sheet to your own Google account: https://docs.google.com/spreadsheets/d/148gjSSqSY5x9Gz5JWE_FDXHOuB7ASTomSyxkZjrjuNc/edit?gid=1750873622#gid=1750873622
1. Set your list of keywords and domains in the 'Latest Run' sheet.
1. Connect your Google Sheet in the 'Get Keywords and Domains to Match' node
1. Connect your Google Sheet in the 'Update Rank Log' node
1. Connect your Google Sheet again in the 'Update Latest Run' node
1. (Optional) Customize the schedule to your needs
1. (Optional) Set a custom page limit and match type in 'Set Page Limit & Match Type'

### Documentation

[SerpApi Google Search API](https://serpapi.com/search-api)
[SerpApi n8n Node Intro Guide](https://serpapi.com/blog/boost-your-n8n-workflows-with-serpapis-verified-node/)

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
