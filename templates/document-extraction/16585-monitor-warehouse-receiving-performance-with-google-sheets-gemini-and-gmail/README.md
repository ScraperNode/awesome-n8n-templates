# 🔬 Monitor warehouse receiving performance with Google Sheets, Gemini, and Gmail

> ⚡ **28 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs hourly to analyze warehouse receiving logs from Google Sheets, calculates per-user performance and compliance metrics, enriches results with department data, uses Google Gemini to generate recommendations for flagged users, emails managers via Gmail when escalation is needed, and appends results to an analytics dashboard sheet.

## How it works
1. Runs every hour on a schedule trigger.
2. Reads receiving log rows from Google Sheets and normalizes key fields like duration, errors, and compliance.
3. Aggregates the log data by user_id and computes performance status, severity score, and alert tier based on time, errors, and compliance rate.
4. Looks up each user’s department and manager email in a Google Sheets “Departments” tab and attaches this context to the analysis.
5. For users not rated “good,” sends the metrics to Google Gemini to generate structured root-cause and action-step recommendations.
6. If the alert tier is not “none,” sends an info/warning or critical escalation email via Gmail (using manager_email when available).
7. Appends the final per-user analysis (metrics, issues, recommendations, and whether an email was sent) to a Google Sheets “AnalyticsDashboard” tab.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the spreadsheet and tab IDs for ReceivingLogs, Departments, and AnalyticsDashboard.
2. Ensure ReceivingLogs includes user_id, duration, errors, and compliance columns, and ensure user_id matches the Departments sheet.
3. Populate the Departments sheet with user_id, department, and manager_email values for routing alerts.
4. Add Google Gemini (PaLM) API credentials for the recommendation step.
5. Add Gmail OAuth2 credentials and confirm the recipient behavior (manager_email fallback address) and email content meet your escalation requirements.

## Requirements
- [n8n instance (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account with: ReceivingLogs sheet, Departments sheet, AnalyticsDashboard sheet
- Google Gemini API credentials
- Gmail account (for sending emails)
- Structured data with the following fields: `user_id`, `duration`, `errors`, `compliance`

## Customization
- **Schedule Node**: Change frequency (e.g., daily instead of hourly)
- **Performance Thresholds (Code Node)**: Adjust Duration limit (default: 15 min), Error threshold (default: 5) and Compliance threshold (default: 90%)
- **AI Prompt**: Modify tone, format, or output structure
- **Email Content**: Customize subject lines, messaging and Add CC/BCC recipients
- **Google Sheets Mapping**: Add more fields or modify column mappings

## Additional info
##  Who’s It For

- Warehouse and logistics managers  
- Procurement and operations teams  
- Process improvement analysts  
- Businesses using Google Sheets for operational tracking  
- Organizations looking to automate performance monitoring  

##  Add-Ons & Enhancements

- Slack or Microsoft Teams alerts  
- Dashboard visualization (Power BI / Looker Studio)  
- Historical trend analysis  
- Auto task creation in tools like Jira or Trello  
- Role-based escalation (multi-level approvals)  

##  Use Case Examples

1. Monitor warehouse staff performance in real-time  
2. Detect compliance violations in procurement processes  
3. Identify employees with frequent operational errors  
4. Automate manager notifications for performance issues  
5. Build a performance analytics dashboard for leadership  

There can be many more use cases depending on your business workflow and data structure.

##  Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data fetched | Incorrect Google Sheets connection | Verify credentials and sheet ID |
| Incorrect calculations | Data format mismatch | Ensure numeric fields are properly formatted |
| AI not generating output | Gemini API issue | Check API key and quota |
| Emails not sent | Gmail credentials missing | Reconnect Gmail OAuth |
| Missing department info | user_id mismatch | Ensure consistent IDs across sheets |
| Workflow not triggering | Schedule misconfigured | Verify trigger interval |

##  Need Help?

If you need assistance setting up this workflow, customizing it for your business or adding advanced features, feel free to reach out.

**WeblineIndia** can help you:
- Customize workflows to fit your operations  
- Integrate additional tools and platforms  
- [Build scalable automation solutions](https://www.weblineindia.com/process-automation-solutions.html)
- Add advanced analytics and reporting  

[Get in touch](https://www.weblineindia.com/contact-us.html) to turn your business processes into efficient, automated systems.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
