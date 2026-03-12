# ⚡ Health monitoring system with Grok-3 AI analysis and family/doctor email alerts

> ⚡ **307 views** · ⚡ [Personal Productivity](../)

## Description

## Introduction
Automates patient health monitoring by analyzing submitted health data via AI, determining alert necessity, and notifying family and doctors when critical conditions detected.  

## How It Works
Webhook receives health data, AI agent analyzes vitals using OpenRouter with structured parsing. Conditional logic checks alert necessity. If yes: prepares data, emails family, checks doctor criteria, sends doctor email, merges results. If no: skips alerts. Combines outcomes and responds to webhook.

## Workflow Template
Webhook → Extract Data → AI Agent → [OpenRouter + Memory + Parser] → Check Alert → [Prepare + Email Family + Check Doctor + Email Doctor] OR [No Alert] → Merge → Combine → Respond


## Workflow Steps
1. **Reception & Extraction:** Webhook receives vitals/symptoms, parses JSON payload
2. **AI Analysis:** OpenRouter analyzes vitals against ranges, accesses history via Memory Tool, formats assessment via Output Parser
3. **Routing & Notification:** Conditional logic checks severity. Alert path emails family/doctor if critical. No alert logs status
4. **Consolidation:** Merges outcomes, sends webhook response

## Setup Instructions
Configure webhook endpoint with auth token. Add OpenRouter API key and select model. Set up AI Agent with Memory Tool and Output Parser. Connect Gmail/SMTP for notifications with recipient addresses. Configure alert thresholds (temp &gt;38.5°C, BP &gt;140/90, HR &lt;60/&gt;100). Set doctor notification criteria.

## Prerequisites
n8n instance, OpenRouter API key, AI model access, Patient database, Gmail/SMTP credentials, Family contacts, Doctor contacts, Webhook authentication

## Use Cases
**Chronic Disease:** Diabetic submits glucose readings. AI detects &gt;250mg/dL, alerts family and endocrinologist. **Elderly Care:** Senior's vitals monitored via wearable. AI identifies irregular rhythm, emails caregiver and cardiologist.  

## Customization
Adjust thresholds by demographics. Add vital types (O2, glucose trends). Customize AI prompts for conditions. Integrate SMS via Twilio. Add escalation logic. Include medication tracking. Connect EHR systems. Implement frequency limits. Add dashboard reporting.

## Benefits
**Rapid Response:** Detects emergencies in seconds. **Intelligent Filtering:** Prevents false alarms. **Family Peace:** Automated notifications keep loved ones informed. **Clinical Efficiency:**

## 🔗 Nodes Used

Send Email, Webhook, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
