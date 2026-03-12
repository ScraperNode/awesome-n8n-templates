# 💬 Manage patient appointments and care follow-ups with OpenAI, Gmail and Twilio

> ⚡ **64 views** · 💬 [Support Chatbots](../)

## Description

## How It Works
This workflow automates patient care coordination in healthcare settings by intelligently processing patient information and scheduling follow-up communications through multiple channels. Designed for healthcare administrators, clinic coordinators, and medical practice managers, it solves the critical problem of manual patient follow-up management and inconsistent communication across care teams. The system receives patient intake data, uses AI-powered agents to analyze care requirements and determine appropriate notification timing, then automatically dispatches personalized messages via email and SMS. The workflow leverages OpenAI's advanced models for care coordination logic and notification content generation, ensuring contextually appropriate and timely patient communications while maintaining conversation history for continuity of care.

## Setup Steps
1. Configure OpenAI credentials with API key for AI model access
2. Set up EHR System Tool node with your electronic health records integration endpoint
3. Configure Scheduling System Tool with your appointment management system API
4. Connect Gmail account for email notifications with OAuth authentication
5. Add Twilio credentials for SMS delivery with account SID and auth token
6. Customize Care Coordination Agent Tool parameters for your clinical protocols

## Prerequisites
Active OpenAI API account with credits, connected email service (Gmail recommended)
## Use Cases
Post-appointment follow-up reminders, medication adherence check-ins, preventive care scheduling
## Customization
Modify AI prompts in agent tools to match your clinical workflows, adjust notification timing logic
## Benefits
Reduces administrative workload by 70%, ensures consistent patient follow-up

## 🔗 Nodes Used

Send Email, Twilio, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
