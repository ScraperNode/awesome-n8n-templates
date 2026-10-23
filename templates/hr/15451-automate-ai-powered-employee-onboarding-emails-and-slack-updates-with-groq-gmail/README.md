# 👥 Automate AI-powered employee onboarding emails and Slack updates with Groq, Gmail, and Google Sheets

> ⚡ **46 views** · 👥 [HR & Recruitment](../)

## Description

## How it works
1. Triggered every 4 hours (or manually) to check all active products in Google Sheets
2. Each product is evaluated for stock level and urgency against its reorder threshold
3. Products with sufficient stock are skipped; duplicate daily orders are prevented
4. OpenAI generates a professional Purchase Order message for products needing reorder
5. PO is posted to a Slack channel; inventory sheet is updated and reorder log appended
6. A summary report is posted to Slack after each full run
7. An error handler sends a Slack alert if anything fails

## Set up steps
- Estimated time: ~15 minutes
- Add your OpenAI API key; connect Slack and Google Sheets via OAuth2
- Create a Google Sheet with a Products tab and a Reorder Log tab (column names in setup sticky note)
- Select your spreadsheet in all Google Sheets nodes
- Select your Slack channels in the three Slack nodes
- Activate the workflow

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Gmail, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
