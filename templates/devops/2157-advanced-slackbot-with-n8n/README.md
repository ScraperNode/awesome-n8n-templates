# ⚙️ 🤖 Advanced Slackbot with n8n

> ⚡ **11,133 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Use case
Slackbots are super powerful. At n8n, we have been using them to get a lot done.. But it can become hard to manage and maintain many different operations that a workflow can do.

This is the base workflow we use for our most powerful internal Slackbots. They handle a lot from running e2e tests for Github branch to deleting a user. By splitting the workflow into many subworkflows, we are able to handle each command seperately, making it easier to debug as well as support new usecases.

In this template, you can find eveything to setup your own Slackbot (and I made it simple, there's only one node to configure 😉). After that, you need to build your commands directly. 

This bot can create a new thread on an alerts channel and respond there.
![Screenshot 20240301 at 07.54.07.png](fileId:769)
![Screenshot 20240301 at 08.03.33.png](fileId:767)

Or reply directly to the user.
![Screenshot 20240301 at 07.53.41.png](fileId:766)

It responds for help request to return a help page.
![Screenshot 20240301 at 08.16.40.png](fileId:764)

It automatically handles unknown commands.
![Screenshot 20240301 at 08.16.54.png](fileId:765)

It also supports flags and environment variables. For example `/cloudbot-test info mutasem --full-info -e env=prod` would give you the following info, when calling subworkflow.
![Screenshot 20240301 at 08.34.31.png](fileId:768)

## How to setup
1. Add Slack command and point it up to the webhook. For example.
![Screenshot 20240229 at 22.09.40.png](fileId:771)
2. Add the following to the **Set config** node
- `alerts_channel` with alerts channel to start threads on
- `instance_url` with this instance url to make it easy to debug
- `slack_token` with slack bot token to validate request
- `slack_secret_signature` with slack secret signature to validate request
- `help_docs_url` with help url to help users understand the commands 
3. Build other workflows to call and add them to `commands` in **Set Config**. Each command must be mapped to a workflow id with an `Execute Workflow Trigger` node
4. Activate workflow 🚀

## How to adjust
1. Add your own commands.
2. Depending on your need, you might need to lock down who can call this.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
