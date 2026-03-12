# ⚙️ Release a new version via Telegram bot command

> ⚡ **1,992 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow allows you to release a new version via a Telegram bot command. This workflow can be used in your Continous Delivery pipeline.

![workflow-screenshot](fileId:515)

**Telegram Trigger node:** This node will trigger the workflow when a message is sent to the bot. If you want to trigger the workflow via a different messaging platform or a service, replace the Telegram Trigger node with the Trigger node of that service.

**IF node** The IF node checks for the incoming command. If the command is not `deploy`, the IF node will return false, otherwise true.

**Set node:** This node extracts the value of the version from the Telegram message and sets the value. This value is used later in the workflow.

**GitHub node:** This node creates a new version release. It uses the version from the Set node to create the tag.

**NoOp node:** Adding this node is optional.

## 🔗 Nodes Used

GitHub, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
