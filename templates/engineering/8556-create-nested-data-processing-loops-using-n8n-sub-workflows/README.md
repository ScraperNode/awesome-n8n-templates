# ⚒️ Create nested data processing loops using n8n sub-workflows

> ⚡ **438 views** · ⚒️ [Engineering](../)

## Description

## Nested Loops with Sub-workflows

### Template Description

This template provides a practical solution for a common n8n challenge: creating nested loops. While a powerful feature, n8n's standard **Loop** nodes don't work as expected in a nested structure. This template demonstrates the reliable workaround using a **main workflow** that calls a separate **sub-workflow** for each iteration.

### Purpose

The template is designed to help you handle scenarios where you need to iterate through one list of data for every item in another list. This is a crucial pattern for combining or processing related data, ensuring your workflows are both clean and modular.

### Instructions for Setup

1. This template contains both the main workflow and the sub-workflow on a single canvas.
2. **Copy the sub-workflow part** of this template (starting with the **Execute Sub-workflow Trigger** node) and paste it into a new, empty canvas.
3. In the **Execute Sub-workflow** node in the **main workflow** on this canvas, update the `Sub-workflow` field to link to the new workflow you just created.
4. Run the main workflow to see the solution in action.

For a detailed walkthrough of this solution, check out the [full blog post](https://n8nplaybook.com/post/2025/07/how-to-handle-nested-loops-in-n8n-with-sub-workflows/)

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
