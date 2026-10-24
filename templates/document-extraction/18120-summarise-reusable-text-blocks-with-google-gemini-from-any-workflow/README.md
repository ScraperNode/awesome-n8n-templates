# 🔬 Summarise reusable text blocks with Google Gemini from any workflow

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This reusable sub-workflow is called from other n8n workflows to summarise provided text using Google Gemini, returning a consistent JSON response with a plain-language summary, key bullet points, tone, confidence, and error handling.

## How it works
1. Receives input from another workflow with text and optional language, audience, and maxWords parameters.
2. Applies defaults for missing inputs and calculates basic metadata like character count.
3. Stops early and returns a structured error response if no text is provided.
4. Sends the text and summarisation instructions to Google Gemini to generate a summary, 3–5 bullets, tone, and confidence.
5. Parses and normalises the model output into a consistent response object, including bulletText and metadata for the calling workflow.

## Setup
1. Add a Google Gemini (PaLM) API credential for the Google Gemini Chat Model node.
2. Save and activate this workflow so other workflows can call it.
3. In your calling workflow, use an Execute Workflow node to run this sub-workflow and map text (and optionally language, audience, and maxWords) to the workflow inputs.

## 🔗 Nodes Used

Execute Workflow Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
