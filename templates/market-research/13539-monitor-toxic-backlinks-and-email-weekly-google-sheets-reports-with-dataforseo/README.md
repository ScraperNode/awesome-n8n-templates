# 📊 Monitor toxic backlinks and email weekly Google Sheets reports with DataForSEO

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

## Description

![Monitor toxic backlinks and receive weekly reports via email with DataForSEO.png](fileId:4493)

This workflow helps you keep track of harmful backlinks by automatically monitoring your backlink profile and emailing you a weekly report, without manual exports or time-consuming audits.

On each run, the workflow retrieves backlink data for your selected domain or URL using the DataForSEO Backlinks API. It filters backlinks based on a defined spam score threshold (default: &gt;50) to identify suspicious or toxic links that may negatively affect your SEO. The workflow then compiles an easy-to-review weekly report in Google Sheets that includes key backlink context, such as the source domain/URL and spam score, so you can quickly decide what needs action. The report is then delivered directly to your Gmail inbox, making this a reliable, self-running backlink profile health-monitoring system.

## Who’s it for
This workflow is ideal for SEO specialists, link-building teams, and website owners who want an automated weekly overview of toxic backlinks for faster decision-making.

## What it does
This workflow automatically monitors new backlinks with high spam score, generates a weekly toxic backlink report, and emails it to you for review and action.

## How it works
Triggers automatically on a weekly schedule.

Fetches backlink data for your domain or URL using the DataForSEO Backlinks API.

Filters backlinks by spam score above the defined threshold (default: &gt;50).

Extracts suspicious backlinks and key metrics (source URL/domain, spam score, DR, etc.).

Builds a structured weekly report in Google Sheets.

Emails you the report via Gmail.

## Requirements
- DataForSEO account and API credentials 
- Google Sheets integration to n8n
- Gmail integration to n8n

## Customization
You can easily customize this workflow by adjusting the spam score threshold, changing the number of backlinks analyzed, selecting additional backlink data (such as anchor text), storing weekly reports in other tools (such as Notion), or changing the run frequency.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
