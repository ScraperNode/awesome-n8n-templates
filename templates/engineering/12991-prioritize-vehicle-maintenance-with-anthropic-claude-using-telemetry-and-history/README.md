# ⚒️ Prioritize vehicle maintenance with Anthropic Claude using telemetry and history

> ⚡ **34 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates predictive maintenance for vehicle fleets by combining real-time telemetry analysis with historical pattern recognition to identify potential failures before they occur. Designed for fleet managers, maintenance supervisors, and transportation operations teams, it solves the critical challenge of preventing unexpected vehicle breakdowns while optimizing maintenance scheduling and resource allocation. The system triggers on schedule, fetches current vehicle telemetry data alongside historical maintenance records, merges datasets for comprehensive analysis, then deploys specialized AI agents using Anthropic's Claude to detect anomalies and prioritize maintenance interventions. The workflow calculates urgency levels using machine learning models and business rules, formats findings into standardized maintenance records and urgent alerts, generates audit logs for compliance tracking, and routes notifications to appropriate maintenance teams based on severity.

## Setup Steps
1. Configure Schedule Trigger with desired monitoring frequency for fleet checks
2. Set up API credentials for Fetch Real-Time Vehicle Telemetry node with fleet management system
3. Configure Fetch Historical Vehicle Data node with maintenance database API access
4. Connect Anthropic API credentials for both Anomaly Detection and Maintenance Prioritization agents
5. Update Anomaly Detection Model with your fleet's baseline performance parameters
6. Customize UL Calculation Tool and Maintenance Prioritization Output Parser  
 
## Prerequisites
Active Anthropic API account, fleet telemetry system with API access, historical maintenance database 
## Use Cases
Commercial fleet preventive maintenance, vehicle health monitoring, breakdown prediction 
## Customization
Modify anomaly detection thresholds for vehicle types, adjust prioritization algorithms for operational priorities 
## Benefits
Reduces unexpected breakdowns by 80%, decreases maintenance costs through predictive scheduling

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
