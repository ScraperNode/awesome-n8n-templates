# 🔧 Generate construction bid estimates with Azure OpenAI, Google Docs and Sheets

> ⚡ **183 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow collects a construction Scope of Work PDF via an n8n form, uses Azure OpenAI to extract BOQ-style line items, prices them using a Google Sheets unit-rate database, generates a formatted Google Docs bid report, logs the estimate to Google Sheets, and emails the result via Gmail.

## How it works
1. Receives project details and a Scope of Work PDF through an n8n form submission.
2. Extracts text from the uploaded PDF and sends it to Azure OpenAI (GPT-4o-mini) to return structured JSON line items.
3. Cleans and parses the AI response into individual BOQ items enriched with project name, client name, and estimator email.
4. Looks up matching unit rates in a Google Sheets UnitRates sheet using keyword matching and applies category-based fallback rates when no match is found.
5. Calculates total cost per line item, aggregates all items, and builds a bid summary with category totals and grand totals including 18% GST.
6. Creates a Google Docs report, writes the full bid content into the document, and appends the generated estimate text to a Google Sheets BidLog sheet.
7. Emails the estimator via Gmail with key totals and a link to the Google Docs report.

## Setup
1. Add credentials for Azure OpenAI, Google Sheets OAuth2, Google Docs OAuth2, Gmail OAuth2, and Slack OAuth2 (for error alerts).
2. Create or update a Google Sheets file with a UnitRates sheet containing columns like “Description Keyword”, “Unit Rate (₹)”, and “Source / Project Ref”, and ensure a BidLog sheet exists for appended logs.
3. Replace the placeholder Google Sheets document ID and the Google Drive folder ID in the Google Sheets and Google Docs nodes.
4. Activate the workflow and share the generated n8n form URL with estimators so they can upload SOW PDFs and receive emailed estimates.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Google Docs, AI Agent, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
