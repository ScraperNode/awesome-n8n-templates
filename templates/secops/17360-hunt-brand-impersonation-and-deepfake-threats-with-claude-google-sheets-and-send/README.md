# 🔒 Hunt brand impersonation and deepfake threats with Claude, Google Sheets and SendGrid

> ⚡ **77 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs every 4 hours to search a brand-monitoring API for lookalike accounts and mentions, uses Anthropic Claude to classify impersonation risk, logs results to Google Sheets, and sends a SendGrid email alert when critical or AI-voice scam threats are detected.

## How it works
1. Runs on a schedule trigger every 4 hours to start a new brand-impersonation scan.
2. Prepares the brand context (official domains/handles, keywords, logo description, executives, and scam patterns) and generates keyword and handle-variant queries across the configured platforms.
3. Sends the query batch to your brand-monitoring/social-listening API to fetch candidate accounts and mentions.
4. Uses Anthropic Claude (via the LangChain Agent node) to classify each candidate as impersonation or not, assign an impersonation type, and produce an AI risk score with rationale and recommended action.
5. Combines the AI risk score with reach, account age, and profile-image similarity signals to compute a composite 0–100 threat score, assign a priority tier, and decide whether escalation is required.
6. Appends all flagged scan rows to a Google Sheets “ImpersonationScans” tracker tab.
7. If any result is Critical tier or an AI-voice scam report, sends a SendGrid email alert with the top threats to the configured brand-protection inbox.

## Setup
1. Add Anthropic credentials and select a Claude chat model for the impersonation classification step.
2. Provide a brand-monitoring/social-listening API endpoint and replace the Authorization bearer token (YOUR_BRAND_MONITORING_API_KEY) in the HTTP request.
3. Create a Google Sheet with an “ImpersonationScans” tab, set YOUR_SHEET_ID in the Google Sheets append request, and connect Google OAuth2 credentials.
4. Add a SendGrid API key and replace YOUR_SENDGRID_API_KEY, then update the alert recipient and sender email addresses in the email request.
5. Update the brand context defaults (brand name, keywords, domains, official handles, and monitored platforms) and adjust the schedule interval and scoring thresholds to match your monitoring needs.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
