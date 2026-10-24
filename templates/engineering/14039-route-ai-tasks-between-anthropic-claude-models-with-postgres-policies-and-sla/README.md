# ⚒️ Route AI tasks between Anthropic Claude models with Postgres policies and SLA

> ⚡ **58 views** · ⚒️ [Engineering](../)

## Description

## Overview

This workflow implements a **policy-driven LLM orchestration system** that dynamically routes AI tasks to different language models based on task complexity, policies, and performance constraints.

Instead of sending every request to a single model, the workflow analyzes each task, applies policy rules, and selects the most appropriate model for execution. It also records telemetry data such as latency, token usage, and cost, enabling continuous optimization.

A built-in **self-tuning mechanism** runs weekly to analyze historical telemetry and automatically update routing policies. This allows the system to improve cost efficiency, performance, and reliability over time without manual intervention.

This architecture is useful for teams building **AI APIs, agent platforms, or multi-model LLM systems** where intelligent routing is needed to balance cost, speed, and quality.

---

## How It Works

1. **Webhook Task Input**
   - The workflow begins when a request is sent to the webhook endpoint.
   - The request contains a task and optional priority metadata.

2. **Task Classification**
   - A classifier agent analyzes the task and categorizes it into:
     - extraction
     - classification
     - reasoning
     - generation
   - The agent also returns a confidence score.

3. **Policy Engine**
   - Policy rules are loaded from a database.
   - These rules define execution constraints such as:
     - preferred model size
     - latency limits
     - token budgets
     - retry strategies
     - cost ceilings.

4. **Model Routing**
   - A decision engine evaluates classification results and policy rules.
   - Tasks are routed to either a **small model** (fast and cost-efficient) or a **large model** (higher reasoning capability).

5. **Task Execution**
   - The selected LLM processes the task and generates the response.

6. **Telemetry Collection**
   - Execution metrics are captured including:
     - latency
     - tokens used
     - estimated cost
     - model used
     - success status.
   - These metrics are stored in a database.

7. **Weekly Self-Optimization**
   - A scheduled workflow analyzes telemetry from the past 7 days.
   - If performance trends change, routing policies are automatically updated.

---

## Setup Instructions

1. **Configure a Postgres database**
   - Create two tables:
     - `policy_rules`
     - `telemetry`

2. **Add LLM credentials**
   - Configure Anthropic credentials for the language model nodes.

3. **Configure policy rules**
   - Define preferred models, cost limits, and latency thresholds in the `policy_rules` table.

4. **Configure workflow settings**
   - Adjust parameters in the **Workflow Configuration** node:
     - maximum latency
     - cost ceiling
     - token limits
     - retry behavior.

5. **Deploy the API endpoint**
   - Send requests to the webhook endpoint:




---

## Use Cases

### AI API Gateway
Route requests to different models based on complexity and cost constraints.

### Multi-Model AI Platforms
Automatically choose the best model for each task without manual configuration.

### Cost-Optimized AI Systems
Prefer smaller models for simple tasks while reserving larger models for complex reasoning.

### LLM Observability
Track token usage, latency, and cost for each AI request.

### Self-Optimizing AI Infrastructure
Automatically improve routing policies using real execution telemetry.

---

## Requirements

- n8n with **LangChain nodes enabled**
- Postgres database
- Anthropic API credentials
- Tables:
- `policy_rules`
- `telemetry`

Optional:

- Monitoring dashboards connected to telemetry data
- External policy management systems

## 🔗 Nodes Used

Postgres, Webhook, Schedule Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
