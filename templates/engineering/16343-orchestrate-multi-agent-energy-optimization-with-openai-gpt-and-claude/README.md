# ⚒️ Orchestrate multi-agent energy optimization with OpenAI GPT and Claude

> ⚡ **90 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs manually to orchestrate multi-agent analysis for a thermodynamic system, using OpenAI and Anthropic models to interpret sensor inputs, optimize energy usage, plan and execute tasks, validate results, and send an HTTP alert if validation fails.

## How it works
1. Starts when you manually trigger the workflow with initial system state, temperature, energy budget, and a task queue.
2. Uses OpenAI (GPT-5-mini) to analyze the provided sensor context, detect anomalies, and output structured sensor readings with confidence scores.
3. Uses OpenAI (GPT-5-mini) plus a calculator and custom energy-analysis code tool to compute efficiency/entropy metrics and propose an optimized energy allocation.
4. Uses OpenAI (GPT-5-mini) to build an execution plan and energy estimate for the queued tasks based on the optimized budget and sensor state.
5. Uses Anthropic (Claude Sonnet) to execute the planned task sequence within the estimated energy limit and return structured outcomes and actual energy usage.
6. Uses Anthropic (Claude Sonnet) to validate thermodynamic compliance by comparing planned vs. actual energy and generating recommendations.
7. If validation passes, compiles a final system report and returns the final system state; if validation fails, generates recalibration parameters and posts a JSON alert to an external webhook endpoint.

## Setup
1. Add credentials for OpenAI (Chat) and Anthropic (Chat) so the Perception, Energy Optimization, Planning, Execution, Validation, and Recalibration agents can run.
2. Replace the placeholder alert webhook URL in the HTTP Request step and configure HTTP Header Auth credentials for the target alerting endpoint.
3. Provide the required input fields on trigger (systemState, temperature, energyBudget, and taskQueue) or adjust the prompts to match your data structure.
4. If your execution step needs real environment context, add or connect a node that supplies the referenced environment data (the workflow currently references “Fetch Environment Data” but does not include it).

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
