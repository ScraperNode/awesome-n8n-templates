# ⚒️ Route revenue transactions and assess AI outputs with Anthropic Claude and OpenAI

> ⚡ **23 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates intelligent routing of user queries to optimal AI models (Anthropic, OpenAI) based on complexity analysis, then validates outputs through multi-stage quality assessment. Designed for teams managing high-volume AI operations, it solves the critical problem of balancing cost-efficiency with output quality—automatically selecting budget-friendly models for simple tasks while routing complex requests to premium models. The system analyzes incoming queries via validation tools, routes them through specialized AI agents based on assessment scores, executes parallel quality checks across compliance, bias, and risk dimensions, aggregates validation results, and stores flagged responses for human review. This ensures consistent, high-quality AI responses while optimizing computational costs and maintaining governance standards across diverse use cases.

## Setup Steps
1. Connect Anthropic and OpenAI  API credentials in n8n credentials manager
2. Configure Google Sheets connection for storing validation results and flagged responses
3. Set Schedule Trigger interval (recommended: hourly or daily based on volume)
4. Customize classification thresholds in validation nodes (confidence scores, risk levels)
5. Update agent prompt templates to match your domain requirements
6. Configure Slack/Gmail notifications for high-priority quality flags

## Prerequisites
Active API accounts for Anthropic Claude and OpenAI. 
## Use Cases
Customer support ticket routing and quality monitoring. 
## Customization
Adjust classification logic by modifying validation node expressions. 
## Benefits
Reduces AI costs by 40-60% through intelligent model selection.

## 🔗 Nodes Used

Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, Code Tool, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
