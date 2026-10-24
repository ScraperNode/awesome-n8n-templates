# 🔬 Generate workflow audit docs from JSON with Claude Sonnet and Notion

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects an exported n8n workflow JSON via an n8n Form, audits it for common reliability and security issues, uses Anthropic Claude to draft a business summary and technical report, and then creates a formatted documentation page in Notion.

## How it works
1. Receives a form submission with a workflow JSON file, client name, and a Notion parent page ID.
2. Parses and validates the uploaded JSON to confirm it contains nodes and connections and extracts the workflow metadata.
3. Analyzes the workflow graph to determine execution order, detect cycles and unreachable nodes, and generate a scored list of audit findings.
4. Sends the audit context to Anthropic Claude (Sonnet) to generate a business-facing workflow summary and a developer-facing audit report.
5. Converts the generated text into Notion blocks, including an audit score callout and optional warnings for cycles or unreachable nodes.
6. Creates a new Notion page under the provided parent page and appends the blocks in batches with a short wait to avoid Notion rate limits.

## Setup
1. Import the workflow and connect your Anthropic account credential to the Claude Sonnet node. No additional configuration is needed on the Anthropic side.
2. Connect your Notion account credential to both the Create Notion Page and Append Blocks nodes. In Notion, open the page you want to use as the parent, go to Connections in the page settings, and add your integration so it has access.
3. Activate the workflow and open the form URL. Upload an exported n8n workflow JSON file, enter the client name, and paste the 32-character Notion page ID (found in the page URL, without dashes). Submit the form and your documentation page will appear in Notion within 30 to 60 seconds depending on workflow size.

## Requirements
- Anthropic API account with access to Claude Sonnet
- Notion integration token with write access to the target workspace

## Customization
- Swap Claude Sonnet for any other model supported by n8n's LangChain nodes by changing the model field on the Claude Sonnet sub-node
- Adjust the audit scoring weights in the Audit Workflow code node to match your team's priorities, for example increasing the penalty for CRITICAL findings or adding new secret patterns to the detection list
- Modify the system prompt in Build Prompt to change the tone, length, or structure of the generated documentation

## 🔗 Nodes Used

Notion, Stop and Error, Basic LLM Chain, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
