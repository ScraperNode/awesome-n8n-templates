# 📈 Real-time oil price crisis detection with Qwq-32b AI and multi-channel alerts

> ⚡ **121 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## How It Works
Scheduled runs collect data from oil markets, global shipping movements, news sources, and official reports. The system performs statistical checks to detect anomalies and volatility shifts. An AI-driven geopolitical model evaluates emerging risks and assigns a crisis score. Based on severity thresholds, results are routed to the appropriate alert channels for rapid response.

## Setup Steps

1. **Data Sources:** Connect the oil price API, OPEC report feeds, shipping databases, and news sources.
2. **AI Model:** Configure the OpenRouter ChatGPT model for geopolitical and risk analysis.
3. **Alerts:** Define severity rules and route alerts to Email, Slack, or Dashboard APIs.
4. **Storage:** Configure a database for historical records, audit logging, and trend tracking.

## Prerequisites
Oil market API credentials; news feed access; OPEC data source; OpenRouter API key; Slack/email/dashboard integrations

## Use Cases
Supply chain risk monitoring; energy market crisis detection; geopolitical threat assessment; trader decision support; operational risk management

## Customization
Adjust risk thresholds; add market data sources; modify alert routing rules 

## Benefits
Reduces crisis detection lag 90%; consolidates fragmented data; enables proactive response

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
