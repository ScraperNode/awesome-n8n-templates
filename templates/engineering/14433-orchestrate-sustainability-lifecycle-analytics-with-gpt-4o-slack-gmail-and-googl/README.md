# ⚒️ Orchestrate sustainability lifecycle analytics with GPT-4o, Slack, Gmail and Google Docs

> ⚡ **43 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates end-to-end sustainability lifecycle management for corporate sustainability teams, ESG governance officers, and circular economy programme leads. It addresses the challenge of coordinating fragmented sustainability inputs, scheduled monitoring, platform data feeds, and manual initiative submissions into a single governed, auditable reporting pipeline. Data enters from three sources: a lifecycle monitor, an external sustainability data API, and an initiative submission form. Inputs are merged and passed to a Sustainability Orchestrator with shared memory, which delegates to three specialist agents: a Circular Economy Agent (metrics calculation and circular output scoring), a Sustainability Governance Agent (governance evaluation and Slack-based approvals), and a Documentation Agent (ESG document creation). The orchestrator then routes actions for documentation tracking, lifecycle analytics, and governance approvals, before combining results, aggregating metrics, and sending a stakeholder report via Gmail and a summary notification via Slack.

## Setup Steps
1. Import workflow; configure the lifecycle monitor trigger interval and external sustainability API endpoint URL.
2. Add AI model credentials to the Sustainability Orchestrator and Documentation Agent.
3. Connect Slack credentials to the Approval Request Tool and Send Summary Notification nodes.
4. Link Gmail credentials to the Send Stakeholder Report node.
5. Configure Google Sheets credentials; set sheet IDs for ESG Documentation, Lifecycle Analytics, and Governance.
6. Set scoring thresholds in the Metrics Calculator node.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Slack workspace with bot credentials
- Gmail account with OAuth credentials
- Google Sheets with tracking tabs pre-created
## Use Cases
- Enterprises automating circular economy programme scoring across product lines
## Customisation
- Swap Circular Economy scoring thresholds to align with GRI, Ellen MacArthur, or regional frameworks
## Benefits
- Triple-source ingestion eliminates sustainability data blind spots

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
