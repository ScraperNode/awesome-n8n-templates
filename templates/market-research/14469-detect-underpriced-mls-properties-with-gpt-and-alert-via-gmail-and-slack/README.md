# 📊 Detect underpriced MLS properties with GPT and alert via Gmail and Slack

> ⚡ **66 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates competitive real estate pricing analysis by combining multiple MLS data sources with AI-powered market intelligence. Designed for real estate professionals, property managers, and investment analysts, it solves the critical challenge of identifying underpriced properties in competitive markets where manual analysis is time-consuming and prone to oversight. The system fetches listings from multiple MLS platforms, consolidates market data, and deploys specialized AI agents for dual-layer analysis. The Pricing Agent evaluates individual property valuations against market comparables, while the Market Research Agent provides broader market context and trend insights. When underpriced opportunities are detected, automated alerts are dispatched via email and Slack, enabling rapid response to market opportunities. Operating on a daily schedule, this workflow transforms hours of manual research into automated intelligence delivery.

## Setup Steps
1. Configure MLS API credentials in "Fetch MLS Data" and "Fetch Recent Sales Data" nodes
2. Add OpenAI API key in "OpenAI Model - Pricing Agent"
3. Set Gmail SMTP credentials in "Send Underpriced Alert Email" node with recipient addresses
4. Configure Slack webhook URL in "Send Slack Alert" node for channel notifications
5. Adjust "Daily Pricing Update Schedule" cron expression for preferred execution time

## Prerequisites
OpenAI API account with GPT-4 access, MLS data provider API credentials
## Use Cases
Investment firms identifying acquisition targets, real estate brokerages monitoring competitive listings
## Customization
Modify AI agent prompts for specific property types, adjust underpricing threshold percentages
## Benefits
Reduces manual research time by 90%, eliminates human bias in valuation analysis

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
