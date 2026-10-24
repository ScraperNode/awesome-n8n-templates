# 🔒 Assess blockchain smart contract and tokenomics risk with GPT-4o and Gmail

> ⚡ **75 views** · 🔒 [SecOps & Security Automation](../)

## Description

## How It Works
This workflow automates blockchain risk assessment using a multi-agent AI architecture, targeting DeFi developers, blockchain auditors, and Web3 project teams who need rigorous smart contract and tokenomics evaluation before deployment or investment decisions. The core problem it solves is the time-intensive, expertise-heavy process of manually auditing Solidity smart contracts and modelling tokenomics sustainability, tasks prone to oversight when done under launch pressure. A manual trigger reads Solidity files from disk and passes them to the Blockchain Risk Orchestrator Agent, which coordinates two specialist sub-agents: a Smart Contract Auditor Agent (using static analysis and a dedicated auditor model) and a Tokenomics Sustainability Agent (leveraging a Risk Score Calculator and Monte Carlo Simulation Tool). Each agent maintains its own memory and model context. Outputs are parsed into a Structured Risk Report, then prepared for storage and saved to a database. A final Gmail node dispatches the completed risk report to stakeholders, closing the audit loop automatically.

## Setup Steps
1. Configure the Read Solidity Files node with the correct disk path to your `.sol` files.
2. Add LLM API credentials to all Chat Model nodes (Orchestrator, Auditor, Tokenomics).
3. Set static analysis parameters in the Static Analysis Tool node.
4. Define risk thresholds and scoring weights in the Risk Score Calculator.
5. Configure Monte Carlo simulation parameters in the simulation tool node.
## Prerequisites
- LLM API key (OpenAI or compatible)
- Solidity `.sol` files accessible on disk
- Static analysis tool configuration
- Gmail account with OAuth2 credentials
- Target database or storage destination
## Use Cases
- Audit smart contracts before mainnet deployment to catch critical vulnerabilities.
## Customisation
- Extend to support multiple Solidity file batches or GitHub repository inputs.
## Benefits
- Reduces smart contract audit time from days to minutes.

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, Calculator, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
