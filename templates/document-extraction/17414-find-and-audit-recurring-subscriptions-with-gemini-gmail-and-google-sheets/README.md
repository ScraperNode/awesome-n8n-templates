# 🔬 Find and audit recurring subscriptions with Gemini, Gmail and Google Sheets

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a CSV bank statement via an n8n form, detects stable recurring charges, and uses Google Gemini to classify subscriptions and recommend keep/review/cancel. It emails the results via Gmail and saves each subscription to Google Sheets for ongoing tracking.

## How it works
1. Receives a form submission with the user’s email address and a CSV statement upload.
2. Extracts transactions from the CSV and groups similar descriptions to detect recurring charges that appear at least twice with a stable amount.
3. If no recurring charges are found, sends a Gmail message asking the user to upload a longer statement period.
4. If recurring charges are found, sends the summarized list to Google Gemini to identify each service, estimate monthly/annual costs, and recommend keep/review/cancel, then parses the structured results.
5. Emails the user a subscription audit summary, including total annual cost, potential savings, and which subscriptions to keep versus cancel or review.
6. Splits the subscription list into individual items and appends or updates rows in a Google Sheets “Subscriptions” tab so repeated audits update existing entries.

## Setup
1. Create and connect credentials for Google Gemini (PaLM) API, Gmail OAuth2, and Google Sheets OAuth2.
2. Select the target Google Sheets spreadsheet and set the sheet/tab name to “Subscriptions” in the Google Sheets node.
3. Share the n8n form URL and ensure users upload 3–12 months of statements as a CSV with Date, Description (or similar), and Amount (or similar) columns.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
