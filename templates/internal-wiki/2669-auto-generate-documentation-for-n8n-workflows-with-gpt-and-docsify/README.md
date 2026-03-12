# 📖 📚 Auto-generate documentation for n8n workflows with GPT and Docsify

> ⚡ **12,006 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow creates a documentation system for n8n instances using Docsify.js. It serves a dynamic documentation website that allows users to:

- View an overview of all workflows in a tabular format
- Filter workflows by tags
- Access automatically generated documentation for each workflow
- Edit documentation with a live Markdown preview
- Visualize workflow structures using Mermaid.js diagrams

&gt; 📺 Check out the [short 2-min demonstration](https://www.linkedin.com/feed/update/urn:li:activity:7276671057992847361/) on LinkedIn. Don't forget to connect!


## 🔧 Key Components

1. **Main Documentation Portal**
- Serves a Docsify-powered website
- Provides a navigation sidebar with workflow tags
- Displays workflow status, creation date, and documentation links

2. **Documentation Generator**
- Uses GPT model to auto-generate workflow descriptions
- Creates Mermaid.js diagrams of workflow structures
- Maintains consistent documentation format

3. **Live Editor**
- Split-screen Markdown editor with preview
- Real-time Mermaid diagram rendering
- Save/Cancel functionality

## ⚙️ Technical Details

### Environment Setup
- Requires write access to the specified project directory
- Uses environment variables for n8n instance URL configuration
- Implements webhook endpoints for serving documentation

### ⚠️ Security Considerations
&gt; Note: The current implementation doesn't include authentication for editing. Consider adding authentication for production use.

### Dependencies
- Docsify.js for documentation rendering
- Mermaid.js for workflow visualization
- OpenAI GPT for documentation generation

## 🔍 Part of the n8n Observability Series

This workflow is part of a broader series focused on n8n instance observability. Check out these related workflows:

1. [Workflow Dashboard](https://n8n.io/workflows/2269) - Get comprehensive analytics of your n8n instance
2. [Visualize Your n8n Workflows with Mermaid.js](https://n8n.io/workflows/2378) - Create beautiful workflow visualizations

Each workflow in this series helps you better understand and manage your n8n automation ecosystem!

## 🔗 Nodes Used

Webhook, n8n, Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
