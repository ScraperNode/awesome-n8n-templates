# 🔒 Automate cybersecurity threat analysis with GPT-4o, CVSS scoring and risk routing

> ⚡ **958 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates end-to-end cybersecurity threat analysis using a multi-agent AI architecture, targeting Security Operations Centre (SOC) analysts, security engineers, and IT risk teams responsible for continuous threat monitoring and incident response. The core problem it solves is the slow, fragmented process of manually correlating threat intelligence, scoring vulnerabilities, and producing actionable reports, tasks that demand both speed and consistency under pressure. A manual trigger initiates the Cybersecurity Orchestrator Agent, which coordinates two specialist sub-agents: a Threat Intelligence Agent (backed by security log fetching and risk scoring tools) and an Attack Surface Mapping Agent (leveraging STRIDE analysis and CVSS scoring tools). Each agent operates with its own chat model and memory. Outputs are parsed by a Structured Threat Report Parser, then routed by a Rules-based Risk Severity router into three report formats such as SOC Alert, Executive Report, or Standard Report, ensuring every threat is communicated at the right level of urgency to the right audience.
 
## Setup Steps
1. Connect your LLM API credentials to all Chat Model nodes (Orchestrator, Threat Intelligence, Attack Surface).
2. Configure the Fetch Security Logs Tool with your SIEM or log source API credentials.
3. Set risk threshold rules in the Risk Score Calculator node.
4. Define STRIDE and CVSS parameters in their respective tool nodes.
5. Set routing thresholds (e.g., CVSS ≥9 → SOC Alert, ≥6 → Executive, &lt;6 → Standard) in Route by Risk Severity.

## Prerequisites
- LLM API key (OpenAI or compatible)
- SIEM or security log source with API access
- CVSS and STRIDE configuration parameters
- Report template definitions for each severity tier
## Use Cases
- Auto-triage incoming vulnerability disclosures into severity-ranked reports.
## Customisation
- Add more routing branches (e.g., Critical, Zero-Day).
## Benefits
- Accelerates threat triage from hours to minutes.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, Calculator, Code Tool, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
