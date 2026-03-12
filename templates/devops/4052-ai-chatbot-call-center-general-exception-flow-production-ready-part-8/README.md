# ⚙️ AI chatbot call center: General exception flow (production-ready, part 8)

> ⚡ **1,325 views** · ⚙️ [DevOps & CI/CD](../)

## Description

### Workflow Name: 👻 Exception Flow

Template was created in n8n v1.90.2

### Skill Level: Low

### Categories: n8n, Chatbot

### Stacks

- Error Trigger
- Slack node

# What this workflow does?

This is a n8n **Error Workflow**. It will trigger when there is an error in another workflow. When this happens, it then tries to send an error notification to the preset Slack channel.

# **How it works**

- The **Error Trigger** node will trigger when there is an error in another workflow, as long as that workflow is set up to do so.
- A error notification will be sent to the **Slack Channel**.

# **Set up instructions**

1. Create you **Slack credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
2. Set up the **Channel** in **👻 Exception Alert** node.
3. For any n8n workflows to trigger this, switch to that workflow, select menu &gt; settings, and set the **Error Workflow** to **👻 Exception Flow.**

# How to adjust it to your needs

Although this workflow template is part of the **AI Chatbot Call Center Series**, it could be used with any n8n workflows.

- Update the **Channel** in **👻 Exception Alert** to your own channel

https://chatpaylabs.com/blog/part-8-build-your-own-ai-chatbot-call-center-general-exception-flow-production-ready-n8n-workflow-free-download-

## 🔗 Nodes Used

Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
