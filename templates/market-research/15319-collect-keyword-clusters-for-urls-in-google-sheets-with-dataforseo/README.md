# 📊 Collect keyword clusters for URLs in Google Sheets with DataForSEO

> ⚡ **61 views** · 📊 [Market Research & Insights](../)

## Description

![Collect keyword cluster by URL in Google Sheets with DataForSEO.png](fileId:5750)

This workflow automatically fetches up to 100 ranked keywords for specific URLs based on Google search data and stores your full ranking history in Google Sheets.

On each scheduled run, the workflow reads a list of URLs and related input from your Google Sheets, and uses the DataForSEO Labs API to collect ranking keywords together with all relevant SEO metrics, such as position, search volume, keyword difficulty, CPC, competition, intent, result type, and estimated traffic.

The workflow then saves the results in a separate Spreadsheet tab corresponding to each URL. Table rows contain your keywords, columns store ranking positions by run date, and keyword metrics. Every execution creates a new historical snapshot without replacing previous data.

As a result, you get a clean historical table by URL that lets you easily compare keyword coverage between runs, detect ranking changes, and analyze organic search trends without manual exports. 

## Who’s it for

This workflow is ideal for SEO specialists, content marketers, agencies, and website owners who want to automatically collect and store historical data on ranked keyword clusters for specific URLs.

## What it does

This workflow automatically retrieves a list of URLs, extracts up to 100 ranked organic keywords for each from the DataForSEO Labs API for Google search, and saves the results to Google Sheets in a historical append-only format where each tab represents a separate URL.

## How it works
Triggers on your preferred schedule or manually.

Fetches URLs from your input in Google Sheets.

Check the top-100 ranked keywords for your URLs using the DataForSEO Labs API.

Creates a dedicated sheet for each URL, saves SEO metrics from the API response, such as keyword, ranking positions, search volume, keyword difficulty, CPC, 
competition, search intent, and more. 

Adds new columns for each date of the run, creating a historical data record in Google Sheets.

## Requirements

 - n8n cloud account with the DataForSEO node installed or a self-hosted n8n instance
 - DataForSEO account and API credentials 
 - Google Sheets account and connection to n8n

## Customization

You can easily customize this workflow by changing the run frequency, switching the target search location or language, storing results in another database instead of Google Sheets, or extending the output with alerts, summaries, or dashboard reporting.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
