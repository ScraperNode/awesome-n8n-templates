# 🎯 Auto-generate sticky notes and rename nodes

> ⚡ **234 views** · 🎯 [AI Summarization & Classification](../)

## Description

This is an official n8n workflow that helps you follow our [sticky note and naming guidelines](https://n8n.notion.site/Sticky-note-guidelines-for-templates-2aa5b6e0c94f8058b0aefddd02655887) - required for getting your template published on the n8n template library.

**How it works:**

1. Parses the workflow's nodes, connections, and spatial layout.
2. Uses GPT-4o to group nodes into logical clusters and generate descriptive sticky notes.
3. Resolves any overlapping sticky notes through iterative collision detection.
4. Optionally renames all nodes to follow descriptive naming conventions via a second AI pass.

## Setup steps

- Add your OpenAI API credentials to the two OpenAI Chat Model nodes.
- Paste your target workflow JSON into the "Set Workflow Variables" node.
- Set `renameNodes` to `true` or `false` depending on whether you want node renaming.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
