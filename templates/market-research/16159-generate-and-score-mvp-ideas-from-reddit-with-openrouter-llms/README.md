# 📊 Generate and score MVP ideas from Reddit with OpenRouter LLMs

> ⚡ **17 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow exposes a webhook that fetches Reddit posts and top comments, uses OpenRouter LLM models to generate structured MVP business ideas, scores and filters them, and returns the ranked results as a JSON response.

## How it works
1. Receives a POST webhook request and normalizes inputs like subreddits, sort order, idea limit, and post limit.
2. Fetches posts from the specified subreddits via the Reddit API and reshapes them into unique post items with source metadata.
3. Iterates through each post, fetches the top comments from Reddit, and builds an enriched text payload combining the post and comment context.
4. Sends the enriched content to an OpenRouter chat model through a LangChain LLM chain to produce a structured JSON idea or a “kill” verdict.
5. Merges the AI output back with the original Reddit source data, normalizes fields, applies guardrails, and computes a composite score from multiple sub-scores.
6. Sorts and selects the top-scoring non-killed ideas up to the requested limit and returns the ideas plus killed items in the webhook response.

## Setup
1. Configure and activate the webhook endpoint (POST path `reddit-mvp-generator`) and copy the production URL into the system that will call it.
2. Add Reddit OAuth2 credentials and ensure the workflow’s Reddit nodes can access the target subreddits.
3. Add an OpenRouter API credential and confirm the selected models (e.g., `minimax/minimax-m3` and `deepseek/deepseek-v4-flash`) are available on your account.
4. Adjust request parameters and defaults (subreddits, sort, idea_limit, post_limit, strategy) to match your use case and expected response shape.

## 🔗 Nodes Used

Webhook, Reddit, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
