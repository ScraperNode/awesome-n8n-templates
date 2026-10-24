# 🔬 Gate AI answers against source docs with Groq and n8n data tables

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow checks an AI-generated answer against its provided source text using deterministic rules and a Groq LLM judge, then returns a PASS/REVIEW/BLOCK verdict and logs the results to an n8n data table.

## How it works
1. Starts either when another n8n workflow calls it with an `answer` and `sources`, or when a user submits the built-in n8n form.
2. Applies a configurable gate policy (review/block thresholds, model score cap, and minimum source length).
3. Runs deterministic checks to flag numbers and URLs present in the answer but missing from the sources and assigns risk points.
4. Sends the answer and sources to Groq to extract unsupported claims with short reasons and a confidence score.
5. Combines deterministic findings and capped Groq-based points into a final risk score and assigns a PASS, REVIEW, or BLOCK verdict (and refuses to PASS if sources are too short).
6. Records the verdict, score, and findings in an n8n data table, then either displays a results page for form submissions or returns the verdict, score, and reasons to the calling workflow.

## Setup
1. Add a Groq API credential and select it for the Groq chat model used to judge unsupported claims.
2. Create or choose an n8n data table for the check log and select its Data Table ID in the logging step.
3. If calling as a sub-workflow, pass `answer` and `sources` into the workflow inputs and use the returned `verdict`, `risk_score`, and `reasons` to decide whether to send the answer.
4. Adjust the gate thresholds, model point cap, and minimum source length to match your risk tolerance and content quality requirements.

## Requirements
- A Groq API key (the free tier works)
- n8n Data Tables (n8n Cloud or a recent self-hosted version)

## Customization
- Change the block and review thresholds, the model point cap and the minimum source length in Set Gate Policy
- Route REVIEW verdicts to a person; the gate never sends anything itself
- Swap the model id in the Groq Chat Model node

## Additional info
How you use it day to day: keep your AI workflow as it is, and right before its send step add one Execute Workflow node that calls this gate with the answer and the source text. If the returned verdict is PASS, send as planned. If it is REVIEW or BLOCK, hold the message and let a person read the listed findings; each one names the exact number, address or claim that the sources do not back. The built-in form is for trying the gate by hand before wiring it in. The check log table gives you a running history of every decision with the thresholds that applied, which is useful when someone later asks why a message was held. The number and address checks are exact; judgement of prose claims comes from the capped model and is honest but not a guarantee.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
