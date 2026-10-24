# ⚒️ Monitor semiconductor board reliability with OpenAI and Slack alerts

> ⚡ **51 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates semiconductor board-level reliability monitoring using AI agents. It targets reliability engineers, manufacturing teams, and quality analysts. The system collects capacity, history, and sensor data, then applies intelligent agents to detect anomalies, predict failures, and trigger alerts. Data flows through capacity checks, operations analysis, and reliability evaluation. AI models assess thermal stress, material risks, and performance deviations. Results are merged, severity is classified, and automated alerts and reports are generated. This reduces manual monitoring and improves reliability decisions.

## Setup Steps
1. Configure Nvidia/OpenAI credentials
2. Connect Google Sheets data
3. Configure Gmail alerts
4. Map input fields
5. Activate workflow

## Prerequisites
n8n, Nvidia/OpenAI API, Google Sheets, Gmail credentials

## Use Cases
Semiconductor reliability, predictive maintenance, capacity monitoring

## Customization
Add models, adjust thresholds, extend alerts

## Benefits
Automation, faster insights, improved reliability

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
