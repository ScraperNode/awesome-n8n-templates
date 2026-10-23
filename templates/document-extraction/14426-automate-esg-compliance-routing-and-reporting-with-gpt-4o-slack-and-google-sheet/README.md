# 🔬 Automate ESG compliance routing and reporting with GPT-4o, Slack and Google Sheets

> ⚡ **73 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates end-to-end ESG (Environmental, Social, and Governance) sustainability reporting for enterprise sustainability teams, compliance officers, and green governance leads. It solves the challenge of manually aggregating multi-source ESG data, applying scoring logic, and routing records through approval chains, a process that is slow, error-prone, and difficult to audit. Sustainability data enters via two sources: a periodic scheduler and an external ESG platform webhook. Inputs are normalised and passed to a Green Governance Agent equipped with a Sustainability Oversight Sub-Agent, ESG Scoring Engine, Multi-Cloud Sustainability API, Governance Alerts Tool, Compliance Documentation Tool, and ESG Reporting Sheets Tool. The agent produces a structured compliance output, which is then routed by approval status, rejected records are logged, review requests are sent via Slack, and approved records are stored and synced to the enterprise ESG platform. Sync errors trigger Slack alerts and error logging. Approved data simultaneously updates environmental impact lineage, KPI performance tracking, and the ESG dashboard in Google Sheets.


## Setup Steps
1. Import workflow and configure the periodic trigger interval and ESG platform webhook URL.
2. Add AI model credentials to the Green Governance Agent and Sustainability Oversight Sub-Agent.
3. Connect Slack credentials to Governance Alerts Tool and Sync Failure Alert nodes.
4. Link Google Sheets credentials; set sheet IDs for Rejected Items, etc.
5. Configure the Multi-Cloud Sustainability API and Enterprise ESG Platform sync endpoint URLs.
6. Set ESG scoring thresholds in the ESG Scoring Engine node.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Slack workspace with bot credentials
- Google Sheets with ESG log tabs pre-created
- Enterprise ESG platform API endpoint access
## Use Cases
- Corporations automating quarterly ESG compliance report generation
## Customisation
- Swap ESG Scoring Engine thresholds to match regional regulatory frameworks (EU Taxonomy, GRI, SASB)
## Benefits
- Eliminates manual ESG data aggregation, cutting reporting cycle time significantly

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
