# 🎬 Orchestrate iterative content drafting with research, writer and reviewer flows

> ⚡ **207 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This webhook-based orchestrator runs a research–write–review content pipeline by calling three n8n subworkflows and looping revisions until a quality score threshold is met or the maximum revision count is reached.

## How it works
1. Receives a POST request on a webhook with a content topic, brief, and optional quality and revision settings.
2. Normalizes the request into a single pipeline state object, including a request ID, quality threshold, and revision counters.
3. Calls a Research subworkflow to generate background notes and attaches the results to the pipeline state.
4. Calls a Writer subworkflow to produce a draft (or revise the previous draft using reviewer feedback on subsequent iterations).
5. Calls a Reviewer subworkflow to score the draft and return issues and revision notes.
6. Compares the reviewer’s overall score to the quality threshold and either loops back for another revision or finalizes the output when approved or max revisions is reached.
7. Returns a JSON response to the webhook caller containing the final draft, scores, issues, revision count, and pass/fail status.

## Setup
1. Import and save the Research, Writer, and Reviewer subworkflows, then select them in the three Execute Workflow steps so the orchestrator can call them.
2. Configure the LLM/chat model credentials inside each subworkflow (Research, Writer, and Reviewer) so they can generate and judge content.
3. Copy the webhook URL and configure your client to POST JSON including `topic` and `brief` (optionally `qualityThreshold` and `maxRevisions`) to start the pipeline.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
