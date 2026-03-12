# 🎣 Enrich company domains with business data using Perplexity AI and Google Sheets

> ⚡ **674 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically enriches company domain lists with comprehensive business information using Perplexity AI's research capabilities and organizes the data in Google Sheets for easy analysis and use.

## Who's it for
- **Sales teams** building prospect databases with accurate contact information
- **Marketing professionals** researching target companies for campaigns
- **Business development teams** gathering competitive intelligence
- **Data analysts** enriching existing company datasets
- **Researchers** collecting business information for market analysis

## How it works
The workflow reads unprocessed company domains from a Google Sheets document, processes them in batches of 10 using Perplexity AI to research detailed business information, then saves the enriched data back to the spreadsheet. It focuses on German addresses but can be customized for any region.

## What it does
1. **Fetches unprocessed domains** - Reads company domains from Google Sheets that haven't been processed yet
2. **Batches for efficiency** - Groups domains into batches of 10 to optimize API costs and performance
3. **AI-powered research** - Uses Perplexity AI to find comprehensive business data for each company
4. **Parses structured data** - Converts AI responses into clean, structured JSON format
5. **Updates spreadsheet** - Saves enriched data and marks domains as processed to prevent duplicates

## Requirements
- **Perplexity AI API key** ([Get one here](https://www.perplexity.ai/))
- **Google Sheets API access** (OAuth2 credentials)
- **Google Sheets template** - Make a copy of [this template](https://docs.google.com/spreadsheets/d/1bdK8xskt-qfLlDwdzolM0zFyo9KxZ-HHpTVxcEw3ZMY/edit?usp=sharing)

## How to set up
1. **Make a copy** of the template Google Sheet and update the document ID in both Google Sheets nodes
2. **Configure Perplexity AI credentials** in the HTTP Request node
3. **Set up Google Sheets OAuth2** authentication
4. **Add your company domains** to the "domain" column in the Data tab
5. **Leave the "processed" column empty** for new domains
6. **Run the workflow** using the manual trigger

## How to customize the workflow
- **Change target region**: Modify the AI prompt to research addresses in different countries
- **Adjust batch size**: Change the batch size in the "Batch Process Domains" node (smaller batches = lower costs)
- **Add custom fields**: Extend the AI prompt and Google Sheets mapping to include additional data points
- **Automate execution**: Replace Manual Trigger with Schedule Trigger for regular processing
- **Filter criteria**: Modify the Google Sheets filter to process specific subsets of domains

## Output data includes
- Complete company address (street, city, state, postal code, country)
- International phone number format
- Latest employee count and annual revenue (USD)
- Industry classification
- LinkedIn company URL
- Reliable source URL for verification
- Processing status tracking

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
