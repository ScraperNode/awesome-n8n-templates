# 📊 Analyze procurement savings opportunities with Google Sheets, GPT-4o Mini, and Gmail

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday, analyzes procurement transactions from Google Sheets to detect savings opportunities, uses OpenAI (GPT-4o Mini) to generate recommendations and savings estimates, prioritizes the results, saves them back to Google Sheets, and emails a weekly top-5 savings report via Gmail.

## How it works
1. Runs on a schedule every Monday at 8:00 AM.
2. Reads procurement transaction rows from Google Sheets.
3. Aggregates the data to calculate spend by category and supplier, supplier counts per category, item-level price statistics, and preferred vs non-preferred spend.
4. Detects savings opportunities using rules for supplier fragmentation, price variance, maverick spend, and contract leakage.
5. Sends the detected opportunities to OpenAI (GPT-4o Mini) to produce structured analyses with savings estimates, effort levels, and recommended actions.
6. Scores and ranks opportunities by impact versus effort, classifies them (Strategic Initiative/Quick Win/Low Priority), and appends the results to a second Google Sheets tab.
7. Builds an HTML email with the top 5 opportunities by priority score and sends the weekly savings report via Gmail.

## Setup
1. Create a Google Sheets spreadsheet with a transactions tab that includes columns for Category, Supplier, Item Description, Quantity, Unit Price, Total Spend, Contract Price, and Preferred Supplier.
2. Add Google Sheets OAuth credentials in n8n and update the spreadsheet ID and sheet tabs used for reading transactions and appending opportunities.
3. Add an OpenAI credential (Chat Completions) and ensure the workflow can use the GPT-4o Mini model.
4. Create an output tab in Google Sheets with columns matching the fields the workflow appends (Analysis Date, Opportunity Type, Category, Description, Savings Amount, Effort Score, Priority Score, Classification, Status).
5. Add Gmail OAuth credentials and set the recipient(s) in the Gmail “Send Weekly Savings Report” step.
6. Update the failure alert email (and the execution URL placeholder) so error notifications go to the right stakeholders in your n8n environment.

## Additional info
## How To Customize Nodes

### Read Procurement Data

Customize:

- Data source sheet
- Additional procurement fields

### Opportunity Detection

Adjust thresholds such as:

- Supplier count limits
- Price variance percentages
- Contract leakage thresholds
- Maverick spend criteria

### AI Opportunity Analysis

Customize:

- Prompt instructions
- Savings assumptions
- Recommendation style
- OpenAI model

### Priority Scoring

Modify:

- Impact scoring logic
- Effort scoring weights
- Classification thresholds

### Email Report

Customize:

- Top opportunities count
- Email design
- Additional metrics
- Stakeholder groups


## Add-Ons

Possible enhancements include:

- Slack notifications
- Microsoft Teams alerts
- Power BI dashboards
- Looker Studio reporting
- Vendor performance scorecards
- Approval workflows
- Procurement KPI tracking
- Historical trend analysis
- Supplier risk monitoring
- Automated sourcing recommendations


## Use Case Examples

### 1. Supplier Consolidation

Identify categories with excessive supplier fragmentation and estimate consolidation savings.

### 2. Contract Compliance Monitoring

Detect purchases made above negotiated contract rates.

### 3. Maverick Spend Reduction

Monitor spending outside approved supplier programs.

### 4. Procurement Cost Optimization

Identify categories with the highest savings potential.

### 5. Executive Spend Reporting

Provide leadership with prioritized savings opportunities each week.

Additional use cases can be created by extending the business rules and AI analysis layer.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---------|---------|---------|
| No data returned from Google Sheets | Incorrect Sheet ID or permissions | Verify document access and credentials |
| AI node fails | Invalid OpenAI credentials | Reconnect OpenAI account |
| No opportunities detected | Dataset does not meet thresholds | Review detection rules and sample data |
| Email not sent | Gmail authentication issue | Reauthorize Gmail connection |
| Opportunities not saved | Destination sheet mismatch | Verify sheet mapping configuration |
| Incorrect savings estimates | AI output variation | Refine AI prompt instructions |
| Workflow stops unexpectedly | Node execution error | Review execution logs and error output |


## Need Help?

If you need assistance customizing this workflow or building additional procurement automation solutions, WeblineIndia can help with:

- n8n workflow customization
- Procurement automation
- AI-powered business process automation
- Dashboard development
- ERP and procurement system integrations
- Reporting and analytics solutions
- Custom workflow enhancements

Whether you need additional integrations, custom business rules or enterprise-grade procurement automation, professional support by [hiring n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) can help accelerate implementation and maximize business value.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
