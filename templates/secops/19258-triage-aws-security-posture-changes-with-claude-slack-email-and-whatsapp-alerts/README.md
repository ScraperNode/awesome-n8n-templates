# 🔒 Triage AWS security posture changes with Claude, Slack, email, and WhatsApp alerts

> ⚡ **46 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
Automated AWS security posture triage: detects changes in security findings, enriches with asset context, uses Claude to assess risk severity, then routes critical cases for manager approval while alerting SecOps, Compliance, and stakeholders via Slack, Email, and WhatsApp.

## How it works
1. A schedule trigger (or manual trigger for testing) starts the run and loads AWS account, region, and notification config.
2. Security findings data is generated/fetched and compared against the last saved baseline to detect meaningful changes.
3. If nothing changed, the workflow stops early; if changes are found, asset inventory data (resources, IAM roles, environment, VPCs) is pulled in for context.
4. The findings and asset context are merged and sent to a Claude-powered AI agent that analyzes security impact and severity.
5. The AI output is parsed into a structured result (severity, summary, changed items, compliance impact, required actions).
6. Critical-severity cases pause for a security lead's sign-off; approved or non-critical cases proceed, rejected cases are flagged and alerted separately.
7. Approved/reviewed cases update the posture record, log a compliance audit entry, notify SecOps/Compliance/Email/WhatsApp, and save the new baseline for next cycle.

## Setup
1. Set your AWS account ID, region, and Anthropic model in the configuration node.
2. Connect Anthropic/Claude credentials for the Security Impact Analysis Agent and review the prompt.
3. Connect Slack credentials and set channels for review, rejection, SecOps, and compliance alerts.
4. Configure email sending credentials and recipient addresses for the summary email.
5. Connect WhatsApp Business Cloud credentials and set the phone number ID and recipient number for WhatsApp alerts, then configure the sign-off/wait mechanism for high-risk approvals.

## Requirements
- Anthropic/Claude API credentials
- Slack workspace with configured channels
- Email sending credentials (SMTP or provider)
- WhatsApp Business Cloud API credentials

## Customization
- Adjust severity thresholds and routing rules
- Modify the AI risk-analysis prompt for your compliance frameworks
- Change wait durations or notification channels/recipients
- Swap simulated data nodes for live API integrations if needed

## 🔗 Nodes Used

Send Email, Slack, WhatsApp Business Cloud, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
