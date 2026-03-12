# ⚒️ Score telematics driving risk with Claude and adjust insurance premiums via HTTP, Gmail, and Slack

> ⚡ **112 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates insurance premium adjustments by analyzing telematics data with AI-driven risk assessment and syncing changes across underwriting systems. Designed for carriers, actuaries, and underwriting teams managing usage-based insurance programs, it eliminates manual review of driving patterns, speed, braking, and mileage while ensuring compliance. Scheduled execution fetches telematics data via HTTP from vehicles or mobile apps. Anthropic Claude analyzes behavior with structured output parsing, generating risk scores from acceleration, harsh braking, speeding, and time-of-day driving. Calculator node applies scores to premiums, and HTTP node updates policy systems. High-risk cases trigger Gmail alerts to underwriting managers and Slack notifications to claims teams. Final HTTP sync ensures compliance across all systems.

## Setup Steps
1. Configure Schedule node for desired analysis frequency 
2. Set up HTTP node with telematics platform API  
3. Add Anthropic API key to Chat Model node for behavioral risk analysis
4. Connect policy management system API credentials in HTTP nodes 
5. Integrate Gmail and Slack with underwriting team addresses  

## Prerequisites
Anthropic API key, telematics data platform API access

## Use Cases
Auto insurance carriers implementing usage-based insurance programs

## Customization
Modify AI prompts to incorporate additional risk factors like weather conditions

## Benefits
Reduces premium calculation time from days to minutes

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
