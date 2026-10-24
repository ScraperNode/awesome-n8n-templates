# 🎬 Generate structured research briefs for content topics with OpenRouter

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This subworkflow is called by a parent n8n workflow to generate structured research notes from a provided topic and brief using an OpenRouter chat model, then returns the original input merged with a parsed `research` JSON object for downstream writing steps.

## How it works
1. Receives topic and brief data from a parent workflow via an Execute Workflow trigger.
2. Uses an OpenRouter-powered AI agent to generate structured research notes as JSON based on the provided topic and brief.
3. Parses the agent’s output into JSON, falls back to an error object if parsing fails, and merges the result back into the original pipeline state.
4. Returns the combined data to the parent workflow with a `research` field containing key facts, angles, sources to mention, and synthesized notes.

## Setup
1. Add OpenRouter API credentials and attach them to the OpenRouter Chat Model used by the AI agent.
2. Ensure the parent workflow passes `topic` and `brief` fields when calling this subworkflow via Execute Workflow.
3. Save and activate this subworkflow so the parent workflow can execute it.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
