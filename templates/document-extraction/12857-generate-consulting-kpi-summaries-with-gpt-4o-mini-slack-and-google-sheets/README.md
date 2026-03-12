# 🔬 Generate consulting KPI summaries with GPT-4o-mini, Slack and Google Sheets

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Consulting KPI Reporting Automation with AI Summaries

**Author:** Hyrum Hurst, AI Automation Engineer at QuarterSmart  
**Contact:** [hyrum@quartersmart.com](mailto:hyrum@quartersmart.com)

This workflow automates the process of collecting, analyzing, and reporting KPIs for consulting firms. Designed for strategy, management, and IT consulting agencies, it pulls data from client dashboards or internal tools, aggregates it in Google Sheets, and generates actionable executive summaries using GPT-4o-mini. Alerts and detailed reports are sent to Slack channels and email, ensuring your team and clients are always informed. Critical KPIs trigger immediate notifications, allowing fast responses to underperforming metrics.

## How It Works
1. **Scheduled Trigger:** Cron node runs daily or weekly.
2. **Data Collection:** Pull KPI data from client dashboards using HTTP Request nodes.
3. **Data Structuring:** Use Set nodes to standardize KPI metrics.
4. **Logging:** Aggregate all data into Google Sheets for tracking and historical reporting.
5. **AI Analysis:** GPT-4o-mini generates executive summaries with actionable insights.
6. **Team Alerts:** Post KPI summary and critical alerts to Slack.
7. **Client Reporting:** Send full KPI report via Gmail.
8. **Conditional Routing:** Switch node checks thresholds → critical vs normal performance.
9. **Integration & Follow-Up:** Merge and optional Calendar nodes schedule review meetings.
10. **Final Logging:** Consolidated results for internal tracking and metrics.

## Use Cases
- Strategy Consulting Agencies: automated KPI reporting for multiple clients
- IT Consulting Firms: track uptime, ticket resolution, and project KPIs
- Management Consultants: summarize project progress and client outcomes
- Digital Marketing Consultants: track campaign performance metrics
- Financial Advisory Firms: monitor portfolio KPIs and compliance stats
- HR Consulting Firms: track recruitment and employee engagement KPIs
- Operations Consultants: automated internal performance reporting
- SaaS-focused Consultants: KPIs from client software usage
- Small Business Advisors: weekly performance insights for SMB clients

This template provides a fully automated, reproducible workflow that saves time, standardizes KPI tracking, and delivers professional, AI-generated insights at scale.

For setup help, customization, or integration into your consulting agency, contact **Hyrum Hurst, AI Automation Engineer at QuarterSmart** at [hyrum@quartersmart.com](mailto:hyrum@quartersmart.com).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
