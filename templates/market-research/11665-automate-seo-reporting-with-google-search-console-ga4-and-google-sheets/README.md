# 📊 Automate SEO reporting with Google Search Console, GA4, and Google Sheets

> ⚡ **934 views** · 📊 [Market Research & Insights](../)

## Description

## How it works:
This workflow automates comprehensive SEO reporting by:
- Extracting keyword rankings and page performance from Google Search Console.
- Gathering organic reach metrics from Google Analytics.
- Analyzing internal and external article links.
- Tracking keyword position changes (gains and losses).
- Formatting and importing all data into Google Sheets reports.

## Set up steps:
1. **Connect Google Services**: Authenticate Google Search Console, Google Analytics, and Google Sheets OAuth2 credentials.
2. **Configure Source Sheet**: Set up a data source Google Sheet with article URLs to analyze.
3. **Set Report Sheet**: Create or specify destination Google Sheets for reports.
4. **Update Date Ranges**: Modify date parameters in GSC and GA nodes for your reporting period.
5. **Customize Filters**: Adjust keyword filters and row limits based on your needs.
6. **Test Individual Sections**: Each reporting section (keywords, pages, articles, position changes) can be tested independently.

The workflow includes separate flows for:
- Keyword ranking (top 1000).
- Page ranking analysis.
- Organic reach reporting.
- Internal article link analysis.
- External article link analysis.
- Position gain/loss tracking.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Analytics, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
