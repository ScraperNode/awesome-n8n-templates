# ⚒️ Make multi-agent council decisions with OpenAI GPT-5

> ⚡ **204 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs a manual “AI council” that evaluates a proposal with four OpenAI-powered specialist agents, aggregates their structured perspectives, and has a chairman agent synthesize a final decision with voting, rationale, and action items.

## How it works
1. Starts when you manually trigger the workflow and provide a proposal (and optional context).
2. Sends the proposal in parallel to four OpenAI-based agents that assess it from strategic, contrarian, ethics/compliance, and execution/operations perspectives and return structured JSON.
3. Aggregates all agent outputs into a single combined set of council perspectives.
4. Builds a consolidated council briefing that includes the original proposal, context, and each agent’s structured analysis.
5. Uses a chairman OpenAI agent to synthesize the perspectives into an executive summary, consensus and divergences, a voting breakdown, a final approve/reject/modify decision, and action items.
6. Formats the chairman’s output into a readable council decision report for review or downstream use.

## Setup
1. Add an OpenAI API credential and connect it to the workflow’s OpenAI chat model node used by the four agents and the chairman.
2. Replace the placeholder proposal (and optional context) values with your own input method or update the manual trigger step before running.
3. Select the OpenAI model you want to use (currently set to gpt-5-mini) and adjust the agents’ system prompts if you need domain-specific roles or decision criteria.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
