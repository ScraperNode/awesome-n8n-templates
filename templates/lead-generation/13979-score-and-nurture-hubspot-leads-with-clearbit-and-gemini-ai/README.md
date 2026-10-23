# 🎣 Score and nurture HubSpot leads with Clearbit and Gemini AI

> ⚡ **25 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for

SMB sales teams and SaaS companies who want to automatically prioritize and nurture new leads without manual qualification. Perfect for businesses getting 50+ leads per month who need to identify high-value prospects quickly.

## How it works

When a new contact is created in HubSpot, the workflow automatically enriches their data using Clearbit's company database. A scoring algorithm evaluates company size, industry fit, and job title relevance, then Gemini AI analyzes the enriched data to provide additional insights and generate personalized outreach content.

Hot leads (score 80+) receive immediate personalized emails and trigger Slack notifications to the sales team. Warm leads (50-79) are added to nurturing sequences. Cold leads are simply scored for future reference. All scoring data and reasoning are logged to Google Sheets for analysis and optimization.

## How to set up

Configure credentials for HubSpot, Clearbit API, Gemini AI, Gmail, Slack, and Google Sheets. Create a Google Sheet for scoring history with the column headers shown in the workflow. Update the Slack channel name in the notification node and customize the Gmail sender settings.

## Requirements

- HubSpot with contact creation access
- Clearbit Enrichment API account
- Google Gemini AI API key
- Gmail account for sending emails
- Slack workspace for notifications
- Google Sheets for tracking

## How to customize

Adjust scoring criteria in the Set node including target industries, company size weights, and role priorities. Modify hot/warm score thresholds (default 80/50). Customize email templates and Slack message format within the Gemini AI prompt. Add additional scoring factors in the Code node calculation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, HubSpot Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
