# 🤝 CallForge - 01 - filter Gong calls synced to Salesforce by opportunity stage

> ⚡ **1,990 views** · 🤝 [CRM & Sales Operations](../)

## Description

![callforgecompressed.png](fileId:1003)

## Workflow Description

### Who is this for?
This workflow is designed for **sales and revenue teams** using **Gong and Salesforce** to track and analyze sales calls. It helps automate the extraction, filtering, and preprocessing of Gong call data for further AI analysis.

### What problem is this solving?
Sales teams often generate large amounts of call data, but not all calls are relevant for deeper analysis. This workflow **filters calls** based on predefined criteria, extracts relevant metadata, and **formats the data** before passing it to an AI processing pipeline.

### What this workflow does
- **Triggers on new Gong calls synced to Salesforce** every hour.
- **Filters calls based on opportunity stage** (Discovery or Meeting Booked).
- **Retrieves Gong call details** via API.
- **Formats call data into a structured JSON object** for AI processing.
- **Passes the structured data to a Gong Call Preprocessor workflow** for further insights.

### Setup
1. Ensure that you have connected **Salesforce** and **Gong** APIs with valid credentials.
2. Modify the Salesforce query in `Get all custom Salesforce Gong Objects` to match your organization’s requirements.
3. Set the schedule trigger interval in the `Run Hourly` node if needed.
4. Connect this workflow to an AI processing workflow to analyze call transcripts.

Workflow Templates:
- [CallForge - 01 - Filter Gong Calls Synced to Salesforce by Opportunity Stage](https://n8n.io/workflows/3031-callforge-01-filter-gong-calls-synced-to-salesforce-by-opportunity-stage/)
- [CallForge - 02 - Prep Gong Calls with Sheets & Notion for AI Summarization](https://n8n.io/workflows/3032-callforge-02-prep-gong-calls-with-sheets-and-notion-for-ai-summarization/)
- [CallForge - 03 - Gong Transcript Processor and Salesforce Enricher](https://n8n.io/workflows/3033-callforge-03-gong-transcript-processor-and-salesforce-enricher/)
- [CallForge - 04 - AI Workflow for Gong.io Sales Calls](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)
- [CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)
- [CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)
- [CallForge - 07 - AI Marketing Data Processing with Gong & Notion](https://n8n.io/workflows/3037-callforge-07-ai-marketing-data-processing-with-gong-and-notion/)
- [CallForge - 08 - AI Product Insights from Sales Calls with Notion](https://n8n.io/workflows/3039-callforge-08-ai-product-insights-from-sales-calls-with-notion/)



### How to customize
- **Change filtering logic**: Adjust the **opportunity stage filter** (`Check if Opportunity Stage is Meeting Booked or Discovery`) to match your sales process.
- **Modify data formatting**: Add or remove fields in the `Format call into correct JSON Object` node to customize the output.
- **Adjust trigger frequency**: Change the `Run Hourly` node to run at a different interval if required.

## 🔗 Nodes Used

Execute Sub-workflow, Salesforce, Schedule Trigger, Gong

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
