# 📊 Analyze SEC 10-K/10-Q sentiment with OpenAI, Google Sheets, and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily to check SEC EDGAR for the latest 10-K or 10-Q filing for a target company, extracts Risk Factors and MD&A text, analyzes sentiment and risk with OpenAI, then logs results to Google Sheets and posts an alert to Slack.

## How it works
1. Runs once per day on a schedule.
2. Calls the SEC EDGAR submissions API for a specific CIK and selects the newest 10-K or 10-Q filing, including its document URL.
3. Looks up the filing accession number in Google Sheets to determine whether the filing has already been processed.
4. For a new filing, downloads the filing’s primary document from SEC EDGAR and extracts the Risk Factors and Management’s Discussion and Analysis (MD&A) sections from the HTML.
5. Filters the extracted text to a keyword-focused subset and sends it to OpenAI to return a structured JSON sentiment, risk level, key risks, outlook, and financial highlights.
6. Appends the combined filing metadata and OpenAI analysis to Google Sheets and sends a formatted summary message to a Slack channel.

## Setup
1. Create an OpenAI credential in n8n and select the model you want to use in the OpenAI node.
2. Connect a Google Sheets OAuth credential and update the spreadsheet ID, sheet tab, and column names so the workflow can both look up by accessionNumber and append analysis rows.
3. Connect a Slack credential and set the destination channel for alerts.
4. Update the SEC EDGAR submissions endpoint (CIK) and ensure required SEC headers (especially a valid User-Agent) are set for all SEC requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
