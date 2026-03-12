# ⚙️ Send DingTalk message on new Azure DevOps pull request

> ⚡ **2,521 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This template automates sending a DingTalk message on new Azure Dev Ops Pull Request Created Events. It uses a MySQL database to store mappings between Azure users and DingTalk users; so the right users get notified. 

### Set up instructions

1. Define the path value of ReceiveTfsPullRequestCreatedMessage Webhook node of your own, copy the webhook url to create a Azure DevOps ServiceHook that call webhook with Pull Request Created event.
2. In order to configure the LoadDingTalkAccountMap node, you need to create a MySQL table as below:
|Name|Type|Length|Key|
|-|-|-|-|
|TfsAccount|varchar|255|
|UserName|varchar|255|
|DingTalkMobile|varchar|255|
3. You can customize the Ding Talk message content by editing the BuildDingTalkWebHookData node.
4. Define the URL of SendDingTalkMessageViaWebHook Http Request node as your Ding Talk group chat robot webhook URL.
5. Send test of production message from Azure DevOps to test.

## 🔗 Nodes Used

Function, HTTP Request, Start, Webhook, MySQL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
