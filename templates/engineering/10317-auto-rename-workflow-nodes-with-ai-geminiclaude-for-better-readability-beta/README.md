# ⚒️ Auto-rename workflow nodes with AI (Gemini/Claude) for better readability (beta)

> ⚡ **102 views** · ⚒️ [Engineering](../)

## Description

## Rename Workflow Nodes with AI for Clarity

This workflow automates the tedious process of renaming nodes in your n8n workflows. Instead of manually editing each node, it uses an AI language model to analyze its function and assign a concise, descriptive new name. This ensures your workflows are clean, readable, and easy to maintain.

### Who's it for?

This template is perfect for n8n developers and power users who build complex workflows. If you often find yourself struggling to understand the purpose of different nodes at a glance or spend too much time manually renaming them for documentation, this tool will save you significant time and effort.

### How it works / What it does

The workflow operates in a simple, automated sequence:

1.  **Configure Suffix:** A "Set" node at the beginning allows you to easily define the suffix that will be appended to the new workflow's name (e.g., "- new node names").
2.  **Fetch Workflow:** It then fetches the JSON data of a specified n8n workflow using its ID.
3.  **AI-Powered Renaming:** The workflow's JSON is sent to an AI model (like Google Gemini or Anthropic Claude), which has been prompted to act as an n8n expert. The AI analyzes the `type` and `parameters` of each node to understand its function.
4.  **Generate New Names:** Based on this analysis, the AI proposes new, meaningful names and returns them in a structured JSON format.
5.  **Update and Recreate:** A Code Node processes these suggestions, updates all node names, and correctly rebuilds the connections and expressions.
6.  **Create & Activate New Workflow:** Finally, it creates a new workflow with the updated name, deactivates the original to avoid confusion, and activates the new version.

## 🔗 Nodes Used

n8n, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
