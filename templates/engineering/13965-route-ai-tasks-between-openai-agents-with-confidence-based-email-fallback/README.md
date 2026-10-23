# ⚒️ Route AI tasks between OpenAI agents with confidence-based email fallback

> ⚡ **233 views** · ⚒️ [Engineering](../)

## Description

## Overview

This workflow demonstrates an **AI task routing system using multiple agents in n8n**. It analyzes incoming user requests, determines their complexity, and routes them to the most appropriate AI agent for processing.

A **Supervisor Agent** evaluates each request and classifies it as either **simple** or **complex**, returning a confidence score and reasoning. Based on this classification, an orchestrator agent delegates the task to the correct specialized agent.

The workflow also includes a **confidence validation mechanism**. If the classification confidence falls below a defined threshold, an email alert is sent to an administrator for manual review.

This architecture helps build scalable AI systems where tasks are intelligently routed to agents optimized for different levels of complexity.

---

## How It Works

1. **Webhook Trigger**  
   The workflow starts when a request is received through a webhook endpoint.

2. **Workflow Configuration**  
   The request and a configurable confidence threshold are stored using a Set node.

3. **Supervisor Agent Classification**  
   The Supervisor Agent analyzes the user request and determines whether the task is **simple** or **complex**, returning a confidence score and reasoning.

4. **Structured Output Parsing**  
   The classification result is parsed using a structured output parser to ensure reliable JSON formatting.

5. **Confidence Validation**  
   An IF node checks whether the confidence score meets the configured threshold.

6. **Agent Orchestration**  
   If the confidence is sufficient, an orchestrator agent delegates the task to either:
   - **Simple Task Agent** for straightforward questions
   - **Complex Task Agent** for tasks requiring deeper reasoning

7. **Fallback Handling**  
   If the confidence score is too low, the workflow sends an email alert requesting manual review.

8. **Webhook Response**  
   The final AI response is returned to the original requester through the Respond to Webhook node.

---

## Setup Instructions

1. Add **OpenAI credentials** to all OpenAI model nodes:
   - Supervisor Model
   - Executor Model
   - Simple Agent Model
   - Complex Agent Model

2. Configure the **Workflow Configuration** node:
   - Set the `userRequest` placeholder if testing manually.
   - Adjust the `confidenceThreshold` if required.

3. Configure the **Email Send node**:
   - Enter sender and administrator email addresses.
   - Connect SMTP or your preferred email credentials.

4. Activate the workflow and send requests to the **Webhook endpoint** to start task processing.

---

## Use Cases

- AI support systems that route queries based on complexity  
- Customer service automation with intelligent escalation  
- Multi-agent AI architectures for research or analysis tasks  
- AI workflow orchestration for automation platforms  
- Intelligent request classification and routing systems

---

## Requirements

- **OpenAI API credentials**  
- **Email (SMTP) credentials** for alert notifications  
- A system capable of sending requests to the workflow webhook

## 🔗 Nodes Used

Send Email, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
