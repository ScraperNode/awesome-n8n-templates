# 🔧 Identify enterprise white space opportunities with Salesforce, Gemini and Gmail

> ⚡ **5 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow runs weekly to find cross-sell white space in Salesforce enterprise accounts by comparing Closed Won products to an ERP product catalog, then uses Google Gemini to generate the top opportunities, creates a follow-up Salesforce Task, emails the account owner via Gmail, and logs results in Google Sheets.

## How it works
1. Runs every Monday at 06:00 using a schedule trigger.
2. Pulls Salesforce accounts with AnnualRevenue greater than $100,000 and processes them in batches.
3. For each account, queries Salesforce Closed Won Opportunity Line Items and fetches the full ERP product catalog over HTTP.
4. Calculates product coverage and white space (catalog items not yet purchased) and builds an account context summary.
5. Checks a Google Sheets “memory” tab to skip accounts already processed in the current ISO week.
6. Sends the account context and white space list to Google Gemini to produce a JSON response with the top 3 expansion opportunities plus a suggested Salesforce task and HTML email.
7. If the AI response parses successfully, creates a Salesforce Task, emails the account owner via Gmail, and appends the outcomes to Google Sheets; otherwise, logs the parse error and continues to the next account.

## Setup
1. Add Salesforce OAuth credentials and ensure OpportunityLineItem records include Product2.Name for Closed Won opportunities.
2. Update the ERP catalog HTTP endpoint (the template uses dummyjson.com for demo data) to point to your real product catalog API.
3. Add Google Gemini (PaLM/Gemini) API credentials and confirm the selected Gemini model name matches what your account can access.
4. Add Google Sheets credentials and set up a spreadsheet/tab with columns such as account_id and processed_week (plus any reporting columns you want to retain) to track weekly processing.
5. Add Gmail OAuth credentials and ensure Salesforce Account Owner emails are populated so messages can be sent to the right recipients.
6. Adjust the cron expression in the schedule trigger if you want a different run day/time.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Salesforce, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
