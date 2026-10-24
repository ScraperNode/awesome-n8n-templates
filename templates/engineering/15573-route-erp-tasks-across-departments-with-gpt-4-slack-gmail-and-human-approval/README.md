# ⚒️ Route ERP tasks across departments with GPT-4, Slack, Gmail and human approval

> ⚡ **157 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates enterprise resource planning (ERP) operations across Engineering, Finance, HR, and Admin departments for operations managers, ERP administrators, and business process owners who need intelligent task routing with human oversight. It solves the problem of siloed departmental workflows by centralising all inbound requests through a single Orchestrator Agent that routes tasks to the correct specialist AI agent. Each department agent, namely: Engineering, Finance, HR, and Admin operates with its own LLM model, memory, ERP tool, calculator, and output parser. The Orchestrator routes by department, agents process and return results, which are then combined and evaluated for human approval. Tasks requiring sign-off trigger an approval email; others post directly to Slack. A separate scheduled pipeline runs daily, fetching pending tasks, aggregating them, generating a Daily Report via a Reporting Agent, and emailing it via Gmail.

## Setup Steps
1. Add OpenAI credentials to all agent model nodes (Orchestrator, Engineering, Finance, HR).
2. Configure ERP tool credentials for each department's ERP node.
3. Set Slack credentials and target channel in the Notify Team on Slack node.
4. Add Gmail credentials to Send Approval Email and Email Daily Report nodes.
5. Connect memory backends (e.g., Redis or n8n memory) to all agent memory nodes.
6. Set the Schedule trigger interval for daily operations (e.g., 08:00 daily).
7. Configure the webhook URL for Webhook – External Systems trigger.

## Prerequisites
- OpenAI API key (GPT-4 or GPT-4o)
- ERP system with API access (per department)
- Slack workspace with bot token
- Gmail account with OAuth2 credentials
- Memory backend (Redis or n8n built-in)
## Use Cases
- Automated engineering change request routing and approval
- Finance budget approval with human sign-off gate
- HR onboarding task orchestration across systems
- Daily ERP operations summary for management review
## Customization
- Add more department agents (e.g., Legal, Procurement) by extending the router
- Replace Gmail with Outlook or SendGrid for email delivery
- Swap Slack for Teams or Discord notifications
- Adjust approval conditions to match your governance thresholds
## Benefits
- Single orchestrator eliminates cross-department routing delays
- Human approval gate ensures compliance for sensitive ERP actions
- Daily automated reporting reduces manual ops overhead
- Modular agent design allows per-department tool customisation

## 🔗 Nodes Used

Slack, Webhook, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
