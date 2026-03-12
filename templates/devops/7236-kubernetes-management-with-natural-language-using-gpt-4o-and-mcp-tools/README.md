# ⚙️ Kubernetes management with natural language using GPT-4o and MCP tools

> ⚡ **972 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this for?

This workflow is designed for DevOps engineers, platform engineers, and Kubernetes administrators who want to interact with their Kubernetes clusters through natural language queries in n8n. It's perfect for teams who need quick cluster insights without memorizing complex kubectl commands or switching between multiple cluster contexts manually.

## How it works?

The workflow operates in three intelligent stages:

1. **Cluster Discovery & Context Switching** - Automatically lists available clusters from your kubeconfig and switches to the appropriate cluster based on your natural language query
2. **Command Generation** - Uses GPT-4o to analyze your request and generate the correct kubectl command with proper flags, selectors, and output formatting
3. **Command Execution** - Executes the generated kubectl command against your selected cluster and returns the results

The workflow supports multi-cluster environments and can handle queries like:
- "Show me all pods in production cluster"
- "List failing deployments in production"
- "Get pod details in kube-system namespace"

## Setup

1. **Clone the MCP Server**
   ```bash
   git clone https://github.com/aadarshjain/kubectl-mcp-server
   cd kubectl-mcp-server
   ```

2. **Configure your kubeconfig** - Ensure your `~/.kube/config` contains all the clusters you want to access

3. **Set up MCP STDIO credentials** in n8n
- Command: /full/path/to/python-package
- Arguments: /full/path/to/kubectl-mcp-server/server.py

4. **Import the workflow** into your n8n instance

5. **Configure OpenAI credentials** for the GPT-4o models

6. **Test the workflow** using the chat interface with queries like "show pods in [cluster-name]"

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
