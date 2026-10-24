# ⚒️ Route Claude multi-agent tasks from webhook and send summaries to WhatsApp

> ⚡ **35 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow accepts a task via webhook (or manual run) and uses Anthropic Claude as a supervisor to route work across specialist agents (researcher, coder, analyst, writer, reviewer). It iterates until completion, then synthesizes a final answer, returns it to the caller, and sends a WhatsApp summary.

## How it works
1. Receives a POST request via an n8n webhook (or starts from a manual trigger) and normalizes the input into a task state with a step counter and work history.
2. Validates that a non-empty task is provided and immediately returns a 400 webhook response if the request is invalid.
3. Builds a supervisor prompt and calls the Anthropic Messages API (Claude) to decide the next specialist route and instruction, enforcing guardrails like max steps, loop detection, and error fallback.
4. Routes to exactly one specialist Claude call (researcher with web search, coder, analyst, writer, or reviewer) and generates output based on the supervisor’s instruction.
5. Records the specialist result into a shared work log, increments the step counter, and repeats the supervisor routing loop until the route is FINISH or a guardrail ends the run.
6. Sends the accumulated specialist work to Claude for final synthesis, then returns the final answer and routing trace in the webhook response and sends a truncated summary via WhatsApp.

## Setup
1. Create an Anthropic HTTP Header Auth credential (x-api-key) and select it on all Anthropic HTTP Request nodes (supervisor, five specialists, and synthesis).
2. Add WhatsApp Business credentials for the WhatsApp node and set your WhatsApp phone number ID and recipient phone number in the configuration values.
3. Update the configuration values for the Anthropic API URL and the supervisor/specialist models and step limits to match your desired defaults.
4. Copy the webhook URL for the “agent-supervisor-task” endpoint and configure your client to POST JSON such as {"task":"…","context":"…","maxSteps":5}.

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
