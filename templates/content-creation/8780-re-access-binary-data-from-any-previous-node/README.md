# 🎬 🛠️ Re-Access Binary Data from Any Previous Node

> ⚡ **1,566 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

Ever had binary data (like images, PDFs, or files) disappear in your n8n workflow after an intermediate node processed it? This workflow provides a powerful solution by demonstrating how to re-access and re-attach binary data from *any* previous node, even if it was dropped along the way. Think of it like having a reliable backup copy of your file always available, no matter what happens to the original as it moves through your workflow.

Here's how this template works step-by-step:

1.  **Initial Binary Fetch:** The workflow starts by fetching a binary image (the n8n logo) from a URL using an `HTTP Request` node. This is our original binary data.
2.  **Simulated Data Loss:** A `Set` node then processes this data. Crucially, by default, `Set` nodes (and many others) do not pass binary data to subsequent nodes. This step intentionally simulates a common scenario where your binary data might seem to "disappear" from the workflow's output.
3.  **Re-Access and Re-Attach:** The core of the solution is a `Code` node. It uses a specific n8n expression (`$(nodeName).item`) to reach back to the *original* node that produced the binary data (`Get n8n Logo (Binary)`). It then retrieves that binary data and uses `this.helpers.prepareBinaryData()` to correctly re-attach it to the current item, making it available for all subsequent nodes.

## Set up steps

**Setup time: 0 minutes!**

This is a self-contained tutorial workflow, so no external accounts or credentials are required.

1.  Simply click the **"Execute Workflow"** button to run it.
2.  Observe the output of the `Re-Access Binary Data from Previous Node` to see the binary data successfully re-attached.
3.  **Important for Customization:** If you adapt this technique to your own workflows, remember to update the `previousNodeName` variable within the `Re-Access Binary Data from Previous Node` (Code node) to match the exact name of the node that originally produced the binary data you wish to retrieve.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
