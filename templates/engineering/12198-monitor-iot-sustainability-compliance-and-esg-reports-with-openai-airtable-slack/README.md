# ⚒️ Monitor IoT sustainability compliance and ESG reports with OpenAI, Airtable, Slack and Gmail

> ⚡ **102 views** · ⚒️ [Engineering](../)

## Description

## How It Works

This workflow automates IoT device compliance monitoring and anomaly detection for industrial operations. Designed for facility managers, quality assurance teams, and regulatory compliance officers, it solves the challenge of continuously monitoring sensor networks while ensuring regulatory adherence and detecting operational issues in real-time.The system runs every 15 minutes, fetching IoT sensor data and structuring it for analysis. Dual AI agents evaluate compliance against regulatory standards and detect operational anomalies. Issues trigger immediate email and Slack alerts for rapid response. Daily data aggregates into comprehensive ESG reports with AI-generated insights, automatically emailed to stakeholders for transparency and audit trails.

## Setup Steps
1. Configure AirTable credentials and set 15-minute schedule interval
2. Add OpenAI API keys for compliance and anomaly detection agents, configure regulatory thresholds
3. Set Gmail/Slack credentials for alerts and ESG report distribution

## Prerequisites
IoT sensor platform API access, OpenAI API key, Gmail/Slack accounts

## Use Cases
Manufacturing quality control, environmental compliance monitoring

## Customization
Modify sensor polling frequency, adjust compliance rules, customize anomaly thresholds

## Benefits
Continuous compliance assurance, instant anomaly detection

## 🔗 Nodes Used

Airtable, Slack, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
