# 🎬 Score and critique content drafts with OpenRouter and LangChain

> ⚡ **39 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This subworkflow is called by a parent n8n pipeline to review a content draft against a provided brief using an OpenRouter chat model, returning structured scores, issues, and revision notes the parent can use to decide whether to iterate or accept the draft.

## How it works
1. Receives the full pipeline state from a parent workflow execution, including the brief and current draft text.
2. Sends the brief and draft to a LangChain Agent configured as an editorial “LLM-as-a-Judge” using an OpenRouter chat model.
3. Produces a JSON review containing 1–10 scores for accuracy, tone, completeness, and clarity, plus an averaged overall score, issues list, and actionable revision notes.
4. Parses the model output, falls back to a zero-score error review if parsing fails, and merges the review back into the original input object.
5. Returns the enriched payload (original fields plus a review object) to the parent workflow for threshold-based decision-making.

## Setup
1. Add an OpenRouter API credential and select the model you want to use in the OpenRouter chat model node.
2. Ensure the parent workflow passes the expected fields (at minimum brief and currentDraft) when calling this subworkflow.
3. Save this workflow and reference it from the parent pipeline’s Execute Workflow step so it can be invoked after each writer iteration.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
