# 🤝 Compare proposals and analyze gaps for Salesforce CRM with Groq AI

> ⚡ **31 views** · 🤝 [CRM & Sales Operations](../)

## Description

# AI Proposal Comparison & Gap Analysis Workflow for Salesforce CRM

This workflow automatically analyzes newly uploaded proposals by comparing them with past winning proposals using AI. It extracts proposal content, identifies the client, fetches reference data from Google Sheets and generates actionable insights. These insights are saved in Salesforce and shared on Slack for team visibility.


### Quick Implementation Steps

- Connect Google Drive, Google Sheets, Salesforce, Slack and Groq AI credentials in your [n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
- Set your Google Drive folder to monitor proposal uploads.
- Ensure your Google Sheet contains winning proposals with status = Won.
- Activate the workflow.
- Upload a proposal file to trigger analysis automatically.


## What It Does

This workflow automates the process of analyzing business proposals by leveraging AI and historical data. When a new proposal file is uploaded to a specific Google Drive folder, the workflow downloads and extracts its content. It then identifies the client name using a simple pattern from the text. At the same time, the workflow fetches past winning proposals from a Google Sheets database filtered by status. Both the current and past proposals are combined and sent to an AI model for comparison. The AI generates concise insights highlighting missing elements, weak positioning, pricing gaps and improvement suggestions. Finally, the insights are formatted and stored in Salesforce as an Opportunity record. A notification is sent to Slack, ensuring the team is informed and can act quickly to improve proposal quality.


## Who It's For

- Sales teams managing multiple proposals
- Business development professionals
- Proposal review and strategy teams
- Organizations using Salesforce CRM
- Teams looking to improve win rates using AI


## Requirements

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Drive account (with folder for proposals)
- Google Sheets account (with winning proposals data)
- Salesforce account (Opportunity access enabled)
- Slack workspace (channel for notifications)
- Groq API credentials (for AI model access)


## How It Works & Set Up

### 1. Setup Google Drive Trigger

- Configure New Proposal Upload Trigger
- Select the folder where proposals will be uploaded
- Event: fileCreated

### 2. Download and Extract Proposal

- Use Download Proposal node to fetch file
- Use Read Proposal Text node to extract content

### 3. Extract Client Information

- Use Extract Client Info (Code node)
- Extract clientName using regex from text
- Store full proposal as currentProposal

### 4. Fetch Winning Proposals

- Configure Get Winning Proposal Data (Knowledge Base)
- Connect Google Sheet
- Filter where status = Won

### 5. Combine Data

- Use Combine Proposal Data (Merge node)
- Combine current proposal and past proposal

### 6. AI Analysis

- Use AI Proposal Gap Analyzer
- Provide prompt to compare proposals
- Generate structured insights (8–10 bullet points)

### 7. Format Output

- Use Format Analysis Output
- Map clientName and analysisSummary

### 8. Save to Salesforce

- Use Save Insights to Salesforce
- Create Opportunity
- Add insights in description

### 9. Prepare Final Output

- Use Prepare Final Output (Merge node)

### 10. Add Delay (Optional Control)

- Use Wait for Save node (2 seconds delay)

### 11. Send Slack Notification

- Use Send Notification to Slack
- Send formatted message with insights


## How To Customize Nodes

- **Extract Client Info:** Modify regex if proposal format changes
- **Google Sheets Node:** Change filter or add more columns
- **AI Prompt:** Customize output format or analysis depth
- **Salesforce Node:** Change stage, fields or object type
- **Slack Node:** Update message format or channel
- **Wait Node:** Adjust delay time if needed


## Add-ons

- Add email notification (Gmail node)
- Store results in Google Sheets for history
- Add error handling with IF node
- Add multiple proposal comparison logic
- Integrate dashboard (Notion, Airtable, etc.)


## Use Case Examples

- Improving proposal quality before client submission
- Training new sales team members using past wins
- Automating proposal review workflows
- Identifying common gaps in losing proposals
- Tracking proposal insights in CRM  
  There can be many more use cases depending on how you extend this workflow.


## Troubleshooting Guide

| Issue                       | Possible Cause                 | Solution                                  |
| --------------------------- | ------------------------------ | ----------------------------------------- |
| No trigger on file upload   | Incorrect folder selected      | Verify Google Drive folder ID             |
| Client name not extracted   | Proposal format mismatch       | Update regex in Code node                 |
| No data from Google Sheets  | Filter mismatch (status = Won) | Check column name and values              |
| AI output empty             | Prompt or input missing        | Verify merged data structure              |
| Salesforce error            | Invalid credentials or field   | Check API credentials and field mapping   |
| Slack message not sent      | Wrong channel or auth issue    | Reconnect Slack credentials               |
| Workflow stops before Slack | Wait node misconfigured        | Ensure correct connection after Wait node |


## Need Help?

If you need assistance setting up this workflow, customizing nodes or adding advanced features, we’re here to help. Whether it's integrating additional tools, improving AI analysis or building custom automation workflows tailored to your business needs, feel free to reach out to our [n8n developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/). Get expert help to scale your automation and build powerful AI-driven workflows efficiently.

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Salesforce, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
