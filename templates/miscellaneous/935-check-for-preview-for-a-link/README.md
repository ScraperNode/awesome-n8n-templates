# 🔧 Check for preview for a link

> ⚡ **1,013 views** · 🔧 [Miscellaneous](../)

## Description

This workflow allows you to check for preview for a link and return the preview if it exists.

![workflow-screenshot](fileId:411)

**Peekalink node:** This node checks if a preview is available for a URL or not. If a preivew is available the node returns `true`, otherwise `false`.

**IF node:** The IF node checks the output from the previous node. If the condition is `true` the node connected to the ***true*** branch is executed. If the condition is `false` the node connected to the ***false*** branch is executed.

**Peekalink1 node:** This node will fetch the preview of the URL. Based on your use-case, you can connect the **Slack node**, **Mattermost node** etc. to get the response on these platforms.

**NoOp node:** Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. We've added this as it can sometimes help others with a better understanding of the workflow, visually.

## 🔗 Nodes Used

Start, Peekalink

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
