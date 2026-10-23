# 🔬 Orchestrate credit onboarding checks with GPT-4o, Airtable, Gmail and Slack

> ⚡ **45 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates credit operations onboarding by running KYC verification, credit bureau checks, identity validation, and sanctions screening through a single AI-powered agent. Built for credit operations teams, compliance officers, and fintech platforms, it eliminates manual eligibility reviews that are slow and error-prone. Triggered via webhook, the Credit Operations Agent orchestrates all verification tools simultaneously, then routes customers by eligibility status, eligible, ineligible, pending documentation, or compliance escalation. Each path prepares structured data stored in Airtable, triggers appropriate follow-up actions (email, Slack alerts), and logs a full audit trail. A final formatted response is returned to the originating system, closing the loop end-to-end with no manual handoffs.

## Setup Steps
1. Set webhook URL and connect Credit Operations webhook node to your intake system.
2. Add OpenAI API key to the OpenAI Chat Model node.
3. Configure KYC, Credit Bureau, Identity, and Sanctions tool credentials.
4. Add Gmail OAuth2 and Slack bot token for notification nodes.
5. Connect Airtable API key; set base/table IDs for eligible and ineligible customer stores.
## Prerequisites
- KYC & Credit Bureau API credentials
- Sanctions screening API access
- Gmail OAuth2 and Slack bot token
- Airtable API key
## Use Cases
- Fintech platforms automating loan application eligibility screening
## Customisation
- Add extra verification tools (e.g., biometric or document OCR APIs)
## Benefits
- Eliminates manual KYC and sanctions review bottlenecks

## 🔗 Nodes Used

Slack, Webhook, Execute Sub-workflow, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
