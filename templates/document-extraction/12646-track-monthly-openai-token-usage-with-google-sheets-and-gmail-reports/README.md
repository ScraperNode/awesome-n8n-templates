# 🔬 Track monthly OpenAI token usage with Google Sheets and Gmail reports

> ⚡ **105 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Who's this for**
Finance teams, AI developers, product managers, and business owners who need to monitor and control OpenAI API costs across different models and projects. If you're using GPT-4, GPT-3.5, or other OpenAI models and want to track spending patterns, identify cost optimization opportunities, and generate stakeholder reports, this workflow is for you.

**What it does**
This workflow automatically tracks your OpenAI token usage on a monthly basis, breaks down costs by model and date, stores the data in Google Sheets with automatic cost calculations, and emails PDF reports to stakeholders. It transforms raw API usage data into actionable insights, helping you understand which models are driving costs, identify usage trends over time, and maintain budget accountability. The workflow runs completely hands-free once configured, generating comprehensive monthly reports without manual intervention.

**How it works**
The workflow executes automatically on the 5th of each month and follows these steps:

Creates a new Google Sheet from your template with the naming format "Token_Tracking_[Month]_[Year]"
Fetches the previous month's OpenAI usage data via the OpenAI Admin API
Transforms raw API responses into a clean daily breakdown showing usage by model
Appends the data to Google Sheets with columns for date, model, input tokens, and output tokens
Your Google Sheets formulas automatically calculate costs based on OpenAI's pricing for each model
Exports the completed report as both PDF and Excel formats
Emails the PDF report to designated stakeholders with a summary message
Archives the Excel file to Google Drive for long-term recordkeeping and historical analysis

**Requirements**

OpenAI account with Admin API access (required to access organization usage endpoints)
Google Sheets template pre-configured with cost calculation formulas
Google Drive for report storage and archiving
Gmail account for sending email notifications
n8n instance (self-hosted or cloud) with the following credentials configured:

OpenAI API credentials
Google Sheets OAuth2
Google Drive OAuth2
Gmail OAuth2



**Setup instructions**
1. Create your Google Sheets template
Set up a Google Sheet with these columns:

- Date
- Model
- Token Usage In
- Token Usage Out
- Token Cost Input (formula: =C2 * [price per 1M input tokens] / 1000000)
- Token Cost Output (formula: =D2 * [price per 1M output tokens] / 1000000)
- Total Cost USD (formula: =E2 + F2)
- Total Cost AUD (optional, formula: =G2 * [exchange rate]) (workflow contains a template)

Include pricing formulas based on OpenAI's current pricing. Add summary calculations at the bottom to total costs by model.

**2. Configure n8n credentials**
In your n8n instance, set up credentials for:

OpenAI API (you'll need admin access to your organization)
Google Sheets (OAuth2 connection)
Google Drive (OAuth2 connection)
Gmail (OAuth2 connection)

**3. Update workflow placeholders**
Replace the following placeholders in the workflow:

your-api-key-id: Your OpenAI API key ID (find this in your OpenAI dashboard)
your-template-file-id: The ID of your Google Sheets template
your-archive-folder-id: The Google Drive folder ID where reports should be archived
your-email@example.com: The email address that should receive monthly reports

**4. Assign credentials to nodes**
Open each node that requires credentials and select the appropriate credential from your configured options:

"Fetch OpenAI Usage Data" → OpenAI API credential
"Append Data to Google Sheet" → Google Sheets credential
"Create Monthly Report from Template" → Google Drive credential
"Export Sheet as Excel" → Google Drive credential
"Export Sheet as PDF for Email" → Google Drive credential
"Archive Report to Drive" → Google Drive credential
"Email Report to Stakeholder" → Gmail credential

**5. Test the workflow**
Before enabling the schedule, manually execute the workflow to ensure:

The template copies successfully
OpenAI data fetches correctly
Data appends to the sheet properly
PDF and Excel exports work
Email sends successfully
File archives to the correct folder

**6. Enable the schedule**
Once testing is complete, activate the workflow. It will run automatically on the 5th of each month.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
