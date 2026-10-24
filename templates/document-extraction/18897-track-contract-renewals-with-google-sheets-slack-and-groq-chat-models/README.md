# 🔬 Track contract renewals with Google Sheets, Slack, and Groq chat models

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs weekly to review contracts stored in Google Sheets, calculates days to expiry and a renewal priority score, uses a Groq-hosted chat model to draft renewal recommendations for high-priority items, posts alerts to Slack, and updates each contract row as processed.

## How it works
1. Runs weekly on a schedule trigger.
2. Reads contract rows from a Google Sheets contract tracker and keeps only rows that are not marked as processed.
3. Checks that required fields (ContractID, SupplierName, and ExpiryDate) are present, and sends a Slack message and marks the row as processed in Google Sheets when validation fails.
4. Calculates DaysToExpiry and a priority score/level using contract value, risk level, performance score, and expiry urgency.
5. For contracts scored as High priority, uses a Groq chat model (via LangChain) to generate a short renewal strategy, then posts a formatted renewal alert to a Slack channel.
6. Updates the matching Google Sheets row with Processed=Yes, the computed PriorityLevel, and either the AI recommendation (high priority) or a “monitor for now” recommendation (non-high priority).

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet name to point to your contract tracker.
2. Add a Slack credential and set the target Slack channel for renewal and invalid-data alerts.
3. Add a Groq API credential for the LangChain chat model used to generate renewal strategies.
4. Ensure your Google Sheet includes the columns used by the workflow (at least ContractID, SupplierName, ExpiryDate, ContractValue, RiskLevel, PerformanceScore, Processed, PriorityLevel, and Recommendation) and that ContractID values are unique for row matching.
5. Adjust the weekly schedule timing and the scoring thresholds in the code steps if you want different renewal urgency rules.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
