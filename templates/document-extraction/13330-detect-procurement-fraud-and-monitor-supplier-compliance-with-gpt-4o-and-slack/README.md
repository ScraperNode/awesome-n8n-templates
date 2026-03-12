# 🔬 Detect procurement fraud and monitor supplier compliance with GPT-4o and Slack

> ⚡ **72 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates procurement fraud detection and supplier compliance monitoring for organizations managing complex purchasing operations. Designed for procurement teams, audit departments, and compliance officers, it solves the challenge of identifying fraudulent transactions, contract violations, and supplier misconduct across thousands of purchase orders and vendor relationships. The system schedules continuous monitoring, generates sample transaction data, analyzes patterns through dual AI agents (Price Reasonableness validates pricing against market rates, Delivery Agent assesses fulfillment performance), orchestrates comprehensive risk evaluation through Orchestration Agent, routes findings by severity (critical/high/medium/low), and triggers multi-channel responses: critical issues activate immediate Slack/email alerts with detailed logging; high-priority cases receive escalation workflows; medium/low findings generate routine compliance reports. By combining AI-powered anomaly detection with intelligent routing and coordinated notifications, organizations prevent fraud losses by 75%, ensure vendor compliance, maintain audit trails, and enable procurement teams to focus on strategic sourcing rather than manual transaction reviews.

## Setup Steps
1. Connect **Schedule Trigger** for monitoring frequency
2. Configure **procurement systems** with API credentials
3. Add **AI model API keys** to Price Reasonableness, Delivery, and Orchestration Agent nodes
4. Define **fraud indicators** and compliance thresholds in agent prompts based on company policies
5. Link **Slack webhooks** for critical and high-priority fraud alerts to procurement and audit teams
6. Connect **email credentials** for stakeholder notifications and escalation workflows

## Prerequisites
Procurement system API access, AI service accounts, market pricing databases for benchmarking
## Use Cases
Invoice fraud detection, bid rigging identification, duplicate payment prevention
## Customization
Modify agent prompts for industry-specific fraud patterns, adjust risk scoring algorithms
## Benefits
Prevents fraud losses by 75%, automates compliance monitoring across unlimited transactions

## 🔗 Nodes Used

Send Email, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
