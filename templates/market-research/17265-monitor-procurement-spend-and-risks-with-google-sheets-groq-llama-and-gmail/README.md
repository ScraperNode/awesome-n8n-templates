# 📊 Monitor procurement spend and risks with Google Sheets, Groq Llama and Gmail

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to pull procurement transactions and department budgets from Google Sheets, calculate spend utilization and forecasts, generate executive risk insights with Groq Llama, write dashboard records back to Google Sheets, and email critical-risk alerts via Gmail.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads procurement transactions and department budget/threshold data from Google Sheets and combines them by department.
3. Aggregates spend per department, calculates utilization, remaining budget, projected monthly spend, vendor counts, pending transactions, and assigns SAFE/WARNING/CRITICAL risk levels.
4. Uses Groq (Llama 3.1) to generate an executive-friendly risk analysis and recommendations for each department based on the calculated metrics.
5. Builds organization-wide dashboard totals (spend, projections, alert counts, highest-spend and top-risk departments) and attaches workflow metadata.
6. Formats the results into executive summary, department insight, and risk alert records and appends them into separate Google Sheets tabs.
7. Sends a Gmail escalation email when a CRITICAL risk alert record is detected.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the target spreadsheet ID and tab names for reading raw spend data and department budgets.
2. Connect a Groq API credential and ensure the selected Groq chat model is available in your account.
3. Connect Gmail OAuth2 credentials and update the alert recipient address used for critical procurement escalation emails.
4. Ensure your source sheets include the expected columns (for example: department, amount, vendor, payment_status, monthly_budget, warning_threshold, critical_threshold, budget_owner) and your output tabs exist (Executive_Summary, Department_Insights, Risk_Alerts_Dashboard).
5. Adjust the schedule interval and (optionally) the budget utilization thresholds to match your organization’s cadence and policy.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
