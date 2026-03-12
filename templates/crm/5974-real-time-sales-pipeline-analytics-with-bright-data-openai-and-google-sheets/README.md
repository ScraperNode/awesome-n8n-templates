# 🤝 Real-time sales pipeline analytics with Bright Data, OpenAI, and Google Sheets

> ⚡ **867 views** · 🤝 [CRM & Sales Operations](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks key sales pipeline metrics—new leads, deal stages, win rates—and sends actionable insights to your team. Eliminate manual CRM exports and stay on top of revenue health.

## Overview

The automation queries your CRM API (HubSpot, Salesforce, or Pipedrive) on a schedule, pulls pipeline data, and feeds it into OpenAI for anomaly detection (e.g., stalled deals). Summaries and alerts appear in Slack, while daily snapshots are archived in Google Sheets for trend analysis.

## Tools Used

- **n8n** – Pipeline orchestration
- **CRM API** – Connects to your chosen CRM
- **OpenAI** – Detects anomalies and highlights risks
- **Slack** – Notifies reps and managers in real time
- **Google Sheets** – Stores historical pipeline data

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Your CRM**: Provide API credentials in the HTTP Request node.
3. **Set Up OpenAI**: Add your API key.
4. **Authorize Slack & Google Sheets**.
5. **Customize Thresholds**: Adjust what constitutes a stalled deal or low conversion.

## Use Cases

- **Sales Management**: Monitor pipeline health without dashboards.
- **Revenue Operations**: Detect bottlenecks early.
- **Forecasting**: Use historical snapshots to improve predictions.
- **Rep Coaching**: Alert reps when deals stagnate.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #salespipeline #crm #openai #slackalerts #n8nworkflow #nocode #revenueops

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
