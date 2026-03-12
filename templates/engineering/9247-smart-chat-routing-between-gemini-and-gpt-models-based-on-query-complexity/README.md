# ⚒️ Smart chat routing between Gemini and GPT models based on query complexity

> ⚡ **369 views** · ⚒️ [Engineering](../)

## Description

# Adaptive LLM Router for Optimized AI Chat Responses

Elevate your AI chatbots with intelligent model selection: automatically route simple queries to cost-effective LLMs and complex ones to powerful ones, balancing performance and expenses seamlessly.

## What It Does

This workflow listens for chat messages, uses a lightweight Gemini model to classify query complexity, then selects and routes to the optimal LLM (Gemini 2.5 Pro for complex, OpenAI GPT-4.1 Nano for simple) to generate responses—ensuring efficient resource use.

## Key Features

- **Complexity Classifier** - Quick assessment using Gemini 2.0 Flash
- **Dynamic Model Switching** - Routes to premium or budget models based on needs
- **Chat Trigger** - Webhook-based for real-time conversations
- **Current Date Awareness** - Injects $now into system prompt
- **Modular Design** - Easy to add more models or adjust rules
- **Cost Optimization** - Reserves heavy models for demanding tasks only

## Perfect For

- **Chatbot Developers**: Build responsive, cost-aware AI assistants
- **Customer Support**: Handle routine vs. technical queries efficiently
- **Educational Tools**: Simple facts vs. in-depth explanations
- **Content Creators**: Quick ideas vs. detailed writing assistance
- **Researchers**: Basic lookups vs. complex analysis
- **Business Apps**: Optimize API costs in production environments

## Technical Highlights

Harnessing n8n's LangChain nodes, this workflow demonstrates:
- Webhook triggers for instant chat handling
- Agent-based classification with strict output rules
- Conditional model selection for AI chains
- Integration of multiple LLM providers (Google Gemini, OpenAI)
- Scalable architecture for expanding model options

Ideal for minimizing AI costs while maximizing response quality. No coding required—import, configure credentials, and deploy!

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, Google Gemini Chat Model, Model Selector

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
