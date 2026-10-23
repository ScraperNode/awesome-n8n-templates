# 🎬 Validate civil service exam questions with an AI council using Google Gemini

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually to generate and validate a civil-services-style multiple-choice question using Google Gemini, looping up to three times with reviewer feedback until the Examiner returns an approved JSON decision.

## How it works
1. Starts when you manually execute the workflow.
2. Initializes the run state (topic, iteration counter, and optional feedback) used to drive the prompt.
3. Uses Google Gemini to generate a draft question, then has Google Gemini refine it and finally evaluate it as an Examiner.
4. Extracts and parses the Examiner’s JSON decision from the model output and appends iteration and topic metadata.
5. If the decision is rejected and the iteration is under three, feeds the feedback back into the next generation pass.
6. Outputs the final approved content (or stops after the maximum attempts) as the workflow result.

## Setup
1. Add Google Gemini (PaLM) API credentials and select your preferred Gemini model in the Generator, Solver, and Examiner nodes.
2. Set the input values in the Initialize State node (at minimum the topic, plus optional feedback and an iteration counter starting at 1).
3. Ensure the Examiner prompt returns a valid JSON object containing at least a decision field (for example, APPROVED/REJECTED) so the parser can extract and evaluate it.

## 🔗 Nodes Used

Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
