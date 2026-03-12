# ⚒️ Real-time IoT anomaly detection with MQTT, GPT-4o-mini AI, and multi-channel alerts

> ⚡ **245 views** · ⚒️ [Engineering](../)

## Description

## How It Works

MQTT ingests real-time sensor data from connected devices. The workflow normalizes the values and trains or retrains machine learning models on a defined schedule. An AI agent detects anomalies, validates the results for accuracy, and ensures reliable alerts. Detected issues are then routed to dashboards for visualization and sent via email notifications to relevant stakeholders, enabling timely monitoring and response.

## Setup Steps

1. **MQTT:** Configure broker connection, set topic subscriptions, and verify data flow.
2. **ML Model:** Define retraining schedule and specify historical data sources for model updates.
3. **AI Agent:** Connect Claude or OpenAI APIs and configure anomaly validation prompts.
4. **Alerts:** Set dashboard URL and email recipients to receive real-time notifications.

## Prerequisites
MQTT broker credentials; historical training data; OpenAI/Claude API key; dashboard access; email service

## Use Cases
IoT sensor monitoring; server performance tracking; network traffic anomalies; application log analysis; predictive maintenance alerts

## Customization
Adjust sensitivity thresholds; swap ML models; modify notification channels; add Slack/Teams integration; customize validation rules

## Benefits
Reduces detection latency 95%; eliminates manual monitoring; prevents false alerts; enables rapid incident response; improves system reliability

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Slack, MQTT Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
