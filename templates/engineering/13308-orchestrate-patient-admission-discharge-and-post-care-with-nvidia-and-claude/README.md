# ⚒️ Orchestrate patient admission, discharge and post-care with NVIDIA and Claude

> ⚡ **20 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates patient risk assessment and clinical alerting for healthcare providers using NVIDIA AI models. Designed for hospitals, clinics, and healthcare organizations, it addresses the critical challenge of timely identification and response to high-risk patients requiring immediate intervention. The system monitors patient data webhooks, enriches records with external EHR data, and analyzes aggregated information through Claude AI for comprehensive risk stratification. Healthcare operations data is fetched and combined with patient metrics to provide contextual risk assessment. NVIDIA's structured generation capabilities ensure standardized clinical outputs, while parallel execution routes enable simultaneous processing: critical cases trigger immediate alerts via email and escalation flags, whereas routine cases follow standard documentation paths. The workflow maintains an audit trail, merges execution results, and generates detailed reports for compliance and quality improvement initiatives.

## Setup Steps
1. Configure Patient Event Webhook with your EHR system endpoint URL and authentication headers
2. Add NVIDIA API credentials (API key) in Fetch Patient Data and Structured Generation nodes
3. Connect Claude Model node with Anthropic API key and configure healthcare risk assessment prompt
4. Set up Gmail node with sender credentials and configure recipient email addresses for clinical alerts
5. Enable Google Sheets integration for audit logging and specify spreadsheet ID for execution reports

## Prerequisites
NVIDIA API access, Anthropic Claude API key, Google Workspace account (Gmail, Sheets)
## Use Cases
Emergency department triage automation, post-operative monitoring for deterioration detection
## Customization
Modify risk scoring algorithms, add disease-specific assessment criteria
## Benefits
Reduces clinical response time through automated risk detection

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
