# ⚒️ Automatically optimize AI prompts with OpenAI using OPRO & DSPy methodology

> ⚡ **388 views** · ⚒️ [Engineering](../)

## Description

This workflow implements cutting-edge concepts from **Google DeepMind's OPRO** (Optimization by PROmpting) and **Stanford's DSPy** to automatically refine AI prompts. It iteratively generates, evaluates, and optimizes responses against a ground truth, allowing you to "compile" your prompts for maximum accuracy.

## Why this is powerful

Instead of manually tweaking prompts (trial and error), this workflow treats prompt engineering as an **optimization problem**:
- **OPRO-style Optimization**: The "Optimizer" LLM analyzes past performance scores and reasons to mathematically deduce a better prompt.
- **DSPy-style Logic**: It separates the "Logic" (Workflow) from the "Parameters" (Prompts), allowing the system to self-correct until it matches the Ground Truth.

## How it works

- **Define**: Set your initial prompt and a test case with the expected answer (Ground Truth).
- **Generate**: The workflow generates a response using the current prompt.
- **Evaluate**: An AI Evaluator scores the response (0-100) based on accuracy and format.
- **Optimize**: If the score is low, the Optimizer AI analyzes the failure and rewrites the prompt.
- **Loop**: The process repeats until the score reaches 95/100 or the loop limit is hit.

## Setup steps

1. **Configure OpenAI**: Ensure you have an OpenAI credential set up in the `OpenAI Chat Model` node.
2. **Customize**: Open the `Define Initial Prompt & Test Data` node and set your `initial_prompt`, `test_input`, and `ground_truth`.
3. **Run**: Execute the workflow and check the `Manage Loop & State` node output for the optimized prompt.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
