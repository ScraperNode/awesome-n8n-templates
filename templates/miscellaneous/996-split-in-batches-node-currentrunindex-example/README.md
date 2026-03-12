# 🔧 Split in batches node currentRunIndex example

> ⚡ **3,161 views** · 🔧 [Miscellaneous](../)

## Description

This workflow demonstrates how to use `currentRunIndex` to get the running index.

![workflow-screenshot](fileId:454)

**Function node:** This node generates mock data for the workflow. Replace it with the node whose data you want to split into batches.

**SplitInBatches node:** This node splits the data with the batch size equal to `1`. Based on your use-case, set the value of the Batch Size.

**IF node:** This node checks the running index. If the running index equals `5` the node returns `true` and breaks the loop.
The node uses the expression `{{$node["SplitInBatches"].context["currentRunIndex"];}}`, which returns the running index.

**Set node:** This node prints a message `Loop Ended`. Based on your use-case, connect the false output of the *IF* node to the input of the node you want to execute if the condition is `false`.

## 🔗 Nodes Used

Function, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
