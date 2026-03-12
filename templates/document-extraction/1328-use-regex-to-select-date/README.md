# 🔬 Use REGEX to select date

> ⚡ **1,355 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow looks for a Close Date value using REGEX in the IF node. If it finds the correct value, it will pass that value on. If it does not find the correct value, it will generate a value based on the present time plus three weeks.

The final result will show up in the NoOps node.

You can text this execution by enabling and disabling the Set node when you run the execution.

## 🔗 Nodes Used

Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
