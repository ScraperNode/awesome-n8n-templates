# ⚒️ Score customer support AI responses with GPT‑4 judge metrics

> ⚡ **159 views** · ⚒️ [Engineering](../)

## Description

Score open-ended AI responses with a judge model. This template shows how to evaluate a customer support agent using a separate LLM that rates each response on correctness and helpfulness, going beyond what exact match scoring can capture.

## What you'll do

Open the workflow and review the production path (chat trigger, AI Agent generates a support response, response returned to the user). Open the Evaluations tab and click Run Test to feed question + expected answer pairs through the AI Agent. Watch the judge model score each response on correctness (1-5) and helpfulness (1-5). Review per-test-case scores in the Evaluations tab alongside token usage and execution time.

## What you'll learn

How LLM-as-a-Judge works and when it beats deterministic scoring How to wire a separate judge model into your evaluation path How to write a custom scoring prompt that returns a numeric score and a justification When to use n8n's built-in Correctness and Helpfulness metrics versus a custom judge

## Why it matters 

Customer-facing responses are subjective. A response can be technically accurate but tonally wrong, or polite but useless. LLM-as-a-Judge gives you a measurable signal for the kind of quality that matters but resists simple matching, so you can iterate on prompts with confidence instead of guesswork.

This template is a learning companion to the Production AI Playbook, a series that explores strategies, shares best practices, and provides practical examples for building reliable AI systems in n8n.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger, OpenAI, Evaluation Trigger, Evaluation

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
