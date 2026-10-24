# 🔒 Audit workflow compliance risk with GPT-4o, Gmail and Google Sheets

> ⚡ **31 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow receives workflow audit events via a webhook, validates and normalizes the payload, uses OpenAI (GPT-4o) to assess compliance risk, logs results to Google Sheets, and sends Gmail alerts when an event is classified as HIGH risk.

## How it works
1. Receives an audit event payload via an HTTP POST webhook.
2. Normalizes the incoming fields (for example workflow name, action, user, status, and event metadata) and generates timestamps and an audit ID.
3. Validates that required fields are present and routes incomplete events to a separate invalid-audit log.
4. Builds a human-readable audit summary and a structured compliance prompt, then sends it to OpenAI (GPT-4o) for risk analysis.
5. Extracts the AI response and parses the returned Risk Level (LOW/MEDIUM/HIGH) from the model output.
6. If the risk level is HIGH, sends a detailed Gmail alert containing the audit details and AI analysis.
7. Appends the audit record (including risk level and AI response) to a Google Sheets audit trail.

## Setup
1. Create and connect OpenAI credentials, and confirm the selected model (GPT-4o) is available for your account.
2. Add a Gmail OAuth2 credential and set the recipient(s) for the high-risk alert email.
3. Add a Google Sheets OAuth credential and update the target spreadsheet and sheet tabs for both the main audit trail and the invalid event log.
4. Copy the webhook URL from the trigger and configure your source system to POST audit events with the expected fields (for example workflow_name, action, user, status, and optional metadata like event_type and ip_address).

## Additional info
## How To Customize Nodes

### Customize Risk Logic

Modify the `Check High Risk Alert` node to:

* alert on MEDIUM risk
* alert on FAILED workflows
* detect suspicious users
* trigger escalation flows

### Customize AI Analysis

Modify the AI prompt to:

* include industry compliance rules
* enforce SOC2 standards
* detect insider threats
* evaluate operational anomalies

### Customize Google Sheets Storage

You can add additional columns such as:

* department
* compliance_owner
* alert_status
* remediation_notes

### Customize Email Notifications

Enhance Gmail alerts with:

* HTML formatting
* compliance dashboards
* incident ticket links
* escalation recipients


## Add-ons / Extensions

You can extend this workflow with additional automation features:

* Slack alerts
* Microsoft Teams notifications
* Jira incident creation
* SIEM integration
* PostgreSQL audit storage
* PDF compliance reports
* Multi-stage approval workflows
* Real-time security dashboards
* AI anomaly detection
* Scheduled compliance summaries


## Use Case Examples

### 1. Workflow Compliance Monitoring

Automatically monitor workflow executions and identify risky operational behavior.

### 2. Security Incident Alerting

Detect suspicious workflow actions and instantly notify security teams.

### 3. AI-Based Governance Tracking

Use AI to classify workflow activities based on risk and compliance relevance.

### 4. Centralized Audit Logging

Store all workflow audit events inside Google Sheets for reporting and auditing.

### 5. Failed Workflow Investigation

Track invalid or incomplete audit events separately for troubleshooting.

There can be many additional enterprise automation and compliance monitoring use cases built on top of this workflow.


## Troubleshooting Guide

| Issue                              | Possible Cause            | Solution                                    |
| ---------------------------------- | ------------------------- | ------------------------------------------- |
| Webhook not receiving data         | Incorrect webhook URL     | Verify webhook endpoint and HTTP method     |
| AI response is empty               | OpenAI credential issue   | Reconnect OpenAI credentials                |
| Gmail alerts not sending           | Gmail OAuth expired       | Reauthorize Gmail account                   |
| Google Sheets append fails         | Missing sheet permissions | Share sheet with connected Google account   |
| Risk level not detected            | Regex mismatch            | Verify AI response contains “Risk Level”    |
| Invalid events stored unexpectedly | Missing payload fields    | Validate incoming webhook payload structure |
| Duplicate audit IDs                | Timestamp collision       | Add UUID or execution-based identifiers     |
| Workflow stops after AI node       | Expression parsing issue  | Verify JSON paths in Set nodes              |


## Need Help?

If you need help with:

* workflow setup,
* credential configuration,
* AI prompt optimization,
* compliance customization,
* Google Sheets structure,
* Gmail alert formatting,
* enterprise integrations,
* or advanced automation extensions,

our n8n team at [WeblineIndia](https://www.weblineindia.com/) can help you design, customize and scale [enterprise-grade n8n automation workflows](https://www.weblineindia.com/n8n-automation/) tailored to your business requirements.

We can also help build:

* AI-powered governance systems
* security monitoring workflows
* compliance automation platforms
* workflow intelligence dashboards
* and advanced operational automation solutions.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
