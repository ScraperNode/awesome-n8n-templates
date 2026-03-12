# 📈 AI-powered stock analysis assistant with Telegram, Claude & GPT-4O Vision

> ⚡ **52,698 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

"Ade Technical Analyst" is a dual-workflow AI system combining conversational intelligence with visual chart analysis through Telegram. The system features 11 primary nodes for conversation management and 8 secondary nodes for chart generation and analysis.

Core Components:

Telegram Integration: Message handling with dynamic typing indicators

AI Personality: "Ade" - a financial analyst with 50+ years NYSE/LSE experience using Claude 3.5 Sonnet

Chart Generation: TradingView integration via Chart-IMG API with MACD and volume indicators

Visual Analysis: GPT-4O vision for technical pattern recognition

Memory System: Session-based conversation context retention

Target Users
Individual traders seeking professional-grade analysis without subscription costs

Financial advisors wanting 24/7 AI-powered client support

Investment educators needing interactive learning tools

Fintech companies requiring white-label analysis solutions

Setup Requirements
Critical Security Fix Needed:

Remove hardcoded API key from Chart-IMG node immediately

Store all credentials securely in n8n credential manager

Required APIs:

OpenRouter (Claude 3.5 Sonnet)

OpenAI (GPT-4O vision)

Chart-IMG API

Telegram Bot Token

Technical Prerequisites:

n8n version 1.7+ with Langchain nodes

Webhook configuration for Telegram

Dual-workflow setup with proper ID referencing

Workflow Requirements
Security Compliance:

Never hardcode API keys in workflow JSON files

Use n8n credential manager for all sensitive data

Implement proper session isolation for user data

Include mandatory financial disclaimers

Performance Specifications:

Model temperature: 0.8 for balanced responses

Token limit: 500 for optimized performance

Dark theme charts with professional indicators

Session-based memory management

Need help customizing?
[Contact](Contact) me for consulting and support  or add me on [LinkedIn](LinkedIn)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
