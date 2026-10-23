# 🎬 Draft and revise technical articles with OpenRouter in a content pipeline

> ⚡ **44 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This subworkflow is triggered by a parent content pipeline, uses OpenRouter (via an AI Writer Agent) to draft or revise a technical article from a brief, research notes, and optional reviewer feedback, and returns the updated pipeline state with the current draft and word count.

## How it works
1. Receives input from a parent workflow containing the brief, research notes, and optionally a previous draft plus reviewer feedback.
2. Sends the brief, research JSON, and any revision context to an AI Writer Agent backed by OpenRouter to generate a fresh draft or revise the prior draft.
3. Parses the agent’s JSON response, extracts the draft text and word count (or calculates it if missing), and flags whether the output is a revision.
4. Merges the extracted fields back into the original input and returns the updated state (including `currentDraft`) to the parent workflow.

## Setup
1. Add an OpenRouter API credential and select it for the OpenRouter chat model used by the Writer Agent.
2. Ensure the parent workflow passes the expected fields (for example `brief`, `research`, and optionally `previousDraft` and `feedbackNotes`) when calling this subworkflow.
3. Update the Writer Agent system prompt if you need a different word-count target, brand voice, or formatting requirements.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
