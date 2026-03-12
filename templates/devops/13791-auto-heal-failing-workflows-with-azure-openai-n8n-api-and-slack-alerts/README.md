# ⚙️ Auto-heal failing workflows with Azure OpenAI, n8n API, and Slack alerts

> ⚡ **136 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## 📊 Description
Eliminate manual troubleshooting with an AI-powered autonomous recovery engine for n8n 🤖. This system monitors your entire n8n instance for failures, analyzes the root cause using Azure OpenAI, and automatically repairs broken workflows in real-time. By distinguishing between temporary network glitches and logic errors, it either retries the execution or dynamically patches the workflow JSON via the n8n API. It provides a "closed-loop" automation experience, ensuring your mission-critical processes stay online without human intervention 🔍⚡.

## What This Template Does
- Monitors All Workflows: Captures errors globally across your instance via the Error Trigger.
- Prevents Infinite Loops: Automatically filters out errors originating from the healing system itself.
- Fetches Live Context: Pulls the complete, latest JSON structure of the failing workflow for analysis.
- AI Root Cause Analysis: Uses Azure OpenAI (GPT-4o) to diagnose if the issue is a "RETRY" (timeout/rate limit) or a "FIX" (invalid parameter/logic).
- Autonomous Patching: For logic errors, a JavaScript engine injects the AI's corrected values directly into the workflow code.
- Human-in-the-Loop Alerts: Sends detailed Slack notifications for successful auto-fixes or requests manual help if the error is too complex.

## Key Benefits
✅ 24/7 Autonomous Reliability: Workflows fix themselves while you sleep, reducing downtime significantly.
✅ Intelligent Recovery: Moves beyond simple retries by actually correcting "hard" errors like broken IDs or missing parameters.
✅ Production-Grade Governance: Adds a safety layer to your automation stack that learns and adapts to errors.

## Features

- Global Error Listener: Catch-all trigger for instance-wide monitoring.
- Dual-Path Recovery: Distinct logic branches for transient vs. permanent failures.
- Wait-State Logic: Built-in "cool down" periods to respect external API rate limits during retries.
- AI Patching Engine: Structured output parsing ensures the AI provides valid, deployable code changes.
- Slack Integration: Real-time visibility into the "healing" process with deep-links to specific executions.

## Requirements
- n8n Instance: (Cloud or Self-hosted) with API access enabled.
- Azure OpenAI Account: With GPT-4o deployment and valid API credentials.
- n8n API Key: To allow the system to read and update workflows.
- Slack App: For receiving diagnostic alerts and success notifications.

## Target Audience
- Enterprise Automation Teams: Managing high volumes of mission-critical workflows.
- n8n Power Users: Looking to build "bulletproof" automation infrastructure.
- SaaS Founders: Ensuring customer-facing integrations remain stable.
- Managed Service Providers (MSPs): Offering proactive automation monitoring and maintenance.

## 🔗 Nodes Used

HTTP Request, Slack, Filter, AI Agent, Structured Output Parser, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
