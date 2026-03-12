# ⚙️ Scan code repositories for governance issues with GPT-4o and severity-based reports

> ⚡ **45 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How It Works
This workflow automates end-to-end code repository governance scanning using a multi-agent AI orchestration system. Designed for engineering leads, DevSecOps teams, and CTOs, it replaces manual code audits with a structured, AI-driven compliance and security analysis pipeline. The workflow begins by extracting repository metadata, which is passed to a Governance Orchestrator Agent coordinating four specialised sub-agents: Static Code Analysis, Architectural Compliance, CTO Report Generation, and Security Vulnerability Analysis. Outputs are consolidated into a Structured Governance Output, formatted as a final report, then routed by severity level. Critical findings trigger escalation alerts and are aggregated separately, while medium findings are handled independently. All paths converge to merge analysis results, enrich the final output, and deliver a board-ready governance report with full audit traceability.

## Setup Steps
1. Configure `Extract Repository Metadata` with your Git provider or repository API credentials.
2. Set severity thresholds in the `Check Critical Issues Threshold` node to match your governance policy.
3. Configure `Prepare Escalation Alert` with your notification channel.
 
## Prerequisites
- OpenAI or compatible LLM API credentials
- Git repository access (GitHub, GitLab, or Bitbucket API)
- Notification channel (Slack, email, or webhook)
## Use Cases
- Automated pre-release security and compliance audits
## Customisation
- Adjust severity thresholds to match internal risk frameworks
## Benefits
- Eliminates manual code audit effort across engineering teams

## 🔗 Nodes Used

SSH, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
