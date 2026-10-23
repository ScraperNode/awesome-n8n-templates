# 🎬 Generate and audit original revenge stories with OpenAI

> ⚡ **7 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow uses OpenAI in n8n to turn a short inspiration text into an original first-person story, generating a new premise from abstract “story DNA” and enforcing originality, structural integrity, and quality through automated audits, rewrites, and limited retries.

## How it works
1. Runs when you manually execute the workflow.
2. Sets story parameters (language, genre, style, target word count) and captures an inspiration text snippet.
3. Uses OpenAI to extract abstract “story DNA” (theme, conflict type, stakes, and elements to avoid) from the inspiration without reusing specific details.
4. Uses OpenAI to generate a fully new story premise as structured JSON, then normalizes the output into a consistent internal schema.
5. Audits the premise for required fields and forbidden similarity patterns, and if it fails, rebuilds the premise with OpenAI up to three times before marking it for manual review.
6. Uses OpenAI to write the full first-person narration from the approved premise, then audits the story for originality, source similarity risk, premise adherence, and overall quality.
7. If the story fails, it either rewrites the story (quality/adherence issues) or regenerates a new premise (similarity/originality issues) up to three attempts, and outputs an approved story package with the final text, premise, and audit results.

## Setup
1. Add an OpenAI API credential (or an OpenAI-compatible provider) and select it in each OpenAI Chat Model node.
2. Update the “Story Config” values (language, genre, creative style, target word count, and thresholds) to match your desired output.
3. Replace the sample text in the inspiration input with your own short inspiration, avoiding copyrighted passages unless you have permission to use them.

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
