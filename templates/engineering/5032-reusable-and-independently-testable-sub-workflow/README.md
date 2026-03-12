# ⚒️ Reusable and independently testable sub-workflow

> ⚡ **710 views** · ⚒️ [Engineering](../)

## Description

## Reusable and Independently Testable Sub-workflow
This n8n workflow provides a standardized structure for building and testing sub-workflows in isolation. Its purpose is to help you create robust, reusable, and maintainable automations by enabling you to test the sub-workflow's logic without needing a separate parent workflow.
### Setup Instructions:
1. **Define Sub-workflow Inputs**: Double-click the **Execute Sub-workflow Trigger** node to define the parameters (e.g., `color`) that your sub-workflow will expect from a parent workflow.
2. **Configure Test Data**: Use the `Test Input` node (an **Edit Fields (Set)** node connected to the **Manual Trigger**) to provide sample data for isolated testing.
3. **Connect Inputs**: The `Combine Input` node (an **Edit Fields (Set)** node) is the entry point for your sub-workflow's core logic. It should have two inputs: one from the `Execute Sub-workflow Trigger` and one from the `Test Input` node.
4. **Merge Inputs**: Ensure the `Combine Input` node has the 'Include Other Input Fields' option enabled to merge data from both the live and test paths seamlessly.

You can read the full blog post that explains this workflow setup in detail [here](https://n8nplaybook.com/post/2025/06/how-to-test-n8n-subworkflows/).

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
