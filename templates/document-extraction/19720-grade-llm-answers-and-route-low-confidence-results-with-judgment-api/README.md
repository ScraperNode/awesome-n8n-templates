# 🔬 Grade LLM answers and route low-confidence results with Judgment API

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow uses the Judgment API community node to grade multiple AI answers against a reference answer, calculates a trust verdict from probabilities and confidence, and routes each grade into “trusted” results versus items that need human review.

## How it works
1. Runs when you manually click Test Workflow.
2. Loads a sample set of three question/answer/reference triples (or your own source of answers).
3. Sends each item to the n8n-nodes-judgment “Grade Answers” action to evaluate correctness, completeness, groundedness, relevance, clarity, and an overall ship/edit/reject decision.
4. Normalizes each judgment into a consistent output (value, a 0–1 score, and judge confidence) and applies trust rules based on confidence or distance from 0.5.
5. Routes rows marked as trusted to the “Trusted Grades” output and sends everything marked “needs review” to the human-review output.

## Setup
1. Install the community node package `n8n-nodes-judgment` in n8n (Settings → Community Nodes).
2. Create and add a Judgment API credential (API key) and select it in the “Grade Answers” step.
3. Replace the sample answers source with your own inputs (your LLM output, a database, or a sheet) and adjust the trust thresholds in the verdict mapping if needed.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
