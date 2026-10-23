# 🔬 Detect procurement conflicts of interest with Google Sheets, Slack and Groq

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to compare employee and supplier records in Google Sheets, score potential conflict-of-interest matches, and use Groq (LLM) to generate a neutral risk explanation. High-risk cases trigger a Slack alert, and medium/high-risk cases are logged to a Google Sheets audit tab.

## How it works
1. Runs every week on a schedule trigger.
2. Reads employee and supplier data from two Google Sheets tabs.
3. Compares each employee against each supplier, scoring potential conflicts using matches on names, emails, phones, addresses, city/last name signals, and transaction activity.
4. For each case above the scoring threshold, uses Groq to generate a short, neutral compliance explanation with recommended next steps.
5. Flags cases with a risk score of 70+ as high risk and posts a formatted alert to a Slack channel.
6. Appends high-risk and medium-risk cases (including score, reasons, and AI summary) to a Google Sheets “ConflictCases” tab for tracking.

## Setup
1. Create and populate a Google Sheets file with tabs for Employees, Suppliers, and a ConflictCases log, and ensure the columns used in the workflow (for example EmployeeName/Email/Phone/Address and Supplier owner/contact/spend fields) match your sheet headers.
2. Add Google Sheets credentials in n8n and update the spreadsheet ID and sheet/tab selections in the Google Sheets nodes if you use a different file.
3. Add a Groq API credential and confirm the selected model in the Groq chat model node.
4. Add Slack credentials, select the target channel (for example #conflict-of-interest), and adjust the alert message template if needed.

## Additional info
## How To Customize Nodes

- **Code Node (Scoring Logic)**
  - Adjust scoring weights (e.g., email match = 40 → change as needed)
  - Modify risk thresholds (e.g., High Risk ≥ 80)

- **IF Node**
  - Change high-risk threshold from 70 to desired value

- **AI Node**
  - Customize prompt for more detailed or shorter explanations

- **Slack Node**
  - Modify message format or channel

- **Google Sheets**
  - Add/remove columns as per reporting needs


## Add-ons

You can extend this workflow with:

- Email notifications for compliance teams
- Dashboard integration (Power BI / Tableau)
- Approval workflow for flagged cases
- Automatic case status updates (Resolved / Investigating)
- Historical trend analysis of conflicts


## Use Case Examples

1. Detecting employees linked to supplier ownership
2. Identifying suspicious vendor relationships in procurement
3. Monitoring high-spend suppliers for conflicts
4. Supporting internal audit investigations
5. Ensuring compliance with corporate governance policies

There can be many more use cases depending on business needs and data availability.


## Troubleshooting Guide

| Issue                              | Possible Cause                       | Solution                                   |
| ---------------------------------- | ------------------------------------ | ------------------------------------------ |
| No data fetched from Google Sheets | Wrong Sheet ID or permissions issue  | Verify document ID and OAuth credentials   |
| Workflow not triggering            | Schedule not configured properly     | Check trigger timing and activate workflow |
| No conflicts detected              | Data mismatch or normalization issue | Verify input data format and fields        |
| AI node not responding             | Missing or invalid API key           | Reconfigure Groq credentials               |
| Slack message not sent             | Wrong channel ID or permissions      | Check Slack credentials and channel access |
| Data not saved in Sheets           | Column mismatch                      | Ensure column names match mapping          |


## Need Help?

If you need assistance setting up this workflow or want to customize it for your business needs, feel free to reach out.

We at **WeblineIndia** specialize in [building intelligent automation workflows](https://www.weblineindia.com/process-automation-solutions.html) using n8n, AI and cloud integrations. Whether you need enhancements, integrations or a completely custom solution, our team is here to help.

👉 Contact WeblineIndia to:

- [Hire n8n developers](https://www.weblineindia.com/hire-n8n-developers/)
- Customize this workflow
- Add advanced AI capabilities
- Integrate with enterprise systems
- Build similar automation solutions

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
