# 🔬 Review your budget from bank statement CSV with Google Gemini and Gmail

> ⚡ **38 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a bank statement CSV and monthly budget via an n8n form, summarizes spending totals and top merchants, gets a structured budget review from Google Gemini, logs the result to Google Sheets, and emails a tailored report via Gmail based on whether you are over, on track, or under budget.

## How it works
1. Receives a form submission with the user’s email, monthly budget, and an uploaded bank/card statement CSV.
2. Extracts transaction rows from the CSV and calculates total spend plus a top-spending-by-merchant summary.
3. Sends only the aggregated totals and top merchants to Google Gemini to generate a structured budget review with status, overspend areas, savings opportunities, a summary, and a monthly plan.
4. If Gemini fails to return a usable review, sends a failure email to the user with CSV formatting guidance.
5. Formats the AI output into email-ready fields (including budget difference and bullet lists) and appends the review to a Google Sheets spreadsheet.
6. Routes by budget status and sends a tailored Gmail message (over budget, on track, under budget, or a generic fallback) to the submitted email address.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select the target Google Sheets spreadsheet and ensure it has a sheet/tab for appended rows (for example, “Budget Reviews”).
3. Activate the form trigger and share the generated form URL so users can upload a CSV statement and enter their budget.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
