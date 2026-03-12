# 💬 Triage emergency patients via chat with GPT-4.1 and hospital systems

> ⚡ **54 views** · 💬 [Support Chatbots](../)

## Description

## How It Works
This workflow automates hospital emergency department triage by intelligently processing patient intake information through multiple AI-powered assessment stages. Designed for emergency departments, urgent care centers, and hospital admission teams, it solves the critical challenge of rapid, accurate patient prioritization during high-volume periods. The system captures initial patient data through a chat interface, uses specialized AI agents to analyze medical history and current symptoms, validates business rules for priority assignment, performs stability checks, calculates priority scores, and determines required actions. It then routes patients to appropriate care pathways while sending notifications to relevant medical teams and logging all interactions for audit compliance. The workflow leverages OpenAI models and structured JSON parsing to ensure consistent, protocol-driven triage decisions.

## Setup Steps
1. Configure OpenAI credentials with API key for AI agent access
2. Set up Hospital Triage Agent node with your clinical triage protocols
3. Configure Patient Consent and Structured JSON checkers with validation rules
4. Connect notification endpoints for Execute Appointment and Send Notification nodes
5. Set up audit logging system integration in Log Interactions node
6. Customize business rule validation parameters for your facility's triage categories

## Prerequisites
Active OpenAI API account, hospital system API access for appointments and notifications
## Use Cases
Emergency department patient intake, urgent care prioritization, virtual triage for telehealth
## Customization
Modify triage agent prompts to reflect your clinical protocols, adjust priority scoring algorithms
## Benefits
Accelerates triage processing by 60%, ensures standardized clinical assessment

## 🔗 Nodes Used

HTTP Request, Postgres, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
