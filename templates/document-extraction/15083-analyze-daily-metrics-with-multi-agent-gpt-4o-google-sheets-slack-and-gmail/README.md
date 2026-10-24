# 🔬 Analyze daily metrics with multi-agent GPT-4o, Google Sheets, Slack and Gmail

> ⚡ **166 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates daily business metrics collection, analysis, and reporting using a multi-agent AI architecture in n8n. Designed for operations teams, analysts, and business managers, it eliminates manual data review by orchestrating four specialised sub-agents under a central Planning Agent. Each agent handles a distinct function: metrics computation, trend analysis, alert detection, and report generation. The Planning Agent coordinates task delegation via chat memory, ensuring contextual continuity across agent calls. Raw metrics are read from Google Sheets, processed through a Calculator and Trend Analysis Code Tool, and anomalies trigger Slack alerts in real time. A Structured Output Parser formats the consolidated findings, which are appended back to Google Sheets and simultaneously dispatched via Gmail and Slack. This end-to-end pipeline replaces fragmented manual workflows, delivering consistent, timely insights with full audit trails.

## Setup Steps
1. Connect a Schedule Trigger node for daily execution frequency.
2. Add OpenAI credentials to the Planning Agent Model and all sub-agent models.
3. Configure Google Sheets node with OAuth2;  
4. Set up Slack credentials; assign correct channel in Slack Alert Tool and Post Summary nodes.
5. Add Gmail credentials to the Gmail Report Tool node; set recipient address.

## Prerequisites
- Google Sheets OAuth2 credentials
- Slack Bot Token with post permissions
- Gmail OAuth2 credentials
## Use Cases
- Daily sales or operational KPI monitoring for business teams
## Customization
- Swap OpenAI models per agent for cost/performance tuning
## Benefits
- Eliminates manual daily reporting effort
- Real-time alerts reduce response time to anomalies

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
