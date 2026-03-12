# 🔬 Monitor data integrity and route severity-based alerts with GPT-4o, email and Slack

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates continuous data integrity monitoring and intelligent alert management across multiple data sources. Designed for data engineers, IT operations teams, and business intelligence analysts, it solves the critical challenge of detecting data anomalies and orchestrating appropriate responses based on severity levels. The system operates on scheduled intervals, fetching data from software metrics APIs and BI dashboards, then merging these sources for comprehensive analysis. It employs AI-powered validation and orchestration agents to detect anomalies, assess severity, and determine optimal response strategies. The workflow intelligently routes alerts based on severity classification, triggering critical notifications via email and Slack for high-priority issues while sending standard reports for routine findings. By maintaining detailed compliance audit logs and preparing executive summaries, it ensures stakeholders receive timely, actionable intelligence while creating audit trails for data quality monitoring initiatives.

## Setup Steps
1. Configure Schedule Data Integrity Check trigger with monitoring frequency
2. Connect Workflow Configuration node with data source parameters
3. Set up Fetch Software Metrics and Fetch BI Dashboard Data nodes with respective API credentials
4. Configure Merge Data Sources node for data consolidation logic
5. Connect Data Validation Agent with OpenAI/Nvidia API credentials for anomaly detection
6. Set up Orchestration Agent with AI API credentials for severity assessment
7. Configure Check for Anomalies node with routing conditions
8. Connect Route by Severity node with classification logic
  
## Prerequisites
OpenAI or Nvidia API credentials for AI-powered analysis, API access to software metrics platforms
## Use Cases
SaaS platforms monitoring service health metrics, e-commerce businesses tracking inventory data quality
## Customization
Adjust scheduling frequency for monitoring intervals, modify severity thresholds for alert classification
## Benefits
Reduces mean time to detection by 75%, eliminates manual data quality checks

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
