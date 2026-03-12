# ⚒️ n8n subworkflow dependency graph & auto-tagging

> ⚡ **2,541 views** · ⚒️ [Engineering](../)

## Description

## How it Works
As n8n instances scale, teams often lose track of sub-workflows—who uses them, where they are referenced, and whether they can be safely updated. This leads to inefficiencies like unnecessary copies of workflows or reluctance to modify existing ones. This workflow solves that problem by:

1. Fetching all workflows and identifying which ones execute others.
2. Verifying that referenced subworkflows exist.
3. Building a caller-subworkflow dependency graph for visibility.
4. Automatically tagging sub-workflows based on their parent workflows.
5. Providing a chart visualization to highlight the most-used sub-workflows.

![n8nsubworkflowdependencygraph.png](fileId:956)


## Set Up Steps
*Estimated time: ~10–15 minutes*
1. Set up n8n API credentials to allow access to workflows and tags.
2. Replace instance_url with your n8n instance URL.
3. Run the workflow to analyze dependencies and generate the graph.
4. Review and validate assigned tags for sub-workflows.
5. (Optional) Enable pie chart visualization to see the most-used sub-workflows.

This workflow is essential for enterprise teams managing large n8n instances, preventing workflow duplication, reducing uncertainty around dependencies, and allowing safe, informed updates to sub-workflows.

## 🔗 Nodes Used

HTTP Request, Webhook, n8n Trigger, n8n, Schedule Trigger, QuickChart

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
