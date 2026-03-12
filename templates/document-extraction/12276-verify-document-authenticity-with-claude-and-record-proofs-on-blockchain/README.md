# 🔬 Verify document authenticity with Claude and record proofs on blockchain

> ⚡ **42 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates document authenticity verification by combining AI-based content analysis with immutable blockchain records. It is built for compliance teams, legal departments, supply chain managers, and regulators who need tamper-proof validation and auditable proof. The solution addresses the challenge of detecting forged or altered documents while producing verifiable evidence that meets legal and regulatory standards. Documents are submitted via webhook and processed through PDF content extraction. Anthropic’s Claude analyzes the content for authenticity signals such as inconsistencies, anomalies, and formatting issues, returning structured authenticity scores. Verified documents trigger blockchain record creation and publication to a distributed ledger, with cryptographic proofs shared automatically with carriers and regulators through HTTP APIs. 

## Setup Steps

1. Configure webhook endpoint URL for document submission  
2. Add Anthropic API key to Chat Model node for AI 
3. Set up blockchain network credentials in HTTP nodes for record preparation
4. Connect Gmail account and specify compliance team email addresses  
5. Customize authenticity thresholds 

## Prerequisites
Anthropic API key, blockchain network access and credentials 

## Use Cases
Supply chain documentation verification for import/export compliance 

## Customization
Adjust AI prompts for industry-specific authenticity criteria 

## Benefits
Eliminates manual document review time while improving fraud detection accuracy

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
