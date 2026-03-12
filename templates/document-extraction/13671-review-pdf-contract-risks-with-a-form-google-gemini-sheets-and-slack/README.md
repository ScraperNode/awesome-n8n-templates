# 🔬 Review PDF contract risks with a form, Google Gemini, Sheets, and Slack

> ⚡ **47 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

Legal teams, operations managers, and freelancers who review contracts regularly and want to catch risky clauses before signing. Ideal for small teams without dedicated legal counsel.

## What this workflow does

This workflow automates contract risk analysis using AI. A user uploads a PDF contract through a web form and selects the contract type. The Code node extracts text from the PDF, then Google Gemini analyzes the full contract for risky clauses, unfavorable terms, and missing legal protections. Each clause gets a severity rating (high, medium, low) with a suggested fix. The parsed results are logged to Google Sheets for tracking, and if the overall risk score exceeds your threshold, a Slack alert fires immediately so nothing slips through.

## How to set up

1. Get a free Google Gemini API key from Google AI Studio
2. Connect your Google Sheets account and create a spreadsheet called "Contract Reviews"
3. Connect your Slack workspace and select the channel for risk alerts
4. Activate the workflow and share the form URL with your team

## Requirements

- Google Gemini API key (free tier available)
- Google Sheets account
- Slack workspace with a channel for alerts
- n8n instance (self-hosted or cloud)

## How to customize

- Edit the AI prompt in the "Analyze Contract" node to focus on specific clause types like indemnification or IP assignment
- Change the risk threshold in the "Check Risk Level" node (default triggers on scores above 7)
- Add columns to the Sheets node for additional tracking fields like reviewer name or department

## 🔗 Nodes Used

Google Sheets, Slack, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
