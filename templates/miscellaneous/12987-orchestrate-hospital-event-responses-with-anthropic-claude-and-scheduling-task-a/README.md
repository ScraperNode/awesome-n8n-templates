# 🔧 Orchestrate hospital event responses with Anthropic Claude and scheduling, task, and insurance APIs

> ⚡ **65 views** · 🔧 [Miscellaneous](../)

## Description

## How It Works
This workflow automates hospital operational event management by intelligently processing incoming events and orchestrating appropriate responses across multiple hospital systems. Designed for hospital operations managers, healthcare IT teams, and clinical administrators, it solves the complex challenge of coordinating rapid responses to diverse hospital events including patient admissions, equipment alerts, staffing emergencies, and clinical escalations. The system receives event triggers via webhook, uses AI-powered orchestration to analyze event context and determine required actions, then intelligently routes tasks to appropriate systems including appointment scheduling, task management, and insurance verification. It calculates priority scores, assigns tasks, verifies insurance coverage, and merges results while masking sensitive PHI data for compliance. The workflow leverages Anthropic's Claude and multiple AI tools to ensure context-aware decision-making aligned with hospital protocols.

## Setup Steps
1. Configure webhook URL endpoint for hospital event system integration
2. Set up Anthropic API credentials for Claude model access in orchestration agent
3. Configure Hospital Orchestration Agent Tool with your facility's event protocols
4. Connect Schedule Appointment API with hospital scheduling system credentials
5. Set up Task Management API integration for staff assignment system
6. Configure Insurance Verification API with payer network access credentials

## Prerequisites
Active Anthropic API account, hospital event management system with webhook capability
## Use Cases
Patient admission coordination, equipment failure response, code blue orchestration
## Customization
Modify orchestration agent prompts for facility-specific protocols
## Benefits
Reduces event response time by 75%, ensures consistent protocol adherence

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
