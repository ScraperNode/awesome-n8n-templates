# 🔬 Monitor budget variance with Google Sheets, Gemini, Slack, and Gmail

> ⚡ **24 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to compare department budgets and actual spend from Google Sheets, calculates variance, uses Google Gemini to generate root-cause insights, sends Slack alerts when variance breaches a threshold, logs results back to Google Sheets, and emails a daily report via Gmail.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Reads budget and actual spend data from two Google Sheets tabs and matches records by Department.
3. Calculates spend variance and variance percentage, then assigns a status label (Healthy/Warning/Critical) and run context like date and summary.
4. Sends the variance details to Google Gemini to generate a JSON response with root cause, risk level, and recommendations.
5. Checks whether the variance percentage is greater than 10% and sends a Slack alert with the AI insights when the threshold is exceeded.
6. Appends the final analysis (including whether an alert was sent) to a Google Sheets log and sends the same report via Gmail.

## Setup
1. Connect Google Sheets OAuth credentials and set the correct spreadsheet and sheet tabs for Budget Data, Actual spend, and the Final report log.
2. Add a Google Gemini (PaLM) API credential for the Gemini model used in the analysis step.
3. Add Slack OAuth2 credentials and choose the channel where budget variance alerts should be posted.
4. Add Gmail OAuth2 credentials and set the recipient(s) for the daily budget monitoring email.
5. Update the variance alert threshold (currently >10% variance) and status thresholds (10%/20%) to match your policy.

## Requirements
- [**n8n instance** (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets OAuth2 credentials
- Google Gemini (PaLM) API credentials
- Slack OAuth2 credentials
- Gmail OAuth2 credentials
- Properly structured Google Sheets:
- Budget Sheet → `Department`, `Budget`
- Spend Sheet → `Department`, `Spend`
- Report Sheet → Predefined columns for logging

## Customization
- **Variance Threshold**: Modify IF node condition (`> 10`) to any value
- Update logic in *Add Status & Context Details* node: Critical: > 20% or Warning: > 10%
- **Gemini Prompt**: Customize prompt inside *AI-Based Budget Analysis* node to get different insights
- **Slack Message Format**: Modify message body to include/exclude fields
- **Email Template**: Customize HTML in Gmail node for branding or formatting
- **Schedule Time**: Change trigger time as per business needs

## Additional info
##  Who’s It For

- Finance and accounting teams
- Procurement departments
- Operations managers
- Business analysts
- Startups and enterprises managing departmental budgets

##  Add-ons (Enhancements)

- Add **monthly or weekly summary reports**
- Integrate **Power BI / dashboards** for visualization
- Add **multi-level approvals for high-risk alerts**
- Store data in a **database (MySQL/PostgreSQL)** instead of Sheets
- Add **SMS or WhatsApp alerts** for critical cases
- Include **historical trend analysis using AI**

##  Use Case Examples

1. **Corporate Budget Monitoring**

Track departmental spending daily and prevent overspending

2. **Procurement Cost Control**

Identify supplier-related cost deviations early

3. **Startup Financial Discipline**

Maintain strict control over limited budgets

4. **Project-Based Budget Tracking**

Monitor cost overruns across multiple projects

5. **Audit & Compliance Reporting**

Maintain a clear log of financial decisions and anomalies

These are just a few examples—this workflow can be adapted for many other financial monitoring scenarios.

##  Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect Google Sheets configuration | Verify sheet IDs and column names |
| Merge not working | Department names mismatch | Ensure consistent naming across sheets |
| Wrong variance values | Non-numeric data | Ensure Budget and Spend fields are numbers |
| No Slack alerts | Condition not met or Slack not configured | Check IF condition and Slack credentials |
| AI output missing | Gemini API issue | Verify API credentials and prompt |
| Email not sent | Gmail credentials issue | Reconnect Gmail OAuth |
| Data not logged | Sheet mapping issue | Check column mapping in final node |
| Workflow not running | Trigger inactive | Activate workflow |


##  Need Help?

If you need help setting up this workflow, customizing it for your business, or adding advanced features like dashboards, AI enhancements or integrations, our [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is here to assist you.

We specialize in building scalable automation workflows tailored to your business needs.

[Reach out to us](https://www.weblineindia.com/contact-us.html) for:
- Workflow setup & deployment
- Custom automation solutions
- AI-powered business workflows
- Integration with enterprise systems

Let us help you turn automation into a competitive advantage.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
