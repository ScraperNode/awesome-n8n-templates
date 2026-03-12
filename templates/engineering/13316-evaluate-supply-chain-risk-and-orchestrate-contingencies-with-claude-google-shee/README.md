# ⚒️ Evaluate supply chain risk and orchestrate contingencies with Claude, Google Sheets, Gmail and Slack

> ⚡ **25 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates enterprise risk management by intelligently routing risks across three severity tiers. Built for compliance teams and risk managers, it eliminates manual evaluation bottlenecks and inconsistent escalation. The system retrieves risk data from spreadsheets, calculates severity indicators, then routes items through specialized AI agents—critical risks trigger coordinated multi-agent assessment with Gmail and Slack alerts, medium risks undergo standard AI evaluation, while low risks receive automated acknowledgment. Each severity level follows distinct processing paths ensuring appropriate review depth, stakeholder notification, and audit documentation.

## Setup Steps
1. Connect Google Sheets with risk data
2. Configure Anthropic API credentials for Claude Model nodes 
3. Set up Gmail authentication for notification delivery
4. Connect Slack workspace and specify channel IDs for critical/low risk alerts
5. Customize risk thresholds 
6. Update parser regex patterns in Code nodes matching assessment output format

## Prerequisites
Active accounts: Google Sheets, Anthropic Claude API, Gmail, Slack.
## Use Cases
Enterprise compliance monitoring, operational risk management
## Customization
Modify scoring formulas, adjust severity thresholds, add custom AI criteria
## Benefits
Eliminates manual triage, ensures consistent standards, accelerates critical response

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
