# 🧾 Extract structured invoice data from text with OpenAI

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow lets you paste invoice text and uses OpenAI Chat Completions to extract normalized, schema-based invoice fields as clean JSON, routing parse or extraction failures to a separate error output.

## How it works
1. Starts when you run the workflow manually.
2. Loads the invoice body as plain text.
3. Builds a strict JSON extraction prompt (including the model to use) and sends the prompt plus invoice text to the OpenAI Chat Completions API.
4. Parses and cleans the OpenAI response into JSON, strips any code fences, validates that meaningful invoice fields were extracted, and normalizes line items to an array.
5. Routes the result to either an error output with diagnostic details or a success output containing the structured invoice JSON.

## Setup
1. Create an OpenAI API key and add it as an HTTP Header Auth credential used by the OpenAI request.
2. Paste your own invoice text into the invoice text field (or replace it dynamically if embedding this workflow elsewhere).
3. Review and adjust the extraction schema, rules, and model name in the extraction prompt before running the workflow.

## Requirements
- n8n 1.0 or later (self-hosted or Cloud) and an OpenAI API key added as an HTTP Header Auth credential. Costs a fraction of a cent per invoice. No Gmail, Google account or database required.

## Customization
- The entire extraction schema is plain text in the Set Extraction Prompt node — add fields, tighten the rules or change the output shape without touching the HTTP node. The model is a separate field in the same node, so switching to a cheaper or newer one needs no node edits.

## Additional info
Fields that are not present on the document come back as null rather than as guesses, dates are normalised to YYYY-MM-DD and amounts to plain numbers, so the output drops into a sheet or database without post-processing. Parse failures route to their own branch rather than being mistaken for a valid extraction.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
