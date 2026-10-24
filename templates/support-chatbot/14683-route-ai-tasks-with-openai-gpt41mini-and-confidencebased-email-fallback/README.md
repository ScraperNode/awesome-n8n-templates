# 💬 Route AI tasks with OpenAI GPT‑4.1‑mini and confidence‑based email fallback

> ⚡ **9 views** · 💬 [Support Chatbots](../)

## Description

## Overview
This workflow intelligently routes incoming user requests using AI-powered task classification. It determines whether a task is simple or complex, assigns a confidence score, and dynamically delegates execution to the appropriate agent.

If the confidence score is too low, the workflow triggers a fallback email alert for manual review—ensuring reliability and preventing incorrect automation.

This design improves response accuracy, enables scalable automation, and introduces human-in-the-loop safety for uncertain scenarios.

---

## How It Works

1. **Webhook Trigger**
   - Receives incoming user requests.

2. **Workflow Configuration**
   - Stores the user request and confidence threshold.

3. **Supervisor Agent**
   - Analyzes the request.
   - Classifies it as `simple` or `complex`.
   - Returns a confidence score and reasoning.

4. **Structured Output Parser**
   - Ensures the classification follows a strict JSON format.

5. **Confidence Check (IF Node)**
   - Compares the confidence score with the threshold.

6. **Routing Logic**
   - If confidence is high:
     - Task is passed to the **Executor Agent**
     - Executor selects:
       - **Simple Agent Tool** for basic tasks
       - **Complex Agent Tool** for advanced tasks

7. **Agent Execution**
   - Each agent uses an OpenAI model to process the task.

8. **Fallback Handling**
   - If confidence is low:
     - Sends an email alert for human review.

---

## Setup Instructions

1. **OpenAI Credentials**
   - Add credentials for all OpenAI nodes:
     - Supervisor
     - Executor
     - Simple Agent
     - Complex Agent

2. **Webhook Configuration**
   - Set the webhook path.
   - Connect it to your frontend or API source.

3. **Email Node Setup**
   - Configure sender and recipient email addresses.
   - Use SMTP or supported email service.

4. **Adjust Threshold**
   - Modify `confidenceThreshold` in the Set node if needed.

5. **Customize Prompts**
   - Update system messages in:
     - Supervisor Agent
     - Executor Agent
     - Simple/Complex Agents

---

## Use Cases

- AI-powered task routing systems  
- Customer support automation with fallback safety  
- Intelligent chatbot orchestration  
- Workflow automation with human-in-the-loop validation  
- Multi-agent AI systems with decision control  

---

## Requirements

- OpenAI API credentials  
- Email (SMTP or service integration)  
- n8n instance (cloud or self-hosted)  

---

## Key Features

- AI-based task classification  
- Confidence scoring for safe automation  
- Dynamic agent routing  
- Human fallback for low-confidence decisions  
- Modular and scalable architecture  

---

## Summary

A smart AI routing workflow that classifies tasks, routes them to specialized agents, and ensures reliability through confidence scoring and fallback alerts—ideal for building safe, scalable automation systems in n8n.

## 🔗 Nodes Used

Send Email, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
