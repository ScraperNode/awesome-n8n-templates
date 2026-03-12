# 🔬 Analyze legislative policies and route compliance actions with GPT-4o, Google Sheets, and Slack

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates legislative compliance analysis by coordinating multiple specialized OpenAI agents to interpret regulatory documents, evaluate organizational impact, and manage stakeholder communication with complete audit traceability. It is built for compliance officers, legal teams, and governance leaders who must process new or amended legislation quickly without the burden of manual document review. The template addresses the core challenge of staying compliant amid rapidly evolving regulations. When a legislative document is submitted, the workflow retrieves and extracts its full text, then passes it to a Policy Interpretation Agent powered by OpenAI for structured analysis. A Governance Orchestration Agent then activates three parallel specialist agents—Impact Assessment, Compliance Mapping, and Stakeholder Notification to generate standardized outputs. Decisions are routed based on review status: auto-approved items are logged directly into Google Sheets, while flagged items trigger legal review through Slack alerts, compliance tracker updates, and stakeholder notifications, ensuring every regulatory change is evaluated, documented, and acted upon promptly.

## Setup Steps
1. Add OpenAI API key to all OpenAI Model nodes  
2. Connect Google Sheets OAuth2 credentials; set spreadsheet IDs for Auto-Approved Log 
3. Configure Slack OAuth2 token; set target channel in Notify Legal Team node
4. Set up Gmail/SMTP credentials in Notify Stakeholders node; update recipient addresses
5. Configure legislative document source URL or webhook endpoint in Fetch Legislative Document node
6. Adjust routing thresholds in Route by Review Status node to match your approval criteria

## Prerequisites
OpenAI API key, Google Sheets with OAuth2, Slack workspace with bot token 
## Use Cases
Regulatory change management, GDPR/financial compliance monitoring, policy impact assessment
## Customization
Swap OpenAI for NVIDIA NIM models, add additional specialist agents
## Benefits
Cuts manual compliance review time by 70%, ensures no legislation goes unassessed

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
