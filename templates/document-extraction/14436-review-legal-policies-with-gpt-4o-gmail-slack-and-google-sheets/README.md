# 🔬 Review legal policies with GPT-4o, Gmail, Slack, and Google Sheets

> ⚡ **115 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates legal policy governance for legal teams, policy managers, and compliance officers, eliminating manual document review, approval classification, and multi-channel stakeholder distribution. Submitted policy documents are form-triggered, extracted into structured text, and passed to the Legal Governance Agent. Backed by shared memory and a governance model, it coordinates three specialist agents: Policy Analysis (content evaluation), Compliance Tracking (regulatory alignment), and Legal Summary (structured report generation). Gmail and Slack notification tools handle multi-channel alerts in parallel. Outputs are parsed and routed by approval status across four concurrent Google Sheets tracks: policy record storage with stakeholder notifications, approval preparation and tracking, compliance record preparation and tracking, and audit log generation, ensuring a complete, audit-ready governance trail for every submission.
## Setup Steps
1. Import workflow; configure the Policy Submission Form trigger.
2. Add AI model credentials to the Legal Governance Agent, Policy Analysis Agent, Compliance Tracking Agent, and Legal Summary Agent.
3. Connect Gmail credentials to the Email Notification Tool; link Slack credentials to the Slack Notification Tool.
4. Link Google Sheets credentials; set sheet IDs for Policy Records, Approvals, Compliance, and Audit Trail tabs.
## Prerequisites
- OpenAI API key (or compatible LLM)
- Gmail account with OAuth credentials
- Slack workspace with bot credentials
- Google Sheets with policy, approval, compliance, and audit tabs pre-created
## Use Cases
- Legal teams automating policy submission review and approval classification
## Customisation
- Extend routing logic to include partial-approval or escalation tiers for complex policies
## Benefits
- Eliminates manual policy triage and stakeholder notification across large submission volumes

## 🔗 Nodes Used

Slack, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
