# 🔒 Detect and enforce abuse cases with OpenAI, Slack, Gmail and Sheets

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates platform trust and safety operations by deploying a multi-agent AI system that detects abuse signals, investigates behaviour, scores risk, checks policy compliance, and enforces actions automatically. Designed for platform safety teams, content moderation managers, and compliance officers, it eliminates manual triage delays and ensures high-severity violations are actioned immediately. An abuse signal webhook triggers behaviour analysis via OpenAI, classifying signals by severity. A routing node directs cases to a Governance Agent, which orchestrates Investigation, Risk Scoring, and Policy Compliance Checker sub-agents. Enforcement data is prepared, then routed by action type-logging to abuse records, alerting the security team via Slack, sending escalation emails, or triggering auto-enforcement actions based on threshold checks—before all outcomes are logged.

## Setup Steps
1. Configure Abuse Signal Webhook URL and authenticate incoming POST requests.
2. Add OpenAI API credentials to all OpenAI Model nodes.
3. Connect Google Sheets for abuse records and enforcement action logging.
4. Configure Slack credentials and set security team alert channel.
5. Add Gmail/SMTP credentials to Send Escalation Email node.

## Prerequisites
- Slack workspace with bot token
- Gmail or SMTP credentials
- Google Sheets for abuse and enforcement logging
## Use Cases
- Real-time abuse detection and auto-suspension on social platforms
## Customization
- Replace OpenAI with Anthropic Claude or NVIDIA NIM models
## Benefits
- Eliminates manual abuse triage with real-time AI signal processing

## 🔗 Nodes Used

Send Email, Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
