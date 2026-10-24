# 🔒 Redact and restore PII in OpenAI prompts with Enterprise PII Guardrails

> ⚡ **38 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow masks sensitive PII in a customer prompt using Enterprise PII Guardrails, sends the sanitized text through a simulated LLM step, and then restores the original values in the LLM response using the reversible token mapping.

## How it works
1. Starts manually to run a test prompt.
2. Creates a sample customer support prompt containing PII like a name, email address, phone number, medical record number, and credit card number.
3. Sends the prompt to Enterprise PII Guardrails to mask detected entities into surrogate tokens and returns a token-to-original mapping.
4. Generates a simulated LLM response that references the surrogate tokens rather than the original PII.
5. Sends the simulated response and the saved mapping back to Enterprise PII Guardrails to unmask tokens and restore the original PII in the final text.

## Setup
1. Self-host n8n and install the Enterprise PII Guardrails community node (`n8n-nodes-piiguardrails`).
2. Install and run Enterprise PII Guardrails locally (for example, `pip install piiguardrails && piiguardrails start`) and ensure the API is reachable (default `http://localhost:8000`).
3. Create and select an Enterprise PII Guardrails API credential in n8n that points to your Guardrails endpoint.
4. Replace the sample prompt and/or swap the simulated LLM step with your real LLM node, keeping the mask/unmask steps before and after the LLM call.

## 🔗 Nodes Used

OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
