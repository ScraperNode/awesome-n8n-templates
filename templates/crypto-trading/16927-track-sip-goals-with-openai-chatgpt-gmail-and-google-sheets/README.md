# 📈 Track SIP goals with OpenAI ChatGPT, Gmail and Google Sheets

> ⚡ **43 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow collects SIP and mutual fund details via an n8n Form, calculates goal and performance metrics, generates a personalized advisory using OpenAI, emails a color-coded HTML report via Gmail, and appends each submission to a Google Sheets log for ongoing tracking.

## How it works
1. Receives an investor submission through an n8n Form with SIP, fund, and goal details.
2. Calculates months invested, total invested, returns, an approximate CAGR, goal completion percentage, and an estimated monthly top-up needed to reach the goal.
3. Sends the calculated metrics to OpenAI Chat Completions to generate a structured, plain-English advisory (including ELSS 80C context when applicable).
4. Parses the AI response with a fallback advisory if parsing fails, and assigns colors for performance, returns, and goal progress.
5. Builds a color-coded HTML email report with KPI cards, a goal progress bar, and the advisory sections.
6. Appends the submission and calculated metrics to a Google Sheets “SIP Log” tab and emails the report to the investor via Gmail.

## Setup
1. Add an OpenAI API credential and ensure the OpenAI Chat Completions endpoint is accessible from your n8n instance.
2. Connect Google Sheets OAuth2 credentials, create a spreadsheet with a “SIP Log” sheet, and replace `YOUR_SIP_TRACKER_SHEET_ID` with your document ID.
3. Connect Gmail OAuth2 credentials and confirm the sender account is allowed to send emails to your form recipients.
4. Activate the workflow and share the Form URL (path `sip-tracker`) so investors can submit their SIP details.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
