# 🎬 Generate and refine technical drafts with OpenRouter writer and critic agents

> ⚡ **95 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow receives a topic and brief via webhook, uses OpenRouter LLMs to draft content and critique it, and iterates through writer/critic revisions until a minimum score is reached or the maximum iterations is hit, then returns the final draft and scoring details as JSON.

## How it works
1. Receives a POST webhook request containing a topic, brief, and optional quality thresholds (minScore and maxIterations).
2. Normalizes the incoming payload, initializes loop state (requestId, iterationCount, thresholds), and prepares the prompt context.
3. Uses an OpenRouter chat model as a Writer to generate a draft (or revise the previous draft using the critic’s feedback) and extracts the draft text and word count from the model’s JSON output.
4. Uses an OpenRouter chat model as a Critic to score the draft across accuracy, clarity, relevance, and conciseness and returns a JSON critique with subscores, issues, and revision guidance.
5. Checks whether the overall score meets the minimum score or the workflow has reached the maximum number of iterations, otherwise stages the critique feedback and repeats the writer/critic loop.
6. Finalizes a response envelope with the final draft, score breakdown, issues, iteration metadata, and whether it should route downstream or to human review, then responds to the webhook request with this JSON.

## Setup
1. Add an OpenRouter API credential and select the desired chat models for both the Writer and Critic steps.
2. Activate the workflow and copy the production webhook URL, then configure your calling app to POST JSON with at least topic and brief (optionally minScore and maxIterations).
3. Decide your quality/cost settings by setting minScore (default 7.5) and maxIterations (default 3) in the webhook payload you send.

## 🔗 Nodes Used

Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
