# 🔬 Recommend supplier consolidation with Google Sheets, Groq, Slack and Gmail

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to read supplier spend data from Google Sheets, detect overlapping suppliers across departments, estimate potential consolidation savings, and use Groq-hosted LLM analysis to assess risk and produce recommendations that are sent to Slack and emailed via Gmail.

## How it works
1. Runs every week on a scheduled trigger.
2. Reads supplier records from a Google Sheets spreadsheet and keeps key fields like supplier name, department, spend, risk rating, and stakeholder email.
3. Groups and normalizes supplier names to find suppliers used by multiple departments and calculates estimated savings and an opportunity level.
4. Sends each consolidation opportunity to a Groq chat model to evaluate risk versus savings and return a JSON decision and recommendation.
5. Parses the AI JSON output, merges it with the calculated savings data, and formats a final recommendation record.
6. Posts the recommendation to a Slack channel and emails a formatted report to the supplier stakeholder email address.

## Setup
1. Connect your Google Sheets OAuth account and update the spreadsheet ID and sheet/tab to match your supplier records.
2. Add a Groq API credential for the chat model used to evaluate risk and recommendations.
3. Add Slack credentials and select the target channel where consolidation alerts should be posted.
4. Add Gmail OAuth2 credentials and ensure the sheet includes an Email column with the recipient address for each supplier (or replace it with a fixed recipient).

## Additional info
## How To Customize Nodes

### Schedule Trigger

Change weekly timing to daily, monthly or custom intervals.

### Google Sheets

Replace with:

- Airtable
- MySQL
- PostgreSQL
- ERP exports

### Savings Logic

Modify thresholds in **Identify Overlaps & Calculate Savings** node.

### AI Prompt

Customize prompt to include:

- ESG score
- Supplier performance
- Compliance score
- Contract renewal risk

### Notifications

Replace Gmail or Slack with:

- Microsoft Teams
- Discord
- WhatsApp
- SMS
- CRM updates

## Add-ons / Enhancements

- Auto-create procurement tickets
- Generate vendor negotiation reports
- Power BI dashboard integration
- SAP / Oracle ERP sync
- Multi-country supplier scoring
- Contract renewal automation
- Approval workflows
- Historical trend reporting
- Monthly savings leaderboard
- PDF executive summary reports

## Use Case Examples

### 1. IT Vendor Consolidation

Detect multiple software vendors across departments and recommend consolidation.

### 2. Office Supply Optimization

Find duplicate stationery suppliers and reduce fragmented purchasing.

### 3. Logistics Vendor Review

Identify overlapping transport partners across branches.

### 4. Marketing Agency Rationalization

Analyze agencies used by multiple business units.

### 5. Manufacturing Procurement Savings

Merge duplicate raw material suppliers to gain bulk pricing.

There can be many more similar use cases depending on your business model.

## Troubleshooting Guide

| Issue                      | Possible Cause         | Solution                      |
| -------------------------- | ---------------------- | ----------------------------- |
| Workflow not running       | Trigger inactive       | Activate workflow             |
| Google Sheets error        | Credential issue       | Reconnect Google Sheets       |
| No suppliers returned      | Wrong sheet columns    | Verify column names           |
| AI response parsing failed | Invalid AI output      | Improve prompt consistency    |
| Slack message failed       | Wrong channel or token | Reconnect Slack               |
| Email not sent             | Gmail auth expired     | Reconnect Gmail               |
| Wrong savings values       | Incorrect spend data   | Validate Monthly_Spend column |
| Duplicate suppliers missed | Name mismatch          | Improve normalization logic   |

## Need Help?

Want help setting up this workflow, customizing supplier scoring logic, adding dashboards, integrating ERP systems or building advanced procurement automations?

You can [hire n8n developers](https://www.weblineglobal.com/hire/n8n-developers/) to help you deploy and customize workflows like this for real business use cases including AI automation, procurement systems, finance workflows and enterprise integrations.

Whether you need small changes or a fully custom automation platform, professional assistance can save time and deliver faster ROI.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
