# 🔬 Classify SES project emails with GPT-4.1 mini and save from Gmail to Sheets

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What this workflow does
This workflow monitors your Gmail inbox every minute and automatically extracts SES (System Engineering Service) project information from recruitment emails. It uses AI to classify emails and parse structured data, then appends project details to a Google Spreadsheet.

## Workflow steps
1. Gmail Trigger polls your inbox every minute
2. AI Project Classifier analyzes each email to determine if it's a project recruitment email
3. Parse JSON converts the AI response into structured data
4. Is Project Email? routes project emails forward; others are skipped
5. Set Spreadsheet Config sets the target spreadsheet ID and sheet name
6. Append to Spreadsheet writes the extracted project data as a new row

## Requirements
- Gmail OAuth2 credentials
- OpenAI API credentials
- Google Sheets OAuth2 credentials
- A Google Spreadsheet with a sheet named `Projects` (or update the sheet name in the Set Spreadsheet Config node)

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
