# ⚒️ Compare AI models with Nvidia API: Qwen, DeepSeek, Seed-OSS & Nemotron

> ⚡ **345 views** · ⚒️ [Engineering](../)

## Description

# Compare AI Models with Nvidia API: Qwen, DeepSeek, Seed-OSS & Nemotron

## Overview
- Queries four AI models simultaneously via Nvidia's API in 2-3 seconds—4x faster than sequential processing. Perfect for ensemble intelligence, model comparison, or redundancy.


## How It Works
- Webhook Trigger receives queries
- AI Router distributes to four parallel branches: Qwen2, SyncGenInstruct, DeepSeek-v3.1, and Nvidia Nemotron
- Merge Node aggregates responses (continues with partial results on timeout)
- Format Response structures output
- Webhook Response returns JSON with all model outputs

## Prerequisites

- Nvidia API key from [build.nvidia.com](https://build.nvidia.com) (free tier available)
- n8n v1.0.0+ with HTTP access
- Model access in Nvidia dashboard

## Setup

1. Import workflow JSON
2. Configure HTTP nodes: Authentication → Header Auth → `Authorization: Bearer YOUR_API_KEY`
3. Activate workflow and test

## Customization

Adjust temperature/max_tokens in HTTP nodes, add/remove models by duplicating nodes, change primary response selection in Format node, or add Redis caching for frequent queries.

## Use Cases

Multi-model chatbots, A/B testing, code review, research assistance, and production systems with AI fallback.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
