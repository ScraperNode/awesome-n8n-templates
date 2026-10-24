# 📖 Debate and validate chat answers with GPT‑5, Claude Sonnet and Claude Opus

> ⚡ **39 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
Ask a question in chat and get an answer that survived review: one model drafts it, a second challenges it, and a third rules on the result, either approving the answer or replacing it with its own corrected version.


## How it works
1. Receives a chat message containing the user’s question (and optional domain, maxRounds, and maxCycles settings).
2. Sends the question to OpenAI (GPT) to generate an initial answer, optionally incorporating feedback from prior rounds.
3. Sends GPT’s answer to AWS Bedrock Claude Sonnet to critically evaluate it and return a structured verdict with agreement status and objections.
4. If Claude Sonnet disagrees and rounds remain, feeds the objections back to GPT and repeats the answer-and-evaluate loop up to the configured maxRounds.
5. When Claude Sonnet agrees (or rounds are exhausted), sends the question, GPT answer, and Claude evaluation to AWS Bedrock Claude Opus to make a final approve/reject decision and provide a final answer.
6. If Opus rejects and cycles remain, feeds Opus’s reason back to GPT and re-runs the debate and judging loop up to maxCycles, then returns either the approved answer or Opus’s corrected answer with a status note.

## Setup
1. Add an OpenAI API credential and select the model used for the GPT debater.
2. Add an AWS credential with Bedrock access and ensure the Claude Sonnet and Claude Opus chat models are available in your region/account.
3. Configure the chat trigger/channel in n8n Chat and, if desired, pass domain, maxRounds, and maxCycles values in the incoming chat payload.

## Requirements
- n8n 1.60+ with the LangChain nodes (Chat Trigger, AI Agent)
- Credentials for three chat models - the template ships with OpenAI for the debater and AWS Bedrock for the evaluator and the judge
- Any chat model node works instead: Anthropic, Google Gemini, OpenRouter, Azure OpenAI or a local Ollama model can be dropped in without touching the logic

## Customization
- Swap any of the three models. The debater, the evaluator and the judge are separate language model sub-nodes, so Bedrock can be replaced with the Anthropic, Gemini, OpenRouter or Ollama node
- Change the debate budget by sending maxRounds and maxCycles in the chat payload (defaults: 3 rounds, 2 cycles)
- Set domain in the payload to give the debater a field of expertise, for example "security" or "clinical research"
- Replace the Chat Trigger with a Webhook or a Slack trigger to run the same debate from another surface

## Additional info
The loop reads a single line from each reviewer: the evaluator ends with VERDICT: {...} and the judge with DECISION: {...}. Any model that follows that instruction can take either seat.

The judge does not only approve or reject: when it rejects, it writes its own corrected answer, and that is what the chat returns.

Round and cycle counters come from the node run index, so the loop always terminates even when the models never agree.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, OpenAI Chat Model, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
