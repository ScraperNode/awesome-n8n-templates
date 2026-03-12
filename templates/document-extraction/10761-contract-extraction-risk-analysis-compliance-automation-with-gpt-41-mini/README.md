# 🔬 Contract extraction, risk analysis & compliance automation with GPT-4.1 Mini

> ⚡ **413 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
Scheduled triggers initiate automated contract reviews. The system fetches documents from cloud storage and email, then uses AI to extract key terms, obligations, and compliance requirements. Multi-model parsing identifies gaps, inconsistencies, and potential risks. A scoring engine evaluates severity and routes alerts to the appropriate channels. The workflow then updates the CLM system and produces audit-ready documentation for tracking and governance.

## Setup Instructions
1. **Storage:** Configure access to your Google Drive or webhook-based document repository.
2. **Email:** Connect Gmail to automatically ingest contract-related emails.
3. **AI Extraction:** Add the OpenAI API key and define extraction prompts for obligations and terms.
4. **CLM System:** Enter credentials for your contract lifecycle management platform.
5. **Alerts:** Set up Google Sheets logging and connect dashboard endpoints for risk and compliance alerts.

## Prerequisites
Cloud storage access; Gmail credentials; OpenAI API key; CLM system credentials; document processing license

## Use Cases
Contract renewal tracking; compliance audits; risk management; vendor agreement reviews; regulatory adherence monitoring

## Customization
Adjust risk thresholds; modify extraction rules; add Slack notifications; extend compliance frameworks 

## Benefits
Reduces review time 80%; catches compliance gaps; automates audit trails;

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
