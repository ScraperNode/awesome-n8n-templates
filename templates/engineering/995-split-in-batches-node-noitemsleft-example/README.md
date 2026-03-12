# ⚒️ Split in batches node noItemsLeft example

> ⚡ **6,651 views** · ⚒️ [Engineering](../)

## Description

This workflow demonstrates how to use `noItemsLeft` to check if there are items left to be processed by the SplitInBatches node.

![workflow-screenshot](fileId:453)

**Function node:** This node generates mock data for the workflow. Replace it with the node whose data you want to split into batches.

**SplitInBatches node:** This node splits the data with the batch size equal to `1`. Based on your use-case, set the value of the ***Batch Size***.

**IF node:** This node check if all the data by the SplitInBatches are not processed or not. It uses the expression `{{$node["SplitInBatches"].context["noItemsLeft"]}}` which returns a boolean value.
If there is data yet to be processed, the expression will return `false`, otherwise `true`.

**Set node:** This node prints a message `No Items Left`. Based on your use-case, connect the false output of the *IF* node to the input of the node you want to execute, after the data is processed by the *SplitInBatches* node.

## 🔗 Nodes Used

Function, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
