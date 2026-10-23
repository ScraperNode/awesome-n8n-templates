# 🔬 Triage contract auto-renewal risks with Google Sheets, Groq, and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs on a daily schedule to review contract records in Google Sheets, calculates auto-renewal risk, uses a Groq-hosted chat model to generate renewal recommendations for flagged contracts, posts alerts to Slack, and logs each alert back to Google Sheets.

## How it works
1. Runs on a schedule trigger at 9:00 to start the contract review.
2. Reads contract rows from a Google Sheets spreadsheet and standardizes key fields like end date, auto-renewal clause, notice period, usage level, and supplier rating.
3. Calculates days remaining until the contract end date and assigns a renewal risk level (Low/Medium/High) based on auto-renewal, notice period timing, supplier rating, and usage level.
4. Filters to only Medium- and High-risk contracts that require procurement review.
5. Sends the contract details to a Groq chat model to generate a structured renewal recommendation (decision, reason, risk, and recommended action).
6. Posts a contract renewal alert with the risk details and AI recommendation to a Slack channel.
7. Waits for alert delivery and appends an audit entry to an AlertLog sheet in Google Sheets with the contract, risk level, days to end, timestamp, and action taken.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet names for the contract source sheet and the AlertLog destination sheet.
2. Add a Groq API credential for the chat model used to generate renewal recommendations.
3. Add Slack credentials and select the target channel where renewal alerts should be posted.
4. Ensure your contract sheet includes the expected columns (ContractID, SupplierName, ContractEndDate, AutoRenewalClause, NoticePeriodDays, UsageLevel, SupplierRating) and that dates and numbers are formatted consistently.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
