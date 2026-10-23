# 🎬 Generate social content hooks with OpenAI GPT-4o-mini

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs manually and uses OpenAI (GPT-4o-mini) to generate 10 scroll-stopping content hooks from a provided topic, audience, and tone, returning the results as JSON.

## How it works
1. Runs when you manually execute the workflow.
2. Sets the input values for topic, target audience, and writing tone.
3. Sends the inputs to OpenAI (GPT-4o-mini) with instructions to generate 10 short hooks in mixed styles and return only valid JSON.
4. Outputs the OpenAI response content as a single hooks field for copying or use in downstream steps.

## Setup
1. Add an OpenAI credential/connection for the OpenAI node.
2. Update the topic, audience, and tone values to match your content needs.
3. Run the workflow manually to test it, then copy the generated JSON output into your content calendar. You can also connect additional nodes to automatically store the hooks in Google Sheets, email them to your team, or publish them straight to your social channels.

## Requirements
- A free n8n instance (Cloud or self-hosted) and an OpenAI API key (or any OpenAI-compatible endpoint).

## Customization
- Swap the model in the OpenAI node (e.g. GPT-4o), change how many or which styles of hooks are generated in the prompt, and connect downstream nodes to auto-store the results in Google Sheets or publish them to your channels.

## Additional info
Free and MIT-licensed. Part of a free, open-source n8n workflow library with more ready-to-import templates (no signup needed): https://zhp910318.github.io/n8n-ai-automation-lab/

## 🔗 Nodes Used

OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
