# ⚒️ Orchestrate AI risk analysis and severity-based routing with Anthropic and OpenAI

> ⚡ **24 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates complex data engineering operations by orchestrating multiple specialized AI agents to analyze datasets, calculate risk metrics, and route findings based on severity levels. Designed for data engineers, analytics teams, and business intelligence managers, it solves the challenge of processing diverse datasets through appropriate analytical frameworks while ensuring critical insights reach stakeholders immediately. The system receives data processing requests via webhook, deploys an orchestration agent that determines which specialized analysis agents to invoke (Anthropic Chat Model for general analysis, Risk Analysis Verification Agent, and Test Validation Agent), calculates risk scores, fetches relevant historical context, then routes results by severity. High-severity findings trigger immediate HTTP notifications to stakeholders, while all results are aggregated into comprehensive reports, formatted for clarity, and logged with appropriate priority markers before webhook response.

## Setup Steps
1. Configure webhook trigger endpoint for data processing system integration
2. Set up Anthropic API credentials for Orchestrating Orchestration Agent node
3. Configure specialized agent tools 
4. Update Calculate Risk Score node with your risk scoring methodology
5. Set up Fetch Historical Data node with data warehouse API credentials
6. Configure severity threshold in Route by Severity node for alert triggering
7. Connect HTTP Request nodes with stakeholder notification endpoints

## Prerequisites
Active Anthropic and OpenAI API accounts, data processing system with webhook capability
## Use Cases
ETL pipeline quality monitoring, data anomaly detection, dataset validation before production deployment
## Customization
Modify orchestration agent logic for custom analysis pathways
## Benefits
Accelerates data quality assessment by 70%, enables proactive issue detection before production impact

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
