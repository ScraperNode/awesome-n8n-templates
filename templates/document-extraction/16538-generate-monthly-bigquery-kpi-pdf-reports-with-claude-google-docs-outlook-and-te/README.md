# 🔬 Generate monthly BigQuery KPI PDF reports with Claude, Google Docs, Outlook and Teams

> ⚡ **81 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs monthly to query KPI data from Google BigQuery, generates a narrative with Anthropic Claude, fills a Google Docs report template, exports it as a PDF, archives it to OneDrive, emails it via Microsoft Outlook, and posts a summary to Microsoft Teams.

## How it works
1. A schedule trigger fires on the 1st of every month at 07:00 and calculates the start and end dates of the previous full calendar month.
2. Four parallel BigQuery queries fetch revenue KPIs, top product categories, weekly sales trend, and top customers for that period. Each result set is tagged with a source label before merging.
3. All tagged rows are combined and aggregated into a single structured report payload containing KPI summaries, ranked tables, and company metadata.
4. The payload is split across two concurrent branches: one sends it to a Claude Sonnet LLM chain to generate an executive narrative with five sections (summary, revenue analysis, category insights, customer insights, and recommendation), and the other creates a named copy of a Google Docs template in your reports folder.
5. Once both branches complete, the narrative is merged into the report payload and the replacement requests for all template placeholders are constructed.
6. The Google Docs node applies all replacements in a single batchUpdate call, then the file is exported as a PDF via Google Drive.
7. The finished PDF is archived to OneDrive, emailed via Outlook with the report attached, and a formatted KPI summary card is posted to a Microsoft Teams channel.

## Setup
1. Set the following n8n environment variables before activating: GCP_PROJECT_ID, BQ_DATASET, GDOCS_TEMPLATE_FILE_ID, GDRIVE_REPORTS_FOLDER_ID, ONEDRIVE_REPORTS_FOLDER_ID, REPORT_RECIPIENTS, TEAMS_TEAM_ID, and TEAMS_CHANNEL_ID.
2. Connect a Google BigQuery credential and update the four SQL queries to match your dataset, table name, and column names.
3. Connect an Anthropic API credential to the Claude Chat Model sub-node, then manually wire its output to the ai_languageModel input (bottom connector) of the Create AI Narrative with Claude node on the canvas.
4. Connect Google Drive and Google Docs OAuth2 credentials. In Google Drive, create a master report template Doc containing the placeholder strings listed in the Customization section, note its file ID from the URL, and set GDOCS_TEMPLATE_FILE_ID accordingly.
5. Connect Microsoft OneDrive, Outlook, and Teams OAuth2 credentials. Retrieve your Teams team ID and channel ID using the Microsoft Graph Explorer and set the corresponding environment variables.

## Requirements
- Google Cloud project with BigQuery enabled and an orders table matching the SQL schema in the workflow
- Google Workspace account (Drive and Docs OAuth2 access)
- Anthropic API key
- Microsoft 365 account with OneDrive, Outlook, and Teams access

## Customization
- To change the reporting cadence, update the cron expression in the schedule trigger: 0 7 * * 1 for weekly or 0 7 * * * for daily.
- To adapt the SQL queries to your schema, replace orders, order_total, customer_id, is_new_customer, created_at, and product_category with your actual column names.
- To change the AI model, update the model field in the Claude Chat Model sub-node.
- To add more KPI sections, extend the SQL queries, the aggregation code in Consolidate BigQuery Data, and the replacements array in Construct Replacement Requests.

## 🔗 Nodes Used

Google Drive, Microsoft OneDrive, Microsoft Teams, Microsoft Outlook, Google BigQuery, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
