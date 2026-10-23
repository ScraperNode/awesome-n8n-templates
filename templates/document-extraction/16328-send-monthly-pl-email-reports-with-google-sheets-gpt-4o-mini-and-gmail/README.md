# 🔬 Send monthly P&L email reports with Google Sheets, GPT-4o-mini and Gmail

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs monthly and pulls income and expense data from Google Sheets, calculates a prior-month profit and loss statement with budget vs actual variances, uses OpenAI GPT-4o-mini to generate an executive HTML report, emails it via Gmail, and logs key metrics back to Google Sheets.

## How it works
1. Runs on a schedule on the 5th day of every month.
2. Calculates the previous month and year to define the reporting period.
3. Fetches all rows from the Income and Expenses tabs in Google Sheets.
4. Filters the sheet data to the reporting period and calculates Revenue, COGS, Gross Profit, Operating Expenses, Net Profit, and related variances and margins.
5. Sends the structured P&L text to OpenAI (GPT-4o-mini) to generate a full executive financial report in HTML.
6. Cleans the returned HTML and then emails the report via Gmail while also appending the run metrics to a “Report Log” tab in Google Sheets.

## Setup
1. Create a Google Sheet with tabs named Income, Expenses, and Report Log, using numeric Month and Year columns and the required fields (Income: Category, Budget, Actual, Month, Year; Expenses: Category, Type, Budget, Actual, Month, Year).
2. Add Google Sheets credentials in n8n and replace the Income/Expense document IDs (and the logging document ID) with your sheet ID(s).
3. Add an OpenAI API credential and update the system prompt to replace YOUR_COMPANY_NAME.
4. Add Gmail credentials and set the recipient email address used to send the report.
5. Ensure the previous month has at least a few Income and Expense rows so the workflow does not error due to missing period data.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
