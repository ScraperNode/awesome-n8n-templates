# ⚒️ Orchestrate quality event risk assessment with Claude, Gmail and Slack for human approval

> ⚡ **9 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates quality event risk assessment through AI-powered multi-agent analysis with mandatory human oversight for critical decisions. Designed for quality managers, compliance officers, and risk analysts in manufacturing, healthcare, or service industries, it solves the challenge of consistent, transparent risk evaluation while maintaining human accountability. When quality events are detected, the system orchestrates specialized AI agents (traceability, risk assessment, and recall evaluation) to analyze different risk dimensions simultaneously. Results are synthesized, routed through human approval gates based on risk severity, and distributed via automated notifications. This ensures high-risk decisions receive proper scrutiny while low-risk events flow efficiently through automated channels.

## Setup Steps
1. Configure NVIDIA NIM API credentials with Llama-3.1-70B-Instruct model access
2. Set up routing logic thresholds
3. Connect Gmail SMTP for executive alerts and Slack webhook for team notifications
4. Configure human approval nodes with designated approver email addresses
5. Customize AI agent prompts for industry-specific risk criteria

## Prerequisites
NVIDIA NIM API key, Gmail account with app password
## Use Cases
Manufacturing defect escalation, food safety incident management
## Customization
Modify risk scoring thresholds, add industry-specific compliance agents
## Benefits
Reduces risk assessment time by 75%, ensures consistent evaluation methodology

## 🔗 Nodes Used

Send Email, Slack, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
