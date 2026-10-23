# 🔬 Assess procurement inflation risk with Groq, Google Sheets, World Bank and Slack

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs weekly to combine procurement spend and budget data from Google Sheets with inflation data from the World Bank API and USD/INR FX rates, then uses Groq (OpenAI gpt-oss-120b) to generate risk narratives, updates a dashboard sheet, emails category updates via Gmail, and sends urgent Slack alerts.

## How it works
1. Runs every week on a schedule.
2. Reads historical spend and category budgets from Google Sheets and pulls the latest US CPI inflation from the World Bank API plus live USD exchange rates from open.er-api.com.
3. Merges the datasets by category, standardizes field names, and iterates through each procurement category in batches.
4. Calculates inflation-adjusted spend, converts it to local currency using the USD/INR rate, and computes budget variance and margin-leakage risk.
5. For categories that are over budget, uses Groq to generate a plain-English margin impact analysis.
6. For categories that breach the inflation threshold, uses Groq to propose immediate supply-chain mitigation actions and posts an urgent alert to Slack.
7. Formats the resulting status report, updates the matching category row in a Google Sheets dashboard, and emails a per-category update via Gmail.

## Setup
1. Add Google Sheets credentials and update the spreadsheet IDs, sheet names, and matching column (category) for the spend, budget, and dashboard update steps.
2. Ensure the spend sheet contains fields used by the workflow (for example: category, monthly_spend, budget_amount, and optionally margin_goal) and that your dashboard sheet has columns to write status and spend.
3. Add a Groq API credential and confirm the selected model (openai/gpt-oss-120b) for both AI analysis steps.
4. Add a Gmail credential and set the recipient address and email subject/body as needed.
5. Add a Slack credential, choose the target user/channel, and adjust the alert text and inflation/overspend thresholds to match your policy.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
