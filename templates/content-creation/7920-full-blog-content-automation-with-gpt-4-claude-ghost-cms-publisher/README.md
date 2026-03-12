# 🎬 Full blog content automation with GPT-4, Claude & Ghost CMS publisher

> ⚡ **1,299 views** · 🎬 [Content Creation & Video](../)

## Description

## 🌟 Complete Workflow Overview
**The Full Blogging Automation Journey**
This N8N workflow transforms a simple topic request into a fully published, SEO-optimized blog post through a seamless 7-phase process. Starting with your topic idea, the system automatically researches, creates, optimizes, edits, and publishes professional content to your Ghost CMS website. Think of it as having an entire content team working 24/7 - from initial research to final publication, all orchestrated by AI agents working in perfect harmony. No more writer's block, no more SEO guesswork, just high-quality content that ranks and engages your audience

## 📋 Requirements & Setup
**What You Need to Get Started**
- **OpenAI API Key** - For GPT models (content generation)
- **Anthropic API Key** - For Claude models as failover model
- **Brave Search API Key** - For comprehensive research
- **Ghost CMS Admin API Access** - For direct publishing
- **Existing Blog Content** - Optional but recommended for better research

## 🔧 Workflow Architecture & Process
**How the AI Agents Work Together**
This N8N workflow implements a sophisticated multi-agent system where specialized AI agents collaborate through structured data exchange. The workflow uses HTTP Request nodes to communicate with OpenAI and Anthropic APIs, integrates with Brave Search for real-time research, and connects to Ghost CMS via REST API calls. Each agent operates independently but shares data through N8N's workflow context, ensuring seamless information flow from research to publication. The system includes error handling, retry logic, and quality gates at each stage to maintain content standards.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, OpenAI Chat Model, Simple Memory, Chat Trigger, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
