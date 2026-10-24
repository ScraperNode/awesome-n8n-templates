# 🎫 Triage insurance claims with Jev, DeepSeek, Slack, Gmail, and Google Sheets

> ⚡ **46 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives insurance claims via webhook, checks prior claimant history in Google Sheets, uses Jev Router to classify claim type and risk, routes uncertain or risky cases to Slack for human approval, calculates a suggested payout with DeepSeek, emails the customer and logs outcomes back to Google Sheets.

## How it works
1. Receives a POST webhook submission containing claim details (claimant name, email, description, amount, and attachment count).
2. Looks up the claimant in a Google Sheets “Claims” tab to count prior claims and appends that context to the claim summary text.
3. Sends the enriched claim text to Jev Router to classify claim type, score severity, and estimate fraud risk and customer distress with confidence values.
4. Routes the claim to auto-processing or to human review based on fraud risk, low model confidence, high severity, or a high claimed amount.
5. For review cases, drafts an internal reviewer briefing with DeepSeek, posts it to Slack with approve/reject buttons, and records the reviewer’s decision.
6. For approved claims (auto-approved or reviewer-approved), uses a DeepSeek-powered agent with a calculator tool to compute a suggested payout and drafts a short acknowledgment email.
7. Sends the email via Gmail and appends the claim details, scores, confidence values, status, and timestamps to Google Sheets for an audit trail.

## Setup
1. Create a webhook source that can POST JSON to the workflow’s “insurance-claim” webhook URL and ensure it sends claimant_name, claimant_email, description, amount, and attachments_count.
2. Connect Google Sheets OAuth credentials and update the spreadsheet ID/sheet name if needed, and ensure the “Claims” sheet includes the columns used for lookup and logging (for example: claimant, claim_text, amount, claim_type, severity_score, fraud_risk_probability, customer_tone_probability, status, timestamp).
3. Install and configure the n8n-nodes-jev-router community node and add your Jev API credentials.
4. Add Slack credentials, set the target channel for reviewer approvals, and ensure the bot can post messages and use interactive approvals.
5. Add DeepSeek API credentials for the LLM steps and connect Gmail OAuth2 credentials, then replace the hard-coded recipient email address in the Gmail step with the claimant’s email if desired.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
